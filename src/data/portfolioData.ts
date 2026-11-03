export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: "AI & Fullstack" | "Interactive Streaming" | "Web Platform";
  description: string;
  longDescription: string;
  features: string[];
  challenges: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  accent: string;
  visualPattern: "terminal" | "chat" | "stream" | "quiz" | "gaming";
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export interface JourneyMilestone {
  period: string;
  title: string;
  stage: string;
  summary: string;
  achievements: string[];
}

export const PERSONAL_INFO = {
  name: "Alvin Prayoga",
  role: "Fullstack Engineer & AI Solutions Architect",
  tagline: "Building Ideas Into Digital Experiences.",
  status: "Available for High-Impact Projects",
  location: "Indonesia",
  shortIntro:
    "Software developer focusing on crafting refined digital platforms, intelligent agent workflows, and real-time interactive systems.",
  fullBio: [
    "I specialize in bridging sophisticated product architecture with seamless digital aesthetics. My work is anchored in performance, intentional design systems, and rigorous fullstack execution.",
    "Driven by the possibilities of artificial intelligence and low-latency interaction, I design systems that feel intuitive, responsive, and durable under high traffic.",
    "From real-time broadcast interactivity to generative AI coding interfaces, each system is crafted with obsessive attention to craft, type hierarchy, and architectural resilience.",
  ],
  interests: [
    {
      title: "Software Architecture",
      desc: "Robust fullstack topologies, micro-services, and deterministic data layers.",
    },
    {
      title: "AI Technology & Agents",
      desc: "Model orchestration, autonomous tool dispatch, and generative interfaces.",
    },
    {
      title: "Interactive Web Experiences",
      desc: "Fluid typography, dark luxury glassmorphism, and 60 FPS motion fidelity.",
    },
    {
      title: "Creative Problem Solving",
      desc: "Translating ambiguous product challenges into precise, resilient software.",
    },
  ],
  socials: {
    github: "https://github.com/trayaputra",
    email: "alvinprayoga.dev@gmail.com",
    linkedin: "https://linkedin.com/in/alvinprayoga",
  },
};

