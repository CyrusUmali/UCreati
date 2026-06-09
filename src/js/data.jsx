/* eslint-disable react-refresh/only-export-components */
 // ─── Icons ────────────────────────────────────────────────────────────────────

export const HomeIcon = ({ size = 20 }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9,22 9,12 15,12 15,22" />
    </svg>
  );
  
  export const PulseIcon = ({ size = 20 }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  );
  
  export const MapIcon = ({ size = 20 }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
      <polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
  
  export const DollarIcon = ({ size = 20 }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
  

  

  // ─── Icons ────────────────────────────────────────────────────────────────────
 
export const CodeIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
);


export   const PenIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width={size} height={size}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);


export const PROJECT_TYPES = {
  agriculture: {
    label: "Agriculture",
    color: "#1c3d2c", bg: "#eaf5ef", dotColor: "#6aab85",
    countBg: "#c8e6d6", countText: "#2a5c3f", border: "#c8e6d6",
  },
  developer: {
    label: "Developer Tools",
    color: "#1a2e52", bg: "#e8eef8", dotColor: "#4a72c4",
    countBg: "#b8ccee", countText: "#0f1f3d", border: "#b8ccee",
  },
  creative: {
    label: "Creative",
    color: "#5c1a3a", bg: "#f8e8f0", dotColor: "#c44a7e",
    countBg: "#eeb8d0", countText: "#3d0f26", border: "#eeb8d0",
  },
};

