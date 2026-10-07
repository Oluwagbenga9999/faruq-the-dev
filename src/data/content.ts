import type { BootLine, ExperienceItem, NavItem, Project, SkillGroup } from "./types";

export const BOOT_LINES: BootLine[] = [
  { prompt: "$ whoami", after: "faruq_alao — Fullstack & DevOps Engineer" },
  { prompt: "$ cat mission.txt", after: "Physics grad turned Software Engineer. I ship real applications and cloud infrastructures." },
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
    items: ["JavaScript", "TypeScript", "SQL", "React", "HTML", "CSS", "Python", "C++"],
  },
  {
    label: "tooling",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication",
      "Vite", "Tailwind CSS", "React Router DOM", "Supabase", "FastAPI",
      "Git & GitHub", "Netlify", "Vercel"],
  },
  {
    label: "database",
    items: ["PostgreSQL", "Mongodb", "Supabase"],
  },
  {
    label: "devops & tools",
    items: ["Docker", "Git", "GitHub Actions", "AWS", "Linux", "Nginx", "Terraform", "Kubernetes", "Prometheus", "CI/CD Pipelines"],
  },
  {
    label: "testing",
    items: ["Unit testing (Mocha)", "Integration & API testing"],
  },
  {
    label: "collaboration",
    items: ["Slack", "GitHub"],
  },
  {
    label: "other",
    items: ["Data Analysis", "IT Support", "Team Collaboration"],
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
    name: "Flower Shop",
    status: "In progress",
    desc: "A responsive e-commerce frontend for an online flower shop. Customers can browse the catalogue, manage a cart, register and log in, place orders, and track their order history, while admins manage products through a protected dashboard with image uploads. Built with ** React 19**, ** Vite **, and ** Tailwind CSS v4 **, with client - side routing, context - based state management, and a REST API backend.",
    stack: ["React", "Vite", "MongoDB", "Render"],
    link: "https://github.com/Oluwagbenga9999/flowershopfrontend",
    demo: "https://flowershopfrontend.vercel.app/",
  },
  {
    name: "Agri-Marketplace",
    status: "In progress",
    desc: "A product-strategy concept connecting Nigerian farmers with distributors and buyers, scoped across a four-phase Validate → Build → Grow → Scale roadmap.",
    stack: ["React", "Vite", "Tailwind", "Supabase (planned)"],
    link: null,
    demo: null,
  },
  {
    name: "Alakowe",
    status: "Shipped",
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
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    range: "2025 — Present",
    role: "Software Engineering Intern",
    org: "The Haven & Hues et Asoebi, Lagos",
    notes: [
      "Collaborated with team on product development, operations and Agile delivery for online fashion market platforms, worked with other engineers, product owners, and business stakeholders",
      "Managed sharing of code snippets, error logs, screenshots, stack traces, and links to pull requests or issues using Slack to ensure on-time, high-quality delivery",
      "Utilize Postman to support API validation, issue investigation, and technical documentation",
      "Conduct root cause analysis (RCA) on service disruptions, reducing repeat incidents and improving platform stability",
      "Develop and maintain process documentation, onboarding guides, KPIs, and operational reports to drive efficiency and visibility",
      "Fixed bugs and improved page load speed",
      "Collaborated with designers and backend engineers using Git/GitHub, standups, and sprint planning",
    ],
  },
  {
    range: "2022 — 2024",
    role: "Desktop Publisher",
    org: "Rose of Sharon Café, Kwara",
    notes: ["Produced print-ready documents and publications under tight deadlines", "Built static portfolio page for customers using html/css."],
  },
  {
    range: "2017 — 2018",
    role: "Resource Centre Supervisor / Mathematics Teacher",
    org: "Rotshol Splendid Private School, Lagos",
    notes: ["Taught senior secondary Mathematics and Computer Science", "Supervised the school's resource centre"],
  },
];
