'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/context/I18nContext';
import type { Lang } from '@/data/i18n';

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const switchLang = (l: Lang) => setLang(l);

  const navItems = [
    { num: '01', label: t('nav.about'), href: '#about' },
    { num: '02', label: t('nav.skills'), href: '#skills' },
    { num: '03', label: t('nav.projects'), href: '#projects' },
    { num: '04', label: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="brand">
        <span className="gold-text">KV</span>
      </a>

      {/* Desktop nav */}
      <nav className="nav-links">
        {navItems.map(({ num, label, href }) => (
          <a key={href} href={href}>
            <span className="num">{num}</span>
            <span>{label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile nav (fullscreen overlay) */}
      <nav className={`nav-links mobile${menuOpen ? ' open' : ''}`}>
        <button className="nav-close" type="button" aria-label="Fechar menu" onClick={closeMenu}>
          <span />
          <span />
        </button>
        {navItems.map(({ num, label, href }) => (
          <a key={href} href={href} onClick={closeMenu}>
            <span className="num">{num}</span> <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="nav-right">
        <div className="lang-toggle">
          <button
            data-lang="pt"
            className={lang === 'pt' ? 'active' : ''}
            onClick={() => switchLang('pt')}
          >
            PT
          </button>
          <button
            data-lang="en"
            className={lang === 'en' ? 'active' : ''}
            onClick={() => switchLang('en')}
          >
            EN
          </button>
        </div>

        <a
          className="btn-cv magnetic"
          href="/curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('nav.cv')}
        </a>

        <button className="nav-burger" aria-label="Menu" onClick={toggleMenu}>
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