// ─── Projects Data ─────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: "agritrack", name: "AgriTrack", short: "AgriTrack",
    type: "agriculture", color: "#1c3d2c", bg: "#eaf5ef",
    tagline: "Farm management for local government units",
    desc: "AgriTrack gives municipal agriculture offices a single platform to register farms, track crop production, and report data to the Department of Agriculture — replacing paper-based records with live dashboards and exportable reports.",
    tags: ["5 modules", "Municipal-level", "DA-compliant", "Barangay mapping", "Multi-crop"],
    Icon: HomeIcon,
    slides: [
      {
        label: "Dashboard Overview",
        desc: "Municipal overview — farm counts, yield totals, sector distribution, and live weather at a glance.",
        hue: "140deg", screenLabel: "AgriTrack · Dashboard",
        image: "/agritrack/agritrack.png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>,
      },
      {
        label: "Satellite Farm Map",
        desc: "Every registered farm plotted on satellite imagery with polygon boundaries, crop type, and weather data.",
        hue: "155deg", screenLabel: "AgriTrack · Mapa",
        image: "/agritrack/agritrack (1).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
      },
      {
        label: "Production Analytics",
        desc: "Per-farm yearly and monthly yield charts, exportable as Excel or PDF for official DA reporting.",
        hue: "35deg", screenLabel: "AgriTrack · Mga Ani",
        image: "/agritrack/agritrack (2).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg>,
      },
      {
        label: "Barangay Heat Map",
        desc: "Color-coded choropleth map showing yield performance across every barangay — high, medium, and low zones.",
        hue: "200deg", screenLabel: "AgriTrack · Barangay Map",
        image: "/agritrack/agritrack (3).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><polygon points="1,6 1,22 8,18 16,22 23,18 23,2 16,6 8,2" /><line x1="8" y1="2" x2="8" y2="18" /><line x1="16" y1="6" x2="16" y2="22" /></svg>,
      },
      {
        label: "Farm Details & Records",
        desc: "Full farm profile — owner, location, sector, area, crop list, and production history all in one panel.",
        hue: "280deg", screenLabel: "AgriTrack · Mga Sakahan",
        image: "/agritrack/agritrack (4).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14,2 14,8 20,8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
      },
    ],
  },
  {
    id: "codeborn", name: "CodeBorn", short: "CodeBorn",
    type: "developer", color: "#1a2e52", bg: "#e8eef8",
    tagline: "AI-powered code review and collaboration",
    desc: "CodeBorn is a developer productivity platform that combines intelligent code review, real-time pair programming, and team-wide knowledge sharing — helping engineering teams ship faster without sacrificing code quality.",
    tags: ["4 modules", "Team-level", "AI-assisted", "GitHub integration", "Code review"],
    Icon: CodeIcon,
    slides: [
      {
        label: "Code Review Dashboard",
        desc: "All open pull requests in one view — AI-flagged issues, reviewer assignments, and merge readiness at a glance.",
        hue: "220deg", screenLabel: "CodeBorn · Reviews",
        image: "/codeborn/codeborn.png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><polyline points="16,18 22,12 16,6" /><polyline points="8,6 2,12 8,18" /></svg>,
      },
      {
        label: "Inline AI Suggestions",
        desc: "Context-aware suggestions inline on every diff — security flags, performance hints, and style improvements.",
        hue: "235deg", screenLabel: "CodeBorn · Diff View",
        image: "/codeborn/codeborn (1).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
      },
      {
        label: "Team Activity Feed",
        desc: "Live stream of commits, reviews, and comments across all repos — filterable by member, project, or date.",
        hue: "210deg", screenLabel: "CodeBorn · Activity",
        image: "/codeborn/codeborn (2).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><polyline points="22,12 18,12 15,21 9,3 6,12 2,12" /></svg>,
      },
      {
        label: "Knowledge Base",
        desc: "Auto-generated docs from merged PRs — searchable decisions, patterns, and architectural notes your team actually wrote.",
        hue: "200deg", screenLabel: "CodeBorn · Docs",
        image: "/codeborn/codeborn (3).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>,
      },
      {
        label: "Analytics & Metrics",
        desc: "Cycle time, review turnaround, and rework rate charts — surface bottlenecks before they stall your sprint.",
        hue: "245deg", screenLabel: "CodeBorn · Metrics",
        image: "/codeborn/codeborn (4).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" /></svg>,
      },
    ],
  },
  {
    id: "novelnexus", name: "NovelNexus", short: "NovelNexus",
    type: "creative", color: "#5c1a3a", bg: "#f8e8f0",
    tagline: "Writing workspace for serious fiction authors",
    desc: "NovelNexus is a distraction-free writing environment built around long-form fiction — with character relationship graphs, chapter timelines, world-building wikis, and AI-powered continuity checks that catch plot holes before your readers do.",
    tags: ["5 modules", "Solo & collaborative", "Plot tracking", "World-building", "AI continuity"],
    Icon: PenIcon,
    slides: [
      {
        label: "Manuscript Editor",
        desc: "A clean, full-screen writing canvas with chapter navigation, word targets, and focus mode for deep work sessions.",
        hue: "330deg", screenLabel: "NovelNexus · Write",
        image: "/novelnexus/novelnexus.png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
      },
      {
        label: "Character Web",
        desc: "Visual relationship graph linking every character — with role tags, arc notes, and appearance history per chapter.",
        hue: "315deg", screenLabel: "NovelNexus · Characters",
        image: "/novelnexus/novelnexus (1).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>,
      },
      {
        label: "Chapter Timeline",
        desc: "A horizontal timeline of every chapter with POV, scene count, and word count — drag to reorder your story structure.",
        hue: "345deg", screenLabel: "NovelNexus · Timeline",
        image: "/novelnexus/novelnexus (2).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><line x1="2" y1="12" x2="22" y2="12" /><circle cx="6" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="18" cy="12" r="2" /></svg>,
      },
      {
        label: "World-Building Wiki",
        desc: "A linked wiki for locations, lore, factions, and rules — automatically cross-referenced to the chapters that mention them.",
        hue: "300deg", screenLabel: "NovelNexus · World",
        image: "/novelnexus/novelnexus (3).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10z" /></svg>,
      },
      {
        label: "Continuity Checker",
        desc: "AI scans your full draft for contradictions — character ages, timeline gaps, location mismatches — flagged with source chapters.",
        hue: "320deg", screenLabel: "NovelNexus · Continuity",
        image: "/novelnexus/novelnexus (4).png",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" width="32" height="32"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22,4 12,14.01 9,11.01" /></svg>,
      },
    ],
  },
];










  export const skills = [
    { name: "Creative Dev",       pct: 95, delay: "0.5s"  },
    { name: "UI / UX Design",     pct: 88, delay: "0.65s" },
    { name: "Motion & Interaction", pct: 92, delay: "0.8s" },
    { name: "3D & WebGL",         pct: 74, delay: "0.95s" },
    { name: "Design Systems",     pct: 85, delay: "1.1s"  },
  ];
  
  export const tags = [
    "React", "Three.js", "GSAP", "Figma",
    "TypeScript", "WebGL", "Framer", "Next.js",
    "Blender", "CSS / SVG",
  ];


  export const BUDGET_OPTIONS = ["< $2k", "$2k – $5k", "$5k – $15k", "$15k+", "Let's talk"];