import { useState, useEffect, useRef, useCallback } from "react";
import "./WorkSection.css";

import WorksSVG from "./svg-bg/WorksSVG";
import { PROJECTS } from "./js/data";
import ProjectInfoPanel from "./components/ProjectInfoPanel";
import Carousel from "./components/Carusel";

export default function WorksSection() {
  const [activeType, setActiveTypeState] = useState(
    [...new Set(PROJECTS.map((p) => p.type))][0]
  );
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [infoFading, setInfoFading] = useState(false);
  const [labelVisible, setLabelVisible] = useState(true);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);

  const filteredProjects = PROJECTS.filter((p) => p.type === activeType);
  const activeProj = filteredProjects[activeProjectIdx] || null;

  // ── Intersection observer for section reveal ──
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── Auto-advance timer ──
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

  // ── Handlers ──
  const handleTypeChange = (type) => {
    setActiveTypeState(type);
    setActiveProjectIdx(0);
    setCurrentSlide(0);
  };

  const handleProjectSwitch = (idx) => {
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

  const goNext = () => {
    if (!activeProj) return;
    goTo((currentSlide + 1) % activeProj.slides.length);
  };

  const goPrev = () => {
    if (!activeProj) return;
    goTo(((currentSlide - 1) + activeProj.slides.length) % activeProj.slides.length);
  };

  return (
    <section className="works-section" ref={sectionRef} id="works">
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

        {/* ── Filter + thumbnails + info panel ── */}
        <ProjectInfoPanel
          allProjects={PROJECTS}
          filteredProjects={filteredProjects}
          activeType={activeType}
          activeProjectIdx={activeProjectIdx}
          activeProj={activeProj}
          infoFading={infoFading}
          onTypeChange={handleTypeChange}
          onProjectSwitch={handleProjectSwitch}
        />

        {/* ── Carousel (or empty state) ── */}
        {filteredProjects.length === 0 ? (
          <div className="works-empty-state">
            <div className="empty-diamond" />
            No projects in this category yet.
          </div>
        ) : (
          <Carousel
            activeProj={activeProj}
            currentSlide={currentSlide}
            labelVisible={labelVisible}
            onPrev={goPrev}
            onNext={goNext}
            onGoTo={goTo}
            onMouseEnter={() => clearInterval(timerRef.current)}
            onMouseLeave={resetTimer}
          />
        )}

      </div>
    </section>
  );
}