import { useState, useRef , useEffect } from "react";
import "./ContactSection.css";
import ContactBgSVG from "./svg-bg/ContactBgSVG";
 
import { IconSend, IconClock, IconBolt, IconLock, IconArrowRight, IconArrowLeft, IconCheck, IconBrandFacebook, IconBrandLinkedin, IconBrandGithub, IconMail } from "@tabler/icons-react";


const PROJECT_TYPES = ["Web app", "Mobile", "Landing page", "Design system", "API / backend", "Other"];
const STACK_OPTIONS = ["React", "Next.js", "Vue", "Node", "Python", "PostgreSQL", "No preference"];
const TIMELINE_OPTIONS = ["ASAP (< 2 weeks)", "1–2 months", "3–6 months", "Ongoing / retainer", "Not sure yet"];
const BUDGET_OPTIONS = ["Under $2k", "$2k – $5k", "$5k – $15k", "$15k – $40k", "$40k+", "Let's discuss"];
const TEAM_OPTIONS = ["Just me", "2–5 people", "6–20 people", "20+ people"];
 
const SOCIALS = [
  {
    label: "Email",
    href: "mailto:umalic65@gmail.com",
    icon: IconMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/CyrusUmali",
    icon: IconBrandGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cyrus-carbungco-778612383/",
    icon: IconBrandLinkedin,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/cyrus.umali.1/",
    icon: IconBrandFacebook,
  },
];

