import { useState, useEffect, useRef, useCallback } from "react";
import "./WorkSection.css";

import WorksSVG from "./svg-bg/WorksSVG";
import { PROJECTS } from "./js/data";
import ProjectInfoPanel from "./components/ProjectInfoPanel";
import Carousel from "./components/Carusel";

export default function WorksSection({ activeType }) {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [infoFading, setInfoFading] = useState(false);
  const [labelVisible, setLabelVisible] = useState(true);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);

  const filteredProjects = PROJECTS.filter((p) => p.type === activeType);
  const activeProj = filteredProjects[activeProjectIdx] || null;

  // ── Reset selection whenever the filter changes upstream ──
  useEffect(() => {
    setActiveProjectIdx(0);
    setCurrentSlide(0);
  }, [activeType]);

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

        {/* ── Filter + thumbnails + info panel ── */}
        <ProjectInfoPanel
          filteredProjects={filteredProjects}
          activeProjectIdx={activeProjectIdx}
          activeProj={activeProj}
          infoFading={infoFading}
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