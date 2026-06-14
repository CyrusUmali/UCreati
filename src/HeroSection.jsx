// HeroSection.jsx
import { useState } from "react";
import styles from "./HeroSection.module.css";
import HeroSVG from "./svg-bg/HeroSVG";

export default function HeroSection() { 
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <HeroSVG />
      <div className={styles.accentLine} />

      {/* Mobile Menu Button */}
      {/* <button 
        className={styles.mobMenu} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.mobMenuOpen1 : ""} />
        <span className={menuOpen ? styles.mobMenuOpen2 : ""} />
        <span className={menuOpen ? styles.mobMenuOpen3 : ""} />
      </button> */}

      <div className={styles.heroInner}>
        <div className={styles.heroEyebrow}>Creative Developer</div>
        <h1 className={styles.heroName}>
          Crafting<br /><em>Digital</em> Worlds
        </h1>
        <p className={styles.heroRole}>
          I design and build <strong>immersive interfaces</strong> and interactive experiences —
          where geometry meets motion and every pixel is intentional.
        </p>
        <div className={styles.heroCtas}>
          <a href="#works" className="btn-primary">
            View Work
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </a>
          <a href="#" className="btn-ghost">Download CV</a>
        </div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statItem}>
          <span className={styles.statNum}>06+</span>
          <span className={styles.statLabel}>Years exp.</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statNum}>42</span>
          <span className={styles.statLabel}>Projects</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statNum}>18</span>
          <span className={styles.statLabel}>Clients</span>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>

      <div className={`${styles.mobNav} ${menuOpen ? styles.open : ""}`}>
        <a href="#works" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#" onClick={() => setMenuOpen(false)}>Process</a>
        <a href="#" style={{ display: "inline-flex", width: "fit-content" }}>Let's Talk</a>
      </div>
    </section>
  );
}