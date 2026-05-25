"use client";

import useReveal from "@/hooks/useReveal";

interface Skill {
  icon: string;
  name: string;
  level: string;
}

const SKILLS: Skill[] = [
  { icon: "⚛️", name: "React", level: "Avançado" },
  { icon: "▲", name: "Next.js", level: "Avançado" },
  { icon: "🟦", name: "TypeScript", level: "Intermediário" },
  { icon: "🟨", name: "JavaScript", level: "Avançado" },
  { icon: "🎨", name: "CSS / Tailwind", level: "Avançado" },
  { icon: "☕", name: "Java", level: "Intermediário" },
  { icon: "🗄️", name: "SQL", level: "Intermediário" },
  { icon: "🐙", name: "Git / GitHub", level: "Avançado" },
  { icon: "🚀", name: "Vercel", level: "Intermediário" },
  { icon: "🔄", name: "N8N", level: "Básico" },
];

interface SkillCardProps extends Skill {
  delay: number;
}

function SkillCard({ icon, name, level, delay }: SkillCardProps) {
  const ref = useReveal(0.15, delay);

  return (
    <div className="skill-card reveal" ref={ref}>
      <span className="skill-icon">{icon}</span>
      <div className="skill-name">{name}</div>
      <div className="skill-level">{level}</div>
    </div>
  );
}

export default function Skills() {
  const headerRef = useReveal();

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header reveal" ref={headerRef}>
          <p className="section-label">Habilidades</p>
          <h2 className="section-title">Tecnologias &amp; Ferramentas</h2>
          <p className="section-desc">
            As principais tecnologias que uso no meu dia a dia para construir
            produtos digitais de alta qualidade.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.name} {...skill} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
