'use client';

import { useEffect, useRef } from 'react';
import { useI18n } from '@/context/I18nContext';
import type { I18nKey } from '@/data/i18n';

interface Skill {
  num: string;
  name: string;
  catKey: I18nKey;
  lvl: 1 | 2 | 3;
}

const SKILLS: Skill[] = [
  { num: '01', name: 'React',          catKey: 'lvl.3', lvl: 3 },
  { num: '02', name: 'Next.js',        catKey: 'lvl.3', lvl: 3 },
  { num: '03', name: 'TypeScript',     catKey: 'lvl.2', lvl: 2 },
  { num: '04', name: 'JavaScript',     catKey: 'lvl.3', lvl: 3 },
  { num: '05', name: 'CSS / Tailwind', catKey: 'lvl.3', lvl: 3 },
  { num: '06', name: 'Java',           catKey: 'lvl.2', lvl: 2 },
  { num: '07', name: 'SQL',            catKey: 'lvl.2', lvl: 2 },
  { num: '08', name: 'Git / GitHub',   catKey: 'lvl.3', lvl: 3 },
  { num: '09', name: 'Vercel',         catKey: 'lvl.2', lvl: 2 },
  { num: '10', name: 'N8N',            catKey: 'lvl.1', lvl: 1 },
];

export default function Skills() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    container.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef}>
      <div className="skills-head">
        <div>
          <span className="eyebrow" data-reveal>{t('skills.eyebrow')}</span>
          <h2 className="section-title" data-reveal data-d="1" style={{ marginTop: '20px' }}>
            <span>{t('skills.title.a')} </span>
            <span className="it gold-text">{t('skills.title.b')}</span>
          </h2>
        </div>
        <p data-reveal data-d="2">{t('skills.p')}</p>
      </div>

      <div className="skills-list">
        {SKILLS.map((skill) => (
          <div key={skill.num} className="skill-row" data-reveal>
            <span className="skill-num">{skill.num}</span>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-cat">{t(skill.catKey)}</span>
            <div className="skill-meter" data-lvl={skill.lvl}>
              <i /><i /><i />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
