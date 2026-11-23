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
      "Vite", "Tailwind CSS", "React Router DOM", "FastAPI",
      "Git & GitHub", "Netlify", "Vercel"],
  },
  {
    label: "database",
    items: ["PostgreSQL", "MongoDB", "Supabase"],
  },
  {
    label: "devops & tools",
    items: ["Docker", "GitHub Actions", "AWS", "Linux", "Terraform", "Kubernetes", "Helm", "Trivy", "Prometheus", "Grafana", "Loki", "Jaeger", "OpenTelemetry", "Alertmanager", "CI/CD Pipelines"],
  },
  {
    label: "testing",
    items: ["Unit testing (Mocha)", "Integration & API testing"],
  },
  {
    label: "collaboration",
    items: ["Slack", "Postman", "Agile / Sprint planning"],
  },
  {
    label: "other",
    items: ["Data Analysis", "IT Support", "Team Collaboration"],
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Voting App: Code to Kubernetes",
    status: "Shipped",
    desc: "A CI/CD pipeline for Docker's sample voting app. A push to main runs Helm lint and tests, builds three service images, blocks on HIGH/CRITICAL Trivy findings, publishes to GHCR tagged by commit SHA, and deploys to Kubernetes on AWS EKS with Helm. I hardened the Dockerfiles (pinned, non-root), wrote the Terraform for the EKS cluster and the Helm chart, moved secrets into GitHub Actions and a Kubernetes Secret, and documented Helm rollbacks.",
    stack: ["Docker", "GitHub Actions", "Terraform", "AWS EKS", "Helm", "Trivy"],
    link: "https://github.com/Oluwagbenga9999/example-voting-app",
    demo: null,
    screenshots: [
      {
        src: "/Terraform.png",
        alt: "Terraform EKS infrastructure and IAM configuration in a code editor",
        caption: "Terraform configuration for the EKS infrastructure",
      },
    ],
  },
  {
    name: "Robot Shop: Observability & SRE",
    status: "Shipped",
    desc: "Monitoring and incident response for a microservice shop on Kubernetes (built on Instana's Robot Shop sample). I set up Prometheus, Alertmanager and Grafana with blackbox probes and a health dashboard, Loki and Fluent Bit for logs, and Jaeger with OpenTelemetry for traces. I defined a 99% availability SLO with an error-budget policy, a Slack alert with a runbook, and ran an incident drill that ended in a blameless postmortem.",
    stack: ["Kubernetes", "Prometheus", "Grafana", "Loki", "Jaeger", "OpenTelemetry"],
    link: "https://github.com/Oluwagbenga9999/robot-shop",
    demo: null,
    screenshots: [
      {
        src: "/grafana-monitoring.png",
        alt: "Prometheus blackbox probe results for Robot Shop services in Grafana",
        caption: "Service health probes in Prometheus",
      },
      {
        src: "/Grafana.png",
        alt: "Robot Shop application logs explored in Grafana Loki",
        caption: "Application logs in Grafana Loki",
      },
      {
        src: "/Jaeger.png",
        alt: "Jaeger distributed trace showing the shipping service and database spans",
        caption: "Request trace in Jaeger",
      },
    ],
  },
  {
    name: "ShipIt Board",
    status: "Shipped",
    desc: "A small full-stack task board used to practise delivery end to end. Lint and tests run on every push; on main the pipeline builds a Docker image, publishes it to GHCR and deploys it to an AWS EC2 instance over SSH with Docker Compose.",
    stack: ["Node.js", "Docker", "GitHub Actions", "AWS EC2"],
    link: "https://github.com/Oluwagbenga9999/fullstackdevpos",
    demo: null,
  },
  {
    name: "PlazaBills (MeterCalc)",
    status: "Shipped",
    desc: "A shared electricity billing tool built for a compound manager in Lagos — calculates each tenant's cost from individual meter readings against a shared Supabase backend, with RLS-protected data.",
    stack: ["React", "Vite", "Supabase"],
    link: "https://github.com/Oluwagbenga9999/MeterBillCalculator",
    demo: "https://meter-bill-calculator-two.vercel.app/",
    screenshots: [
      {
        src: "/metercalc.png",
        alt: "PlazaBills landing page showing shared electricity billing and a sample tenant bill",
        caption: "PlazaBills electricity billing interface",
      },
    ],
  },
  {
    name: "Flower Shop",
    status: "In progress",
    desc: "A responsive e-commerce frontend for an online flower shop. Customers browse the catalogue, manage a cart, register and log in, place orders and track their order history. Admins manage products through a protected dashboard with image uploads. Built with React 19, Vite and Tailwind CSS v4, with client-side routing, context-based state and a REST API backend.",
    stack: ["React", "Vite", "MongoDB", "Render"],
    link: "https://github.com/Oluwagbenga9999/flowershopfrontend",
    demo: "https://flowershopfrontend.vercel.app/",
    screenshots: [
      {
        src: "/flower-shop.png",
        alt: "Flower Shop product catalogue with flower and plant listings",
        caption: "Product catalogue",
      },
    ],
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
    screenshots: [
      {
        src: "/alakowe.png",
        alt: "Alakowe How It Works page with topic search",
        caption: "How It Works page",
      },
    ],
  },
  {
    name: "FASCO",
    status: "Shipped",
    desc: "A multi-page fashion e-commerce app — shop listings, full auth flow, product detail pages, a mini-cart drawer, cart, and checkout, with pixel-accurate UI to spec.",
    stack: ["React", "Vite", "Tailwind CSS"],
    link: "https://github.com/Oluwagbenga9999/online-fashion-store",
    demo: "https://online-fashion-store-rho.vercel.app/",
    screenshots: [
      {
        src: "/fasco.png",
        alt: "FASCO fashion store homepage with featured collection",
        caption: "Featured fashion collection",
      },
    ],
  },
  {
    name: "Movie Explorer",
    status: "Shipped",
    desc: "A movie discovery app consuming the TMDB API, with state managed via Context and localStorage. Deployed to Netlify, versioned on GitHub.",
    stack: ["React", "TMDB API", "Context API"],
    link: "https://github.com/Oluwagbenga9999/MovieApp",
    demo: null,
    screenshots: [
      {
        src: "/movie-explorer.png",
        alt: "Movie Explorer with search and movie poster results",
        caption: "Movie search and discovery",
      },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    range: "2025 — Present",
    role: "Software Engineering Intern",
    org: "The Haven & Hues et Asoebi, Lagos",
    notes: [
      "Contributed to product development and Agile delivery for online fashion platforms, working with engineers, product owners and business stakeholders.",
      "Used Postman to validate APIs and support issue investigation and technical documentation.",
      "Participated in root-cause analysis for service disruptions and documented findings to help reduce repeat issues.",
      "Fixed application bugs and improved page load performance.",
      "Created and maintained process documentation, onboarding guides, KPIs and operational reports.",
      "Coordinated work with designers and backend engineers through GitHub, Slack, standups and sprint planning.",
    ],
  },
  {
    range: "2022 — 2024",
    role: "Desktop Publisher",
    org: "Rose of Sharon Café, Kwara",
    notes: ["Produced print-ready documents and publications under tight deadlines.", "Built a static customer portfolio page with HTML and CSS."],
  },
  {
    range: "2017 — 2018",
    role: "Resource Centre Supervisor / Mathematics Teacher",
    org: "Rotshol Splendid Private School, Lagos",
    notes: ["Taught senior secondary Mathematics and Computer Science.", "Supervised the school's resource centre."],
  },
];
