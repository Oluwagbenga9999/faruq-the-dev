import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section className="relative max-w-5xl mx-auto px-5 sm:px-8 py-16">
      <p className="section-kicker">Profile</p>
      <h1 className="section-heading mt-3">About me</h1>
      <div className="mt-8 grid sm:grid-cols-[1fr_auto] gap-8 items-start">
        <div className="max-w-2xl space-y-4 text-zinc-300 leading-relaxed">
          <p>
            I’m a Fullstack and DevOps Engineer who enjoys taking software from a useful idea to a dependable release. My work spans responsive React applications, backend APIs, cloud infrastructure and delivery automation.
          </p>
          <p>
            With a background in Physics and hands-on experience across development and operations, I bring a systems-minded approach to debugging, reliability and continuous improvement. I value practical solutions, clear documentation and learning from what happens after a release.
          </p>
        </div>
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
