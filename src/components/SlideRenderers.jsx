import { useState, useEffect, useRef } from "react";

export const SlidePlaceholder = ({ slide }) => {
  const [imgState, setImgState] = useState("skeleton"); // "skeleton" | "loading" | "loaded" | "error"
  const imgRef = useRef(null);

  useEffect(() => {
    if (!slide.image) return;
    setImgState("skeleton");

    const img = new Image();
    img.src = slide.image;

    if (img.complete && img.naturalWidth > 0) {
      setImgState("loaded");
      return;
    }

    const timer = setTimeout(() => setImgState("loading"), 300);
    img.onload = () => { clearTimeout(timer); setImgState("loaded"); };
    img.onerror = () => { clearTimeout(timer); setImgState("error"); };

    return () => { clearTimeout(timer); img.onload = null; img.onerror = null; };
  }, [slide.image]);

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
      {imgState === "skeleton" && (
        <div className="slide-skeleton">
          <div className="slide-skeleton-icon" />
          <div className="slide-skeleton-line slide-skeleton-line--lg" />
          <div className="slide-skeleton-line slide-skeleton-line--sm" />
        </div>
      )}
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

export const BrowserFrame = ({ children, url }) => (
  <div className="device-frame device-desktop">
    <div className="browser-bar">
      <div className="browser-dots">
        <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
      </div>
    </div>
    <div className="browser-screen">{children}</div>
  </div>
);

export const PhoneFrame = ({ children }) => (
  <div className="device-frame device-mobile-outer">
    <div className="phone-screen">{children}</div>
    <div className="phone-home-bar"><div className="home-pill" /></div>
  </div>
);