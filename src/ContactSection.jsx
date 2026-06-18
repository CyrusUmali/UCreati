import { useRef, useEffect } from "react";
import "./ContactSection.css";
import ContactBgSVG from "./svg-bg/ContactBgSVG";
import ContactForm from "./ContactForm";
import {
  IconClock, IconBolt, IconLock,
  IconBrandFacebook, IconBrandLinkedin, IconBrandGithub, IconMail,
} from "@tabler/icons-react";

const SOCIALS = [
  { label: "Email",    href: "mailto:umalic65@gmail.com",                          icon: IconMail },
  { label: "GitHub",   href: "https://github.com/CyrusUmali",                      icon: IconBrandGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/cyrus-carbungco-778612383/", icon: IconBrandLinkedin },
  { label: "Facebook", href: "https://www.facebook.com/cyrus.umali.1/",            icon: IconBrandFacebook },
];

export default function ContactSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <ContactBgSVG />
      <div className="contact-accent-line" />

      <div className="contact-inner">

        {/* ── Left: identity column ── */}
        <div className="contact-left">
          <span className="contact-eyebrow">Start a project</span>
          <h2 className="contact-heading">
            Let's plan<br />your <em>build.</em>
          </h2>
          <p className="contact-sub">
            Fill in what you know — budget, timeline, stack — and I'll return a{" "}
            <strong>scoped proposal</strong> within 24 hours. No commitment required.
          </p>

          <div className="contact-meta">
            <div className="contact-meta-item">
              <IconClock size={14} stroke={1.5} />
              3 min to complete
            </div>
            <div className="contact-meta-item">
              <IconBolt size={14} stroke={1.5} />
              Proposal in 24 hrs
            </div>
            <div className="contact-meta-item">
              <IconLock size={14} stroke={1.5} />
              No commitment
            </div>
          </div>

          <div className="contact-socials">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <Icon size={15} stroke={1.5} />
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Right: form ── */}
        <div className="contact-right">
          <ContactForm />
        </div>

      </div>
    </section>
  );
}