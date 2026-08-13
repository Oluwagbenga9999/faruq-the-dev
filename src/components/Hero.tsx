import { useEffect, useState } from "react";
import { Github, MapPin } from "lucide-react";
import { BOOT_LINES } from "../data/content";
import { useTypewriter } from "../hooks/useTypewriter";

interface HeroProps {
  onNavigate: (id: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [active, setActive] = useState(false);
  const { visibleLines, typedPrompt, done } = useTypewriter(BOOT_LINES, active);

  useEffect(() => {
    const t = window.setTimeout(() => setActive(true), 300);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section id="home" className="relative max-w-5xl mx-auto px-5 sm:px-8 pt-20 pb-24">
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 glow-purple overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-zinc-800 bg-zinc-900">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="font-mono ml-3 text-[11px] text-zinc-500">faruq — zsh</span>
        </div>
        <div className="font-mono px-5 sm:px-7 py-8 sm:py-10 text-sm sm:text-base leading-relaxed min-h-[220px]">
          {visibleLines.map((l, idx) => (
            <div key={idx} className="mb-4">
              <div className="text-teal-400">{l.prompt}</div>
              <div className="text-zinc-300 mt-1">{l.after}</div>
            </div>
          ))}
          {!done && <div className="text-teal-400 blink-cursor">{typedPrompt}</div>}
        </div>
      </div>

      <div className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <h1 className="font-mono text-2xl sm:text-4xl font-bold tracking-tight">Faruq Alao</h1>
          <p className="mt-2 text-zinc-400 max-w-md">
            Frontend developer with a physics background, building clean React interfaces and picking
            up DevOps along the way.
          </p>
          <p className="font-mono mt-2 flex items-center gap-1.5 text-xs text-zinc-500">
            <MapPin size={13} /> Lagos, Nigeria
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate("projects")}
            className="font-mono text-xs sm:text-sm px-4 py-2.5 rounded bg-purple-600 hover:bg-purple-500 text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            → view_projects()
          </button>
          <a
            href="https://github.com/Oluwagbenga9999"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs sm:text-sm px-4 py-2.5 rounded border border-zinc-700 hover:border-teal-500 hover:text-teal-400 transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <Github size={14} /> github
          </a>
        </div>
      </div>
    </section>
  );
}
