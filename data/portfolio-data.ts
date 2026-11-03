export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  features: string[];
  challenges: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export interface Milestone {
  year: string;
  title: string;
  role: string;
  description: string;
  keyLearnings: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Alvin Prayoga",
    initials: "AP",
    role: "Fullstack Engineer & AI Integrator",
    tagline: "Building Ideas Into Digital Experiences.",
    bio: "Fullstack developer yang berfokus pada arsitektur web modern, integrasi AI cerdas, dan sistem interaktif real-time. Memadukan estetika minimalis dengan rekayasa performa tinggi untuk mewujudkan ide kompleks menjadi produk digital yang presisi.",
    availability: "Available for new opportunities",
    location: "Indonesia",
    email: "alvinprayoga.work@gmail.com",
    github: "https://github.com/alvinprayoga",
    linkedin: "https://linkedin.com/in/alvinprayoga",
    twitter: "https://twitter.com/alvinprayoga",
  },
  projects: [
    {
      id: "clouvia-ai",
      title: "Clouvia AI",
      category: "AI & Developer Workspace",
      tagline: "Intelligent workspace & autonomous coding assistant environment",
      description:
        "Platform ruang kerja berbasis AI cerdas yang mengintegrasikan percakapan kontekstual tingkat lanjut dengan workspace coding real-time. Memungkinkan developer mengeksekusi ide, menganalisis struktur kode, dan mengelola alur kerja perangkat lunak secara terpadu.",
      thumbnail: "/images/projects/clouvia.webp",
      techStack: ["Next.js", "TypeScript", "OpenAI SDK", "Tailwind CSS", "Framer Motion", "Node.js"],
      features: [
        "Interactive AI Chat dengan context-aware memory",
        "Live code execution & sandboxed syntax preview",
        "Multi-modal streaming responses dengan latency rendah",
        "Export and sync repository terintegrasi"
      ],
      challenges:
        "Mengelola stream token berkecepatan tinggi tanpa layout shifting pada viewer kode serta menjaga status context window tetap efisien.",
      liveUrl: "https://clouvia-ai.vercel.app",
      githubUrl: "https://github.com/alvinprayoga/clouvia-ai",
      featured: true,
    },
    {
      id: "devora-ai",
      title: "Devora AI",
      category: "Developer Tooling & Cloud Integration",
      tagline: "Autonomous dev platform with native GitHub & Vercel orchestration",
      description:
        "Platform otomasi pengembangan perangkat lunak yang menjembatani rekayasa kecerdasan buatan dengan alur kerja Git modern. Mampu membaca repository, membuat arsitektur, melakukan validasi, hingga auto-deploy ke Vercel melalui satu antarmuka terpadu.",
      thumbnail: "/images/projects/devora.webp",
      techStack: ["Next.js", "TypeScript", "GitHub API", "Vercel API", "Tailwind CSS", "PostgreSQL"],
      features: [
        "Sinkronisasi repository Git otomatis dan inspeksi file dua arah",
        "Eksekusi pipeline deployment Vercel instan via webhook",
        "Analisis kualitas kode otomatis sebelum push",
        "Role-based environment management"
      ],
      challenges:
        "Menangani konsistensi state sinkronisasi tree repository GitHub berskala besar dan mengelola rate limiting API pihak ketiga secara aman.",
      liveUrl: "https://devora-ai.vercel.app",
      githubUrl: "https://github.com/alvinprayoga/devora-ai",
      featured: true,
    },
    {
      id: "anivip",
      title: "Anivip",
      category: "Media & Streaming Platform",
      tagline: "High-performance anime streaming experience with modern UX",
      description:
        "Aplikasi web streaming anime modern yang dirancang untuk kecepatan navigasi dan kenyamanan menonton tanpa distraksi. Dilengkapi katalog interaktif, pencarian cepat, autentikasi pengguna, serta pelacakan riwayat tontonan otomatis.",
      thumbnail: "/images/projects/anivip.webp",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Drizzle ORM"],
      features: [
        "Katalog dinamis dengan filter genre, musim, dan status rilis",
        "Pencarian instan dengan debounce dan suggestions",
        "Autentikasi aman dan sinkronisasi bookmark lintas perangkat",
        "Pemutar video responsif dengan pemantauan riwayat progres episode"
      ],
      challenges:
        "Optimasi streaming video multi-kualitas dengan adaptive buffering untuk memastikan pemutaran mulus bahkan pada koneksi mobile terbatas.",
      liveUrl: "https://anivip-stream.vercel.app",
      githubUrl: "https://github.com/alvinprayoga/anivip",
      featured: true,
    },
    {
      id: "tiktok-live-quiz",
      title: "TikTok Live Quiz",
      category: "Real-time Interactive Experience",
      tagline: "Real-time live quiz engine powered by comment stream and leaderboard",
      description:
        "Sistem kuis interaktif waktu-nyata yang terhubung langsung dengan streaming siaran langsung TikTok. Membaca komentar penonton sebagai jawaban secara instan, menghitung akurasi, dan menampilkan leaderboard dinamis berkecepatan tinggi.",
      thumbnail: "/images/projects/tiktok-quiz.webp",
      techStack: ["Node.js", "Express.js", "Socket.IO", "TypeScript", "React", "Tailwind CSS"],
      features: [
        "Parsing ratusan komentar TikTok live per detik secara real-time",
        "Sistem penghitungan poin otomatis berdasarkan ketepatan dan kecepatan",
        "Leaderboard visual dinamis dengan animasi transisi instan",
        "Dashboard kontrol host untuk mengatur bank soal dan durasi ronde"
      ],
      challenges:
        "Menjaga socket latency tetap di bawah 100ms di tengah lonjakan ribuan event komentar yang masuk secara bersamaan.",
      liveUrl: "https://tiktok-live-quiz.vercel.app",
      githubUrl: "https://github.com/alvinprayoga/tiktok-live-quiz",
      featured: true,
    },
    {
      id: "tower-battle-live",
      title: "Tower Battle Live",
      category: "Interactive Gaming & Live Events",
      tagline: "Engaging interactive battle game fueled by live stream gift triggers",
      description:
        "Permainan battle tower interaktif yang mengadaptasi event hadiah (gift) penonton siaran langsung menjadi mekanisme gameplay. Setiap hadiah dari penonton secara langsung memicu spawn pasukan, upgrade benteng, atau spell serangan di arena visual.",
      thumbnail: "/images/projects/tower-battle.webp",
      techStack: ["TypeScript", "Canvas API / PIXI.js", "Node.js", "WebSockets", "Tailwind CSS"],
      features: [
        "Game engine 60 FPS ringan berbasis Web Canvas",
        "Event listener instan yang memetakan gift interaktif ke aksi permainan",
        "Sistem multiplayer faksi dua kubu secara live",
        "Sound effects dan efek partikel visual teroptimasi"
      ],
      challenges:
        "Menghindari frame drop saat puluhan partikel spell dan animasi pasukan dirender bersamaan dengan data incoming WebSocket.",
      liveUrl: "https://tower-battle-live.vercel.app",
      githubUrl: "https://github.com/alvinprayoga/tower-battle-live",
      featured: true,
    },
  ],
  skills: [
    {
      category: "Frontend Engineering",
      description: "Membangun antarmuka berkinerja tinggi dengan fluid micro-interactions dan arsitektur komponen bersih.",
      skills: [
        { name: "React", description: "Component-driven UI, state orchestration, custom hooks" },
        { name: "Next.js", description: "App Router, SSR, SSG, Server Actions, streaming" },
        { name: "TypeScript", description: "Strict static typing, generic interfaces, type safety" },
        { name: "Tailwind CSS", description: "Design systems, utility-first CSS, dark glass styling" },
      ],
    },
    {
      category: "Backend & Systems",
      description: "Mendesain arsitektur server tangguh, RESTful & WebSocket real-time interfaces.",
      skills: [
        { name: "Node.js", description: "Asynchronous runtime, event loops, stream processing" },
        { name: "Express.js", description: "Middleware chains, RESTful API design, rate limiting" },
      ],
    },
    {
      category: "Database & Storage",
      description: "Manajemen data relasional terstruktur dengan performa query terindeks dan integritas data.",
      skills: [
        { name: "PostgreSQL", description: "Relational modeling, indexing, ACID transactions" },
        { name: "Drizzle ORM", description: "Type-safe SQL schemas, query builders, migrations" },
      ],
    },
    {
      category: "AI Integration & Engineering",
      description: "Mengintegrasikan model bahasa kecerdasan buatan ke dalam ekosistem aplikasi web praktis.",
      skills: [
        { name: "AI Integration", description: "Prompt engineering, function calling, structured outputs" },
        { name: "OpenAI SDK", description: "Streaming completions, embeddings, multimodal vision" },
        { name: "AI-Powered Apps", description: "Context memory, developer assistants, agent workflows" },
      ],
    },
    {
      category: "Infrastructure & DevOps",
      description: "Menyiapkan pipeline deployment, containerization, dan hosting awan yang andal.",
      skills: [
        { name: "Docker", description: "Containerized environments, reproducible builds" },
        { name: "VPS", description: "Linux server administration, NGINX reverse proxy, SSL" },
        { name: "Vercel", description: "Edge deployments, continuous deployment, serverless" },
        { name: "Git & GitHub", description: "Branching workflows, version control, CI/CD actions" },
      ],
    },
  ],
  journey: [
    {
      year: "Fase 1",
      title: "Awal Belajar Pemrograman",
      role: "Fondasi & Algoritma",
      description:
        "Memulai eksplorasi dasar logika pemrograman, struktur data dasar, dan pemahaman cara kerja komputer serta protokol web.",
      keyLearnings: ["Logika komputasi", "Algoritma dasar", "Sintaksis pemrograman"],
    },
    {
      year: "Fase 2",
      title: "Eksplorasi Web Development Modern",
      role: "Frontend & Responsive Architecture",
      description:
        "Mendalami ekosistem JavaScript modern, HTML semantik, CSS modern, hingga adopsi React dan TypeScript untuk membangun UI yang dinamis.",
      keyLearnings: ["Komponen reaktif", "TypeScript strictly typed", "Micro-interactions & UX"],
    },
    {
      year: "Fase 3",
      title: "Fullstack Architecture & Database",
      role: "Backend & Relational Modeling",
      description:
        "Memperluas kapabilitas ke sisi server menggunakan Node.js, Express, dan PostgreSQL dengan ORM type-safe untuk membangun sistem end-to-end.",
      keyLearnings: ["Desain REST API", "PostgreSQL & Drizzle ORM", "Autentikasi & Security"],
    },
    {
      year: "Fase 4",
      title: "Eksplorasi AI & Integrasi Sistem Cerdas",
      role: "AI Engineering & Workspace Tooling",
      description:
        "Mengeksplorasi integrasi model LLM, prompt engineering berbasis kode, dan penerapan AI untuk mempercepat alur kerja pengembang secara mandiri.",
      keyLearnings: ["LLM API orchestration", "Streaming token UX", "Context memory"],
    },
    {
      year: "Fase 5",
      title: "Pembangunan Aplikasi Skalabel & Real-time",
      role: "Production Applications",
      description:
        "Membangun dan merilis proyek nyata seperti Clouvia AI, Devora AI, Anivip, dan aplikasi interaktif real-time seperti TikTok Live Quiz & Tower Battle.",
      keyLearnings: ["WebSockets & Real-time", "Docker & Cloud Deployments", "UX Glassmorphism"],
    },
    {
      year: "Masa Depan",
      title: "Evolusi & Skala Berkelanjutan",
      role: "Continuous Innovation",
      description:
        "Fokus pada eksplorasi autonomous systems, arsitektur software terdistribusi, dan menghadirkan pengalaman digital bernilai tinggi.",
      keyLearnings: ["Autonomous agents", "High-throughput systems", "Next-gen web UX"],
    },
  ],
};
