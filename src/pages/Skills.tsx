import { SKILLS } from "../data/content";

export default function Skills() {
  return (
    <section className="relative max-w-5xl mx-auto px-5 sm:px-8 py-16">
      <p className="font-mono text-xs text-teal-400 mb-6">./skills</p>
      <div className="grid sm:grid-cols-3 gap-6">
        {SKILLS.map((group) => (
          <div key={group.label} className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/40">
            <p className="font-mono text-xs text-purple-400 mb-3">{group.label}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] px-2 py-1 rounded border border-zinc-700 text-zinc-300 bg-zinc-950"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
