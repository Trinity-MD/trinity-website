/* =======================================
 * ui.js - Lógica Visual do Site
 * ======================================= */

// 1. Dicionário de Traduções
const translations = {
    "pt": {
        //Traduções Gerais
        "nav_home": "Home",
        "nav_services": "Serviços",
        "nav_projects": "Projetos",
        "nav_about": "Sobre",
        "nav_contact": "Contato",
        "footer_legal_text": "é uma marca comercial e de apresentação da",
        "footer_rights": "Todos os direitos reservados.",

        // Nova Home
        "nh_page_title": "Trinity Mídia Digital e Tecnologia | Desenvolvimento Full Stack",
        "nh_page_description": "Trinity Mídia Digital e Tecnologia. Desenvolvimento de sistemas web, aplicativos, APIs, integrações e infraestrutura de ponta a ponta.",
        "nh_brand_sub": "Mídia Digital e Tecnologia",
        "nh_start_project": "Iniciar um projeto",
        "nh_hero_eyebrow_brand": "Trinity Mídia Digital e Tecnologia",
        "nh_hero_eyebrow_work": "Desenvolvimento de Software End-to-End",
        "nh_hero_title": "Desenvolvimento de software de ponta a ponta — da arquitetura ao sistema em produção.",
        "nh_hero_desc": "A Trinity desenvolve sistemas web, aplicativos, APIs, integrações e infraestrutura. A estrutura empresarial da marca se une ao contato direto com o desenvolvedor responsável pela execução técnica.",
        "nh_hero_projects": "Conhecer projetos",
        "nh_axis_scope": "Escopo",
        "nh_axis_scope_value": "Web, Mobile, APIs e Infra",
        "nh_axis_operation": "Operação",
        "nh_axis_operation_value": "Sistemas reais em produção",
        "nh_axis_contact": "Interlocução",
        "nh_axis_contact_value": "Contato direto com quem desenvolve",
        "nh_panel_label": "Modelo de atuação",
        "nh_panel_title": "Desenvolvedor Full Stack Pleno — atuação end-to-end",
        "nh_panel_desc": "Uma condução técnica direta, da definição da arquitetura à entrega em produção.",
        "nh_panel_1": "Arquitetura e Código",
        "nh_panel_1_sub": "Front-end &amp; Back-end",
        "nh_panel_2": "Aplicativos",
        "nh_panel_2_sub": "Mobile",
        "nh_panel_3": "Interoperabilidade",
        "nh_panel_3_sub": "APIs &amp; Integrações",
        "nh_panel_4": "Sustentação",
        "nh_panel_4_sub": "Infraestrutura &amp; Deploy",
        "nh_services_label": "01 — Áreas de atuação",
        "nh_services_title": "Quatro frentes técnicas sob uma mesma condução.",
        "nh_services_intro": "Atuação integrada entre interface, regras de negócio, dados e ambiente de produção.",
        "nh_service_1": "Desenvolvimento Full Stack",
        "nh_service_1_desc": "Concepção e desenvolvimento de sistemas web completos, painéis operacionais, plataformas de gestão e aplicações sob medida, integrando interface, regras de negócio e dados.",
        "nh_service_2": "Aplicativos Mobile",
        "nh_service_2_desc": "Aplicativos integrados à operação principal, contemplando experiência de uso, comunicação com APIs e ciclo de manutenção e publicação.",
        "nh_service_3": "APIs e Integrações",
        "nh_service_3_desc": "APIs, webhooks e comunicação entre sistemas e serviços externos.",
        "nh_service_4": "Infraestrutura e Deploy",
        "nh_service_4_desc": "Servidores, containers, ambientes de produção, automação de deploy e acompanhamento técnico.",
        "nh_services_cta": "Conhecer minha atuação",
        "nh_feature_label": "02 — Projeto em destaque",
        "nh_feature_status": "Em produção · Projeto privado",
        "nh_feature_visual_label": "Sistema corporativo privado",
        "nh_feature_context": "Contexto e arquitetura",
        "nh_feature_heading": "Uma operação logística conectada de ponta a ponta.",
        "nh_feature_desc": "Sistema integrado desenvolvido para digitalizar e centralizar uma operação logística, cobrindo aplicativo Android, painel web, API e infraestrutura de produção.",
        "nh_feature_fronts": "Frentes",
        "nh_feature_timeline": "Cronologia",
        "nh_feature_timeline_value": "V1 mai/2025 – jun/2026 · V2 out/2026 (Em produção)",
        "nh_feature_sandbox": "Acessar Sandbox Interativa ↗",
        "nh_feature_cta": "Ver estudo de caso completo",
        "nh_projects_label": "03 — Projetos selecionados",
        "nh_projects_title": "Outras frentes em desenvolvimento e produção.",
        "nh_projects_intro": "Três projetos com escopos e soluções técnicas diferentes.",
        "nh_tv_status": "Em desenvolvimento · Site público",
        "nh_tv_desc": "Modernização progressiva de um portal existente, com front-end público reconstruído e evolução de backend, autenticação, APIs e dados reais.",
        "nh_tv_since": "Sob condução atual desde agosto/2026",
        "nh_book_status": "Em produção",
        "nh_book_desc": "Site e catálogo digital simples de atualizar. Uma planilha alimenta o catálogo e permite que o cliente mantenha o conteúdo sem um painel administrativo desnecessário.",
        "nh_book_timeline": "Recebido abr/2026 · Desenvolvimento jun/2026 · Produção jul/2026",
        "nh_book_link": "Visitar site público",
        "nh_convida_status": "Em desenvolvimento · Projeto próprio",
        "nh_convida_desc": "Aplicativo Android para organização de pequenos eventos: criação por código, participantes, autorizações e estimativas configuráveis de alimentos e bebidas.",
        "nh_convida_timeline": "Iniciado dez/2025 · Pausa para planejar migração em jun/2026",
        "nh_projects_cta": "Ver todos os projetos",
        "nh_about_label": "04 — Atuação profissional",
        "nh_about_title": "A marca Trinity e o profissional por trás do código.",
        "nh_about_desc": "A Trinity Mídia Digital e Tecnologia é a estrutura empresarial para contratação e entrega dos projetos. A execução técnica é conduzida diretamente pelo desenvolvedor responsável.",
        "nh_about_cta": "Conhecer trajetória e atuação",
        "nh_about_skills_label": "Competências no ciclo completo",
        "nh_skill_1": "Front-end e interfaces",
        "nh_skill_2": "Back-end e APIs",
        "nh_skill_3": "Aplicativos mobile",
        "nh_skill_4": "Infraestrutura e deploy",
        "nh_final_label": "05 — Contato e novos projetos",
        "nh_final_title": "Precisa tirar um sistema do papel ou evoluir uma operação existente?",
        "nh_final_desc": "O contato é direto com quem fará a análise técnica e a execução do projeto.",
        "nh_final_primary": "Iniciar uma conversa",
        "nh_final_secondary": "Ver projetos",
        "nh_final_panel_label": "Condução técnica direta",
        "nh_footer_desc": "Desenvolvimento Full Stack, sistemas em produção, aplicativos, APIs, integrações e infraestrutura.",
        "nh_footer_nav": "Navegação",
        "nh_footer_position": "Posicionamento",
        "nh_footer_note": "Arquitetura, código e deploy sob condução direta",

        // Catálogo de projetos
        "pr_page_title": "Projetos | Trinity Mídia Digital e Tecnologia",
        "pr_page_description": "Projetos reais da Trinity: sistemas em produção, aplicativos, ferramentas e referências técnicas desenvolvidos em diferentes contextos.",
        "pr_hero_label": "Portfólio / Projetos",
        "pr_hero_title": "Projetos construídos para problemas reais.",
        "pr_hero_desc": "Uma seleção de sistemas, aplicativos, ferramentas e projetos técnicos desenvolvidos em diferentes contextos — de operações corporativas em produção a produtos próprios e soluções pontuais.",
        "pr_main_label": "Sistemas e produtos",
        "pr_main_title": "Projetos principais",
        "pr_main_intro": "Quatro contextos diferentes, com decisões técnicas proporcionais a cada problema.",
        "pr_transporta_visual": "Sistema corporativo privado",
        "pr_transporta_status": "Em produção · Projeto privado",
        "pr_transporta_desc": "Sistema integrado desenvolvido para digitalizar e centralizar uma operação logística, reunindo aplicativo Android, painel web, API e infraestrutura de produção.",
        "pr_fronts": "Frentes",
        "pr_timeline": "Cronologia",
        "pr_transporta_timeline": "V1 mai/2025 – jun/2026 · V2 out/2026 (Em produção)",
        "pr_transporta_sandbox": "Acessar Sandbox Interativa ↗",
        "pr_view_project": "Ver estudo de caso",
        "pr_tv_status": "Em desenvolvimento · Preview público",
        "pr_tv_date": "Sob condução atual desde agosto/2026",
        "pr_tv_desc": "Modernização progressiva de um portal originalmente em WordPress/PHP para uma arquitetura própria e orientada a dados. O front-end público foi reconstruído; a evolução atual inclui backend, APIs, autenticação, autorização, persistência e substituição gradual dos mocks JSON.",
        "pr_tv_link": "Ver versão em desenvolvimento",
        "pr_book_status": "Em produção",
        "pr_book_date": "Recebido abr/2026 · Desenvolvimento jun/2026 · Produção jul/2026",
        "pr_book_desc": "Site e catálogo digital para uma livraria que precisava de uma solução simples e fácil de administrar. Uma planilha alimenta o catálogo e permite que o cliente atualize o conteúdo sem um backend ou painel desnecessários.",
        "pr_visit_site": "Visitar site",
        "pr_convida_status": "Em desenvolvimento · Projeto próprio",
        "pr_convida_date": "Iniciado dez/2025 · Pausa para planejar migração em jun/2026",
        "pr_convida_desc": "Aplicativo Android para organizar pequenos eventos por código, gerenciar participantes e autorizações e planejar estimativas configuráveis de alimentos e bebidas. A migração do Firebase para um backend próprio está planejada.",
        "pr_convida_link": "Ver página pública",
        "pr_tools_label": "Soluções pontuais",
        "pr_tools_title": "Ferramentas e projetos menores",
        "pr_tools_intro": "Escopos menores, construídos para necessidades específicas.",
        "pr_numdorme_status": "Projeto próprio · Utilitário Android · Em revisão",
        "pr_numdorme_desc": "Utilitário criado em um dia para impedir que a tela do Android apagasse automaticamente sem mudar sempre as configurações. A versão anteriormente funcional está em revisão antes de testes e eventual publicação.",
        "pr_barcode_status": "Utilitário desktop · Concluído",
        "pr_barcode_date": "Agosto/2026",
        "pr_barcode_desc": "Ferramenta Windows criada em um dia para gerar e imprimir códigos de barras, organizar etiquetas em folhas A4 e exportar PDF para impressão.",
        "pr_website_status": "Em reconstrução · Open Source",
        "pr_website_date": "Legado iniciado set/2025 · Reconstrução iniciada em 2026",
        "pr_website_desc": "Reconstrução do site institucional da Trinity com nova identidade visual, conteúdo reorganizado e stack estática simples. O próprio site em execução é a demonstração do projeto.",
        "pr_view_site": "Ver site",
        "pr_engineering_label": "Engenharia aberta",
        "pr_engineering_title": "Open Source e referências técnicas",
        "pr_rbac_status": "Referência técnica · Open Source",
        "pr_rbac_relation": "Extraído e sanitizado a partir do trabalho de autorização no contexto do TV Xerém.",
        "pr_rbac_desc": "Referência pública de autenticação e autorização com RBAC, hierarquia de papéis, delegação, MFA, sessões, auditoria e proteções contra escalada de privilégios.",
        "pr_rbac_link": "Ver repositório no GitHub",
        "pr_final_label": "Novos projetos",
        "pr_final_title": "Tem um problema que precisa virar software?",
        "pr_final_desc": "Cada projeto parte de um contexto diferente. A tecnologia entra depois que o problema e a operação estão claros.",
        "pr_final_cta": "Conversar sobre um projeto",

        // Sobre
        "ab_page_title": "Sobre | Trinity Mídia Digital e Tecnologia",
        "ab_page_description": "Conheça a trajetória, os princípios e a forma de trabalhar da Trinity Mídia Digital e Tecnologia.",
        "ab_hero_label": "Sobre / Trinity",
        "ab_hero_title": "Software construído com contexto, responsabilidade e condução direta.",
        "ab_hero_desc": "A Trinity Mídia Digital e Tecnologia é a estrutura empresarial por trás dos projetos. O desenvolvimento e a condução técnica são realizados diretamente por quem acompanha o problema, define a arquitetura e leva a solução até produção.",
        "ab_hero_cta": "Conhecer projetos",
        "ab_intro_label": "Quem está por trás",
        "ab_intro_title": "Uma empresa construída ao redor da execução técnica.",
        "ab_intro_desc": "A Trinity nasceu como estrutura para transformar desenvolvimento de software em uma atuação profissional organizada. A relação com cada projeto permanece direta: análise, decisões técnicas, desenvolvimento, infraestrutura e evolução são conduzidos de ponta a ponta.",
        "ab_position_role": "Desenvolvedor Full Stack Pleno",
        "ab_position_mode": "Atuação end-to-end",
        "ab_position_fronts": "Frentes de atuação",
        "ab_position_apis": "APIs e integrações",
        "ab_position_infra": "Infraestrutura e deploy",
        "ab_journey_label": "Trajetória",
        "ab_journey_title": "Da origem à operação em produção.",
        "ab_origin_label": "Origem",
        "ab_origin_desc": "A ideia do Xerém Digital foi um dos pontos que despertaram o interesse em transformar problemas reais em produtos digitais e levou ao início dos estudos em desenvolvimento.",
        "ab_transporta_desc": "O Transporta tornou-se o primeiro grande projeto end-to-end: aplicativo Android, dashboard web, API, banco de dados e infraestrutura.",
        "ab_transporta_impact": "Foi o projeto que transformou estudo em responsabilidade real de desenvolvimento e operação.",
        "ab_trinity_desc": "A Trinity Mídia Digital e Tecnologia passou a ser a estrutura empresarial utilizada para contratação, organização e entrega dos projetos.",
        "ab_today_label": "Hoje",
        "ab_today_desc": "A atuação atual envolve sistemas web, aplicativos, APIs, integrações, infraestrutura e manutenção de aplicações em produção.",
        "ab_principles_label": "Princípios",
        "ab_principles_title": "Princípios que fazem parte da origem.",
        "ab_principles_desc": "A fé cristã faz parte da história pessoal que deu origem à Trinity e influencia a forma como o trabalho é conduzido: responsabilidade, honestidade, respeito às pessoas e compromisso com aquilo que foi assumido.",
        "ab_principles_complement": "Esses princípios convivem com uma atuação técnica baseada em análise, validação, aprendizado contínuo e decisões proporcionais ao problema.",
        "ab_method_label": "Forma de trabalhar",
        "ab_method_title": "Decisões técnicas com propósito claro.",
        "ab_method_understand_title": "Entender antes de construir",
        "ab_method_understand_desc": "A tecnologia é escolhida depois de entender o problema e a operação.",
        "ab_method_complexity_title": "Complexidade proporcional",
        "ab_method_complexity_desc": "Nem todo problema precisa de backend complexo, framework novo ou infraestrutura grande.",
        "ab_method_responsibility_title": "Responsabilidade end-to-end",
        "ab_method_responsibility_desc": "Arquitetura, código, integração, deploy e manutenção fazem parte do mesmo processo.",
        "ab_method_evolution_title": "Evolução contínua",
        "ab_method_evolution_desc": "Projetos reais mudam. A solução precisa poder evoluir sem perder clareza e controle.",
        "ab_proof_label": "Projetos como prova",
        "ab_proof_title": "Contextos diferentes exigem decisões diferentes.",
        "ab_proof_transporta": "Sistema corporativo end-to-end em produção.",
        "ab_proof_tv": "Modernização progressiva de plataforma existente.",
        "ab_proof_book": "Solução simples e proporcional ao problema usando HTML, JavaScript e Google Sheets.",
        "ab_proof_cta": "Ver projetos",
        "ab_final_title": "Tem um projeto, uma operação ou um problema técnico para resolver?",
        "ab_final_desc": "O contato é direto com quem fará a análise e a execução técnica.",
        "ab_final_cta": "Iniciar uma conversa",

        // Contato
        "ct_page_title": "Contato | Trinity Mídia Digital e Tecnologia",
        "ct_page_description": "Fale diretamente com a Trinity Mídia Digital e Tecnologia sobre projetos, sistemas e problemas técnicos.",
        "ct_hero_label": "Contato / Novos projetos",
        "ct_hero_title": "Vamos conversar sobre o que você precisa construir ou resolver.",
        "ct_hero_desc": "O contato é direto com quem fará a análise técnica e conduzirá o desenvolvimento.",
        "ct_channels_label": "Canais de contato",
        "ct_channels_title": "Escolha o canal mais adequado.",
        "ct_wa_title": "Conversa direta",
        "ct_wa_desc": "Para projetos, dúvidas iniciais ou para entender se uma ideia faz sentido tecnicamente.",
        "ct_wa_cta": "Conversar pelo WhatsApp",
        "ct_email_label": "E-mail",
        "ct_email_title": "E-mail",
        "ct_email_desc": "Para propostas, documentos ou contatos que precisem de mais contexto.",
        "ct_email_cta": "Enviar e-mail",
        "ct_form_trigger": "Prefere enviar uma mensagem pelo formulário?",
        "ct_conversation_label": "Para começar",
        "ct_conversation_title": "Não precisa chegar com tudo definido.",
        "ct_conversation_desc": "Uma primeira conversa pode começar pelo problema. Arquitetura, tecnologias e escopo são definidos depois de entender o contexto.",
        "ct_topic_problem": "O que precisa ser resolvido",
        "ct_topic_process": "Como o processo funciona hoje",
        "ct_topic_users": "Quem utilizará a solução",
        "ct_topic_existing": "O que já existe ou já foi tentado",
        "ct_demands_label": "Tipos de demanda",
        "ct_demands_title": "Alguns contextos em que podemos atuar.",
        "ct_demand_web": "Sistemas web",
        "ct_demand_apps": "Aplicativos",
        "ct_demand_apis": "APIs e integrações",
        "ct_demand_automation": "Automação",
        "ct_demand_infra": "Infraestrutura e deploy",
        "ct_demand_evolution": "Evolução de sistemas existentes",
        "ct_final_title": "Um problema real é um bom ponto de partida.",
        "ct_final_desc": "A partir dele, avaliamos juntos o que realmente precisa ser construído.",
        "ct_final_cta": "Ver projetos",
        "ct_form_title": "Enviar uma mensagem",
        "ct_form_intro": "Conte brevemente o que você precisa. O contato também pode começar por WhatsApp ou e-mail.",
        "ct_form_submit": "Enviar mensagem",
        "ct_form_error": "Não foi possível enviar a mensagem. Tente novamente ou use WhatsApp ou e-mail.",
        "ct_success_label": "Mensagem enviada",
        "ct_success_title": "Mensagem enviada.",
        "ct_success_desc": "O retorno será feito pelo endereço informado.",

        // Case Transporta
        "tr_page_title": "Transporta V2 — Case de Engenharia & Migração | Trinity",
        "tr_page_description": "Case Transporta: aplicativo Android Kotlin offline-first, novo dashboard em Vue 3, API em TypeScript com Redis e migração de dados em produção sem parada operacional.",
        "tr_nav_label": "Navegação principal",
        "tr_language_label": "Idioma",
        "tr_menu_label": "Abrir menu",
        "tr_mobile_nav_label": "Navegação móvel",
        "tr_footer_nav_label": "Navegação do rodapé",
        "tr_hero_label": "Case de Engenharia Corporativa / Logística Crítica",
        "tr_status": "🟢 Operação em Produção · Migração V1 → V2 Concluída",
        "tr_hero_desc": "A evolução de um ecossistema logístico em produção: da arquitetura inicial à reconstrução cirúrgica da API, modernização do Dashboard Web em Vue 3 e aplicativo Android nativo Kotlin com sincronização offline, conciliação fiscal e migração sem big bang.",
        "tr_stack_label": "Stack V2",
        "tr_timeline_label": "Cronologia do Projeto",
        "tr_timeline": "V1 em Produção (Mai/2025 – Jun/2026) · Arquitetura V2 e Cutover (Out/2026)",
        "tr_context_label": "O Desafio Operacional",
        "tr_context_title": "Conectar a boleia do caminhão sem sinal à conciliação fiscal na matriz.",
        "tr_context_p1": "Em rotas de carga pesada, motoristas atravessam rodovias sem qualquer cobertura móvel. Registrar canhotos, ocorrências e entregas dependia de formulários manuais ou esperas de dias até o retorno à base, atrasando faturamentos e conciliações fiscais.",
        "tr_context_p2": "O desafio era duplo: criar uma aplicação Android que operasse 100% offline com persistência durável no aparelho e, no backend, automatizar o cruzamento fiscal de CT-e e NF-e com segurança de ponta a ponta.",
        "tr_solution_label": "Solução e Arquitetura",
        "tr_solution_title": "A Tríade V2: Três camadas autônomas, uma operação contínua.",
        "tr_solution_desc": "Aplicativo móvel, painel administrativo e API corporativa integrados para garantir resiliência no campo e visibilidade na gestão.",
        "tr_android_title": "Aplicativo Android Nativo (Kotlin)",
        "tr_android_desc": "Aplicação nativa com arquitetura Offline-First e Outbox Pattern. Motoristas registram viagens, canhotos e ocorrências sem conexão; os dados são assinados com chave local P-256 no Keystore do Android e sincronizados automaticamente com a API, com In-App Updates imediato para blindar a compatibilidade da frota.",
        "tr_web_title": "Dashboard Web Administrativo (Vue 3)",
        "tr_web_desc": "Interface de comando operacional reconstruída em Vue 3, Vite e TypeScript. Despacho de cargas, rastreamento de viagens, sinalizadores globais em tempo real e tempo de resposta de consultas otimizado de 13,8s para 1,2s.",
        "tr_api_title": "API V2 & Conciliação Fiscal (TypeScript + Redis)",
        "tr_api_desc": "Backend enxugado de 139 rotas legadas para 32 contratos cirúrgicos. Autenticação por sessão real e RBAC no servidor, cache Redis e integração assíncrona com NS Docs para leitura automática de XMLs de NF-e e CT-e.",
        "tr_infra_title": "Infraestrutura Corporativa (Oracle Cloud + Docker)",
        "tr_infra_desc": "Ambiente isolado em nuvem corporativa Oracle Cloud (OCI), com contêineres Docker, esteiras independentes de CI/CD para API e Dashboard, proteção Cloudflare Tunnel e isolamento rigoroso de dados.",
        "tr_interfaces_label": "Interfaces em Produção",
        "tr_interfaces_title": "Da operação na estrada ao painel de controle executivo.",
        "tr_interfaces_desc": "As interfaces abaixo utilizam dados fictícios homologados para demonstrar o aplicativo e o painel sem expor informações sigilosas da operação real.",
        "tr_app_alt": "Tela de acesso do aplicativo Transporta",
        "tr_app_caption": "Aplicativo Android Nativo",
        "tr_zoom_badge": "Ampliar",
        "tr_app_caption_detail": "Autenticação local segura e operação de campo.",
        "tr_dashboard_alt": "Dashboard administrativo do Transporta com registros fictícios da operação",
        "tr_dashboard_caption": "Dashboard Web V2",
        "tr_dashboard_caption_detail": "Visão administrativa de viagens, cargas e conciliações fiscais.",
        "tr_demo_label": "Demonstração",
        "tr_demo_title": "Fluxo Operacional Móvel",
        "tr_demo_desc": "Demonstração prática do uso do aplicativo nativo durante a rotina de registro e validação.",
        "tr_demo_video_label": "Demonstração do fluxo móvel do Transporta",
        "tr_arch_label": "Topologia e Fluxo",
        "tr_arch_title": "Arquitetura desacoplada e sincronização resiliente.",
        "tr_arch_desc": "A autorização e as regras fiscais residem exclusivamente no servidor. O aplicativo e o dashboard comunicam-se via contratos estritos com cache Redis em nuvem OCI.",
        "tr_arch_flow_alt": "Aplicativo Android e dashboard web conectados à API, que acessa o MongoDB",
        "tr_arch_field": "Campo",
        "tr_arch_app": "App Android (Kotlin Offline)",
        "tr_arch_management": "Gestão",
        "tr_arch_dashboard": "Dashboard Web (Vue 3 / Vite)",
        "tr_arch_rules": "Segurança & Regras",
        "tr_arch_data": "Persistência & Nuvem",
        "tr_arch_foot": "Infraestrutura em Produção: Docker · Oracle Cloud Infrastructure · Cloudflare Tunnel · NS Docs",
        "tr_decisions_label": "Engenharia Real",
        "tr_decisions_title": "Decisões técnicas fundamentadas em produção.",
        "tr_decisions_intro": "Diferente de projetos acadêmicos, a evolução do Transporta foi guiada por auditorias rigorosas, contenção de riscos e operação real contínua.",
        "tr_offline_title": "Redução de Superfície: De 139 para 32 Endpoints",
        "tr_offline_desc": "A V1 antiga acumulou código inflado. Em vez de portar complexidade desnecessária, auditamos a operação e redesenhamos a API para apenas 32 contratos cirúrgicos, diminuindo drasticamente a superfície de ataque e o custo de manutenção.",
        "tr_separation_title": "Offline-First Real e Grant Durável P-256",
        "tr_separation_desc": "Uma resposta 401 de token expirado não apaga a identidade do motorista no meio da estrada. A autenticação local utiliza chaves P-256 no Android Keystore com Fila Outbox durável, desacoplando o trabalho de campo da conectividade de rede.",
        "tr_access_title": "Migração Sem Big Bang & Idempotência de Dados",
        "tr_access_desc": "A transição entre V1 e V2 operou em coexistência planejada. O ensaio de migração foi validado interrompendo o processo após 4.000 gravações e retomando com mapeamento de UUIDs sem gerar duplicatas ou perder um único registro histórico.",
        "tr_records_title": "Otimização de Latência: De 13,8s para 1,2s",
        "tr_records_desc": "A reconstrução do Dashboard em Vue 3 eliminou requisições em cascata e gargalos no banco. O tempo de consulta e filtragem de viagens caiu em mais de 90%, garantindo respostas quase instantâneas para os operadores de logística.",
        "tr_production_label": "Marcos de Evolução",
        "tr_production_title": "Da validação inicial à consolidação corporativa.",
        "tr_production_desc": "O projeto nasceu como MVP em maio de 2025, foi validado em campo e entrou em produção. Conforme o volume aumentou, a Trinity planejou e executou a refatoração integral para a arquitetura V2, concluída em outubro de 2026 com zero interrupção operacional.",
        "tr_date_start": "Mai/2025",
        "tr_milestone_start": "Início da V1 (MVP e Validação em Campo)",
        "tr_date_delivery": "Nov/2025",
        "tr_milestone_delivery": "Entrega da V1 e Operação Assistida",
        "tr_date_live": "Out/2026",
        "tr_milestone_live": "Entrada em Produção da V2 (Vue 3, API V2 e Cutover Final)",
        "tr_final_label": "Engenharia de Soluções",
        "tr_final_title": "Software corporativo exige visão além do código.",
        "tr_final_desc": "O Transporta prova nossa capacidade de conceber, auditar, refatorar e sustentar plataformas complexas em produção sem colocar a operação do cliente em risco.",
        "tr_final_contact": "Conversar sobre um projeto",
        "tr_final_projects": "Ver outros projetos",
        "tr_sandbox_badge": "Ambiente de Demonstração",
        "tr_sandbox_title": "Experimente o Dashboard V2 na Prática (Sandbox Isolada)",
        "tr_sandbox_desc": "Navegue livremente pela instância pública e independente do Dashboard V2 com dados de frota mockados. Teste despacho de viagens, filtros reativos, sinalizadores globais e exportações sem qualquer acesso a dados confidenciais de clientes reais.",
        "tr_sandbox_btn": "Acessar Sandbox Interativa",
        "tr_sandbox_contact": "Solicitar Demonstração Guiada",

        //Home
        "home_hero_title": "Tiramos sua ideia do papel com <br class='hidden md:block'/> <span class='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-300% animate-gradient'>tecnologia e design.</span>",
        "home_hero_subtitle": "Desenvolvimento de software de alta performance, aplicativos nativos e plataformas web escaláveis. Transformamos complexidade em experiência.",
        "home_btn_services": "Conheça Nossos Serviços",
        "home_btn_portfolio": "Ver Portfólio",
        "hero_button_cta": "Inicie seu Projeto Digital",
        "home_status_available":"Disponíveis para novos projetos",
        
        "home_serv_title": "O que fazemos",
        "home_serv_desc": "Transformamos a maneira como sua empresa trabalha.",
        
        "home_serv1_title": "Sites que Vendem",
        "home_serv1_desc": "Criamos sua vitrine na internet. Sites bonitos, rápidos e que funcionam no celular, focados em trazer mais clientes para você.",
        
        "home_serv2_title": "Seu App Próprio",
        "home_serv2_desc": "Coloque sua ideia no bolso do seu cliente. Desenvolvemos aplicativos para Android e iPhone que são fáceis de usar.",
        
        "home_serv3_title": "Automação de Tarefas",
        "home_serv3_desc": "Chega de perder tempo com planilhas. Criamos sistemas que organizam sua empresa e fazem o trabalho chato por você.",
        "home_serv_call": "Não sabe por onde começar?",
        "home_serv_cta": "Fale com a gente sem compromisso",

        "home_port_title": "Cases Recentes",
        "home_port_desc": "Projetos que entregaram resultados reais.",
        "home_port_btn": "Ver todos",

        "home_test_title": "Confiança construída com resultados.",
        "home_test1_text": "A Trinity transformou completamente nossa operação logística. O app é intuitivo e o sistema roda liso. Suporte impecável.",
        "home_test1_author": "Diretor de Operações, Transportadora Log",
        "home_test2_text": "A qualidade do design e a estabilidade do sistema superaram nossas expectativas. Recomendamos fortemente.",
        "home_test2_author": "CEO, Startup Tech",

        "home_cta_final_title": "Vamos construir o futuro?",
        "home_cta_final_desc": "Sua ideia merece ser executada com excelência. Entre em contato e vamos tirar esse projeto do papel.",
        "home_btn_contact": "Falar no WhatsApp",
        "home_btn_email": "Enviar E-mail",

        //Página de Contato
        "contact_hero_title": "Vamos conversar?",
        "contact_hero_subtitle": "Estamos prontos para tirar sua ideia do papel. Escolha o melhor canal para falar com nossa equipe.",
        "contact_card_phone_title": "WhatsApp / Telefone",
        "contact_card_email_title": "E-mail Corporativo",
        "contact_btn_wa": "Chamar no WhatsApp",
        "contact_btn_copy": "Copiar E-mail",
        "contact_btn_form": "Prefere preencher um formulário? Clique aqui.",

        //Página de Projetos
        "btn_back": "Voltar",
        "projects_title": "NOSSOS PROJETOS",
        "project_1_desc": "Esse projeto é composto por uma plataforma Web(Dashboard) e um aplicativo Android.",
        "project_2_title": "Nome do Projeto 2",
        "project_3_title": "Nome do Projeto 3",
        "project_4_title": "Nome do Projeto 4",
        "project_5_title": "Nome do Projeto 5",
        "project_6_title": "Nome do Projeto 6",
        "project_7_title": "Nome do Projeto 7",
        "project_8_title": "Nome do Projeto 8",
        "project_9_title": "Nome do Projeto 9",
        "project_generic_desc": "Uma breve descrição do que foi feito neste projeto.",
        "search_placeholder": "Pesquisar projetos...",
        "filter_all": "Todos",
        "filter_apps": "Apps",
        "filter_platforms": "Plataformas Web",
        "filter_sites": "Sites",
        "filter_others": "Outros",

        //Página Sobre Nós
        "about_hero_title": "Mais que código, <br> <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'>propósito.</span>",
        "about_hero_subtitle": "\"Mantenha seu coração e mente abertos para conhecer nossa história.\"",
        
        "about_step1_title": "A Visão",
        "about_step1_desc": "Tudo começou com uma visão vinda de Deus sobre o projeto 'Xerém Digital'. Foi o chamado para aprender a programar e iniciar uma nova jornada, sem saber por onde começar, mas confiando no alinhamento divino.",
        
        "about_step2_title": "Nasce o Transporta",
        "about_step2_desc": "Surgiu a oportunidade de tirar uma empresa do papel e digitalizar o controle de entregas. Sem experiência prévia, mas com apoio e direção, iniciei os estudos e o desenvolvimento do sistema.",
        
        "about_step3_title": "A Certeza",
        "about_step3_desc": "Em meio a chegadas e partidas de pessoas, tive a certeza de que minha capacidade vinha de Deus. Pedi que Ele trouxesse quem somasse e afastasse quem atrapalhasse.",
        
        "about_step4_title": "Trinity Oficial",
        "about_step4_desc": "Após um ano de tentativas, oficializamos a empresa. Fiz um voto de honra: Deus é meu sócio principal. Esse princípio guia nossa ética e a seleção de quem trabalha conosco.",
        
        "about_step5_title": "Hoje",
        "about_step5_desc": "Depois de explorar diversas áreas, o direcionamento sempre apontou para o Desenvolvimento. Hoje, estou aqui, desenvolvendo projetos, realizando sonhos e construindo o futuro do Xerém Digital.",

        //Modais Home
        "modal_title": "Inicie seu Projeto",
        "modal_intro": "Conte-nos um pouco sobre sua ideia ou entre em contato direto.",
        "form_name": "Nome",
        "form_email": "E-mail",
        "form_phone": "Telefone / WhatsApp",
        "form_message": "Como podemos ajudar?",
        "form_submit": "Enviar Solicitação",
        "modal_or": "Ou fale diretamente",
        "success_title": "Mensagem Enviada!",
        "success_message": "Obrigado pelo contato. Nossa equipe analisará sua solicitação e retornará o mais breve possível.",
        "btn_close": "Fechar",
        "sending": "Enviando...",

        // ==========================================
        // PÁGINA DE SERVIÇOS (PT)
        // ==========================================
        "sv_page_title": "Serviços de Engenharia de Software & Arquitetura de Sistemas | Trinity",
        "sv_page_description": "Engenharia de software corporativa sob medida: sistemas web de alta performance, aplicativos Android offline-first, APIs escaláveis, migração segura de sistemas legados e infraestrutura cloud com observabilidade. Condução técnica direta por especialista sênior.",
        "sv_hero_eyebrow": "Engenharia de Software & Arquitetura de Sistemas",
        "sv_hero_title": "Sistemas corporativos sob medida, aplicativos resilientes e infraestrutura em nuvem.",
        "sv_hero_desc": "Da concepção arquitetural à sustentação em produção. Desenvolvemos soluções técnicas projetadas para suportar operações reais e de alto volume — com código limpo, previsibilidade de entrega e interlocução direta com o desenvolvedor responsável.",
        "sv_hero_cta_primary": "Solicitar Diagnóstico Técnico",
        "sv_hero_cta_secondary": "Ver Casos em Produção",
        "sv_m1_label": "Propriedade Intelectual",
        "sv_m1_value": "100% Código Seu",
        "sv_m1_sub": "Sem travas ou licenças ocultas",
        "sv_m2_label": "Performance Operacional",
        "sv_m2_value": "Sub-segundo (<1.2s)",
        "sv_m2_sub": "Consultas e filtros otimizados",
        "sv_m3_label": "Conectividade Severa",
        "sv_m3_value": "Offline-First Real",
        "sv_m3_sub": "Operação contínua sem sinal",
        "sv_m4_label": "Modernização Segura",
        "sv_m4_value": "Zero Big-Bang",
        "sv_m4_sub": "Transição gradual sem parada",
        "sv_list_eyebrow": "Soluções Especializadas",
        "sv_list_title": "Cinco frentes de engenharia para operações críticas.",
        "sv_list_intro": "Cada serviço é estruturado para eliminar gargalos operacionais específicos com arquitetura sólida e decisões proporcionais ao tamanho do desafio.",
        "sv_box_chal_label": "O Desafio Típico",
        "sv_box_sol_label": "Nossa Engenharia",
        "sv_cta_budget": "Solicitar proposta ↗",
        "sv_tag_perf": "Alta Performance",
        "sv_tag_mobile": "Resiliência Nativa",
        "sv_tag_api": "Escalabilidade & Regras",
        "sv_tag_rescue": "Zero Downtime",
        "sv_tag_cloud": "Segurança & Custo Real",
        "sv_s1_title": "Desenvolvimento de Sistemas Web & Dashboards Corporativos",
        "sv_s1_lead": "Painéis administrativos reativos, visões de despacho e plataformas gerenciais construídas para processar grandes volumes de dados sem travar a interface do usuário.",
        "sv_s1_chal": "Sistemas internos lentos, relatórios gerenciais que congelam o navegador ao carregar períodos maiores, tabelas sem paginação eficiente e designs confusos que sobrecarregam a equipe de operações.",
        "sv_s1_sol": "Interfaces construídas com Vue 3, Vite e Tailwind CSS. Gerenciamento cirúrgico de estado com TanStack Query, carregamento otimizado de listas massivas, filtros dinâmicos no cliente e consultas refinadas que reduzem a latência para menos de 1,2s.",
        "sv_s1_deliv_title": "O que entregamos",
        "sv_s1_d1": "Dashboards analíticos e telas operacionais em tempo real com sub-segundo de resposta.",
        "sv_s1_d2": "Controle granular de acesso por perfil e permissão (RBAC) com sessões seguras.",
        "sv_s1_d3": "Módulos de busca textual e filtros combinados reativos sem recarregar a página.",
        "sv_s1_d4": "Rotinas de exportação massiva assíncrona (planilhas Excel formatadas, CSV e relatórios PDF).",
        "sv_s1_link": "Ver caso real no Dashboard Transporta V2 ↗",
        "sv_s2_title": "Aplicativos Mobile Corporativos Offline-First (Android Nativo)",
        "sv_s2_lead": "Aplicações nativas robustas para motoristas, frotas, armazéns e equipes externas, projetadas para operar com perfeição mesmo em rodovias e galpões sem qualquer cobertura móvel.",
        "sv_s2_chal": "Equipes de campo perdem canhotos, fotos ou apontamentos por instabilidade de 3G/4G; apps híbridos lentos travam o aparelho ou duplicam requisições ao reconectar, gerando retrabalho e faturamento atrasado.",
        "sv_s2_sol": "Desenvolvimento Android Nativo em Kotlin com Jetpack Compose e Room (SQLite local persistente). Implementamos o padrão Outbox com idempotência: os dados são gravados localmente primeiro e sincronizados de forma transparente assim que há conectividade, com assinatura criptográfica no Keystore P-256.",
        "sv_s2_deliv_title": "O que entregamos",
        "sv_s2_d1": "Persistência local integral (Offline-First) com fila transacional e recuperação após reinicialização.",
        "sv_s2_d2": "Autenticação biométrica e chaves de segurança protegidas no Android Keystore de hardware.",
        "sv_s2_d3": "Governança por Immediate In-App Updates via Google Play para blindar toda a frota na mesma versão.",
        "sv_s2_d4": "Captura comprimida e sanitizada de fotos, comprovantes de entrega e geolocalização por GPS.",
        "sv_s2_link": "Conhecer o case de aplicativo corporativo Transporta ↗",
        "sv_s3_title": "APIs de Alta Performance & Automação de Fluxos Fiscais",
        "sv_s3_lead": "Serviços de backend escaláveis, barramentos de integração com ERPs e automação do ciclo contábil para leitura, conciliação e validação de CT-e e NF-e.",
        "sv_s3_chal": "Digitação manual e lenta de notas fiscais; divergências tributárias entre faturamento e transporte; APIs monolíticas vulneráveis a sobrecarga em dias de pico de emissão.",
        "sv_s3_sol": "Construção de APIs modernas em TypeScript com Fastify ou NestJS, camada de cache Redis e bancos de dados modelados (MongoDB / PostgreSQL). Integração assíncrona para ingestão de XMLs fiscais (NS Docs), validando chaves de acesso, status na SEFAZ e cruzamento financeiro instantâneo.",
        "sv_s3_deliv_title": "O que entregamos",
        "sv_s3_d1": "Ingestão automatizada e parsing seguro de XMLs fiscais (CT-e, NF-e, MDF-e) em background.",
        "sv_s3_d2": "Autenticação robusta, RBAC estruturado e barramento de webhooks assíncronos.",
        "sv_s3_d3": "Cache em memória Redis para controle de concorrência e aceleração de consultas frequentes.",
        "sv_s3_d4": "Documentação de contratos OpenAPI (Swagger) padronizada e testes automatizados de integração.",
        "sv_s3_link": "Ver referências de arquitetura backend e segurança ↗",
        "sv_s4_title": "Migração de Sistemas Legados & Modernização Segura (Software Rescue)",
        "sv_s4_lead": "Recuperação, estabilização e refatoração arquitetural de softwares em produção lentos, instáveis ou abandonados, sem risco de interrupção nas vendas ou operações diárias.",
        "sv_s4_chal": "Dependência de sistemas construídos em tecnologias ultrapassadas, centenas de rotas desgovernadas sem documentação, bugs recorrentes em produção e medo justificado de alterar o código e travar a empresa.",
        "sv_s4_sol": "Adotamos o Strangler Fig Pattern com auditoria prévia completa. Criamos a nova arquitetura modular em paralelo, reduzindo superfícies de risco (como comprimir 139 rotas desordenadas em 32 contratos cirúrgicos). A transição ocorre de forma gradual com testes de paridade de dados e rollback planejado.",
        "sv_s4_deliv_title": "O que entregamos",
        "sv_s4_d1": "Auditoria diagnóstica de código, segurança, dependências vulneráveis e esquemas de dados.",
        "sv_s4_d2": "Redução drástica de complexidade acidental e corte de código morto e duplicado.",
        "sv_s4_d3": "Migração e conciliação de dados legados com garantia de integridade e paridade 100%.",
        "sv_s4_d4": "Rollout incremental em produção com suporte a reversão (rollback) a qualquer momento.",
        "sv_s4_link": "Entenda os princípios e a metodologia da Trinity ↗",
        "sv_s5_title": "Infraestrutura Cloud Corporativa, DevOps & Observabilidade",
        "sv_s5_lead": "Ambientes em nuvem com alta disponibilidade, esteiras automatizadas de CI/CD, segurança Zero Trust e monitoramento proativo de telemetria em tempo real.",
        "sv_s5_chal": "Custos abusivos de provedores em nuvem por dimensionamento incorreto; deploys manuais com risco de derrubar o serviço; portas sensíveis expostas diretamente à internet e ausência de logs quando incidentes ocorrem.",
        "sv_s5_sol": "Estruturação de servidores Linux em nuvem corporativa (Oracle Cloud / OCI) com contêineres Docker e orquestração enxuta. Proteção de borda Zero Trust com Cloudflare Tunnels (nenhuma porta de banco ou API exposta publicamente). Observabilidade completa com Prometheus, Grafana e agregação centralizada de logs com Loki/Promtail.",
        "sv_s5_deliv_title": "O que entregamos",
        "sv_s5_d1": "Arquitetura de contêineres Docker isolados e reproduzíveis com Docker Compose.",
        "sv_s5_d2": "Esteiras automatizadas de CI/CD para deploy com zero atrito e verificações de integridade.",
        "sv_s5_d3": "Blindagem de rede com Cloudflare Tunnel, terminação TLS e proteção contra ataques DDoS.",
        "sv_s5_d4": "Dashboards executivos de métricas (Prometheus/Grafana) e busca estruturada de logs (Loki).",
        "sv_s5_link": "Conversar sobre otimização de infraestrutura e custos ↗",
        "sv_diff_eyebrow": "Por que a Trinity",
        "sv_diff_title": "Engenharia séria, sem intermediários e sem surpresas.",
        "sv_diff_intro": "A forma de trabalhar da Trinity foi desenhada para eliminar os vícios tradicionais do mercado de desenvolvimento de software.",
        "sv_d1_title": "Condução Direta por Especialista Sênior",
        "sv_d1_desc": "Você conversa diretamente com quem analisa a arquitetura e escreve o código. Sem gerentes de conta comerciais que prometem o que não pode ser cumprido e sem repasse de demandas para estagiários inexperientes.",
        "sv_d2_title": "Propriedade Total do Código e Repositórios",
        "sv_d2_desc": "Nós construímos software para a sua empresa ser dona da própria tecnologia. Todos os repositórios Git, scripts de implantação e esquemas de dados são entregues com documentação limpa e sem amarras proprietárias.",
        "sv_d3_title": "Decisões Proporcionais ao Seu Problema",
        "sv_d3_desc": "Não empurramos modismos tecnológicos ou arquiteturas desnecessariamente complexas apenas para inflar orçamentos. Cada escolha de ferramenta é baseada em métricas de produtividade, estabilidade e custo de operação.",
        "sv_d4_title": "Foco em Performance e Custo Real de Nuvem",
        "sv_d4_desc": "Software bem escrito não precisa de servidores caríssimos para rodar com fluidez. Projetamos soluções enxutas e de alta densidade que minimizam custos de hospedagem e suportam crescimento contínuo.",
        "sv_met_eyebrow": "Como Trabalhamos",
        "sv_met_title": "Ciclo transparente, da auditoria à produção.",
        "sv_met_intro": "Processo estruturado em etapas claras com validações incrementais contínuas em ambiente de homologação dedicado.",
        "sv_m_step1_title": "Diagnóstico & Arquitetura",
        "sv_m_step1_desc": "Mapeamento dos gargalos operacionais, fluxos de dados, regras de negócio e definição de contratos estritos antes de codificar.",
        "sv_m_step2_title": "Prototipação & Staging",
        "sv_m_step2_desc": "Montagem de protótipos funcionais e disponibilização de ambiente online de testes para homologação com sua equipe.",
        "sv_m_step3_title": "Engenharia & Paridade",
        "sv_m_step3_desc": "Construção incremental com testes de segurança, integridade de banco de dados e refinamento de tempos de resposta.",
        "sv_m_step4_title": "Deploy & Telemetria",
        "sv_m_step4_desc": "Entrada em produção assistida, configuração de esteiras automatizadas de CI/CD e monitoramento ativo 24/7 de estabilidade.",
        "sv_faq_eyebrow": "Tire suas dúvidas",
        "sv_faq_title": "Perguntas frequentes sobre contratação.",
        "sv_faq_intro": "Transparência total desde o primeiro contato.",
        "sv_q1_title": "Quanto tempo leva para iniciar e concluir um projeto?",
        "sv_q1_desc": "Após o alinhamento arquitetural inicial, ciclos focados e MVPs costumam ser entregues entre 4 e 8 semanas. Ecossistemas corporativos completos (com aplicativo nativo, painel web e APIs de alta escala) variam de 3 a 6 meses, sempre com entregas parciais e testáveis em ambiente de homologação a cada sprint.",
        "sv_q2_title": "A Trinity trabalha com emissão de nota fiscal e contrato PJ?",
        "sv_q2_desc": "Sim. A Trinity Mídia Digital e Tecnologia Ltda é uma empresa formalmente constituída (CNPJ 62.720.421/0001-44). Todos os serviços são prestados sob contrato formal com cronograma, cláusulas de confidencialidade (NDA) e emissão de nota fiscal de serviços.",
        "sv_q3_title": "Como funciona a garantia e sustentação pós-entrega?",
        "sv_q3_desc": "Todos os projetos contam com período de garantia assistida em produção para correção de eventuais inconsistências sem custo adicional. Também oferecemos planos contínuos de sustentação técnica, evolução de funcionalidades e monitoramento de infraestrutura.",
        "sv_q4_title": "Como solicitar um diagnóstico técnico ou orçamento?",
        "sv_q4_desc": "Basta entrar em contato pelo formulário ou diretamente no WhatsApp. Agendamos uma conversa técnica para entender seu cenário operacional e apresentar uma proposta com escopo, cronograma e valores bem definidos.",
        "sv_final_eyebrow": "Próximo Passo",
        "sv_final_title": "Pronto para transformar sua operação em um sistema confiável?",
        "sv_final_desc": "Converse diretamente com o engenheiro responsável para receber um diagnóstico do seu cenário técnico.",
        "sv_final_primary": "Falar com o Especialista",
        "sv_final_secondary": "Conhecer Projetos Entregues"

    },
    "en": {
        //Traduções Gerais
        "nav_home": "Home",
        "nav_services": "Services",
        "nav_projects": "Projects",
        "nav_about": "About",
        "nav_contact": "Contact",
        "footer_legal_text": "is a trademark and trade name of",
        "footer_rights": "All rights reserved.",

        // New Home
        "nh_brand_sub": "Digital Media and Technology",
        "nh_page_title": "Trinity Digital Media and Technology | Full Stack Development",
        "nh_page_description": "Trinity Digital Media and Technology. Development of web systems, apps, APIs, integrations, and infrastructure from end to end.",
        "nh_start_project": "Start a project",
        "nh_hero_eyebrow_brand": "Trinity Digital Media and Technology",
        "nh_hero_eyebrow_work": "End-to-End Software Development",
        "nh_hero_title": "End-to-end software development — from architecture to a system in production.",
        "nh_hero_desc": "Trinity develops web systems, apps, APIs, integrations, and infrastructure. The company's business structure is paired with direct contact with the developer responsible for technical execution.",
        "nh_hero_projects": "Explore projects",
        "nh_axis_scope": "Scope",
        "nh_axis_scope_value": "Web, Mobile, APIs and Infrastructure",
        "nh_axis_operation": "Operations",
        "nh_axis_operation_value": "Real systems in production",
        "nh_axis_contact": "Contact",
        "nh_axis_contact_value": "Direct contact with the developer",
        "nh_panel_label": "Working model",
        "nh_panel_title": "Mid-level Full Stack Developer — end-to-end delivery",
        "nh_panel_desc": "Direct technical ownership, from architecture to production delivery.",
        "nh_panel_1": "Architecture and Code",
        "nh_panel_1_sub": "Front-end &amp; Back-end",
        "nh_panel_2": "Applications",
        "nh_panel_2_sub": "Mobile",
        "nh_panel_3": "Interoperability",
        "nh_panel_3_sub": "APIs &amp; Integrations",
        "nh_panel_4": "Operations",
        "nh_panel_4_sub": "Infrastructure &amp; Deployment",
        "nh_services_label": "01 — Areas of work",
        "nh_services_title": "Four technical areas under one direction.",
        "nh_services_intro": "Integrated work across interfaces, business logic, data, and production environments.",
        "nh_service_1": "Full Stack Development",
        "nh_service_1_desc": "Design and development of complete web systems, operational dashboards, management platforms, and custom applications, integrating interfaces, business logic, and data.",
        "nh_service_2": "Mobile Applications",
        "nh_service_2_desc": "Applications connected to core operations, covering user experience, API communication, maintenance, and publishing.",
        "nh_service_3": "APIs and Integrations",
        "nh_service_3_desc": "APIs, webhooks, and communication between systems and external services.",
        "nh_service_4": "Infrastructure and Deployment",
        "nh_service_4_desc": "Servers, containers, production environments, deployment automation, and technical support.",
        "nh_services_cta": "Explore my work",
        "nh_feature_label": "02 — Featured project",
        "nh_feature_status": "In production · Private project",
        "nh_feature_visual_label": "Private corporate system",
        "nh_feature_context": "Context and architecture",
        "nh_feature_heading": "A logistics operation connected end to end.",
        "nh_feature_desc": "An integrated system built to digitize and centralize a logistics operation, covering an Android app, web dashboard, API, and production infrastructure.",
        "nh_feature_fronts": "Areas",
        "nh_feature_timeline": "Timeline",
        "nh_feature_timeline_value": "V1 May 2025 – Jun 2026 · V2 Oct 2026 (Live in production)",
        "nh_feature_sandbox": "Open Interactive Sandbox ↗",
        "nh_feature_cta": "View the full case study",
        "nh_projects_label": "03 — Selected projects",
        "nh_projects_title": "Other work in development and production.",
        "nh_projects_intro": "Three projects with distinct scopes and technical solutions.",
        "nh_tv_status": "In development · Public website",
        "nh_tv_desc": "Progressive modernization of an existing portal, with its public front end rebuilt and ongoing work on the back end, authentication, APIs, and real data.",
        "nh_tv_since": "Under current development since August 2026",
        "nh_book_status": "In production",
        "nh_book_desc": "An easy-to-update website and digital catalog. A spreadsheet powers the catalog so the client can maintain its content without an unnecessary admin panel.",
        "nh_book_timeline": "Received Apr 2026 · Development Jun 2026 · Live Jul 2026",
        "nh_book_link": "Visit public website",
        "nh_convida_status": "In development · Independent project",
        "nh_convida_desc": "An Android app for organizing small events: code-based creation, participants, approvals, and configurable food and drink estimates.",
        "nh_convida_timeline": "Started Dec 2025 · Paused to plan migration in Jun 2026",
        "nh_projects_cta": "View all projects",
        "nh_about_label": "04 — Professional work",
        "nh_about_title": "The Trinity brand and the professional behind the code.",
        "nh_about_desc": "Trinity Digital Media and Technology provides the business structure for contracting and delivering projects. Technical execution is handled directly by the responsible developer.",
        "nh_about_cta": "Explore my background and work",
        "nh_about_skills_label": "Skills across the full lifecycle",
        "nh_skill_1": "Front end and interfaces",
        "nh_skill_2": "Back end and APIs",
        "nh_skill_3": "Mobile applications",
        "nh_skill_4": "Infrastructure and deployment",
        "nh_final_label": "05 — Contact and new projects",
        "nh_final_title": "Need to start a new system or evolve an existing operation?",
        "nh_final_desc": "Speak directly with the person who will analyze and deliver the technical work.",
        "nh_final_primary": "Start a conversation",
        "nh_final_secondary": "View projects",
        "nh_final_panel_label": "Direct technical ownership",
        "nh_footer_desc": "Full Stack development, production systems, apps, APIs, integrations, and infrastructure.",
        "nh_footer_nav": "Navigation",
        "nh_footer_position": "Positioning",
        "nh_footer_note": "Architecture, code, and deployment handled directly",

        // Projects catalog
        "pr_page_title": "Projects | Trinity Digital Media and Technology",
        "pr_page_description": "Real Trinity projects: production systems, apps, tools, and technical references developed in different contexts.",
        "pr_hero_label": "Portfolio / Projects",
        "pr_hero_title": "Projects built for real problems.",
        "pr_hero_desc": "A selection of systems, apps, tools, and technical projects developed in different contexts — from corporate operations in production to independent products and focused solutions.",
        "pr_main_label": "Systems and products",
        "pr_main_title": "Main projects",
        "pr_main_intro": "Four different contexts, each with technical decisions sized to the problem.",
        "pr_transporta_visual": "Private corporate system",
        "pr_transporta_status": "In production · Private project",
        "pr_transporta_desc": "An integrated system built to digitize and centralize a logistics operation, bringing together an Android app, web dashboard, API, and production infrastructure.",
        "pr_fronts": "Areas",
        "pr_timeline": "Timeline",
        "pr_transporta_timeline": "V1 May 2025 – Jun 2026 · V2 Oct 2026 (Live in production)",
        "pr_transporta_sandbox": "Open Interactive Sandbox ↗",
        "pr_view_project": "View case study",
        "pr_tv_status": "In development · Public preview",
        "pr_tv_date": "Under current development since August 2026",
        "pr_tv_desc": "Progressive modernization of a portal originally built on WordPress/PHP toward a custom, data-driven architecture. The public front end has been rebuilt; current work includes the back end, APIs, authentication, authorization, data persistence, and gradual replacement of JSON mocks.",
        "pr_tv_link": "View development preview",
        "pr_book_status": "In production",
        "pr_book_date": "Received Apr 2026 · Development Jun 2026 · Live Jul 2026",
        "pr_book_desc": "A website and digital catalog for a bookstore that needed a simple, easy-to-manage solution. A spreadsheet powers the catalog, so the client can update it without an unnecessary back end or admin panel.",
        "pr_visit_site": "Visit website",
        "pr_convida_status": "In development · Independent project",
        "pr_convida_date": "Started Dec 2025 · Paused to plan migration in Jun 2026",
        "pr_convida_desc": "An Android app for organizing small events by code, managing participants and approvals, and planning configurable food and drink estimates. Migration from Firebase to a custom back end is planned.",
        "pr_convida_link": "View public page",
        "pr_tools_label": "Focused solutions",
        "pr_tools_title": "Tools and smaller projects",
        "pr_tools_intro": "Smaller scopes built for specific needs.",
        "pr_numdorme_status": "Independent project · Android utility · Under review",
        "pr_numdorme_desc": "A utility built in one day to keep an Android screen from turning off without repeatedly changing device settings. The previously working version is under review before testing and possible release.",
        "pr_barcode_status": "Desktop utility · Completed",
        "pr_barcode_date": "August 2026",
        "pr_barcode_desc": "A Windows tool built in one day to generate and print barcodes, arrange labels on A4 sheets, and export a PDF for printing.",
        "pr_website_status": "Being rebuilt · Open Source",
        "pr_website_date": "Legacy version started Sep 2025 · Rebuild started in 2026",
        "pr_website_desc": "A rebuild of Trinity's institutional website with a new visual identity, reorganized content, and a simple static stack. The live site itself is the project demonstration.",
        "pr_view_site": "View site",
        "pr_engineering_label": "Open engineering",
        "pr_engineering_title": "Open Source and technical references",
        "pr_rbac_status": "Technical reference · Open Source",
        "pr_rbac_relation": "Extracted and sanitized from authorization work in the TV Xerém context.",
        "pr_rbac_desc": "A public reference for authentication and authorization covering RBAC, role hierarchy, delegation, MFA, sessions, auditing, and protections against privilege escalation.",
        "pr_rbac_link": "View repository on GitHub",
        "pr_final_label": "New projects",
        "pr_final_title": "Have a problem that needs a software solution?",
        "pr_final_desc": "Every project starts from a different context. Technology comes after the problem and operation are clear.",
        "pr_final_cta": "Discuss a project",

        // About
        "ab_page_title": "About | Trinity Digital Media and Technology",
        "ab_page_description": "Discover the background, principles, and working approach of Trinity Digital Media and Technology.",
        "ab_hero_label": "About / Trinity",
        "ab_hero_title": "Software built with context, responsibility, and direct technical leadership.",
        "ab_hero_desc": "Trinity Digital Media and Technology is the business structure behind the projects. Development and technical direction are handled directly by the person who understands the problem, defines the architecture, and takes the solution into production.",
        "ab_hero_cta": "Explore projects",
        "ab_intro_label": "Who is behind the work",
        "ab_intro_title": "A company built around technical execution.",
        "ab_intro_desc": "Trinity was established to turn software development into an organized professional practice. The relationship with each project remains direct: analysis, technical decisions, development, infrastructure, and evolution are handled end to end.",
        "ab_position_role": "Mid-level Full Stack Developer",
        "ab_position_mode": "End-to-end work",
        "ab_position_fronts": "Areas of work",
        "ab_position_apis": "APIs and integrations",
        "ab_position_infra": "Infrastructure and deployment",
        "ab_journey_label": "Journey",
        "ab_journey_title": "From the starting point to production operations.",
        "ab_origin_label": "Origins",
        "ab_origin_desc": "The idea for Xerém Digital helped spark an interest in turning real problems into digital products and led to the start of software development studies.",
        "ab_transporta_desc": "Transporta became the first major end-to-end project: an Android app, web dashboard, API, database, and infrastructure.",
        "ab_transporta_impact": "It turned study into real responsibility for development and operations.",
        "ab_trinity_desc": "Trinity Digital Media and Technology became the business structure used to contract, organize, and deliver projects.",
        "ab_today_label": "Today",
        "ab_today_desc": "Current work covers web systems, apps, APIs, integrations, infrastructure, and maintenance of applications in production.",
        "ab_principles_label": "Principles",
        "ab_principles_title": "Principles rooted in the beginning.",
        "ab_principles_desc": "Christian faith is part of the personal story behind Trinity and shapes how the work is carried out: responsibility, honesty, respect for people, and commitment to what has been agreed.",
        "ab_principles_complement": "These principles coexist with a technical practice grounded in analysis, validation, continuous learning, and decisions proportionate to the problem.",
        "ab_method_label": "How the work is done",
        "ab_method_title": "Technical decisions with a clear purpose.",
        "ab_method_understand_title": "Understand before building",
        "ab_method_understand_desc": "Technology is chosen after understanding the problem and the operation.",
        "ab_method_complexity_title": "Proportionate complexity",
        "ab_method_complexity_desc": "Not every problem needs a complex backend, a new framework, or large infrastructure.",
        "ab_method_responsibility_title": "End-to-end responsibility",
        "ab_method_responsibility_desc": "Architecture, code, integration, deployment, and maintenance are part of the same process.",
        "ab_method_evolution_title": "Continuous evolution",
        "ab_method_evolution_desc": "Real projects change. The solution must be able to evolve without losing clarity and control.",
        "ab_proof_label": "Projects in practice",
        "ab_proof_title": "Different contexts call for different decisions.",
        "ab_proof_transporta": "An end-to-end corporate system in production.",
        "ab_proof_tv": "Progressive modernization of an existing platform.",
        "ab_proof_book": "A simple solution proportionate to the problem, using HTML, JavaScript, and Google Sheets.",
        "ab_proof_cta": "View projects",
        "ab_final_title": "Have a project, an operation, or a technical problem to solve?",
        "ab_final_desc": "You speak directly with the person who will handle the analysis and technical execution.",
        "ab_final_cta": "Start a conversation",

        // Contact
        "ct_page_title": "Contact | Trinity Digital Media and Technology",
        "ct_page_description": "Contact Trinity Digital Media and Technology directly about projects, systems, and technical problems.",
        "ct_hero_label": "Contact / New projects",
        "ct_hero_title": "Let's talk about what you need to build or solve.",
        "ct_hero_desc": "You speak directly with the person who will handle the technical analysis and lead development.",
        "ct_channels_label": "Contact channels",
        "ct_channels_title": "Choose the channel that works best.",
        "ct_wa_title": "Direct conversation",
        "ct_wa_desc": "For projects, initial questions, or to explore whether an idea makes technical sense.",
        "ct_wa_cta": "Chat on WhatsApp",
        "ct_email_label": "Email",
        "ct_email_title": "Email",
        "ct_email_desc": "For proposals, documents, or messages that need more context.",
        "ct_email_cta": "Send an email",
        "ct_form_trigger": "Prefer to send a message through the form?",
        "ct_conversation_label": "To get started",
        "ct_conversation_title": "You don't need to have everything figured out.",
        "ct_conversation_desc": "A first conversation can start with the problem. Architecture, technologies, and scope come after understanding the context.",
        "ct_topic_problem": "What needs to be solved",
        "ct_topic_process": "How the process works today",
        "ct_topic_users": "Who will use the solution",
        "ct_topic_existing": "What already exists or has been tried",
        "ct_demands_label": "Types of work",
        "ct_demands_title": "Some contexts where we can help.",
        "ct_demand_web": "Web systems",
        "ct_demand_apps": "Apps",
        "ct_demand_apis": "APIs and integrations",
        "ct_demand_automation": "Automation",
        "ct_demand_infra": "Infrastructure and deployment",
        "ct_demand_evolution": "Evolution of existing systems",
        "ct_final_title": "A real problem is a good starting point.",
        "ct_final_desc": "From there, we can assess together what really needs to be built.",
        "ct_final_cta": "View projects",
        "ct_form_title": "Send a message",
        "ct_form_intro": "Briefly describe what you need. You can also start a conversation on WhatsApp or by email.",
        "ct_form_submit": "Send message",
        "ct_form_error": "Your message could not be sent. Please try again or use WhatsApp or email.",
        "ct_success_label": "Message sent",
        "ct_success_title": "Message sent.",
        "ct_success_desc": "A reply will be sent to the address you provided.",

        // Transporta case
        "tr_page_title": "Transporta V2 — Engineering Case Study & Migration | Trinity",
        "tr_page_description": "Transporta case study: offline-first native Android Kotlin app, new Vue 3 dashboard, high-performance TypeScript/Redis API, and zero-downtime production data migration.",
        "tr_nav_label": "Main navigation",
        "tr_language_label": "Language",
        "tr_menu_label": "Open menu",
        "tr_mobile_nav_label": "Mobile navigation",
        "tr_footer_nav_label": "Footer navigation",
        "tr_hero_label": "Enterprise Engineering Case Study / Mission-Critical Logistics",
        "tr_status": "🟢 Production Operation · V1 → V2 Migration Completed",
        "tr_hero_desc": "The evolution of a production logistics ecosystem: from the initial architecture to a surgical API rebuild, modern Vue 3 web dashboard, and offline-first Kotlin Android app with automated tax reconciliation and zero-downtime migration.",
        "tr_stack_label": "Stack V2",
        "tr_timeline_label": "Project Timeline",
        "tr_timeline": "V1 in Production (May 2025 – Jun 2026) · V2 Architecture & Cutover (Oct 2026)",
        "tr_context_label": "The Operational Challenge",
        "tr_context_title": "Connecting truck cabs with no cell service to automated tax reconciliation at headquarters.",
        "tr_context_p1": "On heavy freight routes, drivers traverse remote highways with zero cell coverage. Logging deliveries, incidents, and receipts depended on manual paper slips or multi-day delays until returning to base, stalling billing and tax reconciliations.",
        "tr_context_p2": "The challenge was two-fold: building an Android app that operates 100% offline with durable on-device persistence, and an enterprise backend automating CT-e and NF-e tax reconciliation with end-to-end security.",
        "tr_solution_label": "Solution & Architecture",
        "tr_solution_title": "The V2 Triad: Three autonomous layers, one seamless operation.",
        "tr_solution_desc": "Mobile app, administrative dashboard, and enterprise API engineered for field resilience and executive visibility.",
        "tr_android_title": "Native Android App (Kotlin)",
        "tr_android_desc": "Native app built on Offline-First and Outbox patterns. Drivers log trips, receipts, and incidents without connection; records are signed locally via Android Keystore P-256 and synchronized automatically, featuring Immediate In-App Updates to ensure fleet-wide API compatibility.",
        "tr_web_title": "Administrative Web Dashboard (Vue 3)",
        "tr_web_desc": "Operational command dashboard rebuilt from scratch in Vue 3, Vite, and TypeScript. Fleet dispatch, trip tracking, real-time global notifications, and query latency slashed from 13.8s down to 1.2s.",
        "tr_api_title": "API V2 & Conciliação Fiscal (TypeScript + Redis)",
        "tr_api_desc": "Backend surgically pruned from 139 legacy endpoints down to 32 high-performance contracts. Server-side session security, RBAC, Redis caching, and async NS Docs integration for automatic NF-e and CT-e XML parsing.",
        "tr_infra_title": "Enterprise Infrastructure (Oracle Cloud + Docker)",
        "tr_infra_desc": "Isolated enterprise environment on Oracle Cloud Infrastructure (OCI), Docker containers, independent CI/CD pipelines for API and Dashboard, Cloudflare Tunnel protection, and strict data segregation.",
        "tr_interfaces_label": "Interfaces em Produção",
        "tr_interfaces_title": "From roadside operation to executive control center.",
        "tr_interfaces_desc": "The interfaces below use verified mock data to demonstrate the native app and dashboard without exposing confidential operational data.",
        "tr_app_alt": "Transporta app sign-in screen",
        "tr_app_caption": "Native Android App",
        "tr_zoom_badge": "Zoom",
        "tr_app_caption_detail": "Secure local authentication and field operations.",
        "tr_dashboard_alt": "Transporta administrative dashboard with fictional operational records",
        "tr_dashboard_caption": "Web Dashboard V2",
        "tr_dashboard_caption_detail": "Administrative management of trips, freights, and tax reconciliations.",
        "tr_demo_label": "Demonstration",
        "tr_demo_title": "Mobile Operational Workflow",
        "tr_demo_desc": "Practical demonstration of the native app during logging and verification workflows.",
        "tr_demo_video_label": "Transporta mobile workflow demonstration",
        "tr_arch_label": "Topology & Flow",
        "tr_arch_title": "Decoupled architecture and resilient synchronization.",
        "tr_arch_desc": "Authorization and tax rules reside exclusively on the server. App and dashboard communicate via strict contracts with Redis caching in OCI cloud.",
        "tr_arch_flow_alt": "Android app and web dashboard connected to the API, which accesses MongoDB",
        "tr_arch_field": "Field",
        "tr_arch_app": "Android App (Offline Kotlin)",
        "tr_arch_management": "Management",
        "tr_arch_dashboard": "Web Dashboard (Vue 3 / Vite)",
        "tr_arch_rules": "Security & Business Rules",
        "tr_arch_data": "Persistence & Cloud",
        "tr_arch_foot": "Production Infrastructure: Docker · Oracle Cloud Infrastructure · Cloudflare Tunnel · NS Docs",
        "tr_decisions_label": "Real-World Engineering",
        "tr_decisions_title": "Technical decisions grounded in production.",
        "tr_decisions_intro": "Unlike academic projects, Transporta's evolution was driven by rigorous audits, risk mitigation, and continuous production operation.",
        "tr_offline_title": "Surface Reduction: From 139 to 32 Endpoints",
        "tr_offline_desc": "The legacy V1 accumulated code bloat. Instead of carrying unnecessary complexity, we audited operations and redesigned the API down to 32 surgical contracts, drastically shrinking attack surface and maintenance cost.",
        "tr_separation_title": "True Offline-First & Durable P-256 Grants",
        "tr_separation_desc": "A 401 expired-token response does not wipe driver identity mid-route. Local authentication uses P-256 keys in Android Keystore with a durable Outbox queue, decoupling field work from network availability.",
        "tr_access_title": "Zero-Big-Bang Migration & Data Idempotency",
        "tr_access_desc": "The V1-to-V2 transition operated in planned coexistence. Migration was verified by aborting after 4,000 writes and resuming with UUID mapping, without duplicates or single-record loss.",
        "tr_records_title": "Latency Slashed: From 13.8s to 1.2s",
        "tr_records_desc": "Rebuilding the dashboard in Vue 3 eliminated waterfall requests and database bottlenecks. Trip query and filtering response time plummeted by over 90%, delivering near-instant speeds for logistics operators.",
        "tr_production_label": "Evolution Milestones",
        "tr_production_title": "From initial validation to enterprise consolidation.",
        "tr_production_desc": "Born as an MVP in May 2025, validated in the field, and brought live to production. As volume expanded, Trinity planned and executed the complete V2 re-architecture, completed in October 2026 with zero downtime.",
        "tr_date_start": "May 2025",
        "tr_milestone_start": "V1 Inception (MVP & Field Validation)",
        "tr_date_delivery": "Nov 2025",
        "tr_milestone_delivery": "V1 Delivery & Assisted Operation",
        "tr_date_live": "Oct 2026",
        "tr_milestone_live": "V2 Production Release (Vue 3, API V2, and Final Cutover)",
        "tr_final_label": "Solutions Engineering",
        "tr_final_title": "Enterprise software demands vision beyond code.",
        "tr_final_desc": "Transporta demonstrates our ability to architect, audit, refactor, and sustain mission-critical platforms in production without putting client operations at risk.",
        "tr_final_contact": "Discuss a project",
        "tr_final_projects": "View other projects",
        "tr_sandbox_badge": "Demonstration Environment",
        "tr_sandbox_title": "Experience the V2 Dashboard Live (Isolated Sandbox)",
        "tr_sandbox_desc": "Freely explore the public, isolated Transporta V2 Dashboard with synthetic fleet data. Test trip dispatching, dynamic filters, real-time alerts, and data exports with zero exposure of confidential client records.",
        "tr_sandbox_btn": "Open Interactive Sandbox",
        "tr_sandbox_contact": "Request Guided Demo",

        //Home
        "home_hero_title": "We bring your ideas to life with <br class='hidden md:block'/> <span class='text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-300% animate-gradient'>technology and design.</span>",
        "home_hero_subtitle": "High-performance software development, native apps, and scalable web platforms. We transform complexity into experience.",
        "home_btn_services": "Our Services",
        "home_btn_portfolio": "View Portfolio",
        "hero_button_cta": "Start your Digital Project",
        "home_status_available":"Available for new projects",
        
        "home_serv_title": "What We Do",
        "home_serv_desc": "We transform the way your company works.",
        
        "home_serv1_title": "Websites that Sell",
        "home_serv1_desc": "We create your storefront on the internet. Beautiful, fast, mobile-friendly sites focused on bringing you more customers.",
        
        "home_serv2_title": "Your Own App",
        "home_serv2_desc": "Put your idea in your customer's pocket. We develop apps for Android and iPhone that are easy to use.",
        
        "home_serv3_title": "Task Automation",
        "home_serv3_desc": "Stop wasting time with spreadsheets. We create systems that organize your company and do the boring work for you.",
        "home_serv_call": "Don't know from where start?",
        "home_serv_cta": "Talk to us, no strings attached",

        "home_port_title": "Recent Cases",
        "home_port_desc": "Projects that delivered real results.",
        "home_port_btn": "View all",

        "home_test_title": "Trust built on results.",
        "home_test1_text": "Trinity completely transformed our logistics operation. The app is intuitive and the system runs smoothly. Impeccable support.",
        "home_test1_author": "Operations Director, Logistics Co.",
        "home_test2_text": "The design quality and system stability exceeded our expectations. We highly recommend them.",
        "home_test2_author": "CEO, Tech Startup",

        "home_cta_final_title": "Let's build the future?",
        "home_cta_final_desc": "Your idea deserves excellent execution. Get in touch and let's make this project happen.",
        "home_btn_contact": "Chat on WhatsApp",
        "home_btn_email": "Send Email",

        //Página de Contato
        "contact_hero_title": "Let's Talk?",
        "contact_hero_subtitle": "We are ready to bring your idea to life. Choose the best channel to speak with our team.",
        "contact_card_phone_title": "WhatsApp / Phone",
        "contact_card_email_title": "Corporate E-mail",
        "contact_btn_wa": "Chat on WhatsApp",
        "contact_btn_copy": "Copy Email",
        "contact_btn_form": "Prefer to fill out a form? Click here.",

        //Página de Projetos
        "btn_back": "Back",
        "projects_title": "OUR PROJECTS",
        "project_1_desc": "This project consists of a Web Platform (Dashboard) and an Android Application.",
        "project_2_title": "Project Name 2",
        "project_3_title": "Project Name 3",
        "project_4_title": "Project Name 4",
        "project_5_title": "Project Name 5",
        "project_6_title": "Project Name 6",
        "project_7_title": "Project Name 7",
        "project_8_title": "Project Name 8",
        "project_9_title": "Project Name 9",
        "project_generic_desc": "A brief description of what was done in this project.",
        "search_placeholder": "Search projects...",
        "filter_all": "All",
        "filter_apps": "Apps",
        "filter_platforms": "Web Platforms",
        "filter_sites": "Sites",
        "filter_others": "Others",

        //Página Sobre Nós
        "about_hero_title": "More than code, <br> <span class='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400'>purpose.</span>",
        "about_hero_subtitle": "\"Keep your heart and mind open to know our story.\"",
        
        "about_step1_title": "The Vision",
        "about_step1_desc": "It all started with a vision from God about the 'Xerém Digital' project. It was the call to learn programming and start a new journey, trusting in divine alignment.",
        
        "about_step2_title": "Transporta is Born",
        "about_step2_desc": "An opportunity arose to digitize delivery control for a company. Without prior experience, but with support and direction, I began studying and developing the system.",
        
        "about_step3_title": "Certainty",
        "about_step3_desc": "Amidst people coming and going, I became certain that my capacity came from God. I asked Him to bring those who would add value and remove those who would hinder.",
        
        "about_step4_title": "Trinity Official",
        "about_step4_desc": "After a year of attempts, we made the company official. I made a vow: God is my main partner. This principle guides our ethics and who we work with.",
        
        "about_step5_title": "Today",
        "about_step5_desc": "After exploring various areas, the direction always pointed to Development. Today, I am here, developing projects, realizing dreams, and building the future of Xerém Digital.",

        //Modais Home
        "modal_title": "Start Your Project",
        "modal_intro": "Tell us a bit about your idea or contact us directly.",
        "form_name": "Name",
        "form_email": "E-mail",
        "form_phone": "Phone / WhatsApp",
        "form_message": "How can we help?",
        "form_submit": "Send Request",
        "modal_or": "Or contact directly",
        "success_title": "Message Sent!",
        "success_message": "Thank you for contacting us. Our team will review your request and get back to you as soon as possible.",
        "btn_close": "Close",
        "sending": "Sending...",

        // ==========================================
        // SERVICES PAGE (EN)
        // ==========================================
        "sv_page_title": "Software Engineering & Systems Architecture Services | Trinity",
        "sv_page_description": "Custom enterprise software engineering: high-performance web systems, offline-first Android apps, scalable APIs, safe legacy migration, and cloud infrastructure with observability. Direct technical leadership by senior specialist.",
        "sv_hero_eyebrow": "Software Engineering & Systems Architecture",
        "sv_hero_title": "Custom enterprise systems, resilient apps, and cloud infrastructure.",
        "sv_hero_desc": "From architectural design to production maintenance. We develop technical solutions engineered to support high-volume, mission-critical operations — with clean code, delivery predictability, and direct access to the lead developer.",
        "sv_hero_cta_primary": "Request Technical Diagnostic",
        "sv_hero_cta_secondary": "View Production Case Studies",
        "sv_m1_label": "Intellectual Property",
        "sv_m1_value": "100% Your Code",
        "sv_m1_sub": "No vendor lock-in or hidden fees",
        "sv_m2_label": "Operational Performance",
        "sv_m2_value": "Sub-second (<1.2s)",
        "sv_m2_sub": "Optimized queries and filtering",
        "sv_m3_label": "Severe Connectivity",
        "sv_m3_value": "True Offline-First",
        "sv_m3_sub": "Continuous fieldwork without cell service",
        "sv_m4_label": "Safe Modernization",
        "sv_m4_value": "Zero Big-Bang",
        "sv_m4_sub": "Gradual transition with zero downtime",
        "sv_list_eyebrow": "Specialized Solutions",
        "sv_list_title": "Five engineering practices for mission-critical operations.",
        "sv_list_intro": "Each practice is structured to eliminate specific operational bottlenecks with robust architecture and technical decisions proportional to the challenge.",
        "sv_box_chal_label": "Typical Challenge",
        "sv_box_sol_label": "Our Engineering",
        "sv_cta_budget": "Request proposal ↗",
        "sv_tag_perf": "High Performance",
        "sv_tag_mobile": "Native Resilience",
        "sv_tag_api": "Scalability & Rules",
        "sv_tag_rescue": "Zero Downtime",
        "sv_tag_cloud": "Security & True Cost",
        "sv_s1_title": "Web Systems & Corporate Dashboard Development",
        "sv_s1_lead": "Reactive administrative panels, dispatch views, and management platforms engineered to handle large data volumes without UI freezing.",
        "sv_s1_chal": "Slow internal systems, management reports freezing browser tabs when loading extended periods, unpaginated tables, and cluttered interfaces overloading operational teams.",
        "sv_s1_sol": "Interfaces built with Vue 3, Vite, and Tailwind CSS. Surgical state management via TanStack Query, optimized large dataset rendering, reactive client-side filtering, and refined backend queries cutting latency below 1.2s.",
        "sv_s1_deliv_title": "What we deliver",
        "sv_s1_d1": "Real-time analytical dashboards and operational views with sub-second response times.",
        "sv_s1_d2": "Granular role-based access control (RBAC) with secure server-side sessions.",
        "sv_s1_d3": "Full-text search and combined reactive filters without page reload.",
        "sv_s1_d4": "Asynchronous bulk export routines (formatted Excel spreadsheets, CSV, and PDF reports).",
        "sv_s1_link": "View production case in Transporta Dashboard V2 ↗",
        "sv_s2_title": "Offline-First Enterprise Mobile Applications (Native Android)",
        "sv_s2_lead": "Robust native apps for drivers, logistics fleets, warehouses, and field teams, engineered to work flawlessly even in highways and remote areas without cellular signal.",
        "sv_s2_chal": "Field teams losing delivery receipts, photos, or logs due to 3G/4G drops; sluggish hybrid apps freezing devices or duplicating requests upon reconnection, causing delays in billing.",
        "sv_s2_sol": "Native Android development in Kotlin with Jetpack Compose and Room (persistent local SQLite). We implement the Outbox Pattern with idempotency: actions are committed locally first and synced seamlessly once connectivity returns, secured with hardware Keystore P-256 signatures.",
        "sv_s2_deliv_title": "What we deliver",
        "sv_s2_d1": "Comprehensive local persistence (Offline-First) with transactional queue and restart recovery.",
        "sv_s2_d2": "Biometric authentication and cryptographic security keys protected in hardware Android Keystore.",
        "sv_s2_d3": "Fleet governance via Immediate In-App Updates through Google Play to maintain all devices on uniform versions.",
        "sv_s2_d4": "Compressed, sanitized capture of photos, delivery proofs, and GPS geolocation points.",
        "sv_s2_link": "Explore the Transporta enterprise mobile case study ↗",
        "sv_s3_title": "High-Performance APIs & Fiscal Flow Automation",
        "sv_s3_lead": "Scalable backend services, ERP integration buses, and automated tax workflows for reading, reconciling, and validating electronic shipping manifests and invoices (CT-e / NF-e).",
        "sv_s3_chal": "Exhaustive manual data entry of tax documents; financial discrepancies between billing and transportation; monolithic APIs crashing during peak emission days.",
        "sv_s3_sol": "Modern APIs built in TypeScript with Fastify or NestJS, Redis caching layers, and modeled databases (MongoDB / PostgreSQL). Asynchronous ingestion pipelines for XML tax files (NS Docs), validating SEFAZ status and instantaneous financial reconciliation.",
        "sv_s3_deliv_title": "What we deliver",
        "sv_s3_d1": "Automated ingestion and secure background parsing of fiscal XMLs (CT-e, NF-e, MDF-e).",
        "sv_s3_d2": "Robust authentication, structured RBAC, and asynchronous webhook delivery systems.",
        "sv_s3_d3": "In-memory Redis caching for concurrency management and high-frequency read acceleration.",
        "sv_s3_d4": "Standardized OpenAPI (Swagger) specifications and automated integration tests.",
        "sv_s3_link": "View backend architecture and security references ↗",
        "sv_s4_title": "Legacy System Migration & Safe Modernization (Software Rescue)",
        "sv_s4_lead": "Recovery, stabilization, and architectural refactoring of slow, unstable, or abandoned production systems without stopping client operations or revenue.",
        "sv_s4_chal": "Dependency on legacy technologies, unmaintained codebases with hundreds of undocumented routes, frequent production incidents, and fear of touching the code and breaking the company.",
        "sv_s4_sol": "We apply the Strangler Fig Pattern backed by thorough upfront architectural auditing. We build new modular services in parallel, reducing risk surface (such as condensing 139 sprawling routes into 32 surgical contracts). Transitions happen incrementally with automated data parity tests and rollback support.",
        "sv_s4_deliv_title": "What we deliver",
        "sv_s4_d1": "Diagnostic code audits, vulnerability scans, and database schema reconciliations.",
        "sv_s4_d2": "Drastic reduction of accidental complexity and elimination of dead code.",
        "sv_s4_d3": "Legacy data migration with guaranteed 100% data integrity and parity.",
        "sv_s4_d4": "Incremental production rollouts with instant rollback capability.",
        "sv_s4_link": "Understand Trinity's principles and engineering methodology ↗",
        "sv_s5_title": "Enterprise Cloud Infrastructure, DevOps & Observability",
        "sv_s5_lead": "High-availability cloud environments, automated CI/CD pipelines, Zero Trust edge security, and proactive real-time telemetry monitoring.",
        "sv_s5_chal": "Exorbitant cloud bills caused by oversized instances; manual deployments threatening uptime; sensitive database ports exposed to the internet, and no logs when outages happen.",
        "sv_s5_sol": "Lean Linux server architectures on enterprise cloud (Oracle Cloud / OCI) with Docker containers and Docker Compose. Zero Trust network perimeter using Cloudflare Tunnels (no public ports exposed). Full-stack observability with Prometheus, Grafana, and centralized log aggregation via Loki/Promtail.",
        "sv_s5_deliv_title": "What we deliver",
        "sv_s5_d1": "Reproducible, isolated Docker container architectures with Docker Compose.",
        "sv_s5_d2": "Automated CI/CD deployment pipelines with zero friction and automated health probes.",
        "sv_s5_d3": "Perimeter hardening via Cloudflare Tunnel, TLS termination, and DDoS mitigation.",
        "sv_s5_d4": "Executive telemetry dashboards (Prometheus/Grafana) and structured log analytics (Loki).",
        "sv_s5_link": "Discuss cloud infrastructure and cost optimization ↗",
        "sv_diff_eyebrow": "Why Trinity",
        "sv_diff_title": "Disciplined engineering without middlemen or surprises.",
        "sv_diff_intro": "Trinity's operating model was designed to eliminate traditional software consulting flaws.",
        "sv_d1_title": "Direct Leadership by Senior Specialist",
        "sv_d1_desc": "You communicate directly with the architect writing the code. No account managers overpromising features and no delegating critical work to junior contractors.",
        "sv_d2_title": "Full Intellectual Property Ownership",
        "sv_d2_desc": "We build software so your company truly owns its technology. All Git repositories, deployment scripts, and database models are handed over with clean documentation.",
        "sv_d3_title": "Decisions Proportional to Your Challenge",
        "sv_d3_desc": "We do not push buzzwords or needlessly complex architectures to inflate invoices. Every tool choice is anchored in productivity, stability, and operational cost efficiency.",
        "sv_d4_title": "Focus on Performance and Cloud Costs",
        "sv_d4_desc": "Well-architected software does not need expensive servers to run fast. We design lean, high-density applications that keep hosting bills low while supporting growth.",
        "sv_met_eyebrow": "How We Work",
        "sv_met_title": "Transparent lifecycle, from audit to production.",
        "sv_met_intro": "Structured development with continuous incremental validation in dedicated online staging environments.",
        "sv_m_step1_title": "Diagnostic & Architecture",
        "sv_m_step1_desc": "Mapping operational bottlenecks, data flows, and business rules before writing code.",
        "sv_m_step2_title": "Prototyping & Staging",
        "sv_m_step2_desc": "Building functional prototypes in private online environments for live testing with your team.",
        "sv_m_step3_title": "Engineering & Parity",
        "sv_m_step3_desc": "Incremental development with security auditing, database integrity checks, and latency tuning.",
        "sv_m_step4_title": "Deploy & Telemetry",
        "sv_m_step4_desc": "Assisted production rollout, automated CI/CD pipeline setup, and 24/7 active stability telemetry.",
        "sv_faq_eyebrow": "Got Questions?",
        "sv_faq_title": "Frequently asked questions about hiring.",
        "sv_faq_intro": "Complete clarity from day one.",
        "sv_q1_title": "How long does it take to start and complete a project?",
        "sv_q1_desc": "After initial architectural alignment, focused modules and MVPs typically ship in 4 to 8 weeks. Comprehensive corporate ecosystems (native app, web dashboard, and high-scale APIs) range from 3 to 6 months, always with working partial releases delivered to staging every sprint.",
        "sv_q2_title": "Does Trinity issue corporate invoices and service contracts?",
        "sv_q2_desc": "Yes. Trinity Mídia Digital e Tecnologia Ltda is a registered corporate entity in Brazil (CNPJ 62.720.421/0001-44). All engagements are governed by formal contracts, timelines, NDAs, and monthly tax invoices.",
        "sv_q3_title": "What about post-launch warranty and maintenance?",
        "sv_q3_desc": "All projects include an assisted warranty period in production to fix any potential bugs at zero extra cost. We also provide ongoing maintenance plans, feature evolution, and infrastructure monitoring.",
        "sv_q4_title": "How do I request a technical diagnostic or proposal?",
        "sv_q4_desc": "Simply reach out via our contact form or WhatsApp. We schedule an engineering consultation to understand your operational scenario and provide a clear proposal with defined scope, timeline, and investment.",
        "sv_final_eyebrow": "Next Step",
        "sv_final_title": "Ready to turn your operation into a reliable software system?",
        "sv_final_desc": "Speak directly with the lead engineer to get an architectural assessment of your technical needs.",
        "sv_final_primary": "Talk to the Specialist",
        "sv_final_secondary": "Explore Completed Projects"

    }
};

