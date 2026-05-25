# 🚀 Portefólio Interativo | Kaio Developer

> Um portefólio pessoal com foco em UI/UX Premium, estética *lo-fi programmer* e animações cinemáticas.

![Status do Projeto](https://img.shields.io/badge/Status-Em_Desenvolvimento-8b5cf6?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📖 Sobre o Projeto

Este projeto é a minha montra digital como Engenheiro Front-end e UX Designer. Desenvolvido com as tecnologias mais recentes do ecossistema React, o portefólio destaca-se não apenas por listar projetos, mas por oferecer uma experiência interativa e imersiva. 

O design combina um *Dark Mode* profundo com toques de luzes neon (roxo e ciano), abusando do *glassmorphism* (efeito de vidro fosco) para criar uma interface limpa, vetorial e moderna.

## ✨ Funcionalidades Principais

* 🎬 **Hero Section Cinemática:** Uma introdução imersiva (com vídeo 16:9) que transita de forma fluida para a interface principal, utilizando uma narrativa visual focada na cultura *developer*.
* 🧩 **Arquitetura de Projetos Dinâmica:** Sistema de listagem de projetos extraídos e categorizados, com renderização condicional de destaques.
* 🤝 **Destaque de Parcerias:** Flag especial (`isCreativeImob`) que aplica estilos únicos (badges e brilhos neon) a projetos desenvolvidos em colaboração com a CreativeImob.
* 🎨 **Filtros com Glassmorphism:** Navegação de categorias de projetos utilizando efeitos de vidro translúcido para um acabamento *premium*.
* 🧹 **Filtro Inteligente:** Omissão automática de repositórios marcados como "Template" para garantir uma montra apenas com projetos finais.

## 🛠️ Tecnologias Utilizadas

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) + CSS Modules (Variáveis e animações customizadas)
* **Animações:** CSS Keyframes e Transitions (Preparado para integração com Framer Motion)
* **Ícones:** [Phosphor Icons](https://phosphoricons.com/)

## 📂 Estrutura de Pastas

A arquitetura do projeto segue o princípio de separação clara de responsabilidades:

```text
/src
 ├── /app          # Rotas principais do Next.js (App Router)
 ├── /components   # Componentes isolados (Hero, Projects, Navbar, etc.)
 ├── /data         # Ficheiros estáticos e estruturas de dados (ex: projects.ts)
 ├── /hooks        # Custom hooks (ex: useReveal para animações de scroll)
 └── /styles       # Ficheiros globais de CSS e tokens de design
🚀 Como Executar Localmente
Clona o repositório:

Bash
git clone [https://github.com/Kaiobasx/meu-portfolio.git](https://github.com/Kaiobasx/meu-portfolio.git)
Navega até à pasta do projeto:

Bash
cd meu-portfolio
Instala as dependências:

Bash
npm install
# ou
yarn install
Inicia o servidor de desenvolvimento:

Bash
npm run dev
# ou
yarn dev
Abre no navegador:
Acede a http://localhost:3000 para ver o resultado.

📞 Contacto
GitHub: @Kaiobasx

LinkedIn: https://www.linkedin.com/in/kaio-oliveira-/

Email: kaiooliveira528@gmail.com

⌨️ Desenvolvido com dedicação e muito café por Kaio.
