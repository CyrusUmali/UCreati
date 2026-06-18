// HeroSection.jsx
import { useState, useRef} from "react";
import styles from "./HeroSection.module.css";
import HeroSVG from "./svg-bg/HeroSVG";
import { BorderSnake } from "./BorderSnake";

export default function HeroSection() { 
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  return (
    <section className={styles.hero}>
      <HeroSVG />
      <BorderSnake containerRef={heroRef} color="#3B6D11" />
      <div className={styles.accentLine} />
 
      <div className={styles.heroInner}>
        <div className={styles.heroEyebrow}>Full-Stack Developer</div>
        <h1 className={styles.heroName}>
          Crafting<br /><em>Digital</em> Worlds
        </h1>
        <p className={styles.heroRole}>
        I design and develop modern web applications, combining strong engineering
  fundamentals with intuitive user experiences to build software that solves
  real problems.
        </p>
        <div className={styles.heroCtas}>
  <a href="#works" className="btn-primary">
    View Work
    <svg
      width="13"
      height="13"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 7h10M8 3l4 4-4 4" />
    </svg>
  </a>

  <a
    href="/Cyrus U. Carbungco - Resume.pdf"
    download="Cyrus-U-Carbungco-Resume.pdf"
    className="btn-ghost"
  >
    Download CV
  </a>
</div>
      </div>

      <div className={styles.statStrip}>
        <div className={styles.statItem}>
          <span className={styles.statNum}>6</span>
          <span className={styles.statLabel}>Freelance clients.</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statNum}>20+</span>
          <span className={styles.statLabel}>Projects</span>
        </div>
        <div className={styles.statDivider} />
        <div className={styles.statItem}>
          <span className={styles.statNum}>800+</span>
          <span className={styles.statLabel}>Active Users</span>
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