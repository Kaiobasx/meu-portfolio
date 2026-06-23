import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const viewport: Viewport = {
  themeColor: "#0D0F14",
};

export const metadata: Metadata = {
  title: "Kaio — Portfólio",
  description:
    "Portfólio pessoal — Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis.",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Phosphor Icons */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/regular/style.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
