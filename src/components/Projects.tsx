'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/context/I18nContext';
import type { I18nKey } from '@/data/i18n';

type Cat = 'all' | 'freela' | 'pessoal' | 'acad';

interface Project {
  cat: 'freela' | 'pessoal' | 'acad';
  catKey: I18nKey;
  img: string;
  title: string;
  descKey: I18nKey;
  tags: string[];
  demo?: string;
  code?: string;
}

const PROJECTS: Project[] = [
  { cat: 'freela',  catKey: 'cat.freela',  img: 'https://kaio-vinicius.vercel.app/JRHX.png',            title: 'JRHX Imobiliária',    descKey: 'pd1',  tags: ['React','CSS','JavaScript','Landing Page'], demo: 'https://jrhx.com.br' },
  { cat: 'freela',  catKey: 'cat.freela',  img: 'https://kaio-vinicius.vercel.app/MARIAMARTINATTI.png',  title: 'Maria Martinatti',    descKey: 'pd2',  tags: ['React','CSS','JavaScript','Responsive'],  demo: 'https://mariamartinatti.com.br' },
  { cat: 'freela',  catKey: 'cat.freela',  img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', title: 'Nitro', descKey: 'pd3', tags: ['React','CSS','SEO','Google Ads'] },
  { cat: 'freela',  catKey: 'cat.freela',  img: 'https://kaio-vinicius.vercel.app/WTP.png',             title: 'WTP Incorporadora',   descKey: 'pd4',  tags: ['React','CSS','JavaScript','Landing Page'], demo: 'https://wtpincorporadora.com.br/' },
  { cat: 'freela',  catKey: 'cat.freela',  img: 'https://kaio-vinicius.vercel.app/REMAX.png',           title: 'RE/MAX Collection',   descKey: 'pd5',  tags: ['React','CSS','JavaScript','Landing Page'], demo: 'https://remax-colection.vercel.app/' },
  { cat: 'freela',  catKey: 'cat.freela',  img: 'https://kaio-vinicius.vercel.app/MONTREAL.png',        title: 'Montreal',            descKey: 'pd6',  tags: ['React','CSS','JavaScript','Landing Page'], demo: 'https://www.montrealbusiness.com.br/' },
  { cat: 'pessoal', catKey: 'cat.pessoal', img: 'https://kaio-vinicius.vercel.app/MOODBOARD.png',       title: 'Moodboard Creative',  descKey: 'pd7',  tags: ['React','CSS','UI/UX'],                    demo: 'https://moodboard-creative.vercel.app/' },
  { cat: 'pessoal', catKey: 'cat.pessoal', img: 'https://kaio-vinicius.vercel.app/HTC.png',             title: 'HTC — Skills',        descKey: 'pd8',  tags: ['React','CSS','JavaScript'],               demo: 'https://plataforma-modelo.vercel.app/' },
  { cat: 'freela',  catKey: 'cat.freela',  img: 'https://kaio-vinicius.vercel.app/MEDCORP.png',         title: 'MedCorp',             descKey: 'pd9',  tags: ['React','CSS','JavaScript'],               demo: 'https://medcorpinovacao.com.br/' },
  { cat: 'pessoal', catKey: 'cat.pessoal', img: 'https://kaio-vinicius.vercel.app/CASANOVA.png',        title: 'Chá de Casa Nova',    descKey: 'pd10', tags: ['Next.js 15','React 19','TypeScript','Tailwind','N8N'], demo: 'https://casa-nova-mu.vercel.app', code: 'https://github.com/Kaiobasx/casa-nova-next' },
  { cat: 'acad',  catKey: 'cat.acad',  img: 'https://kaio-vinicius.vercel.app/STUDIOBELEZA.png',    title: 'Studio Beleza',       descKey: 'pd11', tags: ['HTML','CSS','JavaScript'],                demo: 'https://kaiobasx.github.io/Studio-Beleza/', code: 'https://github.com/Kaiobasx/Studio-Beleza' },
  { cat: 'acad',    catKey: 'cat.acad',    img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=800&q=80', title: 'CoronaTrack', descKey: 'pd12', tags: ['Java','Grafos','BFS/DFS'], code: 'https://github.com/Kaiobasx/CoronaTrack' },
  { cat: 'acad',    catKey: 'cat.acad',    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',    title: 'Java · Rotas Ótimas', descKey: 'pd13', tags: ['Java','Grafos','Dijkstra'], code: 'https://github.com/Kaiobasx/Grafo-Aplica-o-Java-para-Rotas-ADO-N2' },
];

export default function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<Cat>('all');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    container.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const filters: { key: Cat; i18nKey: I18nKey }[] = [
    { key: 'all',     i18nKey: 'f.all' },
    { key: 'freela',  i18nKey: 'f.freela' },
    { key: 'pessoal', i18nKey: 'f.pessoal' },
    { key: 'acad',    i18nKey: 'f.acad' },
  ];

  return (
    <section id="projects" ref={sectionRef}>
      <div className="proj-head">
        <div>
          <span className="eyebrow" data-reveal>{t('proj.eyebrow')}</span>
          <h2 className="section-title" data-reveal data-d="1" style={{ marginTop: '20px' }}>
            <span>{t('proj.title.a')} </span>
            <span className="it gold-text">{t('proj.title.b')}</span>
          </h2>
        </div>
        <p data-reveal data-d="2">{t('proj.p')}</p>
      </div>

      <div className="filters" data-reveal>
        {filters.map(f => (
          <button
            key={f.key}
            className={filter === f.key ? 'active' : ''}
            onClick={() => setFilter(f.key)}
          >
            {t(f.i18nKey)}
          </button>
        ))}
      </div>

      <div className="proj-grid">
        {PROJECTS.map((p, i) => {
          const hidden = filter !== 'all' && p.cat !== filter;
          const delay = (i % 3) as 0 | 1 | 2;
          return (
            <article
              key={p.title}
              className={`card${hidden ? ' hide' : ''}`}
              data-cat={p.cat}
              data-reveal
              data-d={delay > 0 ? String(delay) : undefined}
            >
              <div className="card-media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.img} alt={p.title} />
              </div>
              <div className="card-body">
                <p className="card-cat">{t(p.catKey)}</p>
                <h3>{p.title}</h3>
                <p>{t(p.descKey)}</p>
                <div className="tags">
                  {p.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                {(p.demo || p.code) && (
                  <div className="card-links">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener">
                        <span>{t('link.demo')}</span><span className="arrow">↗</span>
                      </a>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noopener">
                        <span>{t('link.code')}</span><span className="arrow">↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