// 2. Função para atualizar ícones
function updateFlagIcons(lang) {
    const svgBR = `<svg viewBox="0 0 900 630">
    <rect width="900" height="630" fill="#009c3b"/>
    <path d="M450 63l315 252-315 252L135 315z" fill="#ffdf00"/>
    <circle cx="450" cy="315" r="147" fill="#002776"/>
    </svg>`;
    const svgUS = `<svg viewBox="0 0 1235 650">
    <rect width="1235" height="650" fill="#b22234"/>
    <path d="M0,0H1235V50H0M0,100H1235V150H0M0,200H1235V250H0M0,300H1235V350H0M0,400H1235V450H0M0,500H1235V550H0M0,600H1235V650H0" fill="#fff"/>
    <rect width="494" height="350" fill="#3c3b6e"/>
    <g fill="#fff"><path id="s" d="M24.7,5.7l6.1,18.8H11l16,11.6l-6.1,18.8L37,42.7l16.1,11.6l-6.1-18.8l16-11.6H43.2z"/>
    </svg>`;

    const desktopFlag = document.getElementById('current-flag-desktop');
    if (desktopFlag) desktopFlag.innerHTML = (lang === 'pt') ? svgBR : svgUS;

    const btnMobilePT = document.getElementById('btn-mobile-pt');
    const btnMobileEN = document.getElementById('btn-mobile-en');
    
    if(btnMobilePT && btnMobileEN) {
        if (lang === 'pt') {
            btnMobilePT.classList.remove('opacity-50');
            btnMobileEN.classList.add('opacity-50');
        } else {
            btnMobilePT.classList.add('opacity-50');
            btnMobileEN.classList.remove('opacity-50');
        }
    }
}

