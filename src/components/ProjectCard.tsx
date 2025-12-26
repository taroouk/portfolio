import type { Project } from "../data/projects";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {children}
    </span>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-8 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)]"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

      <div className="relative">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white/95">
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {p.status ? <Badge>{p.status}</Badge> : null}
            {p.liveUrl ? <Badge>Live</Badge> : <Badge>No Demo</Badge>}
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-white/80">{p.description}</p>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-xs font-semibold tracking-wider text-white/60">
            KEY HIGHLIGHTS
          </div>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {p.highlights.map((h) => (
              <li key={h} className="flex gap-3 text-sm text-white/75">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                <span className="leading-6">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/75"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {p.liveUrl ? (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
            >
              Live Demo
            </a>
          ) : (
            <span className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70">
              No public live demo
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
