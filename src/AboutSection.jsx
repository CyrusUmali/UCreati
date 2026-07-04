import styles from "./AboutSection.module.css";
import AboutSVG from "./svg-bg/AboutSVG";
import { skills, tags } from "./js/data";
const profileImage = "/cyrus-2.png";
import { useEffect, useRef, useState } from 'react';
const TAG_ICONS = {
  "React": "ti-brand-react",
  "Next.js": "ti-brand-nextjs",
  "TypeScript": "ti-brand-typescript",
  "JavaScript": "ti-brand-javascript",
  "Node.js": "ti-brand-nodejs",
  "Figma": "ti-brand-figma",
  "Tailwind": "ti-brand-tailwind",
  "TailwindCSS": "ti-brand-tailwind",
  "Git": "ti-brand-git",
  "GitHub": "ti-brand-github",
  "MySQL": "ti-database",
  "CSS": "ti-brand-css3",
  "HTML": "ti-brand-html5",
  "Vue": "ti-brand-vue",
  "Vite": "ti-brand-vite",
  "Docker": "ti-brand-docker",
  "Vercel": "ti-brand-vercel",
  "Supabase": "ti-database",
  "Python": "ti-brand-python",
  "SpringBoot": "ti ti-coffee",
  "React/React Native": "ti ti-brand-react-native",
  "Flutter": "ti ti-brand-flutter",
  "Php": "ti ti-brand-php",
  "Firebase": "ti ti-brand-firebase",
  "AI/ML": "ti ti-robot",
};



export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.about} ${isVisible ? styles.visible : ''}`}
      id="about"
    >
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
              I'm a <strong>graduating student at LSPU SPCC</strong>, looking for fullstack or mobile roles where I can build products end to end.
            </p>
            <p className={styles.bioText}>
              For my capstone project, I handled development from start to finish, covering everything from data modeling and backend logic to the cross-platform frontend.
              Along the way, I learned a new framework from scratch and used it to build and deliver a functional system for a real government client.
            </p>
            <p className={styles.bioText}>
              I interned at <strong>Armada Logics</strong>, an offshore software firm in La Union. Working remotely alongside aspiring developers from across the Philippines reinforced something they stressed early on: strong fundamentals matter. AI can generate code, but understanding the underlying principles is what allows developers to evaluate its output, make informed decisions, and build reliable software.
            </p>
            {/* <p className={styles.bioText}>
  I work primarily with <strong>React, React Native, and Flutter</strong>.
</p> */}
            {/* Supervisor's Testimonial - using existing highlightBlock style */}
            <div className={styles.highlightBlock}>
              <p className={styles.highlightQuote}>
                "Cyrus demonstrated strong creativity and technical ability throughout his internship. His outputs were impressive and showed great attention to detail and thoughtful design — earning recognition during output reviews. During project collaboration week, his teammates highlighted his initiative, active contributions, and responsibility in handling major features."
              </p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.85rem', opacity: 0.7 }}>
                — Internship Supervisor, Armada Logics
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
                  alt="Cyrus - WMAD Developer"
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

            {/* Stats row - updated for student/intern status */}
            <div className={styles.statsRow}>
              <div className={styles.stripItem}>
                <span className={styles.stripNum}>2026</span>
                <span className={styles.stripLabel}>BSIT Graduate</span>
              </div>
              <div className={styles.stripDivider} />
              <div className={styles.stripItem}>
                <span className={styles.stripNum}>15+</span>
                <span className={styles.stripLabel}>Projects</span>
              </div>
              <div className={styles.stripDivider} />
              <div className={styles.stripItem}>
                <span className={styles.stripNum}>1</span>
                <span className={styles.stripLabel}>Internship</span>
              </div>
              <div className={styles.stripDivider} />
              <div className={styles.stripItem}>
                <span className={styles.stripNum}>6</span>
                <span className={styles.stripLabel}>Freelance clients</span>
              </div>

              <div className={styles.stripDivider} />
              <div className={styles.stripItem}>
                <span className={styles.stripNum}>2</span>
                <span className={styles.stripLabel}>Certification</span>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}