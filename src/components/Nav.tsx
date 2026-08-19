import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-mono text-xs transition-colors px-1 ${
      isActive ? "text-teal-400" : "text-zinc-400 hover:text-teal-400"
    }`;

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-zinc-950/80 border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <NavLink
          to="/"
          className="font-mono text-purple-400 font-bold text-sm sm:text-base tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
          onClick={() => setOpen(false)}
        >
          faruq<span className="text-teal-400">@</span>dev<span className="text-zinc-500">:~$</span>
        </NavLink>

        <nav className="hidden sm:flex items-center gap-6">
          {NAV.map((n) => (
            <NavLink key={n.id} to={n.path} className={linkClass}>
              ./{n.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/contact"
          className="hidden sm:inline-flex font-mono text-xs px-3 py-1.5 rounded border border-purple-600 text-purple-300 hover:bg-purple-950/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
        >
          say_hi()
        </NavLink>

        <button
          className="sm:hidden text-zinc-300"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-zinc-800 bg-zinc-950/95 px-5 py-4 flex flex-col gap-4">
          {NAV.map((n) => (
            <NavLink key={n.id} to={n.path} className={linkClass} onClick={() => setOpen(false)}>
              ./{n.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="font-mono text-xs px-3 py-1.5 rounded border border-purple-600 text-purple-300 w-fit"
          >
            say_hi()
          </NavLink>
        </nav>
      )}
    </header>
  );
}
