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


// In your js/data.js file, update PROJECT_TYPES:

export const PROJECT_TYPES = {
  agriculture: {
    label: "AgriTech",
    color: "#1c3d2c",
    bg: "#eaf5ef",
    border: "#c5e0d0",
    dotColor: "#2d6a4f",
    countBg: "#d4e8db",
    countText: "#1c3d2c"
  },
  ml: {
  label: "ML/AI",
  color: "#2b6e4f",
  bg: "#eaf8f0",
  border: "#c5e8d5",
  dotColor: "#3a8a5f",
  countBg: "#d4eedf",
  countText: "#2b6e4f"
},
  developer: {
    label: "Developer",
    color: "#1a2e52",
    bg: "#e8eef8",
    border: "#c5d5e8",
    dotColor: "#2c4c7c",
    countBg: "#d4e0f0",
    countText: "#1a2e52"
  },
  productivity: {
    label: "Productivity",
    color: "#5c1a3a",
    bg: "#f8e8f0",
    border: "#e8c5d5",
    dotColor: "#8b3a5a",
    countBg: "#f0d4e4",
    countText: "#5c1a3a"
  },
  // ADD THESE NEW TYPES:
  game: {
    label: "Games",
    color: "#1a4a5c",
    bg: "#e0f0f5",
    border: "#c5dce5",
    dotColor: "#2a6a7c",
    countBg: "#d4e8f0",
    countText: "#1a4a5c"
  },
  library: {
    label: "Library",
    color: "#5c1a3a",
    bg: "#f8e8f0",
    border: "#e8c5d5",
    dotColor: "#8b3a5a",
    countBg: "#f0d4e4",
    countText: "#5c1a3a"
  },
  ecommerce: {
    label: "E-Commerce",
    color: "#2d5a3b",
    bg: "#eaf4e6",
    border: "#c5e0d0",
    dotColor: "#3a7a4f",
    countBg: "#d4e8db",
    countText: "#2d5a3b"
  }
};

// ─── Projects Data ─────────────────────────────────────────────────────────────

