export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  category: "featured" | "web" | "academic";
  liveUrl: string | null;
  githubUrl: string;
  image: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  // ── Projetos Reais (Colaboração — CreativeImob) ──────────────────────
  {
    id: "jrhx",
    title: "JRHX Imobiliária",
    description:
      "Site institucional para a JRHX Imobiliária, especializada em gestão de patrimônio, consultoria e locação de imóveis desde 1992.",
    longDescription:
      "Desenvolvimento do site institucional da JRHX Imobiliária, empresa fundada em 1992 que atua com gestão de patrimônio, consultoria, compra, venda e locação de imóveis. Interface profissional com foco em conversão de leads e apresentação de portfólio de imóveis.",
    techStack: ["HTML", "CSS", "JavaScript", "Landing Page"],
    category: "featured",
    liveUrl: "https://jrhx.com.br",
    githubUrl: "https://github.com/creativeimob-tech/jrhx",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80",
    featured: true,
  },
  {
    id: "maria-martinatti",
    title: "Maria Martinatti Imóveis",
    description:
      "Site para imobiliária de alto padrão especializada na região dos Jardins, São Paulo.",
    longDescription:
      "Desenvolvimento do site da Maria Martinatti, imobiliária premium focada em imóveis de alto padrão na região dos Jardins e arredores em São Paulo. Design sofisticado e elegante que reflete o posicionamento da marca no mercado de luxo.",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "featured",
    liveUrl: "https://mariamartinatti.com.br",
    githubUrl: "https://github.com/creativeimob-tech/maria-martinatti",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    featured: true,
  },
  {
    id: "nitro",
    title: "Nitro",
    description:
      "Landing page de alta conversão para o segmento imobiliário, focada em captação de leads e performance.",
    longDescription:
      "Landing page desenvolvida para o projeto Nitro da CreativeImob, voltada para o setor imobiliário com foco em captação de leads, performance e conversão. Design moderno otimizado para campanhas de tráfego pago (Google Ads e Meta Ads).",
    techStack: ["HTML", "CSS", "JavaScript", "SEO", "Google Ads"],
    category: "featured",
    liveUrl: null,
    githubUrl: "https://github.com/creativeimob-tech/nitro",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    featured: true,
  },
  {
    id: "wtp",
    title: "WTP Incorporadora",
    description:
      "Site institucional para incorporadora de empreendimentos de médio e alto padrão.",
    longDescription:
      "Desenvolvimento do site para a WTP Incorporadora, empresa focada em empreendimentos de médio e alto padrão. Interface profissional com galeria de empreendimentos, informações detalhadas e sistema de captação de leads.",
    techStack: ["HTML", "CSS", "JavaScript", "Landing Page"],
    category: "web",
    liveUrl: null,
    githubUrl: "https://github.com/creativeimob-tech/wtp",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    featured: false,
  },
  {
    id: "remax-collection",
    title: "RE/MAX Collection",
    description:
      "Landing page para a marca premium RE/MAX Collection, segmento de imóveis de luxo.",
    longDescription:
      "Desenvolvimento da landing page para a RE/MAX Collection, marca especializada da rede RE/MAX voltada para o mercado imobiliário de luxo. Design elegante e sofisticado que transmite exclusividade e atendimento premium.",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "web",
    liveUrl: null,
    githubUrl: "https://github.com/creativeimob-tech/remax-colection",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    featured: false,
  },
  {
    id: "montreal",
    title: "Montreal Imobiliária",
    description:
      "Site institucional para imobiliária Montreal, com foco em imóveis de médio e alto padrão.",
    longDescription:
      "Desenvolvimento do site da imobiliária Montreal, empresa do setor imobiliário com atuação em São Paulo. Interface moderna com listagem de imóveis, sistema de busca e formulários de contato otimizados para conversão.",
    techStack: ["HTML", "CSS", "JavaScript", "Landing Page"],
    category: "web",
    liveUrl: null,
    githubUrl: "https://github.com/creativeimob-tech/montreal",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&q=80",
    featured: false,
  },
  {
    id: "moodboard-creative",
    title: "Moodboard Creative",
    description:
      "Ferramenta de moodboard para organização de referências visuais e alinhamento de identidade de projetos imobiliários.",
    longDescription:
      "Plataforma de criação de moodboards desenvolvida para a CreativeImob, utilizada para alinhar o estilo visual de projetos imobiliários. Permite organizar referências de cores, texturas, tipografia e materiais antes da execução dos projetos.",
    techStack: ["HTML", "CSS", "JavaScript", "UI/UX Design"],
    category: "web",
    liveUrl: null,
    githubUrl: "https://github.com/creativeimob-tech/Moodboard-creative",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80",
    featured: false,
  },

  // ── Projeto de Colaboração (Evo Play Learn) ──────────────────────────
  {
    id: "evo-play-learn",
    title: "Evo Play Learn",
    description:
      "Plataforma educacional interativa que combina aprendizado com gamificação.",
    longDescription:
      "Plataforma de educação interativa que une aprendizado e gamificação, incentivando o desenvolvimento através de jogos e atividades dinâmicas. Projeto colaborativo com foco em experiência do usuário e engajamento educacional.",
    techStack: ["HTML", "CSS", "JavaScript", "Gamificação"],
    category: "web",
    liveUrl: null,
    githubUrl: "https://github.com/riqueov/evo-play-learn",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80",
    featured: false,
  },

  // ── Projeto Próprio (MedCorp / Medicina do Trabalho) ─────────────────
  {
    id: "medicina-trabalho",
    title: "MedCorp — Medicina do Trabalho",
    description:
      "Sistema web para clínica de medicina do trabalho, com gestão de pacientes e agendamentos.",
    longDescription:
      "Aplicação web desenvolvida para uma clínica de medicina do trabalho. Inclui funcionalidades de gestão de pacientes, agendamento de consultas e exames ocupacionais, com interface intuitiva e foco na produtividade do atendimento.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "web",
    liveUrl: null,
    githubUrl: "https://github.com/Kaiobasx/medicina-trabalho",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80",
    featured: false,
  },

  // ── Projetos Pessoais ────────────────────────────────────────────────
  {
    id: "casa-nova-next",
    title: "Chá de Casa Nova",
    description:
      "Plataforma premium para Chá de Casa Nova com lista de presentes, contagem regressiva e integração com automações N8N.",
    longDescription:
      "Site moderno e premium construído com Next.js 15, React 19 e Tailwind CSS. Inclui carrossel de fotos, contagem regressiva em tempo real, sistema de login/cadastro, grid responsivo de presentes e integração PIX com botão de cópia automática.",
    techStack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "N8N"],
    category: "featured",
    liveUrl: "https://casa-nova-mu.vercel.app",
    githubUrl: "https://github.com/Kaiobasx/casa-nova-next",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    featured: true,
  },
  {
    id: "studio-beleza",
    title: "Studio Beleza",
    description:
      "Website profissional para estúdio de beleza, focado em captação de clientes e exibição de serviços.",
    longDescription:
      "Site institucional desenvolvido para um estúdio de beleza real. Interface profissional voltada para apresentação de serviços, agendamento e contato com clientes.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "web",
    liveUrl: null,
    githubUrl: "https://github.com/Kaiobasx/Studio-Beleza",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    featured: false,
  },

  // ── Projetos Acadêmicos ──────────────────────────────────────────────
  {
    id: "corona-track",
    title: "CoronaTrack",
    description:
      "Sistema de rastreamento de contágio baseado em Grafos, modelando propagação viral em redes sociais.",
    longDescription:
      "Aplicação Java que utiliza algoritmos de grafos (BFS/DFS) para simular e analisar a propagação de vírus em redes de contato social.",
    techStack: ["Java", "Grafos", "BFS/DFS"],
    category: "academic",
    liveUrl: null,
    githubUrl: "https://github.com/Kaiobasx/CoronaTrack",
    image:
      "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=600&q=80",
    featured: false,
  },
  {
    id: "grafo-rotas",
    title: "Aplicação Java para Rotas",
    description:
      "Cálculo e análise de rotas ótimas usando algoritmos de grafos ponderados.",
    longDescription:
      "Implementação em Java voltada para o cálculo e análise de rotas utilizando estruturas de grafos. Aplica algoritmos como Dijkstra para encontrar caminhos ótimos.",
    techStack: ["Java", "Grafos", "Dijkstra"],
    category: "academic",
    liveUrl: null,
    githubUrl:
      "https://github.com/Kaiobasx/Grafo-Aplica-o-Java-para-Rotas-ADO-N2",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    featured: false,
  },
];

export const TECH_SUMMARY = {
  frontend: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  backend: ["Java", "N8N"],
  database: ["SQL"],
  devops: ["Vercel", "GitHub Pages"],
  concepts: [
    "Grafos",
    "BFS/DFS",
    "Dijkstra",
    "Filas",
    "Pilhas",
    "Listas Encadeadas",
    "Landing Pages",
    "SEO",
    "UI/UX Design",
  ],
};

export const GITHUB_PROFILE = {
  url: "https://github.com/Kaiobasx",
  username: "Kaiobasx",
  avatar: "https://avatars.githubusercontent.com/u/185980865?v=4",
};
