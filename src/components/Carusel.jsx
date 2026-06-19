import { useRef } from "react";
import { SlidePlaceholder, BrowserFrame, PhoneFrame } from "./SlideRenderers";

export default function Carousel({
  activeProj,
  currentSlide,
  labelVisible,
  onPrev,
  onNext,
  onGoTo,
  onMouseEnter,
  onMouseLeave,
}) {
  const stageRef = useRef(null);
  const touchStartX = useRef(0);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? onNext() : onPrev();
  };

  const currentSlideData = activeProj?.slides[currentSlide];

  if (!activeProj) return null;

  return (
    <>
      {/* ── Carousel stage ── */}
      <div
        ref={stageRef}
        className={`works-fade-up works-fade-up-4 works-carousel ${activeProj.viewType === "mobile" ? "works-carousel--mobile" : ""}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {activeProj.slides.map((slide, i) => {
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

      {/* ── Controls ── */}
      <div className="works-fade-up works-fade-up-5 works-carousel-controls">
        <button className="carousel-arrow" onClick={onPrev} aria-label="Previous">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="carousel-dots">
          {activeProj.slides.map((_, i) => (
            <button
              key={i}
              onClick={() => onGoTo(i)}
              aria-label={`Slide ${i + 1}`}
              className={`carousel-dot ${i === currentSlide ? "carousel-dot-active" : ""}`}
            />
          ))}
        </div>
        <button className="carousel-arrow" onClick={onNext} aria-label="Next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="14" height="14">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── Slide info label ── */}
      <div className="works-fade-up works-fade-up-6 works-slide-info">
        <div className={`slide-info-label ${!labelVisible ? "slide-info-hidden" : ""}`}>
          {currentSlideData?.label}
        </div>
        <div className={`slide-info-desc ${!labelVisible ? "slide-info-hidden" : ""}`}>
          {currentSlideData?.desc}
        </div>
      </div>
    </>
  );
}