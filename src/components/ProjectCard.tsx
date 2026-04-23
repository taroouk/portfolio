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
        : "border-white/10 bg-white/[0.05] text-white/68";

  return (
    <span
      className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.14em] ${toneClass}`}
    >
      {children}
    </span>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  const base = import.meta.env.BASE_URL;
  const imgSrc = `${base}${p.image}`;
  const isInProgress = p.status === "In Progress";

  const techLower = p.tech.map((item) => item.toLowerCase());

  const isFullStack =
    techLower.some((item) => item.includes("node")) ||
    techLower.some((item) => item.includes("express")) ||
    techLower.some((item) => item.includes("mongodb")) ||
    techLower.some((item) => item.includes("api")) ||
    techLower.some((item) => item.includes("backend"));

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.24 }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] shadow-[0_18px_50px_rgba(0,0,0,0.28)]"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[280px] overflow-hidden border-b border-white/10 bg-black/30 lg:min-h-full lg:border-b-0 lg:border-r">
          <img
            src={imgSrc}
            alt={`${p.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_28%)]" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <Badge tone={isInProgress ? "warning" : "success"}>{p.status}</Badge>
            {p.liveUrl ? <Badge>Live</Badge> : <Badge>No Demo</Badge>}
            {isFullStack ? <Badge>Full-Stack</Badge> : <Badge>Frontend</Badge>}
          </div>

          <div className="absolute inset-x-4 bottom-4">
            <div className="rounded-[20px] border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                Project Overview
              </div>
              <div className="mt-2 text-sm leading-6 text-white/80">
                {p.subtitle}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 lg:p-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-[24px] font-semibold tracking-tight text-white/95 md:text-[28px]">
                {p.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/70">
                {p.description}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-white/10 bg-black/20 p-5 md:p-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Key Highlights
            </div>

            <ul className="mt-4 grid gap-3">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-sm text-white/74">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300/70" />
                  <span className="leading-6">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Tech Stack
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/72"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {p.liveUrl ? (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:opacity-90"
              >
                {isInProgress ? "View Preview" : "Visit Live Project"}
              </a>
            ) : (
              <span className="rounded-full border border-white/10 bg-black/25 px-5 py-2.5 text-sm text-white/70">
                No public live demo
              </span>
            )}

            <a
              href="#contact"
              className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
            >
              Let’s build similar
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}