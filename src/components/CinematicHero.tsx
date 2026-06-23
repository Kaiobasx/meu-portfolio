"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/* ──────────────────────────────────────────────
   CONSTANTS
   ────────────────────────────────────────────── */

const ROLES: string[] = [
  "Desenvolvedor Full Stack & UI Designer",
  "Criador de Experiências Digitais",
  "Apaixonado por Código & Design",
];

const CODE_PARTICLES = [
  "const",
  "=> {",
  "</>",
  "npm",
  "git push",
  "async",
  "export",
  "return",
  "useState",
  ".tsx",
  "deploy",
  "// TODO",
];

/* ──────────────────────────────────────────────
   PHASE TIMING (ms)
   ────────────────────────────────────────────── */
const PHASE = {
  /** Video plays full-screen immersion */
  VIDEO_DURATION: 3000,
  /** Glitch + flash + blur transition */
  GLITCH_START: 3000,
  GLITCH_DURATION: 1500,
  /** Interface emergence */
  INTERFACE_START: 4500,
  /** Individual element staggers from INTERFACE_START */
  NAVBAR_DELAY: 0,
  GREETING_DELAY: 200,
  NAME_DELAY: 500,
  ROLE_DELAY: 900,
  DESC_DELAY: 1200,
  BUTTONS_DELAY: 1500,
  AVATAR_DELAY: 800,
  PARTICLES_DELAY: 600,
};

