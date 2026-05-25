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
    id: "casa-yk",
    title: "CasaYK",
    description:
      "Landing page interativa e responsiva para inauguração de lar, com deploy em GitHub Pages.",
    longDescription:
      "Versão original da landing page para evento de inauguração. Desenvolvido com HTML, CSS e JavaScript puros, com design responsivo e hospedado via GitHub Pages.",
    techStack: ["HTML", "CSS", "JavaScript"],
    category: "featured",
    liveUrl: "https://kaiobasx.github.io/CasaYK/",
    githubUrl: "https://github.com/Kaiobasx/CasaYK",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
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
  ],
};

export const GITHUB_PROFILE = {
  url: "https://github.com/Kaiobasx",
  username: "Kaiobasx",
  avatar: "https://avatars.githubusercontent.com/u/185980865?v=4",
};
