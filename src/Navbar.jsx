import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { label: "About", href: "#about", section: "about" },
  { label: "Work", href: "#works", section: "works" },
  { label: "Services", href: "#services", section: "services" },
  { label: "contactme", href: "#contactme", section: "contactme" },

];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const lastY = useRef(0);

  // Hide/show navbar on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map(({ section }) =>
      document.getElementById(section)
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={[
          styles.navbar,
          scrolled ? styles.scrolled : "",
          hidden ? styles.hidden : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {/* Logo */}
        <div className={styles.navLogo}>
          <img src="./logo.png" className={styles.navLogoMark} alt="" />
          <span className={styles.navLogoText}>UCreati</span>
        </div>

        {/* Desktop links */}
        <ul className={styles.navLinks}>
          {NAV_LINKS.map(({ label, href, section }) => (
            <li key={section}>
              <a
                href={href}
                className={activeSection === section ? styles.active : ""}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className={styles.navCta}>Let's Talk</a>

        {/* Hamburger */}
        <button
          className={`${styles.mobMenu}${menuOpen ? ` ${styles.isOpen}` : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={`${styles.bar} ${styles.bar1}`} />
          <span className={`${styles.bar} ${styles.bar2}`} />
          <span className={`${styles.bar} ${styles.bar3}`} />
        </button>
      </header>

      {/* Overlay backdrop */}
      <div
        className={`${styles.mobOverlay}${menuOpen ? ` ${styles.open}` : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <nav
        className={`${styles.mobNav}${menuOpen ? ` ${styles.open}` : ""}`}
        aria-label="Mobile navigation"
      >
        <div className={styles.mobNavInner}>
          <ul className={styles.mobNavLinks}>
            {NAV_LINKS.map(({ label, href, section }) => (
              <li key={section}>
                <a
                  href={href}
                  className={activeSection === section ? styles.active : ""}
                  onClick={closeMenu}
                >
                  <span className={styles.mobLinkLabel}>{label}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className={styles.mobCta} onClick={closeMenu}>
            Let's Talk
          </a>
        </div>
      </nav>
    </>
  );
}