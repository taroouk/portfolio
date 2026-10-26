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
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group overflow-hidden rounded-[2rem] border border-[#dce9e6]/10 bg-[#1b3033] transition-shadow duration-500 hover:shadow-[0_28px_80px_rgba(0,0,0,0.28)]"
    >
      <div className="relative border-b border-[#dce9e6]/10 bg-[#20383b]">
        <img
          src={`${base}${p.image}`}
          alt={`${p.title} preview`}
          loading="lazy"
          className="block h-auto w-full"
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-[#162729]/80 px-3 py-2 text-[9px] uppercase tracking-[0.16em] text-[#e5ece9] backdrop-blur-md md:left-5 md:top-5">
          <Circle className={`h-2 w-2 animate-pulse fill-current ${isInProgress ? 'text-[#91b9b3]' : 'text-[#d2b98e]'}`} /> {p.status}
        </div>
      </div>

      <div className="grid gap-8 p-6 md:p-9 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:p-10">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[#748683]">
            <span>0{index + 1}</span>
            <span>{isFullStack ? "Full-stack" : "Frontend"}</span>
            <span>{p.liveUrl ? "Live project" : "Case study"}</span>
          </div>
          <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-[#f4f0e7] md:text-4xl">{p.title}</h3>
          <p className="mt-4 text-sm leading-7 text-[#b6c2bf]">{p.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {p.tech.map((item) => (
              <span key={item} className="rounded-full border border-[#dce9e6]/15 px-3 py-1.5 text-[11px] text-[#a3b2af]">{item}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#748683]">Highlights</div>
          <ul className="mt-4 grid gap-3">
            {p.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-6 text-[#c8d3d0]">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-[#d2b98e]" /> {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
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