// 3. Função Global de Troca de Idioma
window.changeLanguage = function(lang) {
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'pt-BR';
    
    // Passo A: Traduz todos os textos
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-alt], [data-i18n-aria-label], [data-i18n-content]').forEach(element => {
        for (const attribute of ['alt', 'aria-label', 'content']) {
            const key = element.getAttribute(`data-i18n-${attribute}`);
            if (key && translations[lang] && translations[lang][key]) {
                element.setAttribute(attribute, translations[lang][key]);
            }
        }
    });
    updateFlagIcons(lang);
    document.body.classList.remove('opacity-0');
}

/* =======================================
 * LÓGICA DE NAVEGAÇÃO DOS CARDS
 * ======================================= */
function setupMobileCards() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // 1. Efeitos Visuais
        card.addEventListener('touchstart', () => card.classList.add('touch-active'), { passive: true });
        card.addEventListener('touchend', () => setTimeout(() => card.classList.remove('touch-active'), 150));
        card.addEventListener('touchcancel', () => card.classList.remove('touch-active'));

        // 2. Bloqueio de Menu
        card.oncontextmenu = (e) => { e.preventDefault(); e.stopPropagation(); return false; };
        card.ondragstart = (e) => { e.preventDefault(); return false; };

        // 3. CLIQUE E NAVEGAÇÃO (ESSENCIAL)
        card.addEventListener('click', (e) => {
            // Pega o link do atributo
            const link = card.getAttribute('data-href');
            // Se tiver link, navega
            if (link) {
                // console.log("Navegando para:", link); // Debug
                window.location.href = link;
            }
        });
    });
}

