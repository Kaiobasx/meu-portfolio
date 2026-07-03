"use client";

import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   PREMIUM HERO — Workspace / Setup Aesthetic
   ⚠️  This project uses custom CSS (globals.css), NOT Tailwind.
       All styles are applied via inline `style` props.
   ───────────────────────────────────────────────────────────────────────────── */

/* ── Colour palette ── */
const C = {
  darkest:      "#0D0F14",
  amber:        "#C9913A",
  amberDeep:    "#A37328",
  amberGlow:    "rgba(201,145,58,0.50)",
  offWhite:     "#EDEAE4",
  offWhite65:   "rgba(237,234,228,0.65)",
  offWhite35:   "rgba(237,234,228,0.35)",
  offWhite25:   "rgba(237,234,228,0.25)",
  offWhite45:   "rgba(237,234,228,0.45)",
  offWhite06:   "rgba(237,234,228,0.06)",
  offWhite30:   "rgba(237,234,228,0.30)",
  amberShadow:  "rgba(201,145,58,0.35)",
} as const;

/* ── SVG social icons ── */
function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 20, height: 20, display: "block" }}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: 20, height: 20, display: "block" }}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 20, height: 20, display: "block" }}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 16, height: 16, display: "block" }}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ width: 16, height: 16, display: "block" }}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="12" y1="12" x2="12" y2="18" />
      <polyline points="9 15 12 18 15 15" />
    </svg>
  );
}

/* ── Hover helpers ── */
function useBtnHover() {
  const [hovered, setHovered] = useState(false);
  return {
    hovered,
    events: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
  };
}

function useLinkHover() {
  const [hovered, setHovered] = useState(false);
  return {
    hovered,
    events: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
    },
  };
}

/* ── Social link item ── */
function SocialLink({
  href,
  label,
  icon,
  external = true,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  const { hovered, events } = useLinkHover();
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      {...events}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: hovered ? C.offWhite : C.offWhite45,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "color 0.3s ease, transform 0.3s ease",
      }}
    >
      {icon}
    </a>
  );
}

