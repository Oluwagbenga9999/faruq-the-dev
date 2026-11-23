import { SKILLS } from "../data/content";
import TechIcon from "../components/TechIcon";

export default function Skills() {
  return (
    <section className="relative max-w-5xl mx-auto px-5 sm:px-8 py-16">
      <p className="section-kicker">Technical toolkit</p>
      <h1 className="section-heading mt-3">Tools I work with</h1>
      <p className="mt-3 max-w-2xl text-sm text-zinc-500 leading-6">
        Technologies used across application development, infrastructure and reliable software delivery.
      </p>
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((group) => (
          <div key={group.label} className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/40">
            <p className="font-mono text-xs text-purple-400 mb-3">{group.label}</p>
            <div className="grid grid-cols-2 gap-2">
              {group.items.map((item) => (
                <div key={item} className="skill-logo-card">
                  <TechIcon name={item} size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
