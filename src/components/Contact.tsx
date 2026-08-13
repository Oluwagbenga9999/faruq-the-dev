import { Download, Github, Mail, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20 border-t border-zinc-800">
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-8 sm:p-12 text-center glow-purple">
        <Terminal className="mx-auto text-teal-400 mb-4" size={28} />
        <h2 className="font-mono text-xl sm:text-2xl font-bold">./contact --open-to-work</h2>
        <p className="text-zinc-400 mt-3 max-w-md mx-auto">
          Open to frontend and DevOps roles, and always glad to talk about builds in progress.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:faruq.g.alao@gmail.com"
            className="font-mono text-xs sm:text-sm px-4 py-2.5 rounded bg-teal-600 hover:bg-teal-500 text-zinc-950 font-medium transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            <Mail size={14} /> faruq.g.alao@gmail.com
          </a>
          <a
            href="https://github.com/Oluwagbenga9999"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs sm:text-sm px-4 py-2.5 rounded border border-zinc-700 hover:border-purple-500 hover:text-purple-300 transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <Github size={14} /> GitHub
          </a>
          <a
            href="/resume.pdf"
            className="font-mono text-xs sm:text-sm px-4 py-2.5 rounded border border-zinc-700 hover:border-purple-500 hover:text-purple-300 transition-colors flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <Download size={14} /> resume.pdf
          </a>
        </div>
      </div>
      <p className="font-mono text-center text-[11px] text-zinc-600 mt-10">
        built by faruq · react + typescript + tailwind · {new Date().getFullYear()}
      </p>
    </section>
  );
}
