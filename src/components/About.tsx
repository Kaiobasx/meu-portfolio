"use client";

import useReveal from "@/hooks/useReveal";

export default function About() {
  const imageRef = useReveal();
  const contentRef = useReveal(0.15, 200);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-image reveal" ref={imageRef}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
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
    </section>
  );
}
