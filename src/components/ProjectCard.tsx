import { motion } from "framer-motion";
import { ArrowUpRight, Circle } from "lucide-react";
import type { Project } from "../data/projects";

export function ProjectCard({ p, index }: { p: Project; index: number }) {
  const base = import.meta.env.BASE_URL;
  const isInProgress = p.status === "In Progress";
  const techLower = p.tech.map((item) => item.toLowerCase());
  const isFullStack = techLower.some((item) => ["node", "express", "mongodb", "api", "backend"].some((key) => item.includes(key)));

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group overflow-hidden rounded-[2rem] border border-[#dce9e6]/10 bg-[#1b3033] transition-shadow duration-500 hover:shadow-[0_28px_80px_rgba(0,0,0,0.28)]"
    >
      <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
        <div className="relative min-h-[320px] overflow-hidden border-b border-[#dce9e6]/10 bg-[#20383b] lg:min-h-[560px] lg:border-b-0 lg:border-r">
          <img
            src={`${base}${p.image}`}
            alt={`${p.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover opacity-85 saturate-[0.82] transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100 group-hover:saturate-100"
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#162729]/70 via-transparent to-[#162729]/5" />
          <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/[0.10] to-transparent opacity-0 transition-all duration-1000 group-hover:left-[125%] group-hover:opacity-100" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#162729]/70 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-[#e5ece9] backdrop-blur-md">
            <Circle className={`h-2 w-2 animate-pulse fill-current ${isInProgress ? 'text-[#91b9b3]' : 'text-[#d2b98e]'}`} /> {p.status}
          </div>
          <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.2em] text-white/55">0{index + 1} / 0{p.tech.length}</div>
        </div>

        <div className="flex flex-col p-7 md:p-9 lg:p-10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#748683]">
            <span>{isFullStack ? "Full-stack" : "Frontend"}</span>
            <span>{p.liveUrl ? "Live project" : "Case study"}</span>
          </div>

          <h3 className="mt-10 text-3xl font-medium tracking-[-0.04em] text-[#f4f0e7] md:text-4xl">{p.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#95a5a2]">{p.description}</p>

          <div className="mt-8 border-t border-[#dce9e6]/10 pt-7">
            <div className="text-[10px] uppercase tracking-[0.2em] text-[#748683]">Highlights</div>
            <ul className="mt-4 grid gap-3">
              {p.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight} className="flex gap-3 text-[13px] leading-6 text-[#b6c2bf]">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#d2b98e]" /> {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {p.tech.map((item) => (
              <span key={item} className="rounded-full border border-[#dce9e6]/10 px-3 py-1.5 text-[10px] text-[#8d9d9a]">{item}</span>
            ))}
          </div>

          <div className="mt-auto pt-9">
            {p.liveUrl ? (
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="group/link flex items-center justify-between rounded-full bg-[#f4f0e7] px-5 py-3.5 text-sm font-medium text-[#162729] hover:bg-[#f0d7aa]">
                {isInProgress ? "View current preview" : "Visit live project"}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
              </a>
            ) : (
              <a href="#contact" className="flex items-center justify-between rounded-full border border-[#dce9e6]/15 px-5 py-3.5 text-sm text-[#dce5e2] hover:border-[#d2b98e]/40">Discuss a similar project <ArrowUpRight className="h-4 w-4" /></a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
