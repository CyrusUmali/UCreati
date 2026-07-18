import { useState, useEffect } from "react";
import { PROJECT_TYPES } from ".././js/data";
import "./WorksDivider.css";
import './ProjectInfoPanel.css'

// ── Shared image-loading hook (mirrors SlidePlaceholder's pattern) ──
function useImageLoad(src) {
  const [state, setState] = useState("skeleton"); // "skeleton" | "loading" | "loaded" | "error"

  useEffect(() => {
    if (!src) {
      setState("error");
      return;
    }
    setState("skeleton");

    const img = new Image();
    img.src = src;

    if (img.complete && img.naturalWidth > 0) {
      setState("loaded");
      return;
    }

    const timer = setTimeout(() => setState("loading"), 300);
    img.onload = () => { clearTimeout(timer); setState("loaded"); };
    img.onerror = () => { clearTimeout(timer); setState("error"); };

    return () => { clearTimeout(timer); img.onload = null; img.onerror = null; };
  }, [src]);

  return state;
}

// ── Vertical thumb list item ──
const ProjThumbRow = ({ project, isActive, onClick }) => {
  const heroImage = project.slides?.find((s) => s.image)?.image || null;
  const imgState = useImageLoad(heroImage);

  return (
    <button
      onClick={onClick}
      className={`proj-thumb-row ${isActive ? "proj-thumb-row-active" : ""}`}
      style={{ "--thumb-color": project.color }}
    >
      <div className="proj-thumb-row-img-wrap" style={{ background: project.bg }}>
        {!heroImage || imgState === "error" ? (
          <div className="proj-thumb-row-fallback" style={{ color: project.color }}>
            <project.Icon size={16} />
          </div>
        ) : (
          <>
            {imgState === "skeleton" && <div className="thumb-skeleton" />}
            {imgState === "loading" && <div className="thumb-spinner" />}
            <img
              src={heroImage}
              alt={project.name}
              className={`proj-thumb-row-img${project.viewType === "mobile" ? " proj-thumb-row-img--contain" : ""}${imgState === "loaded" ? " proj-thumb-row-img--visible" : ""}`}
            />
          </>
        )}
      </div>
      <span className="proj-thumb-row-name">{project.name}</span>
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

  const heroImage = activeProj?.slides?.find((s) => s.image)?.image || null;
  const heroState = useImageLoad(heroImage);

  return (
    <>
      {/* ── Hero image + vertical thumb list ── */}
      <div className={`works-hero-row works-fade-up works-fade-up-3 ${infoFading ? "works-info-panel-fading" : ""}`}>
        <div className="works-hero-image-wrap">
          {!heroImage || heroState === "error" ? (
            <div className="works-hero-fallback" style={{ color: activeProj?.color }}>
              {activeProj?.Icon && <activeProj.Icon size={32} />}
            </div>
          ) : (
            <>
              {heroState === "skeleton" && <div className="hero-skeleton" />}
              {heroState === "loading" && (
                <div className="hero-spinner-wrap">
                  <div className="hero-spinner" />
                </div>
              )}
              <img
                src={heroImage}
                alt={activeProj?.name}
                className={`works-hero-image${activeProj?.viewType === "mobile" ? " works-hero-image--contain" : ""}${heroState === "loaded" ? " works-hero-image--visible" : ""}`}
              />
            </>
          )}
        </div>

        <div className="works-thumb-list-wrap">
          <div className="works-thumb-list">
            {filteredProjects.map((p, i) => (
              <ProjThumbRow
                key={p.id}
                project={p}
                isActive={i === activeProjectIdx}
                onClick={() => onProjectSwitch(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Info panel ── */}
      {activeProj && (
        <div className={`works-info-panel works-info-panel-left ${infoFading ? "works-info-panel-fading" : ""}`}>
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
                <a href={activeProj.github} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  View on GitHub
                </a>
              )}
              {activeProj.demo && (
                <a href={activeProj.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost">
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