/* ──────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────── */
export default function CinematicHero() {
  /* ── Phase state ── */
  const [phase, setPhase] = useState<
    "video" | "glitch" | "interface" | "complete"
  >("video");

  /* ── Element visibility ── */
  const [show, setShow] = useState({
    navbar: false,
    greeting: false,
    name: false,
    role: false,
    desc: false,
    buttons: false,
    avatar: false,
    particles: false,
  });

  /* ── Typewriter ── */
  const [displayText, setDisplayText] = useState("");
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);
  const typeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ── Refs ── */
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  /* ──────────────────────────────────────────
     TYPEWRITER ENGINE
     ────────────────────────────────────────── */
  const type = useCallback(() => {
    const current = ROLES[roleIndex.current];

    if (isDeleting.current) {
      charIndex.current--;
      setDisplayText(current.substring(0, charIndex.current));
    } else {
      charIndex.current++;
      setDisplayText(current.substring(0, charIndex.current));
    }

    let speed = isDeleting.current ? 40 : 80;

    if (!isDeleting.current && charIndex.current === current.length) {
      speed = 2000;
      isDeleting.current = true;
    }
    if (isDeleting.current && charIndex.current === 0) {
      isDeleting.current = false;
      roleIndex.current = (roleIndex.current + 1) % ROLES.length;
      speed = 400;
    }

    typeTimer.current = setTimeout(type, speed);
  }, []);

  /* ──────────────────────────────────────────
     ORCHESTRATION TIMELINE
     ────────────────────────────────────────── */
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    const t = (fn: () => void, ms: number) => {
      timers.push(setTimeout(fn, ms));
    };

    // Try to play video
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked — skip to interface immediately
        setPhase("interface");
        setShow({
          navbar: true,
          greeting: true,
          name: true,
          role: true,
          desc: true,
          buttons: true,
          avatar: true,
          particles: true,
        });
        type();
      });
    }

    // ── Phase 2: Glitch
    t(() => setPhase("glitch"), PHASE.GLITCH_START);

    // ── Phase 3: Interface
    t(() => {
      setPhase("interface");
    }, PHASE.INTERFACE_START);

    // ── Stagger reveals from INTERFACE_START
    const I = PHASE.INTERFACE_START;
    t(() => setShow((s) => ({ ...s, navbar: true })), I + PHASE.NAVBAR_DELAY);
    t(
      () => setShow((s) => ({ ...s, particles: true })),
      I + PHASE.PARTICLES_DELAY
    );
    t(
      () => setShow((s) => ({ ...s, greeting: true })),
      I + PHASE.GREETING_DELAY
    );
    t(() => setShow((s) => ({ ...s, name: true })), I + PHASE.NAME_DELAY);
    t(() => setShow((s) => ({ ...s, avatar: true })), I + PHASE.AVATAR_DELAY);
    t(() => {
      setShow((s) => ({ ...s, role: true }));
      type(); // Start typewriter
    }, I + PHASE.ROLE_DELAY);
    t(() => setShow((s) => ({ ...s, desc: true })), I + PHASE.DESC_DELAY);
    t(
      () => setShow((s) => ({ ...s, buttons: true })),
      I + PHASE.BUTTONS_DELAY
    );

    // ── Phase 4: Complete (cleanup layers)
    t(() => setPhase("complete"), I + 2500);

    return () => {
      timers.forEach(clearTimeout);
      if (typeTimer.current) clearTimeout(typeTimer.current);
    };
  }, [type]);

  /* ──────────────────────────────────────────
     SCROLL HANDLER
     ────────────────────────────────────────── */
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  /* ──────────────────────────────────────────
     RENDER
     ────────────────────────────────────────── */
  const isVideoVisible = phase === "video" || phase === "glitch";

  return (
    <>
      {/* ════════════════════════════════════════
          VIDEO LAYER — Full-screen cinematic
          ════════════════════════════════════════ */}
      <div
        className={`cin-video-layer ${phase}`}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className="cin-video"
          src="/STYLE_High_definition_prem.mp4"
          muted
          playsInline
          preload="auto"
        />

        {/* Scanlines CRT overlay */}
        <div className="cin-scanlines" />

        {/* Glitch overlay */}
        <div
          className={`cin-glitch-overlay ${phase === "glitch" ? "active" : ""}`}
        />

        {/* Flash burst */}
        <div
          className={`cin-flash ${phase === "glitch" ? "active" : ""}`}
        />

        {/* Vignette */}
        <div className="cin-vignette" />

        {/* Bottom gradient fade into site */}
        <div className="cin-gradient-fade" />
      </div>

      {/* ════════════════════════════════════════
          FLOATING CODE PARTICLES
          ════════════════════════════════════════ */}
      <div
        className={`cin-particles ${show.particles ? "visible" : ""}`}
        aria-hidden="true"
      >
        {CODE_PARTICLES.map((code, i) => (
          <span
            key={i}
            className="cin-particle"
            style={{
              left: `${5 + ((i * 17) % 90)}%`,
              top: `${10 + ((i * 23) % 75)}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + (i % 5) * 2}s`,
              fontSize: `${0.7 + (i % 4) * 0.15}rem`,
            }}
          >
            {code}
          </span>
        ))}
      </div>

      {/* ════════════════════════════════════════
          HERO SECTION — Interface DOM
          ════════════════════════════════════════ */}
      <section
        className={`hero cin-hero ${!isVideoVisible ? "cin-hero--visible" : ""}`}
        id="hero"
        ref={heroRef}
        style={{ position: "relative" }}
      >
        <div className="container">
          <div className="hero-text">
            {/* Greeting */}
            <p className={`hero-greeting cin-reveal ${show.greeting ? "cin-visible" : ""}`}>
              <span className="wave">👋</span> Olá, eu sou
            </p>

            {/* Name */}
            <h1 className={`hero-name cin-reveal cin-reveal--name ${show.name ? "cin-visible" : ""}`}>
              Kaio <span className="gradient">Developer</span>
            </h1>

            {/* Typewriter role */}
            <p className={`hero-role cin-reveal ${show.role ? "cin-visible" : ""}`}>
              {displayText}
              <span className="cin-cursor">|</span>
            </p>

            {/* Description */}
            <p className={`hero-desc cin-reveal ${show.desc ? "cin-visible" : ""}`}>
              Transformo ideias em experiências digitais modernas, performáticas
              e visualmente impactantes.
            </p>

            {/* CTA Buttons */}
            <div className={`hero-buttons cin-reveal cin-reveal--buttons ${show.buttons ? "cin-visible" : ""}`}>
              <a
                href="#projects"
                className="btn btn-primary cin-btn-glow"
                onClick={(e) => scrollTo(e, "#projects")}
              >
                <i className="ph ph-rocket-launch"></i> Ver Projetos
              </a>
              <a
                href="#contact"
                className="btn btn-outline"
                onClick={(e) => scrollTo(e, "#contact")}
              >
                <i className="ph ph-envelope-simple"></i> Contato
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className={`hero-image cin-reveal cin-reveal--avatar ${show.avatar ? "cin-visible" : ""}`}>
            <div className="hero-image-wrapper cin-avatar-glow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/kaidev.png" alt="Foto de Kaio" />
            </div>
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </div>
        </div>

        {/* ── Shape Divider: Multi Wave → About (bg-secondary) ── */}
        <div className="shape-divider" aria-hidden="true">
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,60 C180,100 360,20 540,60 C720,100 900,20 1080,60 C1260,100 1380,40 1440,55 L1440,100 L0,100 Z"
              fill="#12484C"
            />
            <path
              d="M0,75 C200,40 400,90 600,70 C800,50 1000,90 1200,65 C1320,52 1400,72 1440,80 L1440,100 L0,100 Z"
              fill="#12484C"
              opacity="0.6"
            />
          </svg>
        </div>
      </section>
    </>
  );
}
