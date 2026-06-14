import { useEffect, useRef } from "react";
import {
  IconLayersSubtract,
  IconCode,
  IconServer2,
  IconVectorBezier2,
  IconTool,
  IconArrowNarrowRight,
} from "@tabler/icons-react";
import ServicesSVG from "./svg-bg/ServicesSVG";
import "./ServicesSection.css";

const CARDS = [
  {
    icon: <IconCode size={18} />,
    title: "Front-End Engineering",
    desc: "Pixel-perfect, responsive interfaces with deliberate motion. Built in React or vanilla accessible and production-ready from day one.",
  },
  {
    icon: <IconServer2 size={18} />,
    title: "Back-End & API Design",
    desc: "Scalable REST and GraphQL APIs, database architecture, and auth flows. Built to handle real traffic with clean separation between layers.",
  },
  {
    icon: <IconVectorBezier2 size={18} />,
    title: "UI / UX Design",
    desc: "High-fidelity Figma work grounded in system thinking tokens, components, and interaction specs that hand off cleanly and scale well.",
  },
  {
    icon: <IconTool size={18} />,
    title: "Technical Consulting",
    desc: "Stack decisions, code reviews, and architecture workshops. Useful for startups hiring their first engineers or teams tackling a tricky pivot.",
  },
];

function ServiceCard({ icon, title, desc }) {
  return (
    <div className="svc-card reveal">
      <div className="card-icon-wrap">{icon}</div>
      <div className="card-title">{title}</div>
      <p className="card-desc">{desc}</p>
      <a href="#" className="card-link">
        Learn more <IconArrowNarrowRight size={11} />
      </a>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = [
              ...document.querySelectorAll(".svc-grid .reveal"),
            ];
            const idx = siblings.indexOf(entry.target);
            const delay = idx >= 0 ? idx * 90 : 0;
            setTimeout(() => entry.target.classList.add("visible"), delay);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = sectionRef.current?.querySelectorAll(".reveal") ?? [];
    targets.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef}>
      <ServicesSVG />

      <div className="svc-heading reveal">
        <h2>Our <em>Services</em></h2>
      </div>

      <div className="svc-grid">
        {/* Featured card spans 2 rows */}
        <div className="svc-card featured reveal">
          <div className="featured-arrow">
            <IconLayersSubtract size={20} />
          </div>
          <div className="featured-body">
            <div className="featured-label">Core Offering</div>
            <div className="featured-title">
              Full-Stack<br />Development
            </div>
            <p className="featured-desc">
              Complete web applications from database schema to polished UI.
              One developer, full ownership, zero handoff friction.
            </p>
            <div className="featured-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>PostgreSQL</span>
              <span>Next.js</span>
            </div>
          </div>
        </div>

        {/* Regular cards */}
        {CARDS.map((card) => (
          <ServiceCard key={card.title} {...card} />
        ))}
      </div>

      <div className="svc-footer reveal">
        <span className="svc-footer-note">
          Custom scope? Let's figure it out together.
        </span>
        <a href="#" className="btn-primary">
          Start a Project
          <IconArrowNarrowRight size={14} />
        </a>
      </div>
    </section>
  );
}