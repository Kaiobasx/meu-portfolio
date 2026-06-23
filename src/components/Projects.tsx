"use client";

import { useRef, useState } from "react";
import useReveal from "@/hooks/useReveal";
import { PROJECTS, type Project } from "@/data/projects";

type FilterCategory = "all" | "featured" | "web" | "academic";

interface ProjectCardProps extends Project {
  delay: number;
}

function ProjectCard({
  title,
  description,
  techStack,
  liveUrl,
  githubUrl,
  image,
  category,
  delay,
}: ProjectCardProps) {
  const ref = useReveal<HTMLElement>(0.15, delay);
  const cardRef = useRef<HTMLElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centX = rect.width / 2;
    const centY = rect.height / 2;
    const rotateX = ((y - centY) / centY) * -4;
    const rotateY = ((x - centX) / centX) * 4;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) cardRef.current.style.transform = "";
  };

  const categoryLabel: Record<string, string> = {
    featured: "Destaque",
    web: "Web",
    academic: "Acadêmico",
  };

  return (
    <article
      className="project-card reveal"
      ref={(el) => {
        ref.current = el;
        cardRef.current = el;
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-thumb">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt={title} />
        <div className="overlay"></div>
        <span className={`project-badge badge-${category}`}>
          {categoryLabel[category]}
        </span>
      </div>
      <div className="project-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {techStack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <i className="ph ph-globe"></i> Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <i className="ph ph-github-logo"></i> Código
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const headerRef = useReveal();
  const [filter, setFilter] = useState<FilterCategory>("all");

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  const filters: { key: FilterCategory; label: string }[] = [
    { key: "all", label: "Todos" },
    { key: "featured", label: "Destaques" },
    { key: "web", label: "Web" },
    { key: "academic", label: "Acadêmico" },
  ];

  return (
    <section
      className="projects"
      id="projects"
      style={{ background: "var(--bg-secondary)", position: "relative" }}
    >
      <div className="container">
        <div className="projects-header reveal" ref={headerRef}>
          <p className="section-label">Projetos</p>
          <h2 className="section-title">Trabalhos em Destaque</h2>
          <p className="section-desc">
            Projetos reais extraídos do meu GitHub — do front-end à lógica de
            algoritmos.
          </p>
        </div>

        <div className="projects-filters">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn${filter === f.key ? " active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={project.id} {...project} delay={i * 150} />
          ))}
        </div>
      </div>

      {/* ── Shape Divider: Projects → Contact (bg-primary) ── */}
      <div className="shape-divider" aria-hidden="true">
        <svg
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,50 C160,90 320,10 480,50 C640,90 800,15 960,50
               C1120,85 1300,20 1440,45 L1440,90 L0,90 Z"
            fill="#0D0F14"
          />
          <path
            d="M0,65 C200,30 400,80 600,55 C800,30 1000,75 1200,50
               C1320,35 1400,60 1440,55 L1440,90 L0,90 Z"
            fill="#0D0F14"
            opacity="0.5"
          />
        </svg>
      </div>
    </section>
  );
}
