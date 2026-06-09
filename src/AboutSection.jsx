import styles from "./AboutSection.module.css";
import AboutSVG from "./svg-bg/AboutSVG";
import { skills, tags } from "./js/data";
const profileImage = "/cyrus-2.png";

const TAG_ICONS = {
  "React":       "ti-brand-react",
  "Next.js":     "ti-brand-nextjs",
  "TypeScript":  "ti-brand-typescript",
  "JavaScript":  "ti-brand-javascript",
  "Node.js":     "ti-brand-nodejs",
  "Figma":       "ti-brand-figma",
  "Tailwind":    "ti-brand-tailwind",
  "TailwindCSS": "ti-brand-tailwind",
  "Git":         "ti-brand-git",
  "GitHub":      "ti-brand-github",
  "PostgreSQL":  "ti-database",
  "MySQL":       "ti-database",
  "MongoDB":     "ti-database",
  "CSS":         "ti-brand-css3",
  "HTML":        "ti-brand-html5",
  "Vue":         "ti-brand-vue",
  "Vite":        "ti-brand-vite",
  "Docker":      "ti-brand-docker",
  "Vercel":      "ti-brand-vercel",
  "Supabase":    "ti-database",
  "Prisma":      "ti-database",
  "GraphQL":     "ti-api",
  "Redux":       "ti-components",
  "Framer":      "ti-vector-bezier",
  "GSAP":        "ti-player-play",
  "Three.js":    "ti-cube-3d-sphere",
};

export default function AboutSection() {
  return (
    <section className={styles.about} id="about">
      <AboutSVG />

      <div className={styles.contentWrap}>
        <div className={styles.topHeader}>
          <div className="section-label">
            <div className="accent-dot" />
            About me
          </div>
          <h2 className={styles.sectionTitle}>
            The mind behind<br />the <em>work</em>
          </h2>
        </div>

        <div className={styles.mainGrid}>
          {/* ── Left: Bio ── */}
          <div className={styles.leftCol}>
            <p className={styles.bioText}>
              I'm a <strong>creative developer</strong> with 6+ years building digital experiences at the intersection of design and engineering. I don't just write code — I think in systems, feel in pixels, and obsess over invisible details.
            </p>
            <p className={styles.bioText}>
              My work spans <strong>interactive web experiences</strong>, design systems, and motion-driven interfaces. I believe the best digital products feel inevitable — like they could not have been built any other way.
            </p>
            <div className={styles.highlightBlock}>
              <p className={styles.highlightQuote}>
                "I treat every project as a <strong>craft problem</strong>, not just a delivery task. The constraint is always a gift in disguise."
              </p>
            </div>
            <div className={styles.bioDivider} />
          </div>

          {/* ── Photo ── */}
          <div className={styles.photoCol}>
            <div className={styles.photoFrameOuter}>
              <div className={styles.frameBorderTl} />
              <div className={styles.frameBorderBr} />
              <div className={styles.frameShadow} />
              <div className={styles.photoContainer}>
                <img
                  src={profileImage}
                  alt="Cyrus - Creative Developer"
                  className={styles.profileImage}
                />
              </div>
              <div className={`${styles.decoSm} ${styles.decoSm1}`} />
              <div className={`${styles.decoSm} ${styles.decoSm2}`} />
            </div>
          </div>

          {/* ── Right: Skills ── */}
          <div className={styles.rightCol}>

            {/* Top: expertise + stack side by side */}
            <div className={styles.skillsTopRow}>

              {/* Expertise */}
              <div className={styles.expertiseCol}>
                <div className={styles.skillsEyebrow}>Expertise</div>
                {skills.map((s) => (
                  <div className={styles.skillRow} key={s.name}>
                    <div className={styles.skillTop}>
                      <span className={styles.skillName}>{s.name}</span>
                      <span className={styles.skillPct}>{s.pct}%</span>
                    </div>
                    <div className={styles.skillTrack}>
                      <div
                        className={styles.skillBar}
                        style={{ "--w": `${s.pct}%`, animationDelay: s.delay }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack */}
              <div className={styles.stackCol}>
                <div className={styles.tagsEyebrow}>Tools &amp; Stack</div>
                <div className={styles.tagsGrid}>
                  {tags.map((t) => {
                    const icon = TAG_ICONS[t] || "ti-code";
                    return (
                      <div className={styles.tagRow} key={t}>
                        <i className={`ti ${icon} ${styles.tagIcon}`} aria-hidden="true" />
                        <span className={styles.tagName}>{t}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Divider */}
            <div className={styles.dividerH} />

            {/* Stats row */}
            <div className={styles.statsRow}>
              <div className={styles.stripItem}>
                <span className={styles.stripNum}>06<span>+</span></span>
                <span className={styles.stripLabel}>Years exp.</span>
              </div>
              <div className={styles.stripDivider} />
              <div className={styles.stripItem}>
                <span className={styles.stripNum}>42</span>
                <span className={styles.stripLabel}>Projects</span>
              </div>
              <div className={styles.stripDivider} />
              <div className={styles.stripItem}>
                <span className={styles.stripNum}>18</span>
                <span className={styles.stripLabel}>Clients</span>
              </div>
              <div className={styles.stripDivider} />
              <div className={styles.stripItem}>
                <span className={styles.stripNum}>3<span>x</span></span>
                <span className={styles.stripLabel}>Awards</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}