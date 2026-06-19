import { useEffect, useRef, useState } from "react";
import "./WorksDivider.css";
import { PROJECT_TYPES } from "../js/data";
 
const t = {
  surface:  "#f0f3ee",
  border:   "#c8d4c8",
  primary:  "#3b6d11",
  primaryD: "#27500a",
};

// ── Type chip ──
const TypeChip = ({ typeKey, label, count, isActive, onClick }) => {
  const pt = PROJECT_TYPES[typeKey];
  return (
    <button
      onClick={onClick}
      className={`type-chip ${isActive ? "type-chip-active" : ""}`}
      style={{
        borderColor: isActive ? pt.color : "var(--border)",
        background: isActive ? pt.color : "var(--bg)",
        color: isActive ? "#EAF3DE" : pt.color,
      }}
    >
      {label}
      <span
        className="type-chip-count"
        style={{
          background: isActive ? "rgba(255,255,255,0.15)" : null,
          color: isActive ? "rgba(255,255,255,0.85)" : pt.countText,
        }}
      >
        {count}
      </span>
    </button>
  );
};

export default function WorksDivider({ allProjects, activeType, onTypeChange }) {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
 
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    // Respect reduced-motion users by just showing everything immediately.
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`wd-wrap ${inView ? "is-in-view" : ""}`}>
      <div ref={sectionRef} className="wd-section">

      <svg className="wd-bg-svg" viewBox="0 0 1440 360"
        preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">

        {/* grid */}
        <line x1="600" y1="0" x2="600" y2="360" stroke={t.primary} strokeWidth="0.5" opacity="0.07" />
        <line x1="0" y1="180" x2="1440" y2="180" stroke={t.primary} strokeWidth="0.5" opacity="0.07" />

        {/* ── LEFT: 2 shapes ── */}

        {/* XL surface diamond – bleeds off left, scaled to ~60% */}
        <g className="anim-diamond-group-1" style={{ transformOrigin: "20px 72px" }}>
          <path fill={t.surface} opacity="0.7" transform="scale(0.6) translate(-40, 0)"
            d="M33-102L-202,133c-20,20-20,52,0,72L33,340c20,20,52,20,72,0L340,105c20-20,20-52,0-72L105-102C85-122,53-122,33-102z" />
          <path fill="none" stroke={t.primary} strokeWidth="1.5" className="anim-outline-1"
            transform="scale(0.6) translate(-40, 0)"
            d="M40-95L-195,140c-20,20-20,52,0,72L40,347c20,20,52,20,72,0L347,112c20-20,20-52,0-72L112-95C92-115,60-115,40-95z" />
        </g>

        {/* ── RIGHT: 3 shapes ── */}

        {/* XL surface diamond – bleeds off right, scaled ~65% */}
        <g className="anim-diamond-group-2" style={{ transformOrigin: "1140px 180px" }}>
          <path fill={t.surface} opacity="0.55" transform="translate(0,-160) scale(0.65) translate(570, 90)"
            d="M1140,760L960,580c-20-20-20-52,0-72L1140,328c20-20,52-20,72,0L1392,508c20,20,20,52,0,72L1212,760C1192,780,1160,780,1140,760z" />
          <path fill="none" stroke={t.primary} strokeWidth="1.5" className="anim-outline-1"
            transform="translate(0,-160) scale(0.65) translate(570, 90)"
            d="M1134,774L954,594c-20-20-20-52,0-72L1134,342c20-20,52-20,72,0L1386,522c20,20,20,52,0,72L1206,774C1186,794,1154,794,1134,774z" />
        </g>

        {/* Medium primary filled right */}
        <g className="anim-diamond-group-3" style={{ transformOrigin: "1060px 155px" }}>
          <path fill={t.primary} className="anim-fill-pulse-3" transform="scale(0.6) translate(1100, 50)"
            d="M1115,468L1038,391c-18-18-18-47,0-65L1115,249c18-18,47-18,65,0L1257,326c18,18,18,47,0,65L1180,468C1162,486,1133,486,1115,468z" />
          <path fill="none" stroke={t.primary} strokeWidth="1" opacity="0.7"
            transform="scale(0.6) translate(1100, 50)"
            d="M1111,488L1034,411c-18-18-18-47,0-65L1111,269c18-18,47-18,65,0L1253,346c18,18,18,47,0,65L1176,488C1158,506,1129,506,1111,488z" />
        </g>

        {/* Small border diamond right-centre */}
        <g className="anim-diamond-group-5" style={{ transformOrigin: "890px 192px" }}>
          <path fill={t.border} opacity="0.7" transform="scale(0.7) translate(590, 80)"
            d="M888,454L848,414c-12-12-12-32,0-44L888,330c12-12,32-12,44,0L972,370c12,12,12,32,0,44L932,454C920,466,900,466,888,454z" />
          <path fill="none" stroke={t.primary} strokeWidth="1" opacity="0.5"
            transform="scale(0.7) translate(590, 80)"
            d="M884,472L844,432c-12-12-12-32,0-44L884,348c12-12,32-12,44,0L968,388c12,12,12,32,0,44L928,472C916,484,896,484,884,472z" />
        </g>

        {/* Trail ring off right XL */}
        <ellipse cx="1140" cy="180" rx="150" ry="150"
          fill="none" stroke={t.primary} strokeWidth="0.5" opacity="0"
          style={{ transformOrigin:"1140px 180px", animation:"trailFade 6s ease-out 2s infinite" }} />
        <ellipse cx="1140" cy="180" rx="150" ry="150"
          fill="none" stroke={t.primary} strokeWidth="0.5" opacity="0"
          style={{ transformOrigin:"1140px 180px", animation:"trailFade 6s ease-out 4.5s infinite" }} />
      </svg>

      <div className="wd-rule-left" />

      <div className="wd-inner">
        <div>
          <div className="wd-eyebrow">
            <span className="wd-eline" />
            <span className="wd-edot" />
            Selected Work
            <span className="wd-eline" />
          </div>
          <h2 className="wd-heading">
            <span className="wd-heading-wipe">Built, shipped,</span>
            <em className="wd-heading-outline">
              <span className="wd-heading-wipe wd-heading-wipe-2">and worth showing off.</span>
            </em>
          </h2>
          <p className="wd-sub">
            A look at the interfaces, tools, and web experiences I've shipped —
            from <strong>concept to production</strong>.
          </p>
        </div>

        <div className="wd-meta">
          <span className="wd-meta-num">15+</span>
          <span className="wd-meta-label">Projects shipped</span>
        </div>
      </div>

      <div className="wd-bottom-bar" />
      <div className="wd-bottom-diamond" />
      </div>
 
      <div className="works-filter-strip">
        {[...new Set(allProjects.map((p) => p.type))].map((k) => (
          <TypeChip
            key={k}
            typeKey={k}
            label={PROJECT_TYPES[k].label}
            count={allProjects.filter((p) => p.type === k).length}
            isActive={activeType === k}
            onClick={() => onTypeChange(k)}
          />
        ))}
      </div>
    </div>
  );
}