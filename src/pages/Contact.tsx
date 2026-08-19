import { Download, Github, Mail, Terminal } from "lucide-react";
import Button from "../components/Button";

export default function Contact() {
  return (
    <section className="relative max-w-5xl mx-auto px-5 sm:px-8 py-20">
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-8 sm:p-12 text-center glow-purple">
        <Terminal className="mx-auto text-teal-400 mb-4" size={28} />
        <h2 className="font-mono text-xl sm:text-2xl font-bold">./contact --open-to-work</h2>
        <p className="text-zinc-400 mt-3 max-w-md mx-auto">
          Open to frontend and DevOps roles, and always glad to talk about builds in progress.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button href="mailto:faruq.g.alao@gmail.com" variant="primary">
            <Mail size={14} /> faruq.g.alao@gmail.com
          </Button>
          <Button href="https://github.com/Oluwagbenga9999" external variant="ghost">
            <Github size={14} /> GitHub
          </Button>
          <Button href="/resume.pdf" variant="ghost">
            <Download size={14} /> resume.pdf
          </Button>
        </div>
      </div>
      <p className="font-mono text-center text-[11px] text-zinc-600 mt-10">
        built by faruq · react + typescript + tailwind · {new Date().getFullYear()}
      </p>
    </section>
  );
}
