export const personalInfo = {
  name: "Guilherme dos Santos Benedito",
  role: "Engenharia de Dados & Desenvolvimento Backend",
  currentEducation: "Cursando Desenvolvimento de Software Multiplataforma (DSM) – FATEC São José dos Campos",
  period: "2024 – Presente",
  location: "São José dos Campos - SP, Brasil",
  avatar: "./img/foto_guilherme.jpg",
  summary: "Desenvolvedor de software com foco em Engenharia de Dados e Backend. Experiência na concepção da arquitetura de servidores backend, modelagem de bancos de dados relacionais e NoSQL, captação e processamento de telemetria com IoT e análise de dados. Coautor de publicação científica internacional sobre modelagem de dados e monitoramento de queimadas por sensores orbitais.",
  academicObjective: "Consolidar a formação tecnológica em DSM na FATEC SJC, aprofundando o desenvolvimento de arquiteturas de dados e engenharia de backend escalável.",
  professionalObjective: "Atuar como Engenheiro de Dados / Desenvolvedor Backend, construindo pipelines analíticos eficientes, modelagem de bancos de dados e APIs resilientes.",
  interests: [
    "Engenharia de Dados",
    "Desenvolvimento Backend",
    "Bancos de Dados Relacionais e NoSQL",
    "Pipelines e Processamento de Dados",
    "Cloud Computing (GCP)",
    "Metodologias Ágeis (Scrum)"
  ],
  social: {
    github: "https://github.com/gui-benedito",
    linkedin: "https://www.linkedin.com/in/guilherme-benedito/",
    instagram: "https://www.instagram.com/guisantos.b/",
    email: "guilherme.benedito@aluno.cps.sp.gov.br"
  }
};

// Tecnologias gerais do desenvolvedor (conforme Roteiro do Portfólio)
export const technicalSkills = [
  {
    category: "Linguagens de Programação",
    skills: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "Shell Script (Bash)", "HTML5", "CSS3"]
  },
  {
    category: "Backend & Frameworks",
    skills: ["Node.js", "Express", "Flask", "Spring Boot", "Sequelize ORM"]
  },
  {
    category: "Bancos de Dados",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"]
  },
  {
    category: "Cloud, DevOps & Metodologias",
    skills: ["Google Cloud Platform (GCP)", "Docker", "Git", "GitHub", "Scrum"]
  }
];

// Projetos Acadêmicos (1º ao 3º Semestre)
export const academicProjects = [
  {
    id: "api-1",
    semester: "1º Semestre",
    title: "Smart Farm",
    role: "Dev Team",
    partner: "Interno",
    repoUrl: "https://github.com/SkyFlyTeam/SmartFarm",
    image: "./img/apiI.svg",
    problem: "Necessidade de monitorar e analisar continuamente as variáveis ambientais de uma estufa indoor (como temperatura, umidade do solo e luminosidade) através de sensores para apoiar o manejo eficiente das culturas agrícolas.",
    solution: "Aplicação web para acompanhamento em tempo real dos valores captados pelos sensores de uma estufa indoor, fornecendo visualização gráfica interativa das leituras de telemetria.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript", "SQLite", "Arduino / IoT"],
    personalContributions: "Responsável por estruturar a captação dos dados através de Arduino e estruturar o backend em Python/Flask: implementação da comunicação com os microcontroladores, recepção dos sinais analógicos e digitais, pré-processamento das leituras brutas e criação dos endpoints REST para disponibilização dos dados aos gráficos.",
    hardSkills: [
      { skill: "Estruturação de Backend com Python & Flask", level: "Autônomo" },
      { skill: "Captação de Dados e Integração com Arduino", level: "Autônomo" },
      { skill: "Tratamento de Dados de Sensores para Plotagem", level: "Autônomo" },
      { skill: "Controle de Versão com Git & GitHub", level: "Básico" }
    ],
    softSkills: [
      { skill: "Trabalho em Equipe", context: "Colaboração direta entre os membros responsáveis pelos circuitos eletrônicos e a equipe de desenvolvimento de software." },
      { skill: "Resolução de Problemas Técnicos", context: "Identificação e saneamento de ruídos nas medições analógicas enviadas pelo microcontrolador." }
    ]
  },
  {
    id: "api-2",
    semester: "2º Semestre",
    title: "CloudStock",
    role: "Dev Team",
    partner: "Interno",
    repoUrl: "https://github.com/SkyFlyTeam/cloudStock",
    image: "./img/apiII.png",
    problem: "Necessidade de organizar, controlar e registrar as movimentações de mercadorias e os níveis de estoque de armazéns de forma centralizada, ágil e livre de inconsistências manuais.",
    solution: "Aplicação web completa para gerenciamento e controle de estoque, permitindo o acompanhamento de inventário, cadastro de itens, fornecedores e rastreio de entradas e saídas.",
    technologies: ["TypeScript", "Node.js", "Express", "Sequelize ORM", "MySQL", "HTML", "CSS"],
    personalContributions: "Responsável por estruturar a arquitetura do backend: definição do padrão em camadas, configuração do servidor em Node.js com TypeScript, modelagem das tabelas e relacionamentos no banco MySQL utilizando o Sequelize ORM, além da implementação das regras de negócio e validações para movimentações de estoque.",
    hardSkills: [
      { skill: "Arquitetura de Backend com Node.js & TypeScript", level: "Autônomo" },
      { skill: "Modelagem Relacional com Sequelize ORM", level: "Autônomo" },
      { skill: "Banco de Dados MySQL & Transações", level: "Autônomo" },
      { skill: "Estruturação de APIs RESTful", level: "Autônomo" }
    ],
    softSkills: [
      { skill: "Organização e Padronização", context: "Estruturação clara de pastas, middlewares e tipagens para facilitar a manutenção coletiva do código." },
      { skill: "Comunicação", context: "Alinhamento com o time sobre os contratos de rotas para integração com o frontend." }
    ]
  },
  {
    id: "api-3",
    semester: "3º Semestre",
    title: "Bee On Time",
    role: "Dev Team",
    partner: "Necto Systems",
    repoUrl: "https://github.com/SkyFlyTeam/BeeOnTime-documentation",
    image: "./img/bot.png",
    problem: "Necessidade de registrar, monitorar e auditar os horários de entrada e saída dos colaboradores de uma empresa com segurança, integridade dos registros e interface responsiva para diferentes dispositivos.",
    solution: "Aplicação web moderna e responsiva para o controle de ponto eletrônico corporativo, fornecendo controle de jornada, relatórios e auditoria.",
    technologies: ["Java", "Spring Boot", "React", "Sequelize", "MongoDB", "NoSQL"],
    personalContributions: "Responsável pela arquitetura do backend e pela estruturação do banco de dados não estruturado NoSQL (MongoDB): modelagem dos documentos e coleções para armazenamento das batidas de ponto e logs de auditoria, além do desenvolvimento de serviços de backend em Java integrados à aplicação.",
    hardSkills: [
      { skill: "Arquitetura de Backend com Java", level: "Autônomo" },
      { skill: "Estruturação de Bancos Não Estruturados (NoSQL MongoDB)", level: "Autônomo" },
      { skill: "Modelagem de Documentos e Consultas NoSQL", level: "Autônomo" },
      { skill: "Integração de Serviços com React", level: "Autônomo" }
    ],
    softSkills: [
      { skill: "Adaptabilidade Tecnológica", context: "Aprendizado e aplicação prática de banco de dados NoSQL e ecossistema Java para atender aos requisitos da Necto." },
      { skill: "Trabalho em Equipe Ágil", context: "Acompanhamento do cronograma e entregas das sprints no framework Scrum." }
    ]
  }
];

