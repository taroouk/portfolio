import { motion } from "framer-motion";
import type { Project } from "../data/projects";

function Badge({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "success" | "warning";
}) {
  const toneClass =
    tone === "success"
      ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-100/90"
      : tone === "warning"
      ? "border-amber-500/20 bg-amber-500/10 text-amber-100/90"
      : "border-white/10 bg-white/5 text-white/70";

  return (
    <span className={`rounded-full border px-3 py-1 text-xs ${toneClass}`}>
      {children}
    </span>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  const base = import.meta.env.BASE_URL;
  const imgSrc = `${base}${p.image}`;
  const isInProgress = p.status === "In Progress";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5"
    >
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

      <div className="relative h-52 overflow-hidden border-b border-white/10 bg-black/30 sm:h-60">
        <img
          src={imgSrc}
          alt={`${p.title} preview`}
          loading="lazy"
          className="h-full w-full object-cover opacity-90 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Badge tone={isInProgress ? "warning" : "success"}>{p.status}</Badge>
          {p.liveUrl ? <Badge>Live</Badge> : <Badge>No Demo</Badge>}
          {isInProgress ? <Badge>Coming Soon</Badge> : null}
        </div>
      </div>

      <div className="relative p-8">
        <h3 className="text-xl font-semibold tracking-tight text-white/95">
          {p.title}
        </h3>
        <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>

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
              {isInProgress ? "Preview" : "Live Demo"}
            </a>
          ) : (
            <span className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/70">
              No public live demo
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}