"use client";

import { useState, useEffect, useCallback } from "react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

/**
 * Time (ms) to wait before showing navbar.
 * Synced with CinematicHero's PHASE.INTERFACE_START + NAVBAR_DELAY.
 */
const NAVBAR_REVEAL_DELAY = 4500;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const [cinVisible, setCinVisible] = useState(false);

  /* ── Cinematic reveal timer ── */
  useEffect(() => {
    const timer = setTimeout(() => setCinVisible(true), NAVBAR_REVEAL_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);

    // Detect active section
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY + 200;

    sections.forEach((section) => {
      const el = section as HTMLElement;
      const top = el.offsetTop;
      const height = el.offsetHeight;
      const id = el.getAttribute("id");

      if (scrollY >= top && scrollY < top + height) {
        setActiveSection(`#${id}`);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar${scrolled ? " scrolled" : ""}${cinVisible ? " cin-nav--visible" : ""}`}
      id="navbar"
    >
      <div className="container">
        <a
          href="#hero"
          className="nav-logo"
          onClick={(e) => scrollTo(e, "#hero")}
        >
          &lt;Kaio /&gt;
        </a>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={activeSection === item.href ? "active" : ""}
                onClick={(e) => scrollTo(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`nav-toggle${menuOpen ? " open" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
