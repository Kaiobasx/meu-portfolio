"use client";

import useReveal from "@/hooks/useReveal";

interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "GitHub",
    icon: "ph ph-github-logo",
    url: "https://github.com/Kaiobasx",
  },
  {
    label: "LinkedIn",
    icon: "ph ph-linkedin-logo",
    url: "https://www.linkedin.com/in/kaio-vinicius",
  },
  {
    label: "Instagram",
    icon: "ph ph-instagram-logo",
    url: "https://www.instagram.com/kaiobasx.dev/",
  },
  {
    label: "WhatsApp",
    icon: "ph ph-whatsapp-logo",
    url: "https://wa.me/5511976277421",
  },
];

export default function Contact() {
  const ref = useReveal();

  return (
    <section
      className="contact"
      id="contact"
      style={{ background: "var(--bg-primary)", position: "relative" }}
    >
      <div className="container">
        <div className="contact-wrapper reveal" ref={ref}>
          <p className="section-label">Contato</p>
          <h2 className="section-title">Vamos trabalhar juntos?</h2>
          <p className="section-desc">
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Sinta-se à vontade para entrar em contato!
          </p>

          <div className="contact-links">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-chip"
              >
                <i className={`${link.icon} chip-icon`}></i> {link.label}
              </a>
            ))}
          </div>

          <a href="mailto:kaiooliveira528@gmail.com" className="contact-email-btn">
            <i className="ph ph-envelope-simple"></i> Enviar Email
          </a>
        </div>
      </div>
    </section>
  );
}
