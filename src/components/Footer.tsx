'use client';

import { useI18n } from '@/context/I18nContext';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer>
      <span className="gold-text">KV</span>
      <span>{t('footer.made')}</span>
      <span>© 2026 — <span>{t('footer.rights')}</span></span>
    </footer>
  );
}