export const PROJECTS = [



  {
    id: "agritrack", name: "AgriTrack", short: "AgriTrack",
    type: "agriculture", color: "#1c3d2c", bg: "#eaf5ef",
    tagline: "Farm management for local government units",
    desc: "AgriTrack gives municipal agriculture offices a single platform to register farms, track crop production, and report data to the Department of Agriculture replacing paper-based records with live dashboards and exportable reports. Built with Flutter for web, Android, and Windows.",
    tags: ["5 modules", "Municipal-level", "DA-compliant", "Barangay mapping", "Multi-crop", "Flutter", "Cross-platform"],
    Icon: HomeIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/Agritrack_",
    slides: [
      {
        label: "Dashboard Overview",
        desc: "Central command for San Pablo City agriculture total farm counts, crop yield summaries, sector distribution, and key metrics at a glance.",
        hue: "140deg", screenLabel: "AgriTrack · Dashboard",
        image: "/agritrack/agritrack.png",
      },
      {
        label: "Sector Data Analytics",
        desc: "Breakdown of production data by sector compare yield performance across different farm types and crop categories.",
        hue: "155deg", screenLabel: "AgriTrack · Sector Analytics",
        image: "/agritrack/agritrack (1).png",
      },
      {
        label: "Barangay Yield Heat Map",
        desc: "Color-coded choropleth map tracking yield trends per barangay for specific crops identify high and low performing areas at a glance.",
        hue: "35deg", screenLabel: "AgriTrack · Heat Map",
        image: "/agritrack/agritrack (2).png",
      },
      {
        label: "Farm Information Modal",
        desc: "Detailed farm profile with owner details, location, crop list, and built-in production analytics all accessible in one modal view.",
        hue: "200deg", screenLabel: "AgriTrack · Farm Details",
        image: "/agritrack/agritrack (3).png",
      },
      {
        label: "Mapped Farm (Selected)",
        desc: "Satellite view showing a specific farm's polygon boundary appears when you tap any farm on the map. Displays crop type and area data inline.",
        hue: "280deg", screenLabel: "AgriTrack · Farm Select",
        image: "/agritrack/agritrack (4).png",
      },
      {
        label: "Map View (Default)",
        desc: "Full satellite map interface before farm selection all registered farms visible as interactive polygons across San Pablo City's agricultural lands.",
        hue: "150deg", screenLabel: "AgriTrack · Map Explorer",
        image: "/agritrack/agritrack (5).png",
      },
    ],
},
  {
    id: "codeborn", name: "CodeBorn", short: "CodeBorn",
    type: "game", color: "#1a2e52", bg: "#e8eef8",
    tagline: "2D RPG game where coding meets combat",
    desc: "CodeBorn is a 2D RPG game built with RPG Game Maker for a school project. Players fight digital mobs and solve coding problems to progress blending turn-based combat with programming challenges that teach logic, syntax, and problem-solving.",
    tags: ["2D RPG", "School project", "Coding combat", "Turn-based", "Educational"], 
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/Codeborn-Web-D",
    slides: [
      {
        label: "Title Screen",
        desc: "The gateway into the digital abyss a late-night coder's last stop before reality bends.",
        hue: "220deg", screenLabel: "CodeBorn · Title",
        image: "/codeborn/codeborn.png",
      },
      {
        label: "Before the Collapse",
        desc: "A tired programmer, deep in a late-night coding session unaware that reality is about to glitch.",
        hue: "235deg", screenLabel: "CodeBorn · Prologue",
        image: "/codeborn/codeborn (1).png",
      },
      {
        label: "The Blackout",
        desc: "Exhaustion takes over the screen flickers, the world dissolves, and the coder is pulled into another dimension.",
        hue: "210deg", screenLabel: "CodeBorn · Collapse",
        image: "/codeborn/codeborn (2).png",
      },
      {
        label: "The Guide",
        desc: "Awakening in a strange, corrupted world, a digital guide explains the truth: solve coding challenges or face turn-based combat. Only by clearing glitches can you move forward.",
        hue: "200deg", screenLabel: "CodeBorn · Awakening",
        image: "/codeborn/codeborn (3).png",
      },
      {
        label: "Glitched World",
        desc: "Explore an unstable dimension filled with distortions each area locked until you solve its coding puzzle.",
        hue: "245deg", screenLabel: "CodeBorn · Exploration",
        image: "/codeborn/codeborn (4).png",
      },
      {
        label: "Failed Code · Turn-Based Combat",
        desc: "A wrong answer triggers an old-school turn-based RPG battle fight digital mobs the hard way until you can retry the challenge.",
        hue: "200deg", screenLabel: "CodeBorn · Combat Fallback",
        image: "/codeborn/codeborn (5).png", // kept as placeholder; you can replace with actual combat screenshot
      },
    ],
  },
  {
    id: "novelnexus", name: "NovelNexus", short: "NovelNexus",
    type: "library", color: "#5c1a3a", bg: "#f8e8f0",
    tagline: "Subscription-based library management system",
    desc: "NovelNexus is a subscription-based library management system built with PHP and Stripe. It handles member subscriptions, book borrowing, digital lending, and automated late fees designed for modern libraries transitioning to hybrid physical-digital collections.",
    tags: ["Subscription-based", "Library management", "Digital lending", "Automated billing", "Member portal", "PHP", "Stripe"],
    Icon: PenIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/NovelNexus",
    slides: [
      {
        label: "Landing Page",
        desc: "Hero section introducing NovelNexus subscription plans, features, and call-to-action for new members.",
        hue: "330deg", screenLabel: "NovelNexus · Landing",
        image: "/novelnexus/novelnexus.png",
      },
      {
        label: "Admin Dashboard (Overview)",
        desc: "Payment reports, book category distribution, popular titles, book availability status, and key analytics all in one view.",
        hue: "315deg", screenLabel: "NovelNexus · Admin Dashboard",
        image: "/novelnexus/novelnexus (1).png",
      },
      {
        label: "Landing Page · Book Showcase",
        desc: "Bottom section of the landing page featuring available books, popular picks, and newest additions.",
        hue: "345deg", screenLabel: "NovelNexus · Book Showcase",
        image: "/novelnexus/novelnexus (2).png",
      },
      {
        label: "Login Page",
        desc: "Member and admin authentication gateway with email/password and subscription status validation.",
        hue: "300deg", screenLabel: "NovelNexus · Login",
        image: "/novelnexus/novelnexus (3).png",
      },
      {
        label: "User Dashboard (Dark Mode)",
        desc: "Member's home view after login available books, current loans, due dates, and subscription status in dark mode.",
        hue: "320deg", screenLabel: "NovelNexus · Member View",
        image: "/novelnexus/novelnexus (4).png",
      },
      {
        label: "Search Books",
        desc: "Advanced search page with filters by title, author, genre, and availability results shown instantly.",
        hue: "310deg", screenLabel: "NovelNexus · Search",
        image: "/novelnexus/novelnexus (5).png",
      },
      {
        label: "Book Details Page",
        desc: "Full book view with borrow/add to shelf actions, detailed info, user reviews, ratings, and personalized recommendations.",
        hue: "335deg", screenLabel: "NovelNexus · Book Page",
        image: "/novelnexus/novelnexus (6).png",
      },
      {
        label: "Admin Dashboard (KPI View)",
        desc: "Alternative admin view focused on key performance indicators popular books ranking and overdue books tracking.",
        hue: "325deg", screenLabel: "NovelNexus · Admin KPIs",
        image: "/novelnexus/novelnexus (7).png",
      },
    ],
  },

  {
    id: "aeroblast", name: "AeroBlast", short: "AeroBlast",
    type: "game", color: "#1a4a5c", bg: "#e0f0f5",
    tagline: "First-year 2D top-down airplane shooter game",
    desc: "AeroBlast is the first game I ever made a 2D top-down airplane shooter built with Windows Forms using SharpDev during my first year of college. Control a fighter jet, dodge enemy fire, and blast through waves of enemies in this classic arcade-style shooter.",
    tags: ["Windows Forms", "SharpDev", "First game", "2D shooter", "Arcade-style", "Top-down"],
    Icon: CodeIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/ParangEverwing",
    slides: [
      {
        label: "Title Screen",
        desc: "Classic arcade-style title screen with start prompt the gateway into AeroBlast's action.",
        hue: "190deg", screenLabel: "AeroBlast · Title",
        image: "/aeroblast/aeroblast.png",
      },
      {
        label: "Scenario Selection",
        desc: "Choose your battlefield night mode or morning mode, each with different visibility and atmosphere.",
        hue: "45deg", screenLabel: "AeroBlast · Choose Scenario",
        image: "/aeroblast/aeroblast (1).png",
      },
      {
        label: "Aircraft Selection (Night Mode)",
        desc: "Pick your fighter jet under the night setting each aircraft has unique handling and firepower.",
        hue: "350deg", screenLabel: "AeroBlast · Night Selection",
        image: "/aeroblast/aeroblast (2).png",
      },
      {
        label: "Aircraft Selection (Day Mode)",
        desc: "Choose your aircraft in daytime brightness same roster, different visual theme.",
        hue: "280deg", screenLabel: "AeroBlast · Day Selection",
        image: "/aeroblast/aeroblast (3).png",
      },
      {
        label: "Game Start",
        desc: "Press Enter to play your jet is in the air, enemies approach, and the shooting begins.",
        hue: "120deg", screenLabel: "AeroBlast · Ready to Fight",
        image: "/aeroblast/aeroblast (4).png",
      },
      {
        label: "Game Over",
        desc: "Final screen showing your score and a prompt to restart try to beat your best run.",
        hue: "200deg", screenLabel: "AeroBlast · Game Over",
        image: "/aeroblast/aeroblast (5).png",
      },
    ],
  },
  

  {
    id: "alpshop", name: "Alpshop", short: "Alpshop",
    type: "ecommerce", color: "#2d5a3b", bg: "#eaf4e6",
    tagline: "Full-featured e-commerce platform",
    desc: "Alpshop is my first full-stack project, built during my second year of college for a client who sells fashion items on Facebook. It's a complete e-commerce solution with product catalog, shopping cart, user authentication, order management, and payment gateway integration designed to help small fashion businesses start selling online.",
    tags: ["E-commerce", "First full-stack", "Fashion", "Product catalog", "Cart & checkout", "Payment gateway", "Order management"],
    Icon: HomeIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/ALPSHOP",
    slides: [
      {
        label: "Landing Page",
        desc: "Hero section showcasing featured fashion items, brand story, and call-to-action for new shoppers.",
        hue: "140deg", screenLabel: "Alpshop · Landing",
        image: "/alpshop/alpshop.png",
      },
      {
        label: "Product Preview",
        desc: "Quick view of fashion item details price, variants (size/color), and add-to-cart option.",
        hue: "25deg", screenLabel: "Alpshop · Product Preview",
        image: "/alpshop/alpshop (1).png",
      },
      {
        label: "Empty Cart + Login Prompt",
        desc: "Shopping cart page showing empty state prompts users to log in to view and manage their cart items.",
        hue: "200deg", screenLabel: "Alpshop · Empty Cart",
        image: "/alpshop/alpshop (2).png",
      },
      {
        label: "Login Page",
        desc: "Customer authentication gateway sign in or create an account to start shopping.",
        hue: "300deg", screenLabel: "Alpshop · Login",
        image: "/alpshop/alpshop (3).png",
      },
      {
        label: "Shop Categories & New Arrivals",
        desc: "Browse by fashion category (tops, bottoms, dresses, etc.) plus a banner highlighting newly added items.",
        hue: "35deg", screenLabel: "Alpshop · Categories",
        image: "/alpshop/alpshop (4).png",
      },
      {
        label: "All Products View",
        desc: "Complete catalog grid showing all available fashion items with filters and sorting options.",
        hue: "150deg", screenLabel: "Alpshop · All Products",
        image: "/alpshop/alpshop (5).png",
      },
    ],
  },
  
  
  {
    id: "contactsapp",
    name: "Contacts",
    short: "Contacts",
    type: "productivity",
    color: "#2563eb",
    bg: "#eff6ff",
    tagline: "Smart contact management powered by Flutter & Firebase",
    desc: "Contacts is a contact management application built with Flutter and Firebase Firestore in around 2 days. It allows users to securely store, organize, search, and manage personal and professional contacts across devices in real time.",
    tags: [
      "Flutter",
      "Firebase",
      "Contact Management",
      "Cloud Sync",
      "Mobile App"
    ],
    Icon: PenIcon,
    viewType: "mobile",
    github: "https://github.com/CyrusUmali/contact_manager",
    slides: [
      {
        label: "Login Page",
        desc: "Authentication gateway sign in with email and password to access your saved contacts.",
        hue: "220deg",
        screenLabel: "Contacts · Login",
        image: "/contacts/contacts.png",
      },
      {
        label: "Add Contact Page",
        desc: "Create new contacts by entering name, phone number, email, address, and optional profile photo.",
        hue: "200deg",
        screenLabel: "Contacts · Add Contact",
        image: "/contacts/contacts (1).png",
      },
      {
        label: "All Contacts View",
        desc: "Complete contact list with search bar, filter options, and sorting by name or date added.",
        hue: "180deg",
        screenLabel: "Contacts · Contact List",
        image: "/contacts/contacts (2).png",
      },
      {
        label: "Create Account View",
        desc: "New user registration sign up with email, password, and profile details to start managing contacts.",
        hue: "260deg",
        screenLabel: "Contacts · Sign Up",
        image: "/contacts/contacts (3).png",
      },
      {
        label: "Upcoming Birthdays",
        desc: "Smart view showing contacts with upcoming birthdays never miss a friend's or client's special day.",
        hue: "300deg",
        screenLabel: "Contacts · Birthdays",
        image: "/contacts/contacts (4).png",
      },
      {
        label: "Add Contact (Prefilled Data)",
        desc: "Contact creation form with example data filled in demonstrates fields like name, phone, email, and notes.",
        hue: "240deg",
        screenLabel: "Contacts · Add with Data",
        image: "/contacts/contacts (5).png",
      },
    ],
  },


  {
    id: "bulkquil",
    name: "BulkQuil",
    short: "BulkQuil",
    type: "productivity",
    color: "#2c3e66",
    bg: "#edf2fa",
    tagline: "Interactive EPUB cleaning and editing tool",
    desc: "BulkQuil is a React-based EPUB editor built to solve a specific problem residual HTML elements left behind by webtoepub tools that still get read by text-to-speech apps. The app provides an interactive interface where you can preview EPUB pages, click on unwanted elements, and remove similar elements across the entire book. These selections become rules that automatically apply to other pages. You can also edit CSS, change covers, and batch replace text.",
    tags: ["React", "EPUB Editor", "Text-to-speech clean", "CSS editing", "Batch replace", "Rule-based cleaning"],
    Icon: PenIcon,
    viewType: "desktop",
    github: "https://github.com/CyrusUmali/BulkQuil",
    slides: [
      {
        label: "Landing Page · Upload Area",
        desc: "Main entry point drag and drop or browse to upload an EPUB file for cleaning and editing.",
        hue: "220deg",
        screenLabel: "BulkQuil · Upload",
        image: "/bulkquil/bulkquil.png",
      },
      {
        label: "Features Overview",
        desc: "Scroll section highlighting what BulkQuil can do remove residual elements, set cleaning rules, edit CSS, batch replace, and change covers.",
        hue: "200deg",
        screenLabel: "BulkQuil · Features",
        image: "/bulkquil/bulkquil (1).png",
      },
      {
        label: "Help Guide",
        desc: "Step-by-step instructions on how to use the interactive editor from selecting elements to applying rules across pages.",
        hue: "180deg",
        screenLabel: "BulkQuil · Guide",
        image: "/bulkquil/bulkquil (2).png",
      },
      {
        label: "Element Action Bar",
        desc: "When you tap an element in the EPUB preview, an action bar appears options to remove similar elements, keep only this, or highlight it in the element tree.",
        hue: "260deg",
        screenLabel: "BulkQuil · Element Actions",
        image: "/bulkquil/bulkquil (3).png",
      },
      {
        label: "Element Tree View",
        desc: "Tapping the tree option reveals the full HTML element tree on the right side navigate and select elements directly from the structure.",
        hue: "300deg",
        screenLabel: "BulkQuil · Element Tree",
        image: "/bulkquil/bulkquil (4).png",
      },
      {
        label: "CSS Settings",
        desc: "Custom stylesheet editor modify the EPUB's appearance by adding or editing CSS rules in real time.",
        hue: "240deg",
        screenLabel: "BulkQuil · CSS Editor",
        image: "/bulkquil/bulkquil (5).png",
      },
    ],
  },



  {
    id: "aicrop", name: "Agritrack AI", short: "Agritrack AI",
    type: "ml",
     color: "#2b6e4f", bg: "#eaf8f0",
    tagline: "ML-powered crop recommendation for San Pablo City farmers",
    desc: "Agritrack AI is a machine learning system trained on real soil data from farm fields across San Pablo City. Using Random Forest (the best-performing model among multiple algorithms tested), it recommends optimal crops based on environmental parameters helping farmers make data-driven planting decisions with 85%+ accuracy.",
    tags: ["Random Forest", "Flutter frontend", "Python ML",   "Gemini API"], 
    github: "https://github.com/CyrusUmali/AiCROP", Icon: PenIcon,
    viewType: "mobile",
    slides: [
      {
        label: "Environmental Parameters",
        desc: "Farmers enter soil data nitrogen, phosphorus, potassium, pH, temperature, humidity, and rainfall or connect Bluetooth soil testers for automatic readings.",
        hue: "145deg", screenLabel: "Agritrack AI · Input Parameters",
        image: "/aicrop/aicrop.png",
      },
      {
        label: "How It Works",
        desc: "A modal explaining the ML pipeline from soil data collection in San Pablo fields to model training and real-time inference.",
        hue: "160deg", screenLabel: "Agritrack AI · AI Model",
        image: "/aicrop/aicrop (1).png",
      },
      {
        label: "Crop Recommendations",
        desc: "Top 3 recommended crops with confidence scores, plus alternative options based on similar soil profiles in the training data.",
        hue: "135deg", screenLabel: "Agritrack AI · Recommendations",
        image: "/aicrop/aicrop (2).png",
      },
      {
        label: "Crop Compatibility Check",
        desc: "Select a specific crop and enter environmental conditions to check compatibility shows a confidence breakdown where parameter analysis contributes 70% of the final score.",
        hue: "155deg", screenLabel: "Agritrack AI · Compatibility",
        image: "/aicrop/aicrop (3).png",
       },
      {
        label: "Parameter Analysis",
        desc: "Detailed breakdown of each soil parameter shows whether current levels are optimal, insufficient, or excessive for the selected crop.",
        hue: "140deg", screenLabel: "Agritrack AI · Parameter Analysis",
        image: "/aicrop/aicrop (4).png",
      },
      {
        label: "AI-Powered Improvements",
        desc: "Gemini API generates actionable suggestions what the farmer can do to improve soil conditions for growing their desired crop, from fertilization to irrigation adjustments.",
        hue: "170deg", screenLabel: "Agritrack AI · Gemini Suggestions",
        image: "/aicrop/aicrop (5).png",
    },
    ],
  },

  
  {
    id: "pirate-treasure", name: "Pirate Treasure Hunt", short: "Treasure Hunt",
    type: "game", color: "#2a6b6b", bg: "#e8f4f4",
    tagline: "Spring Boot expedition game with session-based persistence",
    desc: "A pirate treasure hunt game built with Spring Boot users choose expedition areas, set sail, and discover treasure (or misfortune). Features session management to track wealth between requests, POST route handling, and redirect patterns. The UI is inspired by Genshin Impact's expedition interface with Beidou as the main character.",
    tags: ["Spring Boot", "Session management", "POST routes", "Mini-game", "Genshin-inspired"],
    github: "https://github.com/CyrusUmali/Beidou-Treasure-Hunt",
    slides: [
      {
        label: "Expedition Selection",
        desc: "Choose which area to explore each location shows predicted outcomes, duration, and potential rewards. Right panel displays 'Set Sail' with area description.",
        hue: "180deg", screenLabel: "Treasure Hunt · Expedition",
        image: "/pirate/pirate.png",
      },
      {
        label: "Sailing Animation",
        desc: "A short sailing animation plays after selecting an expedition building anticipation before revealing the outcome.",
        hue: "190deg", screenLabel: "Treasure Hunt · Sailing",
        image: "/pirate/pirate (1).png",
      },
      {
        label: "Treasure Found!",
        desc: "Success modal featuring chibi Beidou laughing treasure amount added to your session-stored wealth.",
        hue: "45deg", screenLabel: "Treasure Hunt · Success",
        image: "/pirate/pirate (2).png",
      },
      {
        label: "Expedition Failed",
        desc: "Failure modal with chibi Beidou crying you lose some wealth or return empty-handed.",
        hue: "350deg", screenLabel: "Treasure Hunt · Failed",
        image: "/pirate/pirate (3).png",
      },
      {
        label: "Marooned Screen",
        desc: "Special penalty state if you lose too much wealth or fail too many expeditions, you get marooned and must restart your journey.",
        hue: "200deg", screenLabel: "Treasure Hunt · Marooned",
        image: "/pirate/pirate (4).png",
      },
    ],
  },

  {
    id: "jjk-selector", name: "JJK Character Selector", short: "JJK Selector",
    type: "game", color: "#7a1f2c", bg: "#fcf0f2",
    tagline: "Dynamic character selection UI with real-time updates",
    desc: "A Jujutsu Kaisen character selector built for a frontend assignment demonstrating data attributes, event handling, and dynamic UI updates. Users click on any character card to see their name and portrait appear in the main display area, with visual feedback for the currently selected character.",
    tags: ["Data attributes", "Event handling", "Dynamic UI", "DOM manipulation", "2-3 hour build"],
    github: "https://github.com/yourusername/jjk-character-selector",
    slides: [
      {
        label: "Character Grid",
        desc: "All selectable characters displayed in a responsive grid each card stores character data in data attributes (name, image, description).",
        hue: "350deg", screenLabel: "JJK Selector · Character Grid",
        image: "/jjk/jjk.png",
      },
      {
        label: "Selection Highlight",
        desc: "Visual cue (border glow, shadow, or background change) indicates which character is currently selected.",
        hue: "340deg", screenLabel: "JJK Selector · Selected State",
        image: "/jjk/jjk (1).png",
      },
      {
        label: "Main Display Area",
        desc: "Selected character's name and larger image dynamically appear in the main display panel upon selection.",
        hue: "355deg", screenLabel: "JJK Selector · Display",
        image: "/jjk/jjk (2).png",
      },
      {
        label: "Character Details",
        desc: "Additional info (cursed technique, grade, or fun fact) appears alongside the character's portrait.",
        hue: "345deg", screenLabel: "JJK Selector · Details",
        image: "/jjk/jjk (3).png",
      },
      {
        label: "Real-time Updates",
        desc: "Every click triggers immediate UI changes no page reload, just smooth, dynamic interaction.",
        hue: "335deg", screenLabel: "JJK Selector · Interactive",
        image: "/jjk/jjk (4).png",
      },
    ],
  }
  






  


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