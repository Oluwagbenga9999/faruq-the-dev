import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section className="relative max-w-5xl mx-auto px-5 sm:px-8 py-16">
      <p className="font-mono text-xs text-teal-400 mb-3">./about</p>
      <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-start">
        <p className="text-zinc-300 leading-relaxed max-w-2xl">
          •	Fullstack Developer with track record of shipping multiple complete projects.
          •	Fullstack + DevOps Engineer delivering high-performance web applications and resilient cloud infrastructure.
          •	Proven ability to bridge development and operations teams, improve system reliability, and accelerate delivery through automation and best practices.
          •	Experienced in the full software development lifecycle — from designing responsive user interfaces and robust APIs to automating deployments, managing infrastructure with Terraform, and optimizing CI/CD workflows.
          •	Adept at collaborating across teams to improve system reliability, reduce downtime, and enable faster, safer releases in production environments.
        </p>
        <div className="font-mono text-xs text-zinc-500 border border-zinc-800 rounded p-4 min-w-[220px]">
          <p className="text-purple-400 mb-2">education.json</p>
          <p className="flex items-start gap-2 text-zinc-300">
            <GraduationCap size={14} className="mt-0.5 shrink-0" /> B.Sc. Physics — Unilorin, 2025
          </p>
          <p className="mt-2 text-zinc-500">DevOps Engineering Certification</p>
          <p className="text-zinc-300">TS Academy, 2026</p>
        </div>
      </div>
    </section>
  );
}
