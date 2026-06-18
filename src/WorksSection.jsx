/* eslint-disable react-hooks/preserve-manual-memoization */
import { useState, useEffect, useRef, useCallback } from "react";
import "./WorkSection.css";

import WorksSVG from "./svg-bg/WorksSVG";
import { PROJECT_TYPES, PROJECTS } from "./js/data";

const TypeChip = ({ typeKey, label, count, isActive, onClick }) => {
  const t = PROJECT_TYPES[typeKey];

 
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
          background: isActive ? "rgba(255,255,255,0.15)" : null,
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
  const [imgState, setImgState] = useState("skeleton"); // "skeleton" | "loading" | "loaded" | "error"
  const imgRef = useRef(null); 

  // Kick off loading explicitly so we control the state machine
  useEffect(() => {
    if (!slide.image) return;
    setImgState("skeleton");

    const img = new Image();
    img.src = slide.image;

    // If browser already cached it, naturalWidth is set immediately
    if (img.complete && img.naturalWidth > 0) {
      setImgState("loaded");
      return;
    }

    const timer = setTimeout(() => setImgState("loading"), 300); // show skeleton briefly
    img.onload = () => { clearTimeout(timer); setImgState("loaded"); };
    img.onerror = () => { clearTimeout(timer); setImgState("error"); };

    return () => { clearTimeout(timer); img.onload = null; img.onerror = null; };
  }, [slide.image]);

  // ── Fallback placeholder (no image or error) ──
  if (!slide.image || imgState === "error") {
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
  }

  return ( 
      <div className="slide-placeholder" style={{ background: "#f0f0ee", overflow: "hidden", position: "relative" }}> 
      {/* Skeleton shimmer — shown first */}
      {imgState === "skeleton" && (
        <div className="slide-skeleton">
          <div className="slide-skeleton-icon" />
          <div className="slide-skeleton-line slide-skeleton-line--lg" />
          <div className="slide-skeleton-line slide-skeleton-line--sm" />
        </div>
      )}

      {/* Spinner — shown while image is actively loading */}
      {imgState === "loading" && (
        <div className="slide-spinner-wrap">
          <div className="slide-spinner" />
          <span className="slide-spinner-label">Loading</span>
        </div>
      )}

<img
  ref={imgRef}
  className={`slide-real-image ${imgState === "loaded" ? "slide-real-image--visible" : ""}`}
        src={slide.image}
  alt={slide.label}
/>
    </div>
  );
};



const BrowserFrame = ({ children, url }) => (
  <div className="device-frame device-desktop">
    <div className="browser-bar">
      <div className="browser-dots">
        <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
      </div>
      {/* <div className="browser-url">{url || "localhost:3000"}</div> */}
    </div>
    <div className="browser-screen">{children}</div>
  </div>
);

const PhoneFrame = ({ children }) => (
  <div className="device-frame device-mobile-outer">
    {/* <div className="phone-notch-bar">
      <span className="phone-time">9:41</span>
      <div className="phone-notch" />
      <span className="phone-time">●●●</span>
    </div> */}
    <div className="phone-screen">{children}</div>
    <div className="phone-home-bar"><div className="home-pill" /></div>
  </div>
);
 

export default function WorksSection() { 
const [activeType, setActiveTypeState] = useState(
  [...new Set(PROJECTS.map((p) => p.type))][0]
);
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [infoFading, setInfoFading] = useState(false); 
  const [labelVisible, setLabelVisible] = useState(true);
  const timerRef = useRef(null);
  const stageRef = useRef(null);
  const touchStartX = useRef(0);

  const filteredProjects = PROJECTS.filter((p) => p.type === activeType);
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
 

  const sectionRef = useRef(null);

// 2. Add this useEffect (alongside your other effects)
useEffect(() => {
  const el = sectionRef.current;
  if (!el) return;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("in-view");
        observer.disconnect(); // only trigger once
      }
    },
    { threshold: 0.15 }
  );
  observer.observe(el);
  return () => observer.disconnect();
}, []);
 

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
    <section className="works-section"  ref={sectionRef} id="works">
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
<div className="works-thumb-strip-wrap">
  {thumbScroll.left && (
    <button className="thumb-scroll-btn thumb-scroll-left" onClick={() => scrollThumbs(-1)}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="12" height="12">
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>
  )}

  <div
    ref={thumbStripRef}
    className="works-fade-up works-fade-up-3 works-thumb-strip"
  >
    {filteredProjects.map((p, i) => (
      <ProjThumb
        key={p.id}
        project={p}
        isActive={i === activeProjectIdx}
        onClick={() => handleSwitchProject(i)}
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

{activeProj.github && (
  <a
    href={activeProj.github}
    target="_blank"
    rel="noopener noreferrer"
    className="info-panel-github"
    style={{ color: activeProj.color, borderColor: t.border }}
  >
    <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
    View on GitHub
  </a>
)}



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
          className={`works-fade-up works-fade-up-4 works-carousel ${activeProj?.viewType === "mobile" ? "works-carousel--mobile" : ""}`}
           onMouseEnter={() => clearInterval(timerRef.current)}
            onMouseLeave={resetTimer}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
             {activeProj?.slides.map((slide, i) => {
  const content = <SlidePlaceholder slide={slide} />;
  const wrapped = activeProj.viewType === "mobile"
    ? <PhoneFrame>{content}</PhoneFrame>
    : <BrowserFrame url={activeProj.url}>{content}</BrowserFrame>;

  return (
    <div key={i} className="carousel-slide">
      {wrapped}
    </div>
  );
})}
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