// Produção Científica publicada
export const professionalProjects = [
  {
    id: "paper-descreve",
    type: "Publicação Científica Internacional",
    title: "Modeling Multi-Sensor Daily Fire Events in Brazil: The DescrEVE Relational Framework for Wildfire Monitoring",
    publisher: "MDPI Remote Sensing (Vol. 18, Issue 4, Art. 606)",
    year: "2026",
    link: "https://www.mdpi.com/2072-4292/18/4/606",
    doi: "10.3390/rs18040606",
    summary: "Artigo científico publicado em periódico internacional sobre o framework relacional DescrEVE para modelagem, agregação e monitoramento de queimadas no Brasil a partir de múltiplos sensores orbitais.",
    problem: "A integração de dados de múltiplos sensores orbitais apresenta desafios de compatibilidade e agregação espaço-temporal para o monitoramento contínuo de focos de queimadas.",
    solution: "Desenvolvimento de um framework relacional para correlacionar e organizar eventos diários de fogo em escala nacional.",
    technologies: ["Modelagem Relacional", "Python", "SQL", "Análise de Dados"],
    contributions: "Participação na modelagem relacional dos dados, apoio no tratamento das séries e elaboração do trabalho científico.",
    hardSkills: [
      { skill: "Modelagem Relacional de Dados", level: "Fluente" },
      { skill: "Processamento de Dados com Python & SQL", level: "Fluente" },
      { skill: "Escrita Técnica e Científica", level: "Fluente" }
    ],
    softSkills: [
      { skill: "Pensamento Analítico", context: "Análise de grandes volumes de dados e estruturação dos esquemas relacionais." }
    ]
  }
];

// Formação Acadêmica real
export const education = [
  {
    degree: "Tecnólogo em Desenvolvimento de Software Multiplataforma (DSM)",
    institution: "Faculdade de Tecnologia de São José dos Campos (FATEC SJC)",
    period: "2024 – Presente",
    description: "Curso Superior de Tecnologia focado em desenvolvimento de software multiplataforma, metodologias ágeis e engenharia de software."
  },
  {
    degree: "Técnico em Mecânica",
    institution: "ETEP",
    period: "2013 – 2014",
    description: "Curso técnico em mecânica e processos industriais."
  },
  {
    degree: "Ensino Médio",
    institution: "E. E. Major Aviador José Mariotto Ferreira",
    period: "2011 – 2013",
    description: "Ensino médio regular."
  }
];
