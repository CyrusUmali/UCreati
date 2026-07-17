import { useState, useRef, useEffect, useCallback } from "react";
import { PROJECT_TYPES } from ".././js/data";
import "./WorksDivider.css";


// ── Project thumbnail ──
const ProjThumb = ({ project, isActive, distance, onClick }) => {
  const heroImage = project.slides?.find((s) => s.image)?.image || null;
  const [imgError, setImgError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const absDist = Math.abs(distance);

  // responsive width table: [active, ±1, further]
  const widths = isMobile ? [120, 95] : [150];
  const width = absDist === 0 ? widths[0] : absDist === 1 ? widths[1] : widths[2];

  const scale   = absDist === 0 ? 1 : absDist === 1 ? 0.82 : 0.75;
  const opacity = absDist === 0 ? 1 : absDist === 1 ? 0.8  : 0.72;
  const blur    = absDist === 0 ? 0 : absDist === 1 ? 0.4    :  0.4;

  return (
    <button
      onClick={onClick}
      className={`proj-thumb ${isActive ? "proj-thumb-active" : ""}`}
      style={{
        "--thumb-color": project.color,
        width: `${width}px`,
        opacity,
        filter: `blur(${blur}px)`,
        transform: `scale(${scale})`,
      }}
    >
      <div className="proj-thumb-img-wrap" style={{ background: project.bg }}>
        {heroImage && !imgError ? (
          <img
            src={heroImage}
            alt={project.name}
            onError={() => setImgError(true)}
            className={`proj-thumb-img${project.viewType === "mobile" ? " proj-thumb-img--contain" : ""}`}
/>
        ) : (
          <div className="proj-thumb-fallback" style={{ color: project.color }}>
            <project.Icon size={20} />
          </div>
        )}
      </div>
      <span className="proj-thumb-name">{project.name}</span>
      <span className="proj-thumb-dot" />
    </button>
  );
};



// ── Main export ──
export default function ProjectInfoPanel({
  filteredProjects,
  activeProjectIdx,
  activeProj,
  infoFading,
  onProjectSwitch,
}) {
  const t = activeProj ? PROJECT_TYPES[activeProj.type] : null;

  // Thumb strip scroll state — local to this component
  const thumbStripRef = useRef(null);
  const [thumbScroll, setThumbScroll] = useState({ left: false, right: false });

  const updateThumbScroll = useCallback(() => {
    const el = thumbStripRef.current;
    if (!el) return;
    setThumbScroll({
      left: el.scrollLeft > 8,
      right: el.scrollLeft < el.scrollWidth - el.clientWidth - 8,
    });
  }, []);

  useEffect(() => {
    const el = thumbStripRef.current;
    if (!el) return;
    updateThumbScroll();
    el.addEventListener("scroll", updateThumbScroll);
    window.addEventListener("resize", updateThumbScroll);
    return () => {
      el.removeEventListener("scroll", updateThumbScroll);
      window.removeEventListener("resize", updateThumbScroll);
    };
  }, [filteredProjects, updateThumbScroll]);

  const scrollThumbs = (dir) => {
    thumbStripRef.current?.scrollBy({ left: dir * 200, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Horizontal project thumb strip ── */}
      <div className="works-thumb-strip-wrap">
        {thumbScroll.left && (
          <button className="thumb-scroll-btn thumb-scroll-left" onClick={() => scrollThumbs(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        )}
        <div ref={thumbStripRef} className="works-fade-up works-fade-up-3 works-thumb-strip">
          {filteredProjects.map((p, i) => (
            <ProjThumb
              key={p.id}
              project={p}
              isActive={i === activeProjectIdx}
              distance={i - activeProjectIdx}
              onClick={() => onProjectSwitch(i)}
            />
          ))}
        </div>
        {thumbScroll.right && (
          <button className="thumb-scroll-btn thumb-scroll-right" onClick={() => scrollThumbs(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Info panel ── */}
      {activeProj && (
        <div className={`works-info-panel ${infoFading ? "works-info-panel-fading" : ""}`}>
          <div className="info-panel-top">
            <span className="info-panel-name">{activeProj.name}</span>
            <span className="info-panel-sep" />
            <span className="info-panel-tagline" style={{ color: activeProj.color }}>
              {activeProj.tagline}
            </span>
          </div>
          <p className="info-panel-desc">{activeProj.desc}</p>
          <div className="info-panel-tags">
            {activeProj.tags.map((tag) => (
              <span key={tag} className="info-tag" style={{ color: activeProj.color, borderColor: t.border }}>
                {tag}
              </span>
            ))}
          </div>
          {(activeProj.github || activeProj.demo) && (
            <div className="info-panel-links">
              {activeProj.github && (
                <a
                  href={activeProj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"  
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  View on GitHub
                </a>
              )}
              {activeProj.demo && (
                <a
                  href={activeProj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}