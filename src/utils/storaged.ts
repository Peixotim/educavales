// Storaged.ts

// Esta é a interface de dados que o nosso componente CardPage espera.
// Manter a definição aqui garante que todos os objetos sigam o padrão correto.
export interface CardPageProps {
  title: string;
  description: string;
  category: string;
  benneficies: string[];
  isPopular?: boolean;
  isLaunch?: boolean;
  duration?: string;
  studentCount?: string;
  certifiedByMEC?: boolean;
}

// Função que retorna a lista completa e atualizada com as 28 áreas de especialização.
export default function Storaged(): CardPageProps[] {
  return [
    // --- 1. ARTE, MODA E MÚSICA ---
    {
      title: "Arte, Moda e Música",
      description: "🎨🎵 Expresse seu talento e transforme sua paixão em uma carreira de sucesso. Aprenda a gerir projetos e marcas no universo da economia criativa.",
      category: "Arte Moda e Música",
      benneficies: ["Gestão de Projetos Culturais", "Branding para Marcas Criativas", "Produção de Eventos"],
      isPopular: false,
      isLaunch: true,
      duration: "10 meses",
      studentCount: "750+",
      certifiedByMEC: true,
    },
    // --- 2. CIÊNCIAS AGRÁRIAS E VETERINÁRIA ---
    {
      title: "Ciências Agrárias e Veterinária",
      description: "🐾🌱 Inove no agronegócio e na saúde animal com as melhores práticas de gestão e sustentabilidade. Torne-se um profissional essencial para o mercado.",
      category: "Ciências Agrárias e Veterinária",
      benneficies: ["Gestão do Agronegócio", "Saúde e Bem-Estar Animal", "Sustentabilidade no Campo"],
      isPopular: true,
      isLaunch: false,
      duration: "18 meses",
      studentCount: "1.9k+",
      certifiedByMEC: true,
    },
    // --- 3. CIÊNCIAS CONTÁBEIS ---
    {
      title: "Ciências Contábeis",
      description: "📊💼 Vá além dos números. Torne-se um especialista em contabilidade estratégica, auditoria e planejamento tributário para grandes empresas.",
      category: "Ciências Contábeis",
      benneficies: ["Perícia e Auditoria Contábil", "Planejamento Tributário", "Controladoria e Finanças"],
      isPopular: true,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "2.4k+",
      certifiedByMEC: true,
    },
    // --- 4. CIÊNCIAS RELIGIOSAS ---
    {
      title: "Ciências Religiosas – Conhecimento e Diálogo",
      description: "🕊️ Aprofunde seu conhecimento sobre as tradições religiosas e seu impacto na sociedade. Desenvolva uma visão crítica e ampla sobre o fenômeno religioso.",
      category: "Ciências Religiosas",
      benneficies: ["História das Religiões", "Diálogo Inter-religioso", "Ensino Religioso Escolar"],
      isPopular: false,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "400+",
      certifiedByMEC: true,
    },
    // --- 5. CIÊNCIAS SOCIAIS ---
    {
      title: "Ciências Sociais – Analise e Transforme a Sociedade",
      description: "🌍 Entenda as estruturas sociais, culturais e políticas que moldam o mundo. Atue em pesquisa, planejamento e políticas públicas com uma base sólida.",
      category: "Ciências Sociais",
      benneficies: ["Sociologia Contemporânea", "Antropologia Cultural", "Ciência Política e Estado"],
      isPopular: false,
      isLaunch: false,
      duration: "15 meses",
      studentCount: "650+",
      certifiedByMEC: true,
    },
    // --- 6. COACHING ---
    {
      title: "Coaching – Desenvolva Pessoas e Carreiras",
      description: "🚀 Transforme potencial em resultado. Domine ferramentas de coaching para alavancar carreiras, lideranças e equipes de alta performance.",
      category: "Coaching",
      benneficies: ["Life & Professional Coaching", "Coaching de Liderança", "Inteligência Emocional Aplicada"],
      isPopular: true,
      isLaunch: true,
      duration: "10 meses",
      studentCount: "1.1k+",
      certifiedByMEC: true,
    },
    // --- 7. COMUNICAÇÃO SOCIAL ---
    {
      title: "Comunicação Social – Conecte e Engaje Pessoas",
      description: "📣 Crie marcas poderosas e campanhas de sucesso! Aprenda estratégias de marketing digital, branding e produção de conteúdo para se tornar indispensável.",
      category: "Comunicação Social",
      benneficies: ["Estratégias de Marketing Digital", "Gestão de Marcas (Branding)", "Produção de Conteúdo Relevante"],
      isPopular: true,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "1.8k+",
      certifiedByMEC: true,
    },
    // --- 8. EDUCAÇÃO FÍSICA ---
    {
      title: "Educação Física – Performance, Saúde e Treinamento",
      description: "🏋️‍♂️ Leve seu conhecimento a um novo patamar. Especialize-se em treinamento de alto rendimento, reabilitação física e gestão de academias.",
      category: "Educação Física",
      benneficies: ["Fisiologia do Exercício", "Treinamento Desportivo", "Gestão de Academias e Clubes"],
      isPopular: false,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "980+",
      certifiedByMEC: true,
    },
    // --- 9. EDUCAÇÃO ---
    {
      title: "Educação – Inove em Sala de Aula",
      description: "💡 Revolucione o aprendizado! Domine novas metodologias, tecnologias educacionais e práticas de inclusão para se tornar um educador do futuro.",
      category: "Educação",
      benneficies: ["Psicopedagogia", "Tecnologias Educacionais", "Educação Inclusiva"],
      isPopular: true,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "2.8k+",
      certifiedByMEC: true,
    },
    // --- 10. EMPRESARIAL ---
    {
      title: "Gestão Empresarial – Lidere com Estratégia",
      description: "📈 Prepare-se para assumir cargos de gestão e liderança. Desenvolva uma visão estratégica em finanças, marketing e operações para impulsionar resultados.",
      category: "Empresarial",
      benneficies: ["Gestão de Projetos (PMBOK)", "Liderança e Gestão de Pessoas", "Planejamento Estratégico"],
      isPopular: true,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "2.1k+",
      certifiedByMEC: true,
    },
    // --- 11. ENGENHARIA E ARQUITETURA ---
    {
      title: "Engenharia e Arquitetura – Projete o Futuro",
      description: "🏗️ Especialize-se em áreas de alta demanda como gestão de obras, BIM e projetos sustentáveis. Torne-se um profissional completo e valorizado.",
      category: "Engenharia e Arquitetura",
      benneficies: ["Gerenciamento de Obras", "Projetos em BIM", "Construções Sustentáveis"],
      isPopular: true,
      isLaunch: true,
      duration: "15 meses",
      studentCount: "1.7k+",
      certifiedByMEC: true,
    },
    // --- 12. ESPORTES ---
    {
      title: "Gestão de Esportes – Paixão que Vira Negócio",
      description: "🏆 Transforme sua paixão por esportes em carreira. Aprenda a gerir clubes, eventos e marketing esportivo de forma profissional e estratégica.",
      category: "Esportes",
      benneficies: ["Marketing Esportivo", "Gestão de Clubes e Ligas", "Direito Desportivo"],
      isPopular: false,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "700+",
      certifiedByMEC: true,
    },
    // --- 13. ESTÉTICA ---
    {
      title: "Estética e Cosmetologia – Beleza e Bem-Estar",
      description: "✨ Torne-se um especialista em procedimentos estéticos avançados. Domine as técnicas mais modernas de cuidado facial, corporal e cosmetologia.",
      category: "Estética",
      benneficies: ["Estética Facial e Corporal", "Tricologia e Terapias Capilares", "Cosmetologia Avançada"],
      isPopular: true,
      isLaunch: true,
      duration: "10 meses",
      studentCount: "1.4k+",
      certifiedByMEC: true,
    },
    // --- 14. FARMÁCIA ---
    {
      title: "Farmácia – Cuidado Farmacêutico e Gestão",
      description: "💊 Vá além do balcão. Especialize-se em farmácia clínica, gestão de drogarias ou indústria farmacêutica e amplie suas oportunidades de carreira.",
      category: "Farmácia",
      benneficies: ["Farmácia Clínica e Hospitalar", "Gestão de Redes de Farmácias", "Tecnologia Farmacêutica"],
      isPopular: false,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "850+",
      certifiedByMEC: true,
    },
    // --- 15. FISIOTERAPIA ---
    {
      title: "Fisioterapia – Reabilitação e Performance",
      description: "💪 Aprofunde seus conhecimentos em fisioterapia Traumato-Ortopédica, Esportiva ou Intensiva. Seja um profissional de referência na reabilitação.",
      category: "Fisioterapia",
      benneficies: ["Fisioterapia Traumato-Ortopédica", "Fisioterapia Esportiva", "Fisioterapia Intensiva (UTI)"],
      isPopular: false,
      isLaunch: true,
      duration: "15 meses",
      studentCount: "1.1k+",
      certifiedByMEC: true,
    },
    // --- 16. GASTRONOMIA ---
    {
      title: "Gastronomia – Gestão e Inovação na Cozinha",
      description: "🍳 Domine a arte da culinária e a gestão de negócios gastronômicos. Aprenda sobre gestão de restaurantes, segurança alimentar e novas tendências.",
      category: "Gastronomia",
      benneficies: ["Gestão de Restaurantes e Bares", "Cozinha Internacional", "Segurança Alimentar"],
      isPopular: false,
      isLaunch: false,
      duration: "10 meses",
      studentCount: "600+",
      certifiedByMEC: true,
    },
    // --- 17. GESTÃO, ECONOMIA E FINANÇAS ---
    {
      title: "Gestão, Economia e Finanças – Visão Estratégica",
      description: "💰 Domine o mercado financeiro, a gestão econômica e o planejamento estratégico. Prepare-se para tomar grandes decisões e liderar empresas ao sucesso.",
      category: "Gestão, Economia e Finanças",
      benneficies: ["Mercado de Capitais", "Finanças Corporativas (CFO)", "Planejamento e Gestão Estratégica"],
      isPopular: true,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "2.5k+",
      certifiedByMEC: true,
    },
    // --- 18. JURÍDICO ---
    {
      title: "Área Jurídica – Construa uma Carreira de Destaque",
      description: "⚖️ Especialize-se nas áreas mais rentáveis do Direito! Domine novas legislações, atue com confiança e torne-se uma referência no mercado.",
      category: "Jurídico",
      benneficies: ["Foco em áreas de alta demanda", "Atualização com novas leis", "Networking com especialistas"],
      isPopular: true,
      isLaunch: false,
      duration: "18 meses",
      studentCount: "2.2k+",
      certifiedByMEC: true,
    },
    // --- 19. LOGÍSTICA ---
    {
      title: "Logística e Supply Chain – Eficiência que Gera Lucro",
      description: "🚚 Otimize operações e reduza custos. Torne-se um especialista em cadeia de suprimentos, gestão de frotas e logística 4.0.",
      category: "Logística",
      benneficies: ["Gestão de Supply Chain", "Logística Internacional", "Operações e Distribuição"],
      isPopular: false,
      isLaunch: false,
      duration: "10 meses",
      studentCount: "950+",
      certifiedByMEC: true,
    },
    // --- 20. MARKETING ---
    {
      title: "Marketing Digital e Vendas – Estratégias Vencedoras",
      description: "🚀 Domine as ferramentas que geram resultados. Especialize-se em performance, inbound marketing e gestão de vendas para alavancar qualquer negócio.",
      category: "Marketing",
      benneficies: ["Marketing de Performance (Tráfego)", "Inbound Marketing e Vendas", "Branding e Gestão de Marca"],
      isPopular: true,
      isLaunch: true,
      duration: "12 meses",
      studentCount: "2.3k+",
      certifiedByMEC: true,
    },
    // --- 21. MBA ---
    {
      title: "MBA Executivo – Prepare-se para o Topo",
      description: "🌟 Acelere sua carreira com nosso MBA focado em liderança, finanças e estratégia. Desenvolva as competências exigidas pelos maiores executivos do mercado.",
      category: "MBA",
      benneficies: ["Liderança e Gestão de Pessoas", "Finanças para Executivos", "Estratégia Empresarial"],
      isPopular: true,
      isLaunch: false,
      duration: "18 meses",
      studentCount: "3.5k+",
      certifiedByMEC: true,
    },
    // --- 22. MEIO AMBIENTE ---
    {
      title: "Meio Ambiente – Gestão e Sustentabilidade",
      description: "🌱 Lidere a transformação sustentável. Especialize-se em licenciamento ambiental, ESG e gestão de resíduos para atuar em um mercado em plena expansão.",
      category: "Meio Ambiente",
      benneficies: ["Licenciamento e Perícia Ambiental", "Gestão de Projetos ESG", "Saneamento e Resíduos Sólidos"],
      isPopular: false,
      isLaunch: true,
      duration: "15 meses",
      studentCount: "1.3k+",
      certifiedByMEC: true,
    },
    // --- 23. NUTRIÇÃO ---
    {
      title: "Nutrição – Saúde do Prato à Performance",
      description: "🍎 Aprofunde seu conhecimento em nutrição clínica, esportiva ou funcional. Ajude pessoas a alcançarem seus objetivos de saúde e bem-estar.",
      category: "Nutrição",
      benneficies: ["Nutrição Clínica e Funcional", "Nutrição Esportiva", "Qualidade dos Alimentos"],
      isPopular: false,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "1.6k+",
      certifiedByMEC: true,
    },
    // --- 24. PSICOLOGIA ---
    {
      title: "Psicologia – Novas Abordagens e Práticas Clínicas",
      description: "🧠 Especialize-se em Terapia Cognitivo-Comportamental, Neuropsicologia ou Psicologia Organizacional e amplie seu campo de atuação profissional.",
      category: "Psicologia",
      benneficies: ["Terapia Cognitivo-Comportamental", "Neuropsicologia", "Psicologia Organizacional"],
      isPopular: true,
      isLaunch: false,
      duration: "18 meses",
      studentCount: "1.9k+",
      certifiedByMEC: true,
    },
    // --- 25. SAÚDE E BEM-ESTAR ---
    {
      title: "Saúde e Bem-Estar – Gestão e Cuidado Integrado",
      description: "❤️ Promova a saúde de forma completa. Especialize-se em gestão de saúde pública, práticas integrativas e bem-estar corporativo.",
      category: "Saúde e Bem-Estar",
      benneficies: ["Gestão em Saúde Pública", "Práticas Integrativas (PICS)", "Saúde Mental e Bem-Estar no Trabalho"],
      isPopular: true,
      isLaunch: true,
      duration: "12 meses",
      studentCount: "2.1k+",
      certifiedByMEC: true,
    },
    // --- 26. SEGURANÇA PÚBLICA ---
    {
      title: "Segurança Pública – Estratégia e Gestão",
      description: "🛡️ Atue na linha de frente da segurança. Desenvolva competências em gestão de crises, inteligência policial e políticas de segurança pública.",
      category: "Segurança Pública",
      benneficies: ["Gestão de Crises e Emergências", "Inteligência e Investigação", "Políticas de Segurança"],
      isPopular: false,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "800+",
      certifiedByMEC: true,
    },
    // --- 27. SERVIÇO SOCIAL ---
    {
      title: "Serviço Social – Impacto e Cidadania na Prática",
      description: "🤝 Faça a diferença na sociedade! Capacite-se para atuar em políticas públicas, desenvolver projetos sociais e defender direitos.",
      category: "Serviço Social",
      benneficies: ["Foco em políticas públicas", "Atuação em ONGs e governo", "Desenvolvimento de projetos"],
      isPopular: false,
      isLaunch: false,
      duration: "12 meses",
      studentCount: "900+",
      certifiedByMEC: true,
    },
    // --- 28. T.I ---
    {
      title: "Tecnologia da Informação – Inovação que Move o Futuro",
      description: "💻 Domine as tecnologias mais requisitadas! De cibersegurança a desenvolvimento, prepare-se para os maiores salários em um setor que não para de crescer.",
      category: "T.I",
      benneficies: ["Cibersegurança e Dados", "Desenvolvimento Full Stack", "Gestão de Projetos de TI"],
      isPopular: true,
      isLaunch: true,
      duration: "10 meses",
      studentCount: "4.5k+",
      certifiedByMEC: true,
    },
  ];
}