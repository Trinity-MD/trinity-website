/* =======================================
 * ui.js - Lógica Visual do Site
 * ======================================= */

// 1. Dicionário de Traduções
const translations = {
    "pt": {
        //Traduções Gerais
        "nav_home": "Home",
        "nav_projects": "Projetos",
        "nav_about": "Sobre",
        "nav_contact": "Contato",
        "footer_legal_text": "é uma marca comercial e de apresentação da",
        "footer_rights": "Todos os direitos reservados.",

        // Nova Home
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
        "nh_feature_timeline_value": "Iniciado mai/2025 · Entregue nov/2025 · Produção jun/2026",
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
        "pr_transporta_timeline": "Iniciado mai/2025 · Entregue nov/2025 · Produção jun/2026",
        "pr_view_project": "Ver projeto",
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

        //Página Projeto Transporta
        "transp_tag": "Logística & Mobilidade",
        "transp_hero_title": "Revolução Logística",
        "transp_hero_desc": "Como a Trinity digitalizou a operação de fretes de ponta a ponta, conectando motoristas e gestores em tempo real através de um ecossistema mobile robusto.",
        "btn_demo": "Ver Demo",
        "btn_docs": "Docs Técnicos",
        "btn_playstore": "Google Play",
        "transp_challenge_title": "O Desafio",
        "transp_challenge_desc": "\"O cliente enfrentava processos manuais demorados, dependência de notas fiscais em papel e falta de rastreabilidade em tempo real. A comunicação era fragmentada, gerando atrasos e inconsistências nos dados.\"",
        "transp_solution_title": "A Solução Trinity",
        "transp_solution_desc": "Desenvolvemos um ecossistema completo composto por um <strong class='text-cyan-400'>App Mobile Nativo</strong> para os motoristas e um <strong class='text-purple-400'>Dashboard Administrativo</strong> para a gestão.",
        "transp_feature1_title": "Login Seguro",
        "transp_feature1_desc": "Acesso corporativo restrito com validação de perfil (Driver/Master).",
        "transp_feature2_title": "Leitor de Código de Barras",
        "transp_feature2_desc": "Integração com Google ML Kit para leitura instantânea de NF-e via câmera.",
        "transp_feature3_title": "Offline-First",
        "transp_feature3_desc": "Sincronização robusta de dados, permitindo operação mesmo em áreas sem sinal.",
        "tech_stack_title": "Tecnologias Utilizadas",
        "app_gallery_title": "Por dentro do App",
        "app_gallery_subtitle": "Interface limpa e focada na produtividade.",
        "screen_login": "Acesso Seguro",
        "screen_Home": "Home",
        "screen_scanner": "Formulário de Inclusão",
        "screen_details": "Diário de Bordo",
        "demo_title": "Veja em Ação",
        "demo_desc": "Navegação fluida e intuitiva em tempo real.",
        "demo_note": "* Vídeo acelerado para demonstração",
        "web_title": "O Centro de Comando",
        "web_desc": "Uma plataforma web robusta para gestão completa da operação logística, do cadastro à entrega final.",
        "web_login_title": "Acesso Corporativo",
        "web_login_desc": "Segurança desde o primeiro clique. O sistema conta com autenticação criptografada, recuperação de senha segura e controle de sessão. A interface limpa foca na agilidade de acesso para o operador.",
        "web_overview_title": "Visão Geral da Operação",
        "web_main_dash_title": "Visão Geral da Operação",
        "web_main_dash_desc": "Monitoramento em tempo real de todas as viagens.",
        "web_feat1_title": "Sincronização",
        "web_feat1_desc": "Atualização rápida manual para não perder nenhuma atualização.",
        "web_feat2_title": "Exibição total",
        "web_feat2_desc": "Exibe todas as viagens já salvas.",
        "web_feat3_title": "Filtros",
        "web_feat3_desc": "Filtro personalizado por data de inclusão ou emissão.",
        "web_feat4_title": "Exportação de Dados",
        "web_feat4_desc": "Geração de relatórios em Excel/PDF com um único clique.",
        "web_users_title": "Gestão de Usuários",
        "web_users_desc": "Interfaces dedicadas para o cadastro e gerenciamento de perfis. O sistema diferencia permissões e acessos automaticamente.",
        "web_role_admin": "Administradores",
        "web_role_admin_desc": "Controle total do sistema",
        "web_role_driver": "Motoristas",
        "web_role_driver_desc": "Acesso ao App Mobile",
        "web_routes_title": "Otimização de Rotas",
        "web_routes_desc": "Visualização clara de origens e destinos, permitindo ao gestor cadastrar suas rota para entrega.",
        "web_fleet_title": "Controle de Frota",
        "web_fleet_desc": "Cadastro detalhado de cavalos e carretas, com status de manutenção e vinculação com motoristas.",
        "web_cargo_title": "Produtos e Cargas",
        "web_cargo_desc": "Gerenciamento do tipo de carga transportada, garantindo o controle do que é carregado.",
        "feedback_title": "Ouvindo quem importa",
        "feedback_desc": "O sistema possui um módulo dedicado de Feedback, permitindo que motoristas reportem problemas ou sugiram melhorias diretamente pelo app. Isso garante a evolução constante da plataforma baseada no uso real.",
        "cta_title": "Gostou da Solução?",
        "cta_desc": "Vamos conversar sobre o seu projeto.",

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
    },
    "en": {
        //Traduções Gerais
        "nav_home": "Home",
        "nav_projects": "Projects",
        "nav_about": "About",
        "nav_contact": "Contact",
        "footer_legal_text": "is a trademark and trade name of",
        "footer_rights": "All rights reserved.",

        // New Home
        "nh_brand_sub": "Digital Media and Technology",
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
        "nh_feature_timeline_value": "Started May 2025 · Delivered Nov 2025 · Live since Jun 2026",
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
        "pr_transporta_timeline": "Started May 2025 · Delivered Nov 2025 · Live since Jun 2026",
        "pr_view_project": "View project",
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

        // Página Projeto Transporta
        "btn_demo": "Watch Demo",
        "btn_docs": "Tech Docs",
        "btn_playstore": "Google Play",
        "transp_tag": "Logistics & Mobility",
        "transp_hero_title": "Logistics Revolution",
        "transp_hero_desc": "How Trinity digitized freight operations end-to-end, connecting drivers and managers in real-time through a robust mobile ecosystem.",
        "transp_challenge_title": "The Challenge",
        "transp_challenge_desc": "\"The client faced time-consuming manual processes, reliance on paper invoices, and lack of real-time traceability. Communication was fragmented, causing delays and data inconsistencies.\"",
        "transp_solution_title": "The Trinity Solution",
                "transp_solution_desc": "We developed a complete ecosystem consisting of a <strong class='text-cyan-400'>Native Mobile App</strong> for drivers and an <strong class='text-purple-400'>Administrative Dashboard</strong> for management.",
        "transp_feature1_title": "Secure Login",
        "transp_feature1_desc": "Restricted corporate access with profile validation (Driver/Master).",
        "transp_feature2_title": "Barcode Scanner",
        "transp_feature2_desc": "Integration with Google ML Kit for instant invoice reading via camera.",
        "transp_feature3_title": "Offline-First",
        "transp_feature3_desc": "Robust data synchronization, allowing operation even in areas without signal.",
        "tech_stack_title": "Technology Stack",
        "app_gallery_title": "Inside the App",
        "app_gallery_subtitle": "Clean interface focused on productivity.",
        "screen_login": "Secure Access",
        "screen_home": "Home",
        "screen_scanner": "Entry Form",
        "screen_details": "Logbook",
        "demo_title": "See it in Action",
        "demo_desc": "Fluid and intuitive navigation in real-time.",
        "demo_note": "* Video accelerated for demonstration",
        "web_title": "The Command Center",
        "web_desc": "A robust web platform for complete logistics operation management, from registration to final delivery.",
        "web_login_title": "Corporate Access",
        "web_login_desc": "Security from the first click. The system features encrypted authentication, secure password recovery, and session control. The clean interface focuses on quick access for the operator.",
        "web_overview_title": "Operation Overview",
        "web_main_dash_title": "Operation Overview",
        "web_main_dash_desc": "Real-time monitoring of all trips.",
        "web_feat1_title": "Synchronization",
        "web_feat1_desc": "Quick manual update to never miss an update.",
        "web_feat2_title": "Total View",
        "web_feat2_desc": "Displays all saved trips.",
        "web_feat3_title": "Filters",
        "web_feat3_desc": "Custom filtering by inclusion or issue date.",
        "web_feat4_title": "Data Export",
        "web_feat4_desc": "Report generation in Excel/PDF with a single click.",
        "web_users_title": "User Management",
        "web_users_desc": "Dedicated interfaces for profile registration and management. The system automatically differentiates permissions and access.",
        "web_role_admin": "Administrators",
        "web_role_admin_desc": "Full system control",
        "web_role_driver": "Drivers",
        "web_role_driver_desc": "Mobile App Access",
        "web_routes_title": "Route Optimization",
        "web_routes_desc": "Clear visualization of origins and destinations, allowing managers to register their delivery routes.",
        "web_fleet_title": "Fleet Control",
        "web_fleet_desc": "Detailed registration of trucks and trailers, with maintenance status and driver linking.",
        "web_cargo_title": "Products and Cargo",
        "web_cargo_desc": "Management of transported cargo type, ensuring control of what is loaded.",
        "feedback_title": "Listening to who matters",
        "feedback_desc": "The system features a dedicated Feedback module, allowing drivers to report issues or suggest improvements directly through the app. This ensures constant platform evolution based on real usage.",
        "cta_title": "Liked the Solution?",
        "cta_desc": "Let's talk about your project.",

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
        "sending": "Sending..."
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
            const originalBtnText = submitBtn.innerHTML;
            
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
            .then(response => {
                closeModal(modalProject);
                openModal(modalSuccess);
                form.reset();
            })
            .catch(error => {
                console.error("Detalhe do erro:", error);
                alert("Ocorreu um erro ao enviar. Por favor, tente pelo WhatsApp.");
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
 * CARROSSEL DASHBOARD
 * ======================================= */
function setupDashboardSwiper() {
    const swiperContainer = document.querySelector(".dashboard-swiper");
    if (!swiperContainer) return;

    const progressCircle = swiperContainer.querySelector(".autoplay-progress svg circle");
    const progressContent = swiperContainer.querySelector(".autoplay-progress span");

    const swiper = new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 0,
        centeredSlides: false,
        loop: true,
        grabCursor: true,
        allowTouchMove: true,
        simulateTouch: true,
        freeMode: false,
        longSwipes: false,
        speed: 500,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,  // NÃO desliga autoplay depois de arrastar
        },

        pagination: {
            el: swiperContainer.querySelector(".swiper-pagination"),
            clickable: true,
        },

        on: {
            init(swiper) {
                // força rodar a primeira vez
                if (progressCircle) {
                    progressCircle.style.setProperty("--progress", 1);
                }
                if (progressContent) {
                    progressContent.textContent = `${Math.ceil(swiper.params.autoplay.delay / 1000)}s`;
                }

                if (swiper.autoplay && !swiper.autoplay.running) {
                    swiper.autoplay.start();
                }
            },

            autoplayTimeLeft(swiper, time, progress) {
                if (progressCircle) {
                    progressCircle.style.setProperty("--progress", 1 - progress);
                }
                if (progressContent) {
                    progressContent.textContent = `${Math.ceil(time / 1000)}s`;
                }
            },
        },
    });

                // Pausar/retomar em hover/click/hold (desktop + mobile)
                swiperContainer.addEventListener("mouseenter", () => {
                    if (dashboardSwiper.autoplay) dashboardSwiper.autoplay.stop();
                });

                swiperContainer.addEventListener("mouseleave", () => {
                    if (dashboardSwiper.autoplay) dashboardSwiper.autoplay.start();
                });

                // mobile: finger down = pausa / finger up = continua
                swiperContainer.addEventListener("touchstart", () => {
                    if (dashboardSwiper.autoplay) dashboardSwiper.autoplay.stop();
                });

                swiperContainer.addEventListener("touchend", () => {
                    if (dashboardSwiper.autoplay) dashboardSwiper.autoplay.start();
                });
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
    setupDashboardSwiper();
});
