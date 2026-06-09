/* eslint-disable react-hooks/preserve-manual-memoization */
import { useState, useEffect, useRef, useCallback } from "react";
import "./WorkSection.css";

import WorksSVG from "./svg-bg/WorksSVG";
import { PROJECT_TYPES, PROJECTS } from "./js/data";

const TypeChip = ({ typeKey, label, count, isActive, onClick }) => {
  const t =
    typeKey === "all"
      ? { color: "#27500A", bg: "#EAF3DE", dotColor: "#639922", countBg: "#C0DD97", countText: "#27500A" }
      : PROJECT_TYPES[typeKey];

  return (
    <button
      onClick={onClick}
      className={`type-chip ${isActive ? "type-chip-active" : ""}`}
      style={{
        borderColor: isActive ? t.color : "var(--border)",
        background: isActive ? t.color : "var(--bg)",
        color: isActive ? "#EAF3DE" : t.color,
      }}
    > 
      {label}
      <span
        className="type-chip-count"
        style={{
          background: isActive ? "rgba(255,255,255,0.15)" : t.countBg,
          color: isActive ? "rgba(255,255,255,0.85)" : t.countText,
        }}
      >
        {count}
      </span>
    </button>
  );
};

const ProjThumb = ({ project, isActive, onClick }) => {
  const heroImage = project.slides?.find((s) => s.image)?.image || null;
  const [imgError, setImgError] = useState(false);

  return (
    <button
      onClick={onClick}
      className={`proj-thumb ${isActive ? "proj-thumb-active" : ""}`}
      style={{ "--thumb-color": project.color }}
    >
      <div className="proj-thumb-img-wrap" style={{ background: project.bg }}>
        {heroImage && !imgError ? (
          <img
            src={heroImage}
            alt={project.name}
            onError={() => setImgError(true)}
            className="proj-thumb-img"
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

const SlidePlaceholder = ({ slide }) => {
  const [imgError, setImgError] = useState(false);

  if (slide.image && !imgError) {
    return (
      <div
        className="slide-placeholder"
        style={{ background: "#0a0a0a", overflow: "hidden", position: "relative" }}
      >
        <img
          className="slide-real-image"
          src={slide.image}
          alt={slide.label}
          onError={() => setImgError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className="slide-placeholder"
      style={{
        background: `linear-gradient(135deg, hsl(${slide.hue} 28% 94%), hsl(${slide.hue} 22% 90%))`,
      }}
    >
      <div
        className="slide-grid"
        style={{
          backgroundImage: `linear-gradient(hsl(${slide.hue} 20% 75% / 0.25) 1px, transparent 1px), linear-gradient(90deg, hsl(${slide.hue} 20% 75% / 0.25) 1px, transparent 1px)`,
          backgroundSize: "36px 36px",
        }}
      />
      <div className="slide-diamond">
        <div className="slide-diamond-inner" style={{ color: `hsl(${slide.hue} 45% 30%)` }}>
          {slide.icon}
        </div>
      </div>
      <div className="slide-label" style={{ color: `hsl(${slide.hue} 40% 25%)` }}>
        {slide.label}
      </div>
      <div
        className="slide-placeholder-text"
        style={{ color: `hsl(${slide.hue} 20% 50%)`, borderColor: `hsl(${slide.hue} 25% 75%)` }}
      >
        Replace with app screenshot
      </div>
    </div>
  );
};

export default function WorksSection() {
  const [activeType, setActiveTypeState] = useState("all");
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [infoFading, setInfoFading] = useState(false);
  const [labelVisible, setLabelVisible] = useState(true);
  const timerRef = useRef(null);
  const stageRef = useRef(null);
  const touchStartX = useRef(0);

  const filteredProjects =
    activeType === "all" ? PROJECTS : PROJECTS.filter((p) => p.type === activeType);
  const activeProj = filteredProjects[activeProjectIdx] || null;

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => {
        if (!activeProj) return prev;
        return (prev + 1) % activeProj.slides.length;
      });
    }, 4500);
  }, [activeProj]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handleSetType = (type) => {
    setActiveTypeState(type);
    setActiveProjectIdx(0);
    setCurrentSlide(0);
  };

  const handleSwitchProject = (idx) => {
    if (idx === activeProjectIdx) return;
    setInfoFading(true);
    setTimeout(() => {
      setActiveProjectIdx(idx);
      setCurrentSlide(0);
      setInfoFading(false);
    }, 200);
    resetTimer();
  };

  const goTo = (idx) => {
    setLabelVisible(false);
    setTimeout(() => {
      setCurrentSlide(idx);
      setLabelVisible(true);
    }, 200);
    resetTimer();
  };

  const carMove = (dir) => {
    if (!activeProj) return;
    goTo(((currentSlide + dir) + activeProj.slides.length) % activeProj.slides.length);
  };

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) carMove(diff > 0 ? 1 : -1);
  };

  const t = activeProj ? PROJECT_TYPES[activeProj.type] : null;
  const currentSlideData = activeProj?.slides[currentSlide];

  return (
    <section className="works-section" id="works">
      <WorksSVG />

      <div className="works-inner">

        {/* ── Header ── */}
        <div className="works-fade-up works-fade-up-1 works-header">
          <div className="works-section-label">
            <span className="works-label-line" />
            <div className="accent-dot" />
            Selected work
            <span className="works-label-line" />
          </div>
          <h2 className="works-title">
            Built, shipped,<br />
            <em>and worth showing off.</em>
          </h2>
          <p className="works-sub">
            A look at the interfaces, tools, and web experiences I've shipped — from concept to production.
          </p>
        </div>

        <div className="works-divider" />

        {/* ── Type filter strip ── */}
        <div className="works-fade-up works-fade-up-2 works-filter-strip">
          <TypeChip
            typeKey="all"
            label="All"
            count={PROJECTS.length}
            isActive={activeType === "all"}
            onClick={() => handleSetType("all")}
          />
          {[...new Set(PROJECTS.map((p) => p.type))].map((k) => (
            <TypeChip
              key={k}
              typeKey={k}
              label={PROJECT_TYPES[k].label}
              count={PROJECTS.filter((p) => p.type === k).length}
              isActive={activeType === k}
              onClick={() => handleSetType(k)}
            />
          ))}
        </div>

        {/* ── Horizontal project thumb strip ── */}
        <div className="works-fade-up works-fade-up-3 works-thumb-strip">
          {filteredProjects.map((p, i) => (
            <ProjThumb
              key={p.id}
              project={p}
              isActive={i === activeProjectIdx}
              onClick={() => handleSwitchProject(i)}
            />
          ))}
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
          </div>
        )}

        {/* ── Carousel ── */}
        {filteredProjects.length === 0 ? (
          <div className="works-empty-state">
            <div className="empty-diamond" />
            No projects in this category yet.
          </div>
        ) : (
          <div
            ref={stageRef}
            className="works-fade-up works-fade-up-4 works-carousel"
            onMouseEnter={() => clearInterval(timerRef.current)}
            onMouseLeave={resetTimer}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {activeProj?.slides.map((slide, i) => (
                <div key={i} className="carousel-slide">
                  <SlidePlaceholder slide={slide} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Controls ── */}
        {activeProj && (
          <div className="works-fade-up works-fade-up-5 works-carousel-controls">
            <button className="carousel-arrow" onClick={() => carMove(-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div className="carousel-dots">
              {activeProj.slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`carousel-dot ${i === currentSlide ? "carousel-dot-active" : ""}`}
                />
              ))}
            </div>
            <button className="carousel-arrow" onClick={() => carMove(1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        )}

        {/* ── Slide info label ── */}
        {activeProj && (
          <div className="works-fade-up works-fade-up-6 works-slide-info">
            <div className={`slide-info-label ${!labelVisible ? "slide-info-hidden" : ""}`}>
              {currentSlideData?.label}
            </div>
            <div className={`slide-info-desc ${!labelVisible ? "slide-info-hidden" : ""}`}>
              {currentSlideData?.desc}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}