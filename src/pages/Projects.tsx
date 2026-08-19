import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "../data/content";
import StatusPill from "../components/StatusPill";
import Button from "../components/Button";

export default function Projects() {
  return (
    <section className="relative max-w-5xl mx-auto px-5 sm:px-8 py-16">
      <p className="font-mono text-xs text-teal-400 mb-6">./projects</p>
      <div className="grid sm:grid-cols-2 gap-5">
        {PROJECTS.map((p) => (
          <div
            key={p.name}
            className="border border-zinc-800 rounded-lg p-5 bg-zinc-900/40 hover:border-purple-700/60 transition-colors flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-mono font-semibold text-zinc-100">{p.name}</h3>
              <StatusPill status={p.status} />
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed flex-1">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-[10px] px-1.5 py-0.5 rounded text-teal-400/90 bg-teal-950/30 border border-teal-900"
                >
                  {s}
                </span>
              ))}
            </div>
            {(p.demo || p.link) && (
              <div className="mt-5 flex flex-wrap gap-2.5">
                {p.demo && (
                  <Button href={p.demo} external variant="secondary">
                    <ExternalLink size={13} /> Live demo
                  </Button>
                )}
                {p.link && (
                  <Button href={p.link} external variant="ghost">
                    <Github size={13} /> Source
                  </Button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
