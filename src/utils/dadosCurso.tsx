export interface AreaInformationsProps {
  title: string;
  img: { src: string; alt: string };
  keyInfo: {
    duration: string;
    modality: string;
    tcc: string;
    mecRecognition: string;
  };
  sections: {
    title: string;
    content: string;
  }[];
  whatYouWillLearn: string[];
  depoiments: { texto: string; autor: string; cargo: string };
}

export default function StoragedAreaInfo(): AreaInformationsProps[] {
  return [
    {
      title: "Arte, Moda e Música",
      img: {
        src: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg",
        alt: "Artista trabalhando em um ateliê com várias telas e tintas",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Capacitar profissionais a transformar paixão e talento em carreiras de sucesso. Nossos cursos na área de Arte, Moda e Música desenvolvem competências em gestão de projetos culturais, produção criativa, branding e novas tecnologias, preparando você para o dinâmico universo da economia criativa.",
        },
        {
          title: "Público Alvo",
          content:
            "Artistas, músicos, designers, produtores, educadores e empreendedores que buscam aprimorar suas habilidades técnicas e desenvolver uma visão estratégica para atuar com excelência em seus respectivos mercados.",
        },
      ],
      whatYouWillLearn: [
        "Gestão de Projetos Culturais",
        "Branding para Marcas Criativas",
        "Produção de Eventos",
      ],
      depoiments: {
        texto:
          "A pós-graduação me deu as ferramentas de gestão que eu precisava para transformar meu ateliê em um negócio rentável. A visão de mercado foi o grande diferencial.",
        autor: "Carla Vianna",
        cargo: "Produtora Cultural e Artista Plástica",
      },
    },

    {
      title: "Ciências Agrárias e Veterinária",
      img: {
        src: "https://images.pexels.com/photos/6235233/pexels-photo-6235233.jpeg",
        alt: "Veterinária cuidando de um cachorro em uma clínica moderna",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Formar especialistas para atuar na vanguarda do agronegócio e da saúde animal. Nossos cursos abordam desde a gestão de produções agrícolas com tecnologia de precisão até as mais avançadas práticas clínicas e cirúrgicas da medicina veterinária.",
        },
        {
          title: "Público Alvo",
          content:
            "Médicos veterinários, engenheiros agrônomos, zootecnistas e administradores que buscam especialização em áreas de alta demanda como clínica de pequenos animais, gestão do agronegócio e produção sustentável.",
        },
      ],
      whatYouWillLearn: [
        "Gestão do Agronegócio",
        "Saúde e Bem-Estar Animal",
        "Sustentabilidade no Campo",
      ],
      depoiments: {
        texto:
          "A especialização em clínica de pequenos animais foi um divisor de águas. Sinto-me muito mais seguro para lidar com casos complexos e a minha clínica cresceu muito.",
        autor: "Dr. Ricardo Mendes",
        cargo: "Médico Veterinário",
      },
    },
    {
      title: "Ciências Contábeis",
      img: {
        src: "https://images.pexels.com/photos/7567433/pexels-photo-7567433.jpeg",
        alt: "Profissional de contabilidade trabalhando com calculadora e planilhas financeiras",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Formar especialistas capazes de gerenciar as finanças, auditar processos e planejar a estrutura tributária de organizações. Nossos cursos preparam o profissional para atuar de forma estratégica, garantindo a saúde financeira e a conformidade legal dos negócios.",
        },
        {
          title: "Público Alvo",
          content:
            "Profissionais com graduação em Contabilidade, Administração, Economia e áreas afins, que buscam posições estratégicas em controladoria, auditoria, perícia ou gestão financeira.",
        },
      ],
      whatYouWillLearn: [
        "Perícia e Auditoria Contábil",
        "Planejamento Tributário",
        "Controladoria e Finanças",
      ],
      depoiments: {
        texto:
          "O MBA em Gestão Tributária me abriu portas que eu não imaginava. Hoje consigo gerar uma economia real para os meus clientes através de um planejamento eficiente.",
        autor: "Ana Paula Souza",
        cargo: "Gerente de Controladoria",
      },
    },
    {
      title: "Ciências Religiosas – Conhecimento e Diálogo",
      img: {
        src: "https://images.pexels.com/photos/1429227/pexels-photo-1429227.jpeg",
        alt: "Biblioteca antiga com livros de teologia e filosofia",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Proporcionar um aprofundamento acadêmico sobre o fenômeno religioso e suas diversas manifestações. Os cursos preparam para a docência, pesquisa, aconselhamento pastoral e gestão de organizações religiosas.",
        },
        {
          title: "Público Alvo",
          content:
            "Teólogos, filósofos, líderes religiosos, educadores e interessados em compreender a complexidade das tradições religiosas e seu impacto na sociedade.",
        },
      ],
      whatYouWillLearn: [
        "História das Religiões",
        "Diálogo Inter-religioso",
        "Ensino Religioso Escolar",
      ],
      depoiments: {
        texto:
          "Este curso ampliou minha visão sobre o diálogo inter-religioso e me capacitou para atuar de forma mais preparada e consciente em minha comunidade.",
        autor: "Pastor Marcos Lins",
        cargo: "Líder Comunitário",
      },
    },
    {
      title: "Ciências Sociais – Analise e Transforme a Sociedade",
      img: {
        src: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg",
        alt: "Grupo diverso de pessoas em uma mesa redonda discutindo projetos sociais",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Capacitar profissionais para analisar criticamente as estruturas, relações sociais e fenômenos culturais que moldam o mundo. Os cursos oferecem ferramentas para pesquisa, planejamento e execução de políticas públicas e projetos sociais.",
        },
        {
          title: "Público Alvo",
          content:
            "Sociólogos, antropólogos, cientistas políticos, historiadores e profissionais de áreas afins que desejam aprofundar sua compreensão sobre a sociedade contemporânea e atuar em pesquisa, consultoria ou no terceiro setor.",
        },
      ],
      whatYouWillLearn: [
        "Sociologia Contemporânea",
        "Antropologia Cultural",
        "Ciência Política e Estado",
      ],
      depoiments: {
        texto:
          "A pós-graduação me deu a base teórica e metodológica para transformar minha paixão por causas sociais em projetos com impacto real. Hoje, trabalho com o que amo.",
        autor: "Dr.ª Helena Marques",
        cargo: "Pesquisadora em Políticas Sociais",
      },
    },
    {
      title: "Coaching – Desenvolva Pessoas e Carreiras",
      img: {
        src: "https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg",
        alt: "Pessoa mentorando outra em um ambiente de escritório moderno",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Formar coaches profissionais capazes de aplicar ferramentas e metodologias para o desenvolvimento de pessoas, equipes e organizações, focando em performance, liderança e alcance de metas.",
        },
        {
          title: "Público Alvo",
          content:
            "Psicólogos, gestores de RH, líderes e profissionais que desejam atuar como coach executivo, de carreira ou de vida, ou aplicar as técnicas em sua liderança.",
        },
      ],
      whatYouWillLearn: [
        "Life & Professional Coaching",
        "Coaching de Liderança",
        "Inteligência Emocional Aplicada",
      ],
      depoiments: {
        texto:
          "O curso me capacitou a ajudar outros profissionais a atingirem seu potencial máximo. É uma carreira gratificante e com um retorno incrível.",
        autor: "Fernando Barros",
        cargo: "Coach Executivo",
      },
    },
    {
      title: "Comunicação Social – Conecte e Engaje Pessoas",
      img: {
        src: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg",
        alt: "Equipe de comunicação trabalhando em uma campanha de marketing digital",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Especializar profissionais nas mais modernas estratégias de comunicação, abrangendo jornalismo digital, marketing, publicidade e gestão de mídias sociais para construir e proteger a reputação de marcas.",
        },
        {
          title: "Público Alvo",
          content:
            "Jornalistas, publicitários, relações públicas e profissionais de marketing que buscam se atualizar nas novas tendências da comunicação digital e corporativa.",
        },
      ],
      whatYouWillLearn: [
        "Estratégias de Marketing Digital",
        "Gestão de Marcas (Branding)",
        "Produção de Conteúdo Relevante",
      ],
      depoiments: {
        texto:
          "A pós em Marketing Digital mudou minha carreira. Aprendi a usar dados para criar campanhas que realmente funcionam e geram resultados para os clientes.",
        autor: "Beatriz Santos",
        cargo: "Gerente de Mídias Sociais",
      },
    },
    {
      title: "Educação Física – Performance, Saúde e Treinamento",
      img: {
        src: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
        alt: "Personal trainer auxiliando um aluno em um exercício de musculação",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Capacitar profissionais de Educação Física para atuar com excelência em áreas como treinamento desportivo, fisiologia do exercício, reabilitação e gestão de academias, promovendo saúde e performance.",
        },
        {
          title: "Público Alvo",
          content:
            "Educadores físicos, fisioterapeutas, personal trainers e gestores de academias que buscam especialização para se destacar no mercado de fitness e bem-estar.",
        },
      ],
      whatYouWillLearn: [
        "Fisiologia do Exercício",
        "Treinamento Desportivo",
        "Gestão de Academias e Clubes",
      ],
      depoiments: {
        texto:
          "Com a especialização em treinamento de alto rendimento, pude levar meus atletas a um novo nível de performance. O conhecimento em fisiologia foi fundamental.",
        autor: "Rodrigo Neves",
        cargo: "Personal Trainer e Preparador Físico",
      },
    },

    // --- 9. Educação ---
    {
      title: "Educação – Inove em Sala de Aula",
      img: {
        src: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
        alt: "Professora em uma sala de aula moderna, interagindo com alunos",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Formar educadores, gestores e especialistas capazes de inovar e liderar a transformação no ambiente educacional. Nossos cursos abrangem desde a psicopedagogia e educação inclusiva até a gestão escolar e tecnologias digitais.",
        },
        {
          title: "Público Alvo",
          content:
            "Pedagogos, professores de todas as áreas, coordenadores pedagógicos, diretores de escola e profissionais que desejam atuar no setor educacional com uma visão moderna e inclusiva.",
        },
      ],
      whatYouWillLearn: [
        "Psicopedagogia",
        "Tecnologias Educacionais",
        "Educação Inclusiva",
      ],
      depoiments: {
        texto:
          "A pós em Gestão Escolar me preparou para assumir a direção da minha escola. Hoje tenho uma visão muito mais clara sobre liderança, finanças e gestão pedagógica.",
        autor: "Mônica Ribeiro",
        cargo: "Diretora Escolar",
      },
    },
    {
      title: "Gestão Empresarial – Lidere com Estratégia",
      img: {
        src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
        alt: "Equipe empresarial celebrando o sucesso de um projeto em uma reunião",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Desenvolver competências em gestão, liderança e estratégia para profissionais que desejam impulsionar negócios e carreiras no ambiente corporativo. Os cursos focam em gestão de projetos, pessoas e processos.",
        },
        {
          title: "Público Alvo",
          content:
            "Administradores, engenheiros, gerentes e empreendedores que buscam desenvolver uma visão de negócio abrangente e assumir posições de liderança.",
        },
      ],
      whatYouWillLearn: [
        "Gestão de Projetos (PMBOK)",
        "Liderança e Gestão de Pessoas",
        "Planejamento Estratégico",
      ],
      depoiments: {
        texto:
          "O curso de Gerenciamento de Projetos foi essencial para eu conseguir organizar os processos na minha empresa e entregar resultados com muito mais eficiência.",
        autor: "Gustavo Lima",
        cargo: "Gerente de Projetos (PMP)",
      },
    },
    {
      title: "Engenharia e Arquitetura – Projete o Futuro",
      img: {
        src: "https://images.pexels.com/photos/3139612/pexels-photo-3139612.jpeg",
        alt: "Arquiteto analisando plantas em um canteiro de obras moderno",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Capacitar profissionais para projetar, gerenciar e executar obras e projetos inovadores, com foco em sustentabilidade, tecnologia BIM e as mais modernas práticas da construção civil.",
        },
        {
          title: "Público Alvo",
          content:
            "Engenheiros, arquitetos, tecnólogos e profissionais da construção civil que desejam se especializar em gestão de obras, projetos estruturais, design de interiores ou urbanismo.",
        },
      ],
      whatYouWillLearn: [
        "Gerenciamento de Obras",
        "Projetos em BIM",
        "Construções Sustentáveis",
      ],
      depoiments: {
        texto:
          "A pós-graduação me deu a visão gerencial que eu precisava para liderar grandes projetos. A abordagem em BIM foi um diferencial enorme no mercado.",
        autor: "Marcos Ferreira",
        cargo: "Engenheiro Coordenador de Projetos",
      },
    },

    {
      title: "Gestão de Esportes – Paixão que Vira Negócio",
      img: {
        src: "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg",
        alt: "Jogador de basquete fazendo uma enterrada espetacular",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Especializar profissionais na ciência e na gestão do esporte, abrangendo desde a fisiologia do exercício e o treinamento de alto rendimento até o marketing e a administração de entidades desportivas.",
        },
        {
          title: "Público Alvo",
          content:
            "Educadores físicos, fisioterapeutas, gestores e ex-atletas que buscam uma carreira na preparação física, na gestão de clubes ou no marketing esportivo.",
        },
      ],
      whatYouWillLearn: [
        "Marketing Esportivo",
        "Gestão de Clubes e Ligas",
        "Direito Desportivo",
      ],
      depoiments: {
        texto:
          "O curso me deu a base científica para otimizar os treinos dos meus atletas, resultando em uma melhora significativa de performance e prevenção de lesões.",
        autor: "Juliano Pinto",
        cargo: "Preparador Físico de Futebol",
      },
    },
    {
      title: "Estética e Cosmetologia – Beleza e Bem-Estar",
      img: {
        src: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg",
        alt: "Profissional de estética realizando um procedimento facial em uma cliente",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Capacitar profissionais para atuar com as mais avançadas técnicas e tecnologias do mercado de estética e cosmetologia, focando em procedimentos faciais, corporais e terapias capilares.",
        },
        {
          title: "Público Alvo",
          content:
            "Esteticistas, biomédicos, farmacêuticos, fisioterapeutas e profissionais da saúde que desejam se especializar no mercado de beleza e bem-estar.",
        },
      ],
      whatYouWillLearn: [
        "Estética Facial e Corporal",
        "Tricologia e Terapias Capilares",
        "Cosmetologia Avançada",
      ],
      depoiments: {
        texto:
          "A especialização em estética avançada me permitiu oferecer os tratamentos mais modernos do mercado. Minha clínica cresceu e minhas clientes estão mais satisfeitas.",
        autor: "Patrícia Nunes",
        cargo: "Biomédica Esteta",
      },
    },

    {
      title: "Farmácia – Cuidado Farmacêutico e Gestão",
      img: {
        src: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg",
        alt: "Farmacêutico em um laboratório, trabalhando com frascos e fórmulas",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Especializar o profissional farmacêutico para atuação em áreas de alta complexidade como farmácia clínica e hospitalar, oncologia, cosmetologia e gestão da indústria farmacêutica.",
        },
        {
          title: "Público Alvo",
          content:
            "Farmacêuticos que buscam se diferenciar no mercado, atuando em hospitais, indústrias, farmácias de manipulação ou na área de regulação e gestão.",
        },
      ],
      whatYouWillLearn: [
        "Farmácia Clínica e Hospitalar",
        "Gestão de Redes de Farmácias",
        "Tecnologia Farmacêutica",
      ],
      depoiments: {
        texto:
          "A pós em Farmácia Clínica e Hospitalar foi fundamental para minha aprovação na residência. Hoje, atuo diretamente no cuidado ao paciente, que é minha paixão.",
        autor: "Cláudio Siqueira",
        cargo: "Farmacêutico Hospitalar",
      },
    },
    {
      title: "Fisioterapia – Reabilitação e Performance",
      img: {
        src: "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg",
        alt: "Fisioterapeuta realizando um exercício de reabilitação com um paciente",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Aprofundar o conhecimento do fisioterapeuta em áreas específicas de reabilitação e tratamento, como traumato-ortopedia, neurologia, respiratória e desportiva, com base nas mais recentes evidências científicas.",
        },
        {
          title: "Público Alvo",
          content:
            "Fisioterapeutas que desejam se tornar especialistas em uma área de atuação, aprimorando suas técnicas de avaliação e tratamento para oferecer o melhor cuidado aos seus pacientes.",
        },
      ],
      whatYouWillLearn: [
        "Fisioterapia Traumato-Ortopédica",
        "Fisioterapia Esportiva",
        "Fisioterapia Intensiva (UTI)",
      ],
      depoiments: {
        texto:
          "A especialização em Fisioterapia Desportiva me abriu as portas para trabalhar em um grande clube. O conhecimento prático e teórico do curso é excelente.",
        autor: "Larissa Matos",
        cargo: "Fisioterapeuta Esportiva",
      },
    },
    {
      title: "Gastronomia – Gestão e Inovação na Cozinha",
      img: {
        src: "https://images.pexels.com/photos/3217157/pexels-photo-3217157.jpeg",
        alt: "Chef de cozinha finalizando um prato gourmet com precisão",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Capacitar chefs, cozinheiros e empreendedores com técnicas avançadas de culinária e ferramentas de gestão de negócios em alimentação, desde a segurança alimentar até a criação de cardápios inovadores.",
        },
        {
          title: "Público Alvo",
          content:
            "Profissionais de gastronomia, nutricionistas e empreendedores do setor de alimentos e bebidas que buscam aprimorar suas habilidades culinárias ou gerenciais.",
        },
      ],
      whatYouWillLearn: [
        "Gestão de Restaurantes e Bares",
        "Cozinha Internacional",
        "Segurança Alimentar",
      ],
      depoiments: {
        texto:
          "O MBA em Gestão de Negócios em Gastronomia foi crucial para eu tirar meu projeto de restaurante do papel. Aprendi sobre finanças, marketing e gestão de equipe.",
        autor: "Thiago Rocha",
        cargo: "Chef e Proprietário de Restaurante",
      },
    },
    {
      title: "Gestão, Economia e Finanças – Visão Estratégica",
      img: {
        src: "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg",
        alt: "Pessoas em uma reunião de negócios analisando gráficos financeiros",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Formar líderes e gestores com sólida competência analítica e estratégica em finanças corporativas, economia e gestão de negócios. Os cursos preparam para posições de alto nível em empresas e no mercado financeiro.",
        },
        {
          title: "Público Alvo",
          content:
            "Administradores, economistas, contadores e profissionais que almejam cargos de C-Level (CEO, CFO) ou desejam atuar como consultores estratégicos.",
        },
      ],
      whatYouWillLearn: [
        "Mercado de Capitais",
        "Finanças Corporativas (CFO)",
        "Planejamento e Gestão Estratégica",
      ],
      depoiments: {
        texto:
          "A pós-graduação em Finanças Corporativas me deu a confiança e o conhecimento técnico para assumir a diretoria financeira da empresa. Recomendo fortemente.",
        autor: "Eduardo Moreira",
        cargo: "Diretor Financeiro (CFO)",
      },
    },
    {
      title: "Área Jurídica – Construa uma Carreira de Destaque",
      img: {
        src: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg",
        alt: "Martelo de juiz e livros de direito sobre uma mesa de madeira",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Aprofundar e especializar o conhecimento de profissionais do Direito nas mais diversas áreas de atuação, como Direito Civil, Penal, Trabalhista, Tributário e as novas fronteiras do Direito Digital, preparando para a advocacia de alta performance, concursos e magistratura.",
        },
        {
          title: "Público Alvo",
          content:
            "Advogados, bacharéis em Direito, juízes, promotores, defensores públicos e servidores que buscam atualização e especialização para se destacarem em suas carreiras.",
        },
      ],
      whatYouWillLearn: [
        "Foco em áreas de alta demanda",
        "Atualização com novas leis",
        "Networking com especialistas",
      ],
      depoiments: {
        texto:
          "A especialização em Direito Digital foi um passo decisivo. A área está crescendo muito e o curso me colocou na vanguarda do mercado.",
        autor: "Vanessa Telles",
        cargo: "Advogada Especialista em LGPD",
      },
    },
    {
      title: "Logística e Supply Chain – Eficiência que Gera Lucro",
      img: {
        src: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
        alt: "Grande centro de distribuição com prateleiras altas e empilhadeiras",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Formar especialistas em gestão da cadeia de suprimentos (Supply Chain), capazes de planejar, executar e controlar o fluxo de produtos e informações de forma eficiente, reduzindo custos e otimizando operações.",
        },
        {
          title: "Público Alvo",
          content:
            "Administradores, engenheiros de produção e profissionais que atuam ou desejam atuar nos setores de logística, suprimentos, transporte e distribuição.",
        },
      ],
      whatYouWillLearn: [
        "Gestão de Supply Chain",
        "Logística Internacional",
        "Operações e Distribuição",
      ],
      depoiments: {
        texto:
          "O MBA em Logística e Supply Chain me deu uma visão completa da operação. Consegui implementar projetos que reduziram nossos custos de frete em 15%.",
        autor: "André Vasconcelos",
        cargo: "Gerente de Logística",
      },
    },
    {
      title: "Marketing Digital e Vendas – Estratégias Vencedoras",
      img: {
        src: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
        alt: "Pessoa analisando gráficos de performance de marketing em um tablet",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Capacitar profissionais para criar e executar estratégias de marketing inovadoras e orientadas a resultados. Os cursos abrangem desde o marketing digital e de performance até a gestão de marcas e o neuromarketing.",
        },
        {
          title: "Público Alvo",
          content:
            "Profissionais de comunicação, publicidade, administração e vendas que buscam dominar as ferramentas digitais e as estratégias de marketing mais eficazes do mercado atual.",
        },
      ],
      whatYouWillLearn: [
        "Marketing de Performance (Tráfego)",
        "Inbound Marketing e Vendas",
        "Branding e Gestão de Marca",
      ],
      depoiments: {
        texto:
          "O curso de Marketing Digital foi extremamente prático. No dia seguinte, eu já estava aplicando as técnicas de SEO e tráfego pago nos meus projetos.",
        autor: "Camila Borges",
        cargo: "Analista de Marketing Digital",
      },
    },

    {
      title: "MBA Executivo – Prepare-se para o Topo",
      img: {
        src: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
        alt: "Equipe de executivos em uma reunião de planejamento estratégico",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Desenvolver líderes e gestores de alto impacto com uma visão completa e estratégica de negócios. Nossos MBAs (Master in Business Administration) focam em liderança, finanças, marketing, projetos e inovação para acelerar sua carreira.",
        },
        {
          title: "Público Alvo",
          content:
            "Profissionais graduados de todas as áreas que já possuem experiência de mercado e buscam assumir posições de liderança, gerência ou diretoria, ou que desejam empreender com uma base sólida.",
        },
      ],
      whatYouWillLearn: [
        "Liderança e Gestão de Pessoas",
        "Finanças para Executivos",
        "Estratégia Empresarial",
      ],
      depoiments: {
        texto:
          "O MBA Executivo foi a melhor decisão que tomei. A troca de experiências com os professores e colegas, aliada ao conteúdo de ponta, me preparou para o meu cargo de diretoria.",
        autor: "Paulo Sampaio",
        cargo: "Diretor de Operações (COO)",
      },
    },
    {
      title: "Meio Ambiente – Gestão e Sustentabilidade",
      img: {
        src: "https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg",
        alt: "Mãos segurando uma pequena planta com terra, simbolizando sustentabilidade",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Formar especialistas em gestão ambiental e desenvolvimento sustentável, capacitando-os para atuar em licenciamento, perícia, projetos ESG e recuperação de áreas degradadas, um mercado em plena expansão.",
        },
        {
          title: "Público Alvo",
          content:
            "Biólogos, engenheiros, geógrafos, administradores e profissionais interessados na intersecção entre desenvolvimento econômico e conservação ambiental.",
        },
      ],
      whatYouWillLearn: [
        "Licenciamento e Perícia Ambiental",
        "Gestão de Projetos ESG",
        "Saneamento e Resíduos Sólidos",
      ],
      depoiments: {
        texto:
          "A pós-graduação em Gestão Ambiental me permitiu atuar como consultor em grandes projetos. O conhecimento em ESG é um grande diferencial competitivo hoje em dia.",
        autor: "Mariana Lopes",
        cargo: "Consultora Ambiental",
      },
    },
    {
      title: "Nutrição – Saúde do Prato à Performance",
      img: {
        src: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
        alt: "Prato colorido com salada, frutas e grãos, representando uma alimentação saudável",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Especializar nutricionistas e profissionais da saúde nas áreas de nutrição clínica, esportiva e funcional. Os cursos aprofundam o conhecimento sobre o papel dos nutrientes na saúde, performance e tratamento de doenças.",
        },
        {
          title: "Público Alvo",
          content:
            "Nutricionistas, médicos, educadores físicos e profissionais da saúde que desejam aprimorar sua prática com base nas mais recentes evidências científicas em nutrição.",
        },
      ],
      whatYouWillLearn: [
        "Nutrição Clínica e Funcional",
        "Nutrição Esportiva",
        "Qualidade dos Alimentos",
      ],
      depoiments: {
        texto:
          "Com a pós em Nutrição Esportiva, consigo oferecer um acompanhamento muito mais completo e preciso para os meus pacientes atletas. Os resultados são visíveis.",
        autor: "Daniela Alves",
        cargo: "Nutricionista Esportiva",
      },
    },

    {
      title: "Psicologia – Novas Abordagens e Práticas Clínicas",
      img: {
        src: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
        alt: "Psicóloga em uma sessão de terapia, ouvindo atentamente um paciente",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Aprofundar o conhecimento de psicólogos e profissionais da saúde mental em abordagens teóricas e práticas específicas, como Terapia Cognitivo-Comportamental, Neuropsicologia, Psicanálise e Psicologia Organizacional.",
        },
        {
          title: "Público Alvo",
          content:
            "Psicólogos, psiquiatras, pedagogos e profissionais de RH que buscam uma especialização para aprimorar sua atuação clínica, institucional ou organizacional.",
        },
      ],
      whatYouWillLearn: [
        "Terapia Cognitivo-Comportamental",
        "Neuropsicologia",
        "Psicologia Organizacional",
      ],
      depoiments: {
        texto:
          "A especialização em Terapia Cognitivo-Comportamental transformou minha prática clínica. As técnicas são eficazes e baseadas em evidências, o que me dá muito mais segurança.",
        autor: "Dr. Roberto Costa",
        cargo: "Psicólogo Clínico",
      },
    },

    {
      title: "Saúde e Bem-Estar – Gestão e Cuidado Integrado",
      img: {
        src: "https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg",
        alt: "Equipe de enfermagem sorrindo e colaborando em um ambiente hospitalar",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Capacitar profissionais para uma atuação de excelência na vasta área da saúde, com cursos que abrangem desde a gestão hospitalar e saúde pública até especializações de ponta em enfermagem, farmácia e terapias integrativas.",
        },
        {
          title: "Público Alvo",
          content:
            "Enfermeiros, administradores hospitalares, farmacêuticos e todos os profissionais da saúde que buscam especialização para assumir cargos de gestão ou aprimorar sua prática de cuidado.",
        },
      ],
      whatYouWillLearn: [
        "Gestão em Saúde Pública",
        "Práticas Integrativas (PICS)",
        "Saúde Mental e Bem-Estar no Trabalho",
      ],
      depoiments: {
        texto:
          "O MBA em Gestão Hospitalar foi a chave para minha promoção. A visão sobre finanças, qualidade e gestão de pessoas que o curso oferece é indispensável para quem quer liderar na saúde.",
        autor: "Sandra Moraes",
        cargo: "Diretora Administrativa de Hospital",
      },
    },

    {
      title: "Segurança Pública – Estratégia e Gestão",
      img: {
        src: "https://images.pexels.com/photos/8541249/pexels-photo-8541249.jpeg",
        alt: "Agente de segurança pública analisando um mapa estratégico",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Formar especialistas em gestão, inteligência e políticas de segurança pública, preparando-os para os desafios contemporâneos da criminalidade e da prevenção da violência, com foco em uma atuação estratégica e cidadã.",
        },
        {
          title: "Público Alvo",
          content:
            "Profissionais das polícias (Civil, Militar, Federal), guardas municipais, agentes penitenciários, advogados e gestores públicos que atuam ou desejam atuar na área de segurança.",
        },
      ],
      whatYouWillLearn: [
        "Gestão de Crises e Emergências",
        "Inteligência e Investigação",
        "Políticas de Segurança",
      ],
      depoiments: {
        texto:
          "A pós-graduação em Inteligência Policial me forneceu métodos de análise e investigação que eu aplico diariamente no meu trabalho, com resultados muito mais eficientes.",
        autor: "Sérgio Ramos",
        cargo: "Investigador de Polícia",
      },
    },

    {
      title: "Serviço Social – Impacto e Cidadania na Prática",
      img: {
        src: "https://images.pexels.com/photos/6994992/pexels-photo-6994992.jpeg",
        alt: "Assistente social conversando com uma família em uma visita comunitária",
      },
      keyInfo: {
        duration: "A partir de 6 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Capacitar assistentes sociais e profissionais de áreas correlatas para a elaboração e gestão de políticas e projetos sociais, com foco na defesa de direitos, na cidadania e na transformação social.",
        },
        {
          title: "Público Alvo",
          content:
            "Assistentes sociais, psicólogos, pedagogos e gestores que atuam em ONGs, CRAS/CREAS, hospitais, escolas e no sistema sociojurídico.",
        },
      ],
      whatYouWillLearn: [
        "Foco em políticas públicas",
        "Atuação em ONGs e governo",
        "Desenvolvimento de projetos",
      ],
      depoiments: {
        texto:
          "O curso de Gestão do SUAS foi essencial para aprimorar minha prática no CRAS. Consigo gerenciar os serviços com muito mais técnica e conhecimento.",
        autor: "Eliane Batista",
        cargo: "Coordenadora do CRAS",
      },
    },

    {
      title: "Tecnologia da Informação – Inovação que Move o Futuro",
      img: {
        src: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg",
        alt: "Desenvolvedor de software programando com código na tela do computador",
      },
      keyInfo: {
        duration: "A partir de 4 meses",
        modality: "100% Online",
        tcc: "Opcional",
        mecRecognition: "Reconhecido pelo MEC",
      },
      sections: [
        {
          title: "Objetivos da Área",
          content:
            "Formar especialistas nas áreas de maior demanda da tecnologia, como desenvolvimento de software, cibersegurança, ciência de dados e gestão de infraestrutura de TI, preparando-os para os desafios da transformação digital.",
        },
        {
          title: "Público Alvo",
          content:
            "Desenvolvedores, analistas de sistemas, profissionais de redes e segurança, e gestores que buscam se especializar nas tecnologias que estão moldando o futuro dos negócios.",
        },
      ],
      whatYouWillLearn: [
        "Cibersegurança e Dados",
        "Desenvolvimento Full Stack",
        "Gestão de Projetos de TI",
      ],
      depoiments: {
        texto:
          "A especialização em Cibersegurança me colocou em uma das áreas mais bem pagas do mercado. O conteúdo é atual e focado no que as empresas realmente precisam.",
        autor: "Fernanda Guimarães",
        cargo: "Especialista em Cibersegurança",
      },
    },
  ];
}