/* =======================================
 * MODAL DE CONTATO (Home)
 * ======================================= */

// Função para controlar Modais e Formulário
function setupModal() {
    // Elementos do Modal de Projeto
    const btnStart = document.getElementById('btn-start-project');
    const modalProject = document.getElementById('project-modal');
    const btnCloseProject = document.getElementById('btn-close-modal');
    const backdropProject = document.getElementById('modal-backdrop');
    const form = document.getElementById('project-form');

    // Elementos do Modal de Sucesso
    const modalSuccess = document.getElementById('success-modal');
    const btnCloseSuccess = document.getElementById('btn-close-success');

    if (!btnStart || !modalProject) return;

    // --- Funções Auxiliares de Abrir/Fechar ---
    
    function openModal(el) {
        el.classList.remove('hidden');
        setTimeout(() => el.classList.remove('opacity-0'), 10);
    }

    function closeModal(el) {
        el.classList.add('opacity-0');
        setTimeout(() => el.classList.add('hidden'), 300);
    }

    // --- Eventos do Modal de Projeto ---

    btnStart.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modalProject);
    });

    if (btnCloseProject) btnCloseProject.addEventListener('click', () => closeModal(modalProject));
    if (backdropProject) backdropProject.addEventListener('click', () => closeModal(modalProject));

    // --- Eventos do Modal de Sucesso ---

    if (btnCloseSuccess) {
        btnCloseSuccess.addEventListener('click', () => {
            closeModal(modalSuccess);
        });
    }

    // Fechar com ESC (Genérico para ambos)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!modalSuccess.classList.contains('hidden')) closeModal(modalSuccess);
            else if (!modalProject.classList.contains('hidden')) closeModal(modalProject);
        }
    });