export const PROJECTS: Project[] = [
  {
    id: "clouvia-ai",
    title: "CLOUVIA AI",
    subtitle: "AI-Powered Chat & Autonomous Coding Workspace",
    tagline: "Intelligent agent workspace with live preview, code inspection, and runtime integration.",
    category: "AI & Fullstack",
    description:
      "A next-generation AI coding workspace empowering engineers to reason, inspect file trees, and prototype fullstack applications interactively.",
    longDescription:
      "CLOUVIA AI is engineered to bridge natural language prompts with executable codebases. It features a conversational agent canvas, live code compilation preview, tree parsing, and snapshot recovery for high-speed software development.",
    features: [
      "Real-time streaming agent chat with syntax-highlighted code output",
      "Dynamic file tree explorer and interactive virtual sandbox preview",
      "Autonomous tool calling for git snapshot and code persistence",
      "Low-latency response streaming with token optimization",
    ],
    challenges: [
      "Mitigating race conditions during asynchronous code generation and file tree updates",
      "Structuring isolated execution memory for preview containers",
    ],
    techStack: ["Next.js", "TypeScript", "OpenAI SDK", "Tailwind CSS", "Node.js"],
    demoUrl: "https://github.com/trayaputra",
    githubUrl: "https://github.com/trayaputra",
    accent: "silver",
    visualPattern: "chat",
  },
  {
    id: "devora-ai",
    title: "DEVORA AI",
    subtitle: "AI Development Platform with Git & Vercel Workflows",
    tagline: "Automated developer pipeline integrating GitHub commits and Vercel edge deployment.",
    category: "AI & Fullstack",
    description:
      "An intelligent developer platform facilitating rapid code commits, pull request generation, and continuous Vercel edge deployments.",
    longDescription:
      "DEVORA AI automates repetitive fullstack development steps. It provides developers with seamless branch management, automated commit message generation, pull request synthesis, and single-click Vercel edge deployment triggers.",
    features: [
      "Direct GitHub API integration for branch, commit, and PR management",
      "Automated Vercel deployment webhooks with build status telemetry",
      "Intelligent code diff analyzer and release notes synthesizer",
      "Protected token credentials with zero client-side leakage",
    ],
    challenges: [
      "Handling GitHub REST and GraphQL rate limits cleanly under heavy commit sequences",
      "Synchronizing preview deployment webhooks with optimistic client UI states",
    ],
    techStack: ["Next.js", "TypeScript", "GitHub API", "Vercel API", "Tailwind CSS"],
    demoUrl: "https://github.com/trayaputra",
    githubUrl: "https://github.com/trayaputra",
    accent: "silver",
    visualPattern: "terminal",
  },
  {
    id: "anivip",
    title: "ANIVIP",
    subtitle: "High-Performance Anime Streaming Platform",
    tagline: "Fluid video delivery platform with real-time search, cataloging, and personal watch histories.",
    category: "Web Platform",
    description:
      "A responsive streaming experience featuring episode caching, instant title filtering, custom watchlist persistence, and dynamic player controls.",
    longDescription:
      "ANIVIP delivers an uncluttered, high-bandwidth streaming portal designed for anime enthusiasts. It integrates responsive HLS video streaming, automated episode tracking, resilient search indexing, and personalized user collections.",
    features: [
      "Fast client-side fuzzy search across thousands of indexed titles",
      "Adaptive HLS video player with keyboard ergonomics and quality selector",
      "Secure authentication with user watch history and bookmark synchronization",
      "Dark cinema UI with responsive episode drawer and metadata display",
    ],
    challenges: [
      "Optimizing media asset loading and CDN failovers for uninterrupted playback",
      "Minimizing database query overhead on high-frequency watch-progress checkpoints",
    ],
    techStack: ["React", "Next.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    demoUrl: "https://github.com/trayaputra",
    githubUrl: "https://github.com/trayaputra",
    accent: "silver",
    visualPattern: "stream",
  },
  {
    id: "tiktok-live-quiz",
    title: "TIKTOK LIVE QUIZ",
    subtitle: "Interactive Real-Time Broadcast Quiz System",
    tagline: "Live viewer engagement platform processing comment answers, leaderboard rankings, and points.",
    category: "Interactive Streaming",
    description:
      "A real-time broadcast engine that ingests incoming live comments, verifies trivia responses, updates scores instantly, and broadcasts live leaderboard overlays.",
    longDescription:
      "TIKTOK LIVE QUIZ transforms passive viewer streams into active game shows. Connecting to TikTok live websocket streams, it parses thousands of viewer comments per minute, verifies correct answers within millisecond thresholds, and projects animated ranking graphics.",
    features: [
      "High-throughput comment stream ingestion and regex answer matcher",
      "Real-time synchronized leaderboard with dynamic placement transitions",
      "Configurable question banks, countdown timers, and streak multipliers",
      "Low-latency OBS browser source overlay with transparent alpha channel",
    ],
    challenges: [
      "De-duplicating rapid-fire viewer comments to prevent unfair scoring advantages",
      "Ensuring constant 60 FPS animation on OBS browser sources without frame drops",
    ],
    techStack: ["Node.js", "Express.js", "WebSockets", "TypeScript", "Tailwind CSS"],
    demoUrl: "https://github.com/trayaputra",
    githubUrl: "https://github.com/trayaputra",
    accent: "silver",
    visualPattern: "quiz",
  },
  {
    id: "tower-battle-live",
    title: "TOWER BATTLE LIVE",
    subtitle: "Interactive Stream Game with Audience Gift Events",
    tagline: "Crowd-driven gaming platform reacting dynamically to real-time viewer interactions and live events.",
    category: "Interactive Streaming",
    description:
      "An engaging stream game where spectator interactions and live digital gifts directly influence tower defense strategies, unit spawns, and battle dynamics.",
    longDescription:
      "TOWER BATTLE LIVE brings audience-driven gaming to live streaming. Spectator comments and gifts trigger instant on-screen game mechanics—spawning friendly troops, unleashing obstacles, and driving collaborative tower defense battles.",
    features: [
      "Real-time gift event listener mapped to in-game unit and spell triggers",
      "Physics-backed 2D canvas battle engine optimized for live stream rendering",
      "Dynamic sound and particle fx driven by spectator milestone celebrations",
      "Host control dashboard with live balance tuning and match analytics",
    ],
    challenges: [
      "Synchronizing burst gift events smoothly into discrete game tick intervals",
      "Balancing multiplayer team mechanics under volatile viewer participation spikes",
    ],
    techStack: ["TypeScript", "Node.js", "HTML5 Canvas", "WebSockets", "Tailwind CSS"],
    demoUrl: "https://github.com/trayaputra",
    githubUrl: "https://github.com/trayaputra",
    accent: "silver",
    visualPattern: "gaming",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Creating responsive, accessible, and performant user interfaces.",
    skills: [
      { name: "React", description: "Component-driven architecture and hooks lifecycle" },
      { name: "Next.js", description: "App Router, SSR, SSG, and edge rendering" },
      { name: "TypeScript", description: "Strict static typing and architectural contracts" },
      { name: "Tailwind CSS", description: "Utility-first design systems and custom glass themes" },
    ],
  },
  {
    title: "Backend Development",
    description: "Building scalable server runtimes and resilient APIs.",
    skills: [
      { name: "Node.js", description: "Asynchronous I/O and high-concurrency event loops" },
      { name: "Express.js", description: "RESTful endpoints, middleware, and request validation" },
    ],
  },
  {
    title: "Database Systems",
    description: "Designing deterministic schemas and relational storage.",
    skills: [
      { name: "PostgreSQL", description: "Relational modeling, indexing, and data consistency" },
      { name: "Drizzle ORM", description: "Type-safe SQL queries, migrations, and schema validation" },
    ],
  },
  {
    title: "AI Development",
    description: "Harnessing language models and autonomous tool orchestration.",
    skills: [
      { name: "AI Integration", description: "Prompt engineering, token budgeting, and tool calling" },
      { name: "OpenAI SDK", description: "Streaming completions, structured outputs, and embeddings" },
      { name: "AI-Powered Applications", description: "Context management, RAG workflows, and agent execution" },
    ],
  },
  {
    title: "Infrastructure & DevOps",
    description: "Automating deployments and maintaining reproducible environments.",
    skills: [
      { name: "Docker", description: "Containerized environments and multi-stage builds" },
      { name: "VPS", description: "Linux server provisioning, reverse proxies, and systemd" },
      { name: "Vercel", description: "Edge runtime deployment and continuous integration" },
      { name: "Git", description: "Branching strategies, semantic commits, and rebase workflows" },
      { name: "GitHub", description: "Pull requests, CI actions, and repository security" },
    ],
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "Phase 01",
    title: "First Steps into Code",
    stage: "Foundation & Algorithmic Thinking",
    summary:
      "Began exploring computer programming with curiosity about how software shapes interaction. Learned fundamental logic, syntax mechanics, and problem decomposition.",
    achievements: [
      "Mastered programming fundamentals and computational thinking",
      "Built initial command-line scripts and baseline interactive logic",
    ],
  },
  {
    period: "Phase 02",
    title: "Web Technology Deep Dive",
    stage: "Modern Fullstack Foundations",
    summary:
      "Transitioned to fullstack web engineering. Immersed in HTML semantics, modern CSS architecture, JavaScript execution context, and React component ecosystems.",
    achievements: [
      "Adopted TypeScript for end-to-end type safety",
      "Constructed reusable component architectures with Next.js and Tailwind CSS",
    ],
  },
  {
    period: "Phase 03",
    title: "Scalable Application Engineering",
    stage: "Backend, Databases & Real-Time Protocols",
    summary:
      "Expanded engineering scope to encompass backend systems, database modeling with PostgreSQL and Drizzle ORM, and low-latency WebSocket communication.",
    achievements: [
      "Architected real-time streaming platforms with live audience participation",
      "Engineered resilient database schemas and high-throughput event parsers",
    ],
  },
  {
    period: "Phase 04",
    title: "AI Systems & Autonomous Workflows",
    stage: "Intelligent Interfaces & Edge Deployments",
    summary:
      "Explored the frontier of artificial intelligence, building generative coding workspaces, automated GitHub workflows, and AI-assisted tooling.",
    achievements: [
      "Developed CLOUVIA AI and DEVORA AI with autonomous developer tooling",
      "Integrated OpenAI SDK workflows with real-time code persistence and sandbox execution",
    ],
  },
  {
    period: "Phase 05",
    title: "Continuous Evolution",
    stage: "Architecture Mastery & Global Impact",
    summary:
      "Continuously honing systems architecture, high-fidelity dark luxury aesthetics, and autonomous developer tooling for next-generation platforms.",
    achievements: [
      "Pushing the frontier of dark luxury glassmorphism and 60 FPS motion design",
      "Refining edge-native fullstack architectures with zero-latency overhead",
    ],
  },
];
