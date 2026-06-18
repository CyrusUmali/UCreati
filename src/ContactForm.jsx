import { useState, useRef } from "react";
import {
  IconSend, IconArrowRight, IconArrowLeft,
  IconCheck, IconLoader2,
} from "@tabler/icons-react";

const PROJECT_TYPES  = ["Web app", "Mobile", "Landing page", "Design system", "API / backend", "Other"];
const STACK_OPTIONS  = ["React", "Next.js", "Vue", "Node", "Python", "PostgreSQL", "No preference"];
const TIMELINE_OPTIONS = ["ASAP (< 2 weeks)", "1–2 months", "3–6 months", "Ongoing / retainer", "Not sure yet"];
const BUDGET_OPTIONS   = ["Under $2k", "$2k – $5k", "$5k – $15k", "$15k – $40k", "$40k+", "Let's discuss"];
const TEAM_OPTIONS     = ["Just me", "2–5 people", "6–20 people", "20+ people"];

// Key lives in vite.config.js proxy — never exposed to the browser bundle
const TO_EMAIL   = "umalic65@gmail.com";
const FROM_EMAIL = "onboarding@resend.dev"; // swap for your verified domain sender

function buildEmailHtml(fields, projectTypes, stackChips) {
  const chips = (set) => [...set].join(", ") || "—";
  return `
    <h2 style="font-family:sans-serif;color:#111">New Project Brief 🚀</h2>
    <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
      <tr><td style="padding:8px 12px;font-weight:600;color:#555;width:160px">Name</td><td style="padding:8px 12px">${fields.name || "—"}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:600;color:#555">Email</td><td style="padding:8px 12px"><a href="mailto:${fields.email}">${fields.email || "—"}</a></td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#555">Building</td><td style="padding:8px 12px">${fields.oneliner || "—"}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:600;color:#555">Project type</td><td style="padding:8px 12px">${chips(projectTypes)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#555">Timeline</td><td style="padding:8px 12px">${fields.timeline || "—"}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:600;color:#555">Budget</td><td style="padding:8px 12px">${fields.budget || "—"}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#555">Team size</td><td style="padding:8px 12px">${fields.teamsize || "—"}</td></tr>
      <tr style="background:#f9f9f9"><td style="padding:8px 12px;font-weight:600;color:#555">Stack</td><td style="padding:8px 12px">${chips(stackChips)}</td></tr>
      <tr><td style="padding:8px 12px;font-weight:600;color:#555">Extra notes</td><td style="padding:8px 12px">${fields.extra || "—"}</td></tr>
    </table>
  `;
}

export default function ContactForm() {
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  const [step, setStep] = useState(1);
  const [projectTypes, setProjectTypes] = useState(new Set());
  const [stackChips,   setStackChips]   = useState(new Set());
  const [fields, setFields] = useState({
    name: "", email: "", oneliner: "",
    timeline: "", budget: "", teamsize: "", extra: "",
  });

  // submission state: "idle" | "loading" | "success" | "error"
  const [submitState, setSubmitState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  /* ── helpers ── */
  const toggleChip = (chip, setter) =>
    setter(prev => {
      const next = new Set(prev);
      next.has(chip) ? next.delete(chip) : next.add(chip);
      return next;
    });

  const handleChange = (e) =>
    setFields(f => ({ ...f, [e.target.name]: e.target.value }));

  /* ── panel animation ── */
  function goTo(direction) {
    const from      = direction === "forward" ? p1Ref.current : p2Ref.current;
    const to        = direction === "forward" ? p2Ref.current : p1Ref.current;
    const exitClass = direction === "forward" ? "exit-to-left"     : "exit-to-right";
    const enterClass= direction === "forward" ? "enter-from-right" : "enter-from-left";

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

  /* ── progress ── */
  const step1Fields = ["name", "email", "oneliner"];
  const step2Fields = ["timeline", "budget", "teamsize", "extra"];
  const s1Filled    = step1Fields.filter(k => fields[k].trim()).length + Math.min(projectTypes.size, 1);
  const s2Filled    = step2Fields.filter(k => fields[k].trim()).length + Math.min(stackChips.size, 1);
  const totalFields = step1Fields.length + step2Fields.length + 2;
  const progress    = Math.round(Math.min(100, ((s1Filled + s2Filled) / totalFields) * 100));

  /* ── submit ── */
  async function handleSubmit() {
    if (!fields.name || !fields.email) {
      setErrorMsg("Please fill in at least your name and email.");
      setSubmitState("error");
      return;
    }

    setSubmitState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to:   [TO_EMAIL],
          subject: `New project brief from ${fields.name}`,
          html: buildEmailHtml(fields, projectTypes, stackChips),
          reply_to: fields.email,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || `HTTP ${res.status}`);
      }

      setSubmitState("success");
    } catch (e) {
      console.error("Resend error:", e);
      setErrorMsg(e.message || "Something went wrong. Please try again.");
      setSubmitState("error");
    }
  }

  /* ── success screen ── */
  if (submitState === "success") {
    return (
      <div className="form-card form-card--success">
        <div className="success-icon">
          <IconCheck size={28} stroke={2} />
        </div>
        <h3 className="success-title">Brief sent!</h3>
        <p className="success-body">
          Thanks, <strong>{fields.name}</strong>. I'll review your project and get
          back to <strong>{fields.email}</strong> with a scoped proposal within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="form-card">
      {/* progress bar */}
      <div className="form-progress">
        <div className="form-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* step indicator */}
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

        {/* ── Step 1 ── */}
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

        {/* ── Step 2 ── */}
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

          {/* error message */}
          {submitState === "error" && (
            <p className="form-error">{errorMsg}</p>
          )}

          <div className="form-footer">
            <button className="btn-ghost" onClick={() => goTo("back")}
              disabled={submitState === "loading"}>
              <IconArrowLeft size={14} stroke={1.5} /> Back
            </button>
            <div className="form-footer-right">
              <span className="form-note">Scoped proposal<br />within 24 hours</span>
              <button
                className="btn-send"
                onClick={handleSubmit}
                disabled={submitState === "loading"}
              >
                {submitState === "loading" ? (
                  <><IconLoader2 size={14} stroke={1.5} className="spin" /> Sending…</>
                ) : (
                  <><IconSend size={14} stroke={1.5} /> Send Brief</>
                )}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}