/* ── Main component ── */
export default function PremiumHero() {
  const [entered, setEntered] = useState(false);
  const [redLineWidth, setRedLineWidth] = useState(0);

  const primaryHover = useBtnHover();
  const secondaryHover = useBtnHover();

  /* Entrance animation */
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setTimeout(() => {
        setEntered(true);
        setTimeout(() => setRedLineWidth(64), 300);
      }, 100);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Shared entrance transition ── */
  const fadeSlide = (delay = 0): React.CSSProperties => ({
    opacity: entered ? 1 : 0,
    transform: entered ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  });

  return (
    <section
      id="hero"
      aria-label="Hero — Workspace Setup"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: C.darkest,
      }}
    >
      {/* ── BG Image ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        aria-hidden="true"
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          zIndex: 0,
          userSelect: "none",
          pointerEvents: "none",
        }}
      />

      {/* ── Gradient overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: `
            linear-gradient(
              to right,
              rgba(13,15,20,0.96) 0%,
              rgba(13,15,20,0.88) 32%,
              rgba(13,15,20,0.65) 55%,
              rgba(13,15,20,0.22) 78%,
              rgba(13,15,20,0.00) 100%
            ),
            linear-gradient(
              to top,
              rgba(13,15,20,0.75) 0%,
              transparent 38%
            )
          `,
        }}
      />

      {/* ── Main content wrapper ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* Inner container — left aligned */}
        <div
          style={{
            width: "100%",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 clamp(2rem, 5vw, 5rem)",
          }}
        >
          {/* Typography block */}
          <div style={{ maxWidth: 620, ...fadeSlide(0) }}>

            {/* Eyebrow */}
            <p
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: C.amber,
                marginBottom: "1.25rem",
                fontFamily: "var(--font-body)",
              }}
            >
              Olá, eu sou
            </p>

            {/* Amber accent line */}
            <div
              aria-hidden="true"
              style={{
                width: redLineWidth,
                height: 2,
                backgroundColor: C.amber,
                marginBottom: "1.5rem",
                transition: "width 0.8s cubic-bezier(0.22,1,0.36,1)",
              }}
            />

            {/* Name */}
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(4rem, 9vw, 8rem)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
                color: C.offWhite,
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              KAIO
              <br />
              <span style={{ opacity: 0.88 }}>VINICIUS</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                fontWeight: 300,
                letterSpacing: "0.04em",
                color: C.offWhite65,
                marginBottom: "2.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                flexWrap: "wrap",
              }}
            >
              Engenheiro Front-end
              <span style={{ color: C.amber, fontSize: "1.1em", fontWeight: 400 }}>
                /
              </span>
              UI Designer
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
                ...fadeSlide(0.25),
              }}
            >
              {/* Primary */}
              <button
                onClick={scrollToProjects}
                aria-label="Ver projetos"
                {...primaryHover.events}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.9rem 2rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  backgroundColor: primaryHover.hovered ? "#D4A04A" : C.amber,
                  color: "#0D0F14",
                  border: `1px solid ${C.amber}`,
                  cursor: "pointer",
                  transform: primaryHover.hovered ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: primaryHover.hovered
                    ? `0 0 32px ${C.amberGlow}`
                    : "none",
                  transition:
                    "background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <span>Ver Projetos</span>
                <ArrowRightIcon />
              </button>

              {/* Secondary outline */}
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download do currículo"
                {...secondaryHover.events}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.9rem 2rem",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-body)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  backgroundColor: secondaryHover.hovered ? C.offWhite06 : "transparent",
                  color: C.offWhite,
                  border: `1px solid ${
                    secondaryHover.hovered ? C.offWhite : C.offWhite35
                  }`,
                  cursor: "pointer",
                  transform: secondaryHover.hovered ? "translateY(-2px)" : "translateY(0)",
                  transition:
                    "background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease",
                  textDecoration: "none",
                }}
              >
                <FileIcon />
                <span>Currículo</span>
              </a>
            </div>
          </div>

            {/* Social icons — below CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                marginTop: "2rem",
                ...fadeSlide(0.5),
              }}
            >
              {/* Thin horizontal rule */}
              <div
                aria-hidden="true"
                style={{
                  width: 40,
                  height: 1,
                  backgroundColor: C.offWhite25,
                  flexShrink: 0,
                }}
              />

              {/* Icons */}
              <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                <SocialLink
                  href="https://www.linkedin.com/in/kaio-oliveira-/"
                  label="LinkedIn"
                  icon={<LinkedInIcon />}
                />
                <SocialLink
                  href="https://github.com/kaiobas"
                  label="GitHub"
                  icon={<GitHubIcon />}
                />
                <SocialLink
                  href="mailto:kaiooliveira528@gmail.com"
                  label="Email"
                  icon={<EmailIcon />}
                  external={false}
                />
              </div>
            </div>
        </div>
      </div>



      {/* ── Scroll indicator — absolute bottom-right ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "2.5rem",
          right: "clamp(2rem, 5vw, 5rem)",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: entered ? 1 : 0,
          transition: "opacity 1.2s ease 0.8s",
        }}
      >
        <span
          style={{
            fontSize: "0.65rem",
            fontWeight: 500,
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            color: C.offWhite30,
            writingMode: "vertical-rl",
            textOrientation: "mixed",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 48,
            background: `linear-gradient(to bottom, rgba(201,145,58,0.85), transparent)`,
            animation: "heroScrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Grain overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 4,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
          opacity: 0.35,
        }}
      />

      {/* ── Hero → About shape divider ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 5,
          lineHeight: 0,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", width: "100%" }}
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,10 1080,44 C1200,66 1340,28 1440,45 L1440,80 L0,80 Z"
            fill="#131620"
          />
          <path
            d="M0,58 C200,30 400,70 600,52 C800,34 1000,68 1200,50 C1320,38 1400,58 1440,55 L1440,80 L0,80 Z"
            fill="#131620"
            opacity="0.6"
          />
        </svg>
      </div>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes heroScrollPulse {
          0%,100% { opacity:0.3; transform:scaleY(0.9); }
          50%      { opacity:1;   transform:scaleY(1.1); }
        }
      `}</style>
    </section>
  );
}
