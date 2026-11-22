import { ArrowDown, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { PROJECTS, SKILLS } from "../data/content";
import Button from "../components/Button";
import StatusPill from "../components/StatusPill";

export default function Home() {
  const featuredProjects = PROJECTS.slice(0, 3);

  return (
    <main className="relative">
      <section className="max-w-5xl mx-auto px-5 sm:px-8 min-h-[520px] flex items-center py-16">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.16em] text-teal-400 uppercase mb-5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,.9)]" />
            Fullstack & DevOps Engineer
          </p>
          <h1 className="font-mono text-[2.6rem] sm:text-[4.25rem] leading-[1.02] font-bold tracking-tight text-zinc-100">
            Building reliable systems through <span className="text-purple-400">code</span>, automation and infrastructure.
          </h1>
          <p className="mt-6 max-w-xl text-sm sm:text-base leading-7 text-zinc-400">
            I design and ship full-stack applications, cloud infrastructure and CI/CD workflows that help teams deliver faster and operate confidently.
          </p>
          <p className="font-mono mt-3 flex items-center gap-1.5 text-xs text-zinc-500">
            <MapPin size={13} /> Lagos, Nigeria
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/projects" variant="primary">
              Explore my projects <ArrowDown size={14} />
            </Button>
            <Button href="https://github.com/Oluwagbenga9999" external variant="ghost">
              <Github size={14} /> GitHub profile
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-900/80 bg-zinc-950/55">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
          <p className="section-kicker">Technical toolkit</p>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="section-heading">Tools I work with</h2>
            <p className="text-sm text-zinc-500 max-w-sm">
              Technologies I use to move from interface to production.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SKILLS.slice(0, 6).map((group) => (
              <div key={group.label} className="tech-card">
                <div className="w-8 h-8 rounded-md border border-zinc-800 bg-zinc-950 flex items-center justify-center text-purple-400 font-mono text-xs">
                  {group.label.slice(0, 2).toUpperCase()}
                </div>
                <h3 className="mt-4 font-mono text-xs text-zinc-100">{group.label}</h3>
                <p className="mt-1.5 text-xs text-zinc-500 leading-5">{group.items.slice(0, 4).join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
        <p className="section-kicker">Selected work</p>
        <div className="mt-3 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <h2 className="section-heading">Projects and practical work</h2>
          <Button to="/projects" variant="secondary">
            View all projects <ArrowUpRight size={13} />
          </Button>
        </div>
        <div className="mt-8 space-y-5">
          {featuredProjects.map((project, index) => (
            <article key={project.name} className="project-feature">
              <div className="project-preview" aria-hidden="true">
                <div className="mock-window">
                  <div className="mock-bar">
                    <span /><span /><span />
                    <div />
                  </div>
                  <div className="mock-body">
                    <div className="mock-sidebar">
                      <b />
                      <i /><i /><i /><i />
                    </div>
                    <div className="mock-content">
                      <div className="mock-line wide" />
                      <div className="mock-grid">
                        <div /><div /><div />
                      </div>
                      <div className="mock-line" />
                      <div className="mock-line short" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-[10px] text-teal-400">
                    0{index + 1} / {project.name.toUpperCase()}
                  </p>
                  <StatusPill status={project.status} />
                </div>
                <h3 className="mt-3 font-mono text-lg sm:text-xl font-semibold text-zinc-100">{project.name}</h3>
                <p className="mt-3 text-sm text-zinc-400 leading-6">{project.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span key={item} className="tech-tag">{item}</span>
                  ))}
                </div>
                <div className="mt-5 flex gap-2.5">
                  {project.demo && (
                    <Button href={project.demo} external variant="secondary">Live demo <ArrowUpRight size={13} /></Button>
                  )}
                  {project.link && (
                    <Button href={project.link} external variant="ghost"><Github size={13} /> Source</Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-900/80">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16">
          <p className="section-kicker">Delivery workflow</p>
          <h2 className="section-heading mt-3">How I build and validate systems</h2>
          <p className="mt-3 max-w-xl text-sm text-zinc-500 leading-6">
            A practical process for designing, shipping and improving production-ready software.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-px overflow-hidden rounded-lg border border-zinc-800 bg-zinc-800">
            {[
              ["Understand", "Clarify the problem, constraints and what success needs to look like."],
              ["Implement", "Build clean interfaces, services and infrastructure with a clear data flow."],
              ["Validate", "Test behaviour, automate checks and verify deployments before release."],
              ["Improve", "Measure, document and remove the risks that slow the system down."],
            ].map(([title, copy], index) => (
              <article key={title} className="bg-zinc-950 p-5 min-h-40">
                <p className="font-mono text-[10px] text-purple-400">0{index + 1}</p>
                <h3 className="mt-5 font-mono text-sm text-zinc-100">{title}</h3>
                <p className="mt-2 text-xs text-zinc-500 leading-5">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900/80">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 py-20 text-center">
          <p className="section-kicker">Ready to collaborate?</p>
          <h2 className="mt-4 font-mono text-3xl sm:text-4xl font-bold text-zinc-100">Let’s build something reliable.</h2>
          <p className="mt-4 mx-auto max-w-xl text-sm text-zinc-500 leading-6">
            I’m open to software engineering and DevOps opportunities, and always glad to discuss a project or a build in progress.
          </p>
          <div className="mt-7 flex justify-center flex-wrap gap-3">
            <Button href="mailto:faruq.o.alao@gmail.com" variant="primary">Email me</Button>
            <Button href="https://github.com/Oluwagbenga9999" external variant="ghost"><Github size={14} /> GitHub profile</Button>
            <Button href="https://www.linkedin.com/in/faruq-alao/" external variant="ghost"><Linkedin size={14} /> LinkedIn</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
