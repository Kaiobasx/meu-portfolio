'use client';

import { useEffect, useRef } from 'react';
import { useI18n } from '@/context/I18nContext';

export default function Contact() {
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
    return () => io.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef}>
      <div className="contact-glow" />
      <div className="contact-inner">
        <span className="eyebrow center" data-reveal>{t('contact.eyebrow')}</span>
        <h2 className="section-title" data-reveal data-d="1">
          <span>{t('contact.title.a')}</span><br />
          <span className="it gold-text">{t('contact.title.b')}</span>
        </h2>
        <p className="lead" data-reveal data-d="2">{t('contact.lead')}</p>
        <div className="contact-cta" data-reveal data-d="3">
          <a href="mailto:kaiooliveira528@gmail.com" className="btn btn-gold magnetic">
            <span>{t('contact.cta')}</span>
            <span className="arrow">→</span>
          </a>
        </div>
        <div className="contact-socials" data-reveal data-d="3">
          <a href="https://github.com/Kaiobasx" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/kaio-oliveira-/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://www.instagram.com/kaiobasx.dev/" target="_blank" rel="noopener">Instagram</a>
          <a href="https://wa.me/5511976277421" target="_blank" rel="noopener">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