// --- Lógica de Envio do Formulário (AJAX) ---

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Impede o redirecionamento padrão

            const submitBtn = form.querySelector('button[type="submit"]');
            const errorNotice = document.getElementById('contact-form-error');
            const originalBtnText = submitBtn.innerHTML;
            if (errorNotice) errorNotice.classList.add('hidden');
            
            // Muda texto para "Enviando..."
            const lang = localStorage.getItem('preferredLanguage') || 'pt';
            submitBtn.innerHTML = translations[lang]['sending'] || "Enviando...";
            submitBtn.disabled = true;

            const formData = new FormData(form);
            const actionUrl = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');

            fetch(actionUrl, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(async response => {
                const result = await response.json();
                if (!response.ok || result.success === false || result.success === 'false') {
                    throw new Error(result.message || 'FormSubmit rejected the message');
                }
                closeModal(modalProject);
                openModal(modalSuccess);
                form.reset();
            })
            .catch(error => {
                console.error("Detalhe do erro:", error);
                if (errorNotice) {
                    errorNotice.classList.remove('hidden');
                } else {
                    const lang = localStorage.getItem('preferredLanguage') || 'pt';
                    alert(translations[lang]['ct_form_error']);
                }
            })
            .finally(() => {
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
}

/* =======================================
 * FUNÇÃO DE COPIAR E-MAIL (COM FALLBACK)
 * ======================================= */
function setupEmailCopy() {
    const btnEmail = document.getElementById('btn-email-copy');
    const toast = document.getElementById('toast-copy');
    const emailAddress = "contato@trinityds.com.br";

    if (!btnEmail) return;

    function showToast() {
        if (!toast) return;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    function fallbackCopyText(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.top = "0";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try { document.execCommand('copy'); showToast(); } 
        catch (err) { console.error('Fallback Error', err); }
        document.body.removeChild(textArea);
    }

    btnEmail.addEventListener('click', (e) => {
        // 1. Verifica se é Desktop
        if (window.innerWidth >= 768) {
            e.preventDefault(); // Impede abrir o mailto no desktop

            // 2. Tenta copiar com método moderno ou fallback
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(emailAddress)
                    .then(() => showToast())
                    .catch(err => {
                        console.warn("Clipboard API falhou, usando fallback...", err);
                        fallbackCopyText(emailAddress);
                    });
            } else {
                fallbackCopyText(emailAddress);
            }
        }
    });
}

/* =======================================
 * CARROSSEL SWIPER (Home)
 * ======================================= */
function setupSwiper() {
    if (document.querySelector(".mySwiper")) {
        var swiper = new Swiper(".mySwiper", {
            effect: "cards",
            grabCursor: true,
            initialSlide: 1,
            cardsEffect: {
                perSlideOffset: 8,
                perSlideRotate: 2,
                rotate: true,
                slideShadows: true,
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });
    }
}

/* =======================================
 * SISTEMA DE FILTROS E PESQUISA
 * ======================================= */
function setupProjectFilters() {
    const searchInput = document.getElementById('project-search');
    const projectCards = document.querySelectorAll('.project-item'); 

    if (projectCards.length === 0) return;

    let activeCategory = 'all';
    let searchTerm = '';

    // 1. Lógica de Filtragem
    function filterCards() {
        projectCards.forEach(card => {
            const categories = (card.getAttribute('data-category') || '').split(' ');
            
            const title = (card.querySelector('.heading') || card.querySelector('.head'))?.textContent.toLowerCase() || '';
            const desc = (card.querySelector('.para') || card.querySelector('.desc'))?.textContent.toLowerCase() || '';
            const contentText = title + " " + desc;

            const matchesCategory = activeCategory === 'all' || categories.includes(activeCategory);
            const matchesSearch = contentText.includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                card.classList.remove('hidden');
                card.style.display = ''; 
                card.classList.add('animate-fade-in');
            } else {
                card.classList.add('hidden');
                card.style.display = 'none';
                card.classList.remove('animate-fade-in');
            }
        });
    }

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            filterCards();
        });
    }

    document.addEventListener('click', (e) => {

        const btn = e.target.closest('.filter-btn');
        
        if (btn) {
            const selectedCategory = btn.getAttribute('data-filter');
            activeCategory = selectedCategory;

            const allButtons = document.querySelectorAll('.filter-btn');
            
            allButtons.forEach(b => {
                if (b.getAttribute('data-filter') === selectedCategory) {
                    b.classList.remove('border-white/10', 'text-gray-400');
                    b.classList.add('bg-cyan-500/20', 'border-cyan-500', 'text-white');
                } else {
                    b.classList.remove('bg-cyan-500/20', 'border-cyan-500', 'text-white');
                    b.classList.add('border-white/10', 'text-gray-400');
                }
            });

            filterCards();
        }
    });
}

