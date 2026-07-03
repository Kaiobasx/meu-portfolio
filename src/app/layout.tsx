import type { Metadata, Viewport } from 'next';
import { Cormorant_Garamond, Manrope, JetBrains_Mono } from 'next/font/google';
import { I18nProvider } from '@/context/I18nContext';
import Loader from '@/components/Loader';
import Cursor from '@/components/Cursor';
import '@/styles/globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#08080A',
};

export const metadata: Metadata = {
  title: 'Kaio Vinicius — Front-end Engineer & UI Designer',
  description: 'Portfólio de Kaio Vinicius — Engenheiro Front-end e UI Designer. Transformo marcas em experiências digitais memoráveis.',
  icons: {
    icon: '/kv_logo.png',
    apple: '/kv_logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <I18nProvider>
          <div className="grain" />
          <div className="vignette" />
          <Cursor />
          <Loader />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
