import { NAV } from "../data/content";

interface NavProps {
  onNavigate: (id: string) => void;
}

export default function Nav({ onNavigate }: NavProps) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-zinc-950/80 border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="font-mono text-purple-400 font-bold text-sm sm:text-base tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
        >
          faruq<span className="text-teal-400">@</span>dev<span className="text-zinc-500">:~$</span>
        </button>

        <nav className="hidden sm:flex items-center gap-6">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => onNavigate(n.id)}
              className="font-mono text-xs text-zinc-400 hover:text-teal-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded px-1"
            >
              ./{n.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => onNavigate("contact")}
          className="font-mono text-xs px-3 py-1.5 rounded border border-purple-600 text-purple-300 hover:bg-purple-950/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        >
          say_hi()
        </button>
      </div>
    </header>
  );
}
