'use client';

import { useEffect, useRef } from 'react';
import { useI18n } from '@/context/I18nContext';

export default function Hero() {
  const { t } = useI18n();
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const onScroll = () => {
      const y = window.scrollY;
      if (imgRef.current && y < window.innerHeight) {
        imgRef.current.style.transform = `scale(1.08) translateY(${y * 0.18}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img ref={imgRef} src="/HERO.png" alt="Hero background" />
      </div>

      <div className="hero-inner">
        <p className="hero-greet">{t('hero.greet')}</p>
        <h1 className="hero-title">
          <span className="ln"><span>KAIO</span></span>
          <span className="ln"><span className="gold-text">VINICIUS</span></span>
        </h1>

        <div className="hero-role-row">
          <div>
            <p className="hero-role">{t('hero.role')}</p>
            <div className="hero-cta">
              <a href="#projects" className="btn btn-gold magnetic">
                <span>{t('hero.cta1')}</span>
                <span className="arrow">→</span>
              </a>
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost magnetic"
              >
                <span>{t('hero.cta2')}</span>
                <span className="arrow">↗</span>
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/kaio-vinicius" target="_blank" rel="noopener">LinkedIn</a>
              <a href="https://github.com/Kaiobasx" target="_blank" rel="noopener">GitHub</a>
              <a href="https://www.instagram.com/kaiobasx.dev/" target="_blank" rel="noopener">Instagram</a>
            </div>
          </div>
          <p className="hero-tag">{t('hero.tag')}</p>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="scroll-line" />
      </div>
    </section>
  );
}
