'use client';

import { useEffect, useRef, useState } from 'react';
import { useI18n } from '@/context/I18nContext';

export default function Loader() {
  const { t } = useI18n();
  const [done, setDone] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const pctRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDone(true);
      return;
    }

    let p = 0;
    const tick = setInterval(() => {
      p += Math.random() * 16 + 6;
      if (p >= 100) { p = 100; clearInterval(tick); }
      if (barRef.current) barRef.current.style.width = p + '%';
      if (pctRef.current) pctRef.current.textContent = String(Math.floor(p)).padStart(3, '0');
      if (p === 100) {
        setTimeout(() => setDone(true), 380);
      }
    }, 160);

    return () => clearInterval(tick);
  }, []);

  return (
    <div id="loader" className={done ? 'done' : ''}>
      <div className="loader-mono">
        <span className="lk">K</span>
        <span className="lv">V</span>
      </div>
      <div className="loader-meta">
        <span>{t('loader.role')}</span>
        <span className="loader-pct" ref={pctRef}>000</span>
      </div>
      <div className="loader-bar" ref={barRef} />
    </div>
  );
}
