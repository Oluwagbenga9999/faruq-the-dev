import type { BootLine, ExperienceItem, NavItem, Project, SkillGroup } from "./types";

export const BOOT_LINES: BootLine[] = [
  { prompt: "$ whoami", after: "faruq_alao — frontend developer / trainee devops" },
  { prompt: "$ cat mission.txt", after: "Physics grad turned frontend dev. I ship real interfaces, not tutorials." },
];

export const NAV: NavItem[] = [
  { id: "about", label: "about", path: "/about" },
  { id: "skills", label: "skills", path: "/skills" },
  { id: "projects", label: "projects", path: "/projects" },
  { id: "experience", label: "experience", path: "/experience" },
  { id: "contact", label: "contact", path: "/contact" },
];

export const SKILLS: SkillGroup[] = [
  {
    label: "languages_frameworks",
    items: ["JavaScript", "TypeScript", "React", "HTML", "CSS", "Python", "C++"],
  },
  {
    label: "tooling",
    items: ["Vite", "Tailwind CSS", "React Router DOM", "Supabase", "FastAPI", "Git & GitHub", "Netlify", "Vercel"],
  },
  {
    label: "other",
    items: ["Data Analysis", "IT Support", "Customer Service", "Team Collaboration"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "MeterCalc",
    status: "Shipped",
    desc: "A shared electricity billing tool built for a compound manager in Lagos — calculates each tenant's cost from individual meter readings against a shared Supabase backend, with RLS-protected data.",
    stack: ["React", "Vite", "Supabase"],
    link: "https://github.com/Oluwagbenga9999/MeterBillCalculator",
    demo: "https://meter-bill-calculator-two.vercel.app/",
  },
  {
    name: "Alakowe",
    status: "In progress",
    desc: 'A second-hand book marketplace for Nigerian readers. Independently building the "How It Works" flow — a card-grid layout with topic-detail routing.',
    stack: ["React", "TypeScript", "Tailwind CSS", "React Router"],
    link: "https://github.com/Oluwagbenga9999/Alakowe",
    demo: "https://alakowe-seven.vercel.app/",
  },
  {
    name: "FASCO",
    status: "Shipped",
    desc: "A multi-page fashion e-commerce app — shop listings, full auth flow, product detail pages, a mini-cart drawer, cart, and checkout, with pixel-accurate UI to spec.",
    stack: ["React", "Vite", "Tailwind CSS"],
    link: "https://github.com/Oluwagbenga9999/online-fashion-store",
    demo: "https://online-fashion-store-rho.vercel.app/",
  },
  {
    name: "Movie Explorer",
    status: "Shipped",
    desc: "A movie discovery app consuming the TMDB API, with state managed via Context and localStorage. Deployed to Netlify, versioned on GitHub.",
    stack: ["React", "TMDB API", "Context API"],
    link: "https://github.com/Oluwagbenga9999/MovieApp",
    demo: null,
  },
  {
    name: "Agri-Marketplace",
    status: "Concept",
    desc: "A product-strategy concept connecting Nigerian farmers with distributors and buyers, scoped across a four-phase Validate → Build → Grow → Scale roadmap.",
    stack: ["React", "Vite", "Tailwind", "Supabase (planned)"],
    link: null,
    demo: null,
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    range: "2025 — Present",
    role: "Frontend Software Engineering Intern",
    org: "The Haven & Hues, Lagos",
    notes: [
      "Built responsive pages with HTML, CSS, JavaScript, and React",
      "Converted UI/UX mockups into clean, accessible, high-performance code",
      "Fixed bugs and improved page load speed",
      "Collaborated with designers and backend engineers using Git/GitHub, standups, and sprint planning",
    ],
  },
  {
    range: "2017 — 2018",
    role: "Resource Centre Supervisor / Mathematics Teacher",
    org: "Rotshol Splendid Private School, Lagos",
    notes: ["Taught senior secondary Mathematics and Computer Science", "Supervised the school's resource centre"],
  },
  {
    range: "2015 — 2017",
    role: "Desktop Publisher",
    org: "Rose of Sharon Café, Ikeja",
    notes: ["Produced print-ready documents and publications under tight deadlines"],
  },
];
