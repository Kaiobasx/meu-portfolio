"use client";

import useReveal from "@/hooks/useReveal";

export default function About() {
  const imageRef = useReveal();
  const contentRef = useReveal(0.15, 200);

  return (
    <section
      className="about"
      id="about"
      style={{ background: "var(--bg-secondary)", position: "relative" }}
    >
      <div className="container">
        <div className="about-image reveal" ref={imageRef}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Workspace"
          />
        </div>

        <div className="about-content reveal" ref={contentRef}>
          <p className="section-label">Sobre mim</p>
          <h2 className="section-title">
            Criando soluções digitais com paixão e propósito
          </h2>
          <p className="section-desc">
            Sou desenvolvedor com experiência em criação de interfaces modernas e
            aplicações web completas. Trabalho com React, Next.js, TypeScript e
            design responsivo para entregar produtos que encantam os usuários.
          </p>
          <p>
            Quando não estou codando, gosto de estudar novas tecnologias,
            contribuir em projetos open-source e tomar um bom café. Acredito que
            bom design é invisível — funciona tão bem que ninguém percebe.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-text">Anos de experiência</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-text">Projetos entregues</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-text">Clientes satisfeitos</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Shape Divider: About → Skills (bg-primary) ── */}
      <div className="shape-divider" aria-hidden="true">
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,80 C60,30 120,110 180,70 C240,30 300,100 360,60
               C420,20 480,90 540,55 C600,20 660,85 720,50
               C780,15 840,80 900,45 C960,10 1020,75 1080,40
               C1140,5 1200,70 1260,45 C1320,20 1400,65 1440,50
               L1440,110 L0,110 Z"
            fill="#0D0F14"
          />
          <path
            d="M0,90 C80,50 160,100 240,75 C320,50 400,95 480,70
               C560,45 640,90 720,65 C800,40 880,85 960,60
               C1040,35 1120,80 1200,58 C1280,36 1380,75 1440,62
               L1440,110 L0,110 Z"
            fill="#0D0F14"
            opacity="0.55"
          />
        </svg>
      </div>
    </section>
  );
}