export default function ContactSection() {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const [step, setStep] = useState(1);
  const [projectTypes, setProjectTypes] = useState(new Set());
  const [stackChips, setStackChips] = useState(new Set());
  const [fields, setFields] = useState({
    name: "", email: "", oneliner: "",
    timeline: "", budget: "", teamsize: "", extra: ""
  });

  const toggleChip = (chip, setter) => {
    setter(prev => {
      const next = new Set(prev);
      next.has(chip) ? next.delete(chip) : next.add(chip);
      return next;
    });
  };

  const handleChange = (e) => setFields(f => ({ ...f, [e.target.name]: e.target.value }));

  function goTo(direction) {
    const from = direction === "forward" ? p1Ref.current : p2Ref.current;
    const to   = direction === "forward" ? p2Ref.current : p1Ref.current;
    const exitClass  = direction === "forward" ? "exit-to-left"     : "exit-to-right";
    const enterClass = direction === "forward" ? "enter-from-right" : "enter-from-left";

    from.classList.add(exitClass);

    setTimeout(() => {
      from.classList.remove(exitClass);
      from.classList.add("panel-hidden");
      to.classList.remove("panel-hidden");
      setStep(direction === "forward" ? 2 : 1);
      requestAnimationFrame(() => {
        to.classList.add(enterClass);
        setTimeout(() => to.classList.remove(enterClass), 350);
      });
    }, 220);
  }

  const step1Fields = ["name", "email", "oneliner"];
  const step2Fields = ["timeline", "budget", "teamsize", "extra"];

  const s1Filled = step1Fields.filter(k => fields[k].trim()).length + Math.min(projectTypes.size, 1);
  const s2Filled = step2Fields.filter(k => fields[k].trim()).length + Math.min(stackChips.size, 1);
  const totalFields = step1Fields.length + step2Fields.length + 2;
  const progress = Math.round(Math.min(100, ((s1Filled + s2Filled) / totalFields) * 100));


  const sectionRef = useRef(null);

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

  return (
    <section className="contact-section" id="contact"  ref={sectionRef}>
      <ContactBgSVG />
      <div className="contact-accent-line" />

      <div className="contact-inner">

        {/* ── Left: identity column ── */}
        <div className="contact-left">
          <span className="contact-eyebrow">Start a project</span>
          <h2 className="contact-heading">
            Let's plan<br />your <em>build.</em>
          </h2>
          <p className="contact-sub">
            Fill in what you know — budget, timeline, stack — and I'll return a{" "}
            <strong>scoped proposal</strong> within 24 hours. No commitment required.
          </p>

          <div className="contact-meta">
            <div className="contact-meta-item">
              <IconClock size={14} stroke={1.5} />
              3 min to complete
            </div>
            <div className="contact-meta-item">
              <IconBolt size={14} stroke={1.5} />
              Proposal in 24 hrs
            </div>
            <div className="contact-meta-item">
              <IconLock size={14} stroke={1.5} />
              No commitment
            </div>
          </div>

          <div className="contact-socials">
  {SOCIALS.map(({ label, href, icon: Icon }) => (
    <a
      key={label}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      className="contact-social-link"
    >
      <Icon size={15} stroke={1.5} />
      {label}
    </a>
  ))}
</div>

          

       
        </div>

        {/* ── Right: project brief form ── */}
        <div className="contact-right">
          <div className="form-card">

            <div className="form-progress">
              <div className="form-progress-fill" style={{ width: `${progress}%` }} />
            </div>

            {/* Step indicator */}
            <div className="step-bar">
              <div className="step-item">
                <div className={`step-num ${step === 1 ? "active" : "done"}`}>
                  {step > 1 ? <IconCheck size={10} stroke={2.5} /> : "1"}
                </div>
                <span className={`step-label ${step === 1 ? "active" : ""}`}>About you</span>
              </div>
              <div className="step-connector" />
              <div className="step-item">
                <div className={`step-num ${step === 2 ? "active" : ""}`}>2</div>
                <span className={`step-label ${step === 2 ? "active" : ""}`}>The project</span>
              </div>
            </div>

            <div className="panels-wrap">

              {/* ── Step 1: Who you are + project type ── */}
              <div className="step-panel" ref={p1Ref}>
                <div className="form-section-title">Who you are</div>

                <div className="form-row">
                  <div className="form-field">
                    <label className="form-label">Name</label>
                    <input className="form-input" type="text" name="name"
                      placeholder="Alex Johnson" autoComplete="off"
                      value={fields.name} onChange={handleChange} />
                  </div>
                  <div className="form-field">
                    <label className="form-label">Email</label>
                    <input className="form-input" type="email" name="email"
                      placeholder="alex@company.com" autoComplete="off"
                      value={fields.email} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-section-title">The project</div>

                <div className="form-field">
                  <label className="form-label">In one sentence, what are you building?</label>
                  <input className="form-input" type="text" name="oneliner"
                    placeholder="e.g. A SaaS dashboard for tracking team OKRs"
                    autoComplete="off" value={fields.oneliner} onChange={handleChange} />
                </div>

                <div className="form-field">
                  <label className="form-label">Project type</label>
                  <div className="budget-chips">
                    {PROJECT_TYPES.map(opt => (
                      <span key={opt}
                        className={`budget-chip${projectTypes.has(opt) ? " active" : ""}`}
                        onClick={() => toggleChip(opt, setProjectTypes)}>
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="form-footer">
                  <span className="form-note">Step 1 of 2</span>
                  <button className="btn-send" onClick={() => goTo("forward")}>
                    Continue <IconArrowRight size={14} stroke={1.5} />
                  </button>
                </div>
              </div>

              {/* ── Step 2: Scope, stack & extras ── */}
              <div className="step-panel panel-hidden" ref={p2Ref}>
                <div className="form-section-title">Scope</div>

                <div className="form-row form-row-3">
                  <div className="form-field">
                    <label className="form-label">Timeline</label>
                    <select className="form-input form-select" name="timeline"
                      value={fields.timeline} onChange={handleChange}>
                      <option value="">Select</option>
                      {TIMELINE_OPTIONS.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Budget</label>
                    <select className="form-input form-select" name="budget"
                      value={fields.budget} onChange={handleChange}>
                      <option value="">Select</option>
                      {BUDGET_OPTIONS.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div className="form-field">
                    <label className="form-label">Team size</label>
                    <select className="form-input form-select" name="teamsize"
                      value={fields.teamsize} onChange={handleChange}>
                      <option value="">Select</option>
                      {TEAM_OPTIONS.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-section-title">Stack &amp; needs</div>

                <div className="form-field">
                  <label className="form-label">Preferred tech (optional)</label>
                  <div className="budget-chips">
                    {STACK_OPTIONS.map(opt => (
                      <span key={opt}
                        className={`budget-chip${stackChips.has(opt) ? " active" : ""}`}
                        onClick={() => toggleChip(opt, setStackChips)}>
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label">Anything else I should know?</label>
                  <textarea className="form-input" name="extra"
                    placeholder="Existing codebase, design files, must-have integrations, constraints..."
                    value={fields.extra} onChange={handleChange} />
                </div>

                <div className="form-footer">
                  <button className="btn-ghost" onClick={() => goTo("back")}>
                    <IconArrowLeft size={14} stroke={1.5} /> Back
                  </button>
                  <div className="form-footer-right">
                    <span className="form-note">Scoped proposal<br />within 24 hours</span>
                    <button className="btn-send">
                      <IconSend size={14} stroke={1.5} />
                      Send Brief
                    </button>
                  </div>
                </div>
              </div>

            </div>{/* end panels-wrap */}
          </div>
        </div>

      </div>
    </section>
  );
}