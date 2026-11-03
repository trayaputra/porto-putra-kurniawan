export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  overview: string;
  thumbnail: string;
  features: string[];
  techStack: string[];
  challenges: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: {
    name: string;
    iconName: string;
  }[];
}

export interface JourneyMilestone {
  year: string;
  period: string;
  title: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  name: "Alvin Prayoga",
  role: "Fullstack & AI Engineer",
  tagline: "Building Ideas Into Digital Experiences.",
  status: "Available for selected projects & engineering roles",
  bioIntro:
    "Developer yang fokus pada perancangan antarmuka mewah, arsitektur backend performan tinggi, dan integrasi kecerdasan buatan cerdas.",
  bioFull:
    "Memadukan rekayasa perangkat lunak modern, arsitektur AI mutakhir, dan desain glassmorphism sinematik untuk mewujudkan produk digital yang berkesan serta berdaya guna tinggi.",
  email: "alvinprayoga.work@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  location: "Indonesia",
};

export const PROJECTS: Project[] = [
  {
    id: "clouvia-ai",
    title: "Clouvia AI",
    category: "AI Workspace & Coding Suite",
    tagline: "Intelligent chat, workspace, and coding automation environment",
    description:
      "Workspace AI terintegrasi untuk pemrograman cerdas dengan eksekusi kode terisolasi, penalaran agentic, dan konteks proyek mendalam.",
    overview:
      "Clouvia AI dirancang untuk pengembang yang membutuhkan asisten coding cerdas dengan konteks proyek menyeluruh. Sistem ini mengintegrasikan streaming respons tingkat rendah, sandbox eksekusi aman, dan panel editor interaktif yang memungkinkan developer berkolaborasi langsung dengan model AI tercanggih.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Real-time streaming chat completions dengan Markdown parsing berkecepatan tinggi",
      "Interactive code sandbox dengan terminal output terisolasi",
      "Workspace multi-file manajemen repositori",
      "Smart context window optimizer untuk efisiensi token",
    ],
    techStack: ["Next.js", "TypeScript", "OpenAI SDK", "Tailwind CSS", "PostgreSQL", "Docker"],
    challenges:
      "Mengoptimalkan latensi streaming token LLM secara concurrent dan menjaga isolasi eksekusi kode di sandbox virtual tanpa menurunkan performa antarmuka pengguna.",
    liveUrl: "https://clouvia.ai",
    githubUrl: "https://github.com",
  },
  {
    id: "devora-ai",
    title: "Devora AI",
    category: "DevOps & AI Automation Platform",
    tagline: "Autonomous development platform with GitHub & Vercel deployment loops",
    description:
      "Platform developer berbasis AI yang mengotomatisasi siklus pembuatan kode, sinkronisasi repositori GitHub, hingga deployment instan Vercel.",
    overview:
      "Devora AI menjembatani pemikiran arsitektural dan implementasi kode secara otonom. Platform ini mampu membaca struktur kode dari repositori GitHub, merancang solusi fitur, menulis berkas lengkap, dan mengunggah kode terkonfirmasi langsung ke branch tujuan serta men-deploy ke cloud Vercel.",
    thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Integrasi GitHub REST & Octokit API dua arah untuk staging commit",
      "Automated Vercel deployment pipeline trigger",
      "Arsitektur state machine otonom pencegah hallusinasi kode",
      "Desain antarmuka Dark Glassmorphism dengan kontrol otorisasi granular",
    ],
    techStack: ["Next.js", "TypeScript", "Node.js", "GitHub API", "Vercel REST API", "Tailwind CSS"],
    challenges:
      "Menjamin integritas staging file saat commit multi-file berlangsung dan menangani rate limit GitHub API secara elegan melalui adaptive request queuing.",
    liveUrl: "https://devora.ai",
    githubUrl: "https://github.com",
  },
  {
    id: "anivip",
    title: "Anivip",
    category: "Streaming & Media Platform",
    tagline: "Next-generation anime streaming platform with curated catalog & history",
    description:
      "Platform streaming anime modern dengan pencarian instan berlatensi rendah, manajemen riwayat tontonan, autentikasi terproteksi, dan kurasi katalog lengkap.",
    overview:
      "Anivip dibangun untuk menghadirkan pengalaman menikmati tayangan anime terbaik tanpa distraksi. Mengutamakan performa rendering antarmuka 60 FPS, pemutar video kustom adaptif dengan resume playback, serta sistem rekomendasi berbasis preferensi genre penonton.",
    thumbnail: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Katalog ribuan judul dengan filter genre, musim, dan status rilis secara instan",
      "Autentikasi sesi aman dengan proteksi JWT dan profil penonton personal",
      "Riwayat tontonan real-time dengan sinkronisasi timestamp antar perangkat",
      "Video player kustom dengan kontrol pintasan keyboard lengkap",
    ],
    techStack: ["React", "Next.js", "Express.js", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    challenges:
      "Menyajikan buffering video adaptif dan caching katalog dinamis berukuran besar dengan waktu respons API di bawah 50 milidetik.",
    liveUrl: "https://anivip.app",
    githubUrl: "https://github.com",
  },
  {
    id: "tiktok-live-quiz",
    title: "TikTok Live Quiz",
    category: "Real-time Interactive Gaming",
    tagline: "Live stream synchronized quiz engine with instant comment parsing",
    description:
      "Sistem kuis interaktif live streaming yang membaca ribuan komentar penonton secara langsung, menghitung skor otomatis, dan menampilkan leaderboard real-time.",
    overview:
      "TikTok Live Quiz mengubah siaran langsung menjadi arena kuis interaktif berdaya jangkau tinggi. Menggunakan koneksi WebSocket berkecepatan tinggi untuk menangkap event komentar penonton, mencocokkan jawaban kuis dalam hitungan milidetik, dan menampilkan visual HUD sinematik di layar stream.",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Stream connector berlatensi ultra-rendah untuk ekstraksi event komentar live",
      "Mesin validasi jawaban fuzzy-matching untuk mengatasi kesalahan ketik peserta",
      "Leaderboard animasi real-time dengan update skor instan tanpa layout shift",
      "Admin controller panel untuk penjadwalan pertanyaan dan pengelolaan sesi kuis",
    ],
    techStack: ["Node.js", "Express.js", "Socket.io", "TypeScript", "Tailwind CSS", "Redis"],
    challenges:
      "Menangani lonjakan ratusan event chat per detik pada stream berskala besar tanpa terjadi memory leak dan memastikan sinkronisasi waktu kuis antar penonton tetap presisi.",
    liveUrl: "https://livequiz.app",
  },
  {
    id: "tower-battle-live",
    title: "Tower Battle Live",
    category: "Interactive Live Stream Game",
    tagline: "Community gift-based battle mechanics with animated physics rendering",
    description:
      "Game pertarungan menara interaktif untuk live streaming di mana interaksi gift dan dukungan audiens langsung memicu aksi pertempuran dan unit di layar.",
    overview:
      "Tower Battle Live menghadirkan pengalaman game partisipatif generasi baru. Setiap interaksi penonton, mulai dari tap layar hingga pemberian gift virtual, diterjemahkan menjadi spawn unit tempur, serangan sihir, dan pergeseran kekuatan menara secara visual dengan efek partikel sinematik.",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Sistem pemetaan gift interaktif ke aksi unit game secara real-time",
      "Canvas-based rendering engine ringan untuk performa 60 FPS stabil pada overlay streaming",
      "Audio generator reaktif yang merespons momentum kemenangan kubu",
      "Dashboard statistik sesi game untuk analisa partisipasi audiens",
    ],
    techStack: ["TypeScript", "Node.js", "HTML5 Canvas", "Tailwind CSS", "WebSockets"],
    challenges:
      "Mengelola kalkulasi tabrakan entitas unit secara optimal di browser tanpa menurunkan frame rate saat ratusan unit berada di medan perang.",
    liveUrl: "https://towerbattle.app",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    description: "Membangun antarmuka modern yang responsif, terstruktur, dan berfokus pada pengalaman pengguna yang luar biasa.",
    items: [
      { name: "React", iconName: "Atom" },
      { name: "Next.js (App Router)", iconName: "Layers" },
      { name: "TypeScript", iconName: "Code2" },
      { name: "Tailwind CSS", iconName: "Palette" },
    ],
  },
  {
    title: "Backend Architecture",
    description: "Merancang API tangguh, arsitektur event-driven, dan layanan server berlatensi rendah.",
    items: [
      { name: "Node.js", iconName: "Server" },
      { name: "Express.js", iconName: "Cpu" },
      { name: "RESTful & WebSocket APIs", iconName: "Network" },
    ],
  },
  {
    title: "Database & Storage",
    description: "Pengelolaan skema relasional, query optimization, dan ORM type-safe untuk integritas data tinggi.",
    items: [
      { name: "PostgreSQL", iconName: "Database" },
      { name: "Drizzle ORM", iconName: "Workflow" },
      { name: "Redis Caching", iconName: "HardDrive" },
    ],
  },
  {
    title: "Artificial Intelligence",
    description: "Mengintegrasikan model bahasa terdepan dan workflow AI cerdas ke dalam produk perangkat lunak.",
    items: [
      { name: "AI Integration & Prompt Systems", iconName: "Sparkles" },
      { name: "OpenAI SDK & Structured Outputs", iconName: "Bot" },
      { name: "AI-Powered Applications", iconName: "BrainCircuit" },
    ],
  },
  {
    title: "Infrastructure & Tools",
    description: "Fondasi deployment cloud, kontainerisasi, dan otomatisasi alur kerja pengembang.",
    items: [
      { name: "Docker", iconName: "Boxes" },
      { name: "VPS & Linux Management", iconName: "Terminal" },
      { name: "Vercel Cloud", iconName: "Cloud" },
      { name: "Git & GitHub Workflows", iconName: "GitBranch" },
    ],
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: "Awal",
    period: "Fondasi & Titik Mula",
    title: "Awal Mengenal Pemrograman",
    description:
      "Memulai perjalanan di dunia logika komputasi. Mempelajari konsep dasar algoritma, struktur data, dan memecahkan tantangan pemrograman pertama yang memicu antusiasme mendalam.",
    highlights: ["Logika komputasi dasar", "Struktur data awal", "Pemahaman cara kerja sistem software"],
  },
  {
    year: "Fase 2",
    period: "Eksplorasi Teknologi",
    title: "Mendalami Teknologi & Fondasi Web",
    description:
      "Mengeksplorasi ekosistem web standar, JavaScript modern, dan arsitektur client-server. Mulai merancang halaman interaktif dengan penekanan pada estetika dan clean code.",
    highlights: ["Penguasaan JavaScript modern", "Arsitektur client-server", "Prinsip clean code"],
  },
  {
    year: "Fase 3",
    period: "Modern Web Development",
    title: "Transisi ke React & Ekosistem Fullstack",
    description:
      "Beralih ke ekosistem Next.js, React, dan TypeScript. Mengembangkan antarmuka berbasis komponen modern, state management terstruktur, dan arsitektur database relasional.",
    highlights: ["Next.js App Router", "Fullstack TypeScript", "Integrasi PostgreSQL & REST API"],
  },
  {
    year: "Fase 4",
    period: "AI & Otomasi Cerdas",
    title: "Eksplorasi AI & Integrasi LLM",
    description:
      "Mengintegrasikan Large Language Model ke dalam aplikasi nyata. Membangun AI agent, streaming token berlatensi rendah, dan tooling otomasi untuk pengembang.",
    highlights: ["OpenAI API & agentic workflows", "Streaming chat architecture", "AI-assisted coding suites"],
  },
  {
    year: "Fase 5",
    period: "Produk Skala Penuh",
    title: "Membangun Aplikasi Interaktif Skala Penuh",
    description:
      "Merancang dan meluncurkan proyek-proyek interaktif dengan arsitektur real-time seperti TikTok Live Quiz, game streaming interaktif, dan ekosistem Devora AI.",
    highlights: ["Sistem real-time berlatensi rendah", "Produk skala penuh production-grade", "Optimalisasi performa 60 FPS"],
  },
  {
    year: "Masa Depan",
    period: "Visi & Tujuan Berikutnya",
    title: "Menatap Horizon Rekayasa Berikutnya",
    description:
      "Terus memperdalam kolaborasi sistem autonomous AI, rekayasa perangkat lunak berskala besar, serta menciptakan pengalaman digital yang elegan, intuitif, dan bermakna bagi dunia.",
    highlights: ["Autonomous AI systems", "High-performance distributed systems", "Dark Luxury digital design"],
  },
];
