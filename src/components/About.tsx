import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t border-zinc-800">
      <p className="font-mono text-xs text-teal-400 mb-3">./about</p>
      <div className="grid sm:grid-cols-[1fr_auto] gap-8 items-start">
        <p className="text-zinc-300 leading-relaxed max-w-2xl">
          I studied Physics at the University of Ilorin, where I spent a lot of time modelling
          radiation-shielding composites — the kind of work that trains you to break a messy problem
          into small, testable pieces. I bring that same instinct to the frontend: component by
          component, state by state, until the UI matches the spec exactly. Before code, I taught
          Mathematics and did desktop publishing, so communicating clearly and hitting a deadline
          aren't new skills for me — just applied to a different medium now. I'm currently serving
          with the NYSC and looking for a Primary Place of Assignment in software engineering or
          DevOps.
        </p>
        <div className="font-mono text-xs text-zinc-500 border border-zinc-800 rounded p-4 min-w-[220px]">
          <p className="text-purple-400 mb-2">education.json</p>
          <p className="flex items-start gap-2 text-zinc-300">
            <GraduationCap size={14} className="mt-0.5 shrink-0" /> B.Sc. Physics — Unilorin, 2025
          </p>
          <p className="mt-2 text-zinc-500">Web Dev Certificate</p>
          <p className="text-zinc-300">Uinspire ICT Solutions, 2025</p>
        </div>
      </div>
    </section>
  );
}
