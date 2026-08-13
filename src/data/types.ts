export type ProjectStatus = "Shipped" | "In progress" | "Concept";

export interface Project {
  name: string;
  status: ProjectStatus;
  desc: string;
  stack: string[];
  link: string | null;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceItem {
  range: string;
  role: string;
  org: string;
  notes: string[];
}

export interface BootLine {
  prompt: string;
  after: string;
}

export interface NavItem {
  id: string;
  label: string;
}
