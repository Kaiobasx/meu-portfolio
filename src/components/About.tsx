'use client';

import { useEffect, useRef } from 'react';
import { useI18n } from '@/context/I18nContext';

export default function About() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    container.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

    const countIO = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = parseInt(el.dataset.count || '0', 10);
        const suffix = el.dataset.suffix || '';
        let cur = 0;
        const dur = 1400;
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          cur = ease;
          el.textContent = Math.floor(ease * target) + (t === 1 ? suffix : '');
          if (t < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        };
        requestAnimationFrame(step);
        countIO.unobserve(el);
      }),
      { threshold: 0.5 }
    );
    container.querySelectorAll('[data-count]').forEach(el => countIO.observe(el));

    return () => { io.disconnect(); countIO.disconnect(); };
  }, []);

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-grid">
        <div className="about-figure" data-reveal>
          <div className="frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/EU.png" alt="Kaio Vinicius" />
          </div>
          <div className="tagchip">
            <span>{t('about.chip')}</span>
          </div>
        </div>

        <div className="about-body">
          <span className="eyebrow" data-reveal>{t('about.eyebrow')}</span>
          <h2 className="section-title about-head" data-reveal data-d="1">
            <span>{t('about.title.a')}</span>
            <span className="it gold-text"> {t('about.title.b')}</span>
          </h2>
          <p data-reveal data-d="2">{t('about.p1')}</p>
          <p data-reveal data-d="3">{t('about.p2')}</p>

          <div className="stats" data-reveal data-d="3">
            <div className="stat">
              <div className="num">
                <span data-count="3" data-suffix="+">3+</span>
              </div>
              <div className="lbl">{t('stat.1')}</div>
            </div>
            <div className="stat">
              <div className="num">
                <span data-count="15" data-suffix="+">15+</span>
              </div>
              <div className="lbl">{t('stat.2')}</div>
            </div>
            <div className="stat">
              <div className="num">
                <span data-count="10" data-suffix="+">10+</span>
              </div>
              <div className="lbl">{t('stat.3')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
