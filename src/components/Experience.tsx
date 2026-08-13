import { EXPERIENCE } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative max-w-5xl mx-auto px-5 sm:px-8 py-16 border-t border-zinc-800">
      <p className="font-mono text-xs text-teal-400 mb-6">./experience</p>
      <div className="space-y-8">
        {EXPERIENCE.map((e) => (
          <div key={e.role} className="grid sm:grid-cols-[140px_1fr] gap-2 sm:gap-6">
            <p className="font-mono text-xs text-zinc-500 pt-0.5">{e.range}</p>
            <div className="border-l border-zinc-800 pl-5">
              <h3 className="font-semibold text-zinc-100">{e.role}</h3>
              <p className="font-mono text-xs text-purple-400 mb-2">{e.org}</p>
              <ul className="text-sm text-zinc-400 space-y-1 list-disc list-inside">
                {e.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
