'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { I18N, Lang, I18nKey } from '@/data/i18n';

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: I18nKey) => string;
};

const I18nContext = createContext<I18nContextType>({
  lang: 'pt',
  setLang: () => {},
  t: (k) => k as string,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('pt');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('kv-lang') as Lang;
      if (saved === 'pt' || saved === 'en') setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('kv-lang', l); } catch {}
  };

  const t = (key: I18nKey): string => I18N[lang][key] as string;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