/* =======================================
 * CARROSSEL DE FILTROS (Mobile)
 * ======================================= */
function setupFilterSwiper() {
    if (document.querySelector(".filter-swiper")) {
        const swiper = new Swiper(".filter-swiper", {
            slidesPerView: "auto",
            spaceBetween: 0,
            loop: true,
            freeMode: {
                enabled: true,
                sticky: false,
                momentumRatio: 0.5,
            },
            grabCursor: true,
            mousewheel: false,
        });

        // --- EFEITO "NUDGE" (Puxar e Voltar) ---
        setTimeout(() => {
            if (swiper && !swiper.destroyed && window.innerWidth < 768) {
                const currentTranslate = swiper.getTranslate();

                swiper.setTransition(400);
                swiper.setTranslate(currentTranslate - 60);
                setTimeout(() => {
                    swiper.setTransition(600);
                    swiper.setTranslate(currentTranslate);
                }, 500);
            }
        }, 1000);
    }
}

/* =======================================
 * INICIALIZAÇÃO GERAL
 * ATENÇÃO, ESSE EVENT LISTENER DEVE SER SEMPRE O ÚLTIMO DO ARQUIVO JS.
 * NÃO INSERIR NENHUMA FUNÇÃO APÓS ELE PARA EVITAR QUEBRAR O CÓDIGO.
 * ======================================= */
document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile
    const menuToggleButton = document.getElementById('menu-toggle');
    const menuMobile = document.getElementById('menu-mobile');
    if (menuToggleButton && menuMobile) {
        menuToggleButton.addEventListener('click', () => {
            const isOpen = menuMobile.classList.toggle('hidden') === false;
            menuToggleButton.setAttribute('aria-expanded', String(isOpen));
        });
    }
    
    // Idioma
    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    changeLanguage(savedLang);

    // Inicializar Funcionalidades
    setupModal();
    setupEmailCopy();
    setupMobileCards(); 
    setupSwiper();
    setupProjectFilters();
    setupFilterSwiper();
});
