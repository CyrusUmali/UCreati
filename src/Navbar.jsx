import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

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

  return (
    <header
      className={[
        styles.navbar,
        scrolled ? styles.scrolled : "",
        hidden ? styles.hidden : "",
      ].join(" ")}
    >
      <div className={styles.navLogo}>
        {/* <div className={styles.navLogoMark} /> */}
        <img src="./logo.png"className={styles.navLogoMark} alt="" />
        <span className={styles.navLogoText}>UCreati</span>
      </div>

      <ul className={styles.navLinks}>
        
      <li><a href="#about">About</a></li>
        <li><a href="#works">Work</a></li>
        <li><a href="#services">Services</a></li> 
      </ul>

      <a href="#contact" className={styles.navCta}>Let's Talk</a>

      {/* Mobile hamburger */}
      <button
        className={styles.mobMenu}
        aria-label="Menu"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className={menuOpen ? styles.barTop : ""} />
        <span className={menuOpen ? styles.barMid : ""} />
        <span className={menuOpen ? styles.barBot : ""} />
      </button>

      {/* Mobile drawer */}
      <div className={`${styles.mobNav}${menuOpen ? ` ${styles.open}` : ""}`}>
        <a href="#works" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Process</a>
        <a href="#" style={{ display: "inline-flex", width: "fit-content" }}>Let's Talk</a>
      </div>
    </header>
  );
}