#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script Inteligente de Notificação IndexNow para Trinity Mídia Digital e Tecnologia
- Suporte a Cooldown/Throttling para evitar requisições redundantes em deploys sucessivos.
- Análise de Git Diff para enviar apenas URLs efetivamente alteradas.
- Validação automática de chave remota antes do disparo.
- Totalmente compatível com ambiente local e esteira CI/CD (GitHub Actions).
"""

import os
import sys
import time
import json
import argparse
import subprocess
import urllib.request
import urllib.error
from pathlib import Path
from datetime import datetime, timezone

HOST = "www.trinityds.com.br"
INDEXNOW_KEY = "8cfa62b6274c4829b3871feb635670b9"
KEY_LOCATION = f"https://{HOST}/{INDEXNOW_KEY}.txt"
DEFAULT_COOLDOWN_SECONDS = 15 * 60  # 15 minutos

ALL_CANONICAL_URLS = [
    f"https://{HOST}/",
    f"https://{HOST}/faq",
    f"https://{HOST}/projetos",
    f"https://{HOST}/projetos/transporta",
    f"https://{HOST}/sobre",
    f"https://{HOST}/contato",
    f"https://{HOST}/llms.txt",
    f"https://{HOST}/llms-full.txt"
]

INDEXNOW_ENDPOINTS = [
    ("IndexNow Universal (Bing, Yandex, Seznam)", "https://api.indexnow.org/indexnow"),
    ("Microsoft Bing IndexNow Direto", "https://www.bing.com/indexnow")
]

def find_project_root():
    """Identifica a raiz do repositório ou diretório base."""
    current = Path(__file__).resolve().parent
    for candidate in [current.parent, current]:
        if (candidate / ".git").exists() or (candidate / "Main").exists():
            return candidate
    return Path.cwd()

def get_cache_file_path(project_root):
    env_path = os.environ.get("INDEXNOW_CACHE_FILE")
    if env_path:
        return Path(env_path)
    return project_root / ".indexnow_cache.json"

def read_cache(cache_file):
    if cache_file.exists():
        try:
            with open(cache_file, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[!] Aviso: Não foi possível ler cache ({e}). Ignorando.")
    return None

def write_cache(cache_file, urls_submitted):
    try:
        now = time.time()
        now_iso = datetime.now(timezone.utc).astimezone().isoformat()
        data = {
            "last_run_timestamp": now,
            "last_run_iso": now_iso,
            "urls_submitted": urls_submitted
        }
        with open(cache_file, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        print(f"[*] Cache de cooldown atualizado em: {cache_file.name}")
    except Exception as e:
        print(f"[!] Aviso: Falha ao salvar cache: {e}")

def format_duration(seconds):
    mins = int(seconds // 60)
    secs = int(seconds % 60)
    if mins > 0:
        return f"{mins}m {secs}s"
    return f"{secs}s"

def detect_changed_urls(project_root):
    """
    Analisa os arquivos alterados via git diff para mapear quais URLs públicas foram afetadas.
    Retorna uma tupla (urls, reason).
    """
    try:
        # Tenta git diff HEAD~1 HEAD (comum após push/merge)
        cmd = ["git", "diff", "--name-only", "HEAD~1", "HEAD"]
        result = subprocess.run(cmd, cwd=project_root, capture_output=True, text=True)
        
        # Se falhou (ex: commit único ou histórico raso), tenta git status ou uncommitted diff
        if result.returncode != 0 or not result.stdout.strip():
            cmd_fallback = ["git", "diff", "--name-only", "HEAD"]
            res_fallback = subprocess.run(cmd_fallback, cwd=project_root, capture_output=True, text=True)
            if res_fallback.returncode == 0 and res_fallback.stdout.strip():
                changed_files = res_fallback.stdout.strip().splitlines()
            else:
                return ALL_CANONICAL_URLS, "Histórico Git raso ou diff indisponível (usando lista completa)"
        else:
            changed_files = result.stdout.strip().splitlines()
    except Exception as e:
        return ALL_CANONICAL_URLS, f"Falha ao executar git diff ({e}). Usando lista completa."

    # Normalizar caminhos para barras normais
    changed_files = [f.replace("\\", "/").strip() for f in changed_files if f.strip()]
    if not changed_files:
        return ALL_CANONICAL_URLS, "Nenhuma alteração detectada no diff (usando lista completa)"

    # Se arquivos globais mudaram, dispara todas as URLs
    global_triggers = [
        "Main/index.html",
        "Main/sitemap.xml",
        "Main/robots.txt",
        "Main/src/",
        "tailwind.config.js",
        "nginx.conf",
        "Dockerfile"
    ]
    for trigger in global_triggers:
        if any(f.startswith(trigger) or f == trigger for f in changed_files):
            return ALL_CANONICAL_URLS, f"Alteração estrutural detectada em '{trigger}' (reindexando site completo)"

    # Mapeamento pontual por rota
    detected = set()
    for f in changed_files:
        if "paginas/faq" in f:
            detected.add(f"https://{HOST}/faq")
        elif "paginas/projetos/transporta" in f:
            detected.add(f"https://{HOST}/projetos/transporta")
        elif "paginas/projetos" in f:
            detected.add(f"https://{HOST}/projetos")
        elif "paginas/sobre" in f:
            detected.add(f"https://{HOST}/sobre")
        elif "paginas/contato" in f:
            detected.add(f"https://{HOST}/contato")
        elif f.endswith("llms.txt"):
            detected.add(f"https://{HOST}/llms.txt")
        elif f.endswith("llms-full.txt"):
            detected.add(f"https://{HOST}/llms-full.txt")

    if not detected:
        return [], "Nenhuma página pública (HTML/txt) alterada neste commit (ex: apenas docs, scripts ou testes)"

    return sorted(list(detected)), f"{len(detected)} rota(s) específica(s) alterada(s) detectada(s) via git diff"

def check_remote_key(max_retries=3, delay_seconds=5):
    print(f"[*] Verificando chave de autenticação em produção: {KEY_LOCATION}")
    for attempt in range(1, max_retries + 1):
        try:
            req = urllib.request.Request(
                KEY_LOCATION,
                headers={"User-Agent": "Trinity-IndexNow-Verifier/2.0"}
            )
            with urllib.request.urlopen(req, timeout=10) as response:
                content = response.read().decode("utf-8").strip()
                if response.status == 200 and INDEXNOW_KEY in content:
                    print("    [OK] Chave validada com sucesso no servidor de produção!")
                    return True
                else:
                    print(f"    [!] Tentativa {attempt}: Chave diverge do esperado: {content[:30]}...")
        except urllib.error.HTTPError as e:
            print(f"    [!] Tentativa {attempt}/{max_retries}: Servidor retornou HTTP {e.code} ({e.reason})")
        except Exception as e:
            print(f"    [!] Tentativa {attempt}/{max_retries}: Erro de conexão ({e})")

        if attempt < max_retries:
            print(f"    Aguardando {delay_seconds}s para nova tentativa (propagação de deploy)...")
            time.sleep(delay_seconds)

    return False

def main():
    parser = argparse.ArgumentParser(description="Trinity IndexNow Submitter")
    parser.add_argument("--force", action="store_true", help="Ignora o cooldown e força o disparo imediato")
    parser.add_argument("--all", action="store_true", help="Envia todas as URLs canônicas em vez de apenas o git diff")
    parser.add_argument("--cooldown", type=int, default=15, help="Tempo de cooldown em minutos (padrão: 15)")
    parser.add_argument("--dry-run", action="store_true", help="Simula a execução sem enviar requisições")
    args = parser.parse_args()

    project_root = find_project_root()
    cache_file = get_cache_file_path(project_root)
    cooldown_seconds = args.cooldown * 60

    print("=" * 70)
    print(" Trinity Mídia Digital — IndexNow Auto-Notification v2.0")
    print("=" * 70)

    # 1. Cooldown / Throttling Check
    cache = read_cache(cache_file)
    if cache and "last_run_timestamp" in cache and not args.force:
        last_run = cache["last_run_timestamp"]
        elapsed = time.time() - last_run
        if elapsed < cooldown_seconds:
            remaining = cooldown_seconds - elapsed
            print(f"\n[COOLDOWN ATIVO]")
            print(f"    Último envio realizado há: {format_duration(elapsed)}")
            print(f"    Próximo envio permitido em: {format_duration(remaining)}")
            print(f"    Status: DISPARO PULADO para evitar sobrecarga/spam nos motores.")
            print(f"    (Dica: Para forçar o envio imediato, use: python {Path(__file__).name} --force)\n")
            sys.exit(0)

    # 2. Resolução de URLs a enviar
    if args.all:
        urls_to_submit = ALL_CANONICAL_URLS
        reason = "Flag --all informada (enviando todas as rotas canônicas)"
    else:
        urls_to_submit, reason = detect_changed_urls(project_root)

    print(f"\n[*] Seleção de URLs:")
    print(f"    Motivo: {reason}")

    if not urls_to_submit:
        print("[INFO] Nenhuma URL elegível para notificação. Finalizando sem disparos.")
        sys.exit(0)

    for u in urls_to_submit:
        print(f"    -> {u}")

    if args.dry_run:
        print("\n[DRY RUN] Simulação concluída com sucesso. Nenhuma requisição enviada.")
        sys.exit(0)

    # 3. Validação da Chave Remota em Produção
    is_live = check_remote_key()
    if not is_live and not args.force:
        print("\n" + "=" * 70)
        print("[AVISO] A chave IndexNow ainda não retornou HTTP 200 no ar.")
        print("Certifique-se de que o deploy em produção terminou antes do disparo.")
        print("Para forçar o envio mesmo assim, execute com a flag --force.")
        print("=" * 70 + "\n")
        sys.exit(1)

    # 4. Envio do Lote IndexNow
    payload = {
        "host": HOST,
        "key": INDEXNOW_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls_to_submit
    }
    data = json.dumps(payload, indent=2).encode("utf-8")
    headers = {
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": "Trinity-IndexNow-Client/2.0"
    }

    success = False
    for name, endpoint in INDEXNOW_ENDPOINTS:
        print(f"\n[*] Disparando para {name}...")
        try:
            req = urllib.request.Request(endpoint, data=data, headers=headers, method="POST")
            with urllib.request.urlopen(req, timeout=15) as res:
                code = res.status
                if code in (200, 202):
                    print(f"    [SUCESSO] HTTP {code}: Notificação aceita para indexação!")
                    success = True
                else:
                    print(f"    [RESPOSTA] HTTP {code}: {res.reason}")
        except urllib.error.HTTPError as e:
            print(f"    [ERRO] HTTP {e.code}: {e.reason}")
            try:
                err_detail = e.read().decode("utf-8")
                if err_detail:
                    print(f"           Detalhe: {err_detail[:200]}")
            except Exception:
                pass
        except Exception as e:
            print(f"    [FALHA] Erro de rede ({e})")

    if success:
        write_cache(cache_file, urls_to_submit)
        print("\n[OK] Processo concluído com êxito.")
    else:
        print("\n[!] Disparo finalizado com falhas nos endpoints.")
        sys.exit(1)

if __name__ == "__main__":
    main()
