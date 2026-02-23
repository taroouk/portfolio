import { useMemo, useState } from "react";
import { Reveal } from "../components/Reveal";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

type Filter = "all" | "shipped" | "in-progress";

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const shipped = projects.filter((p) => p.status === "Shipped").length;
    const inProgress = projects.filter((p) => p.status === "In Progress").length;
    return { all: projects.length, shipped, inProgress };
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "shipped") return projects.filter((p) => p.status === "Shipped");
    if (filter === "in-progress") return projects.filter((p) => p.status === "In Progress");
    return projects;
  }, [filter]);

  const FilterButton = ({
    value,
    label,
    count,
  }: {
    value: Filter;
    label: string;
    count: number;
  }) => {
    const active = filter === value;
    return (
      <button
        type="button"
        onClick={() => setFilter(value)}
        className={[
          "rounded-full border px-3 py-1.5 text-xs transition",
          active
            ? "border-white/20 bg-white/10 text-white"
            : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
        ].join(" ")}
        aria-pressed={active}
      >
        {label} <span className="ml-1 text-white/60">({count})</span>
      </button>
    );
  };

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="pointer-events-none absolute -top-28 -left-28 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
                <p className="mt-2 max-w-xl text-sm text-white/70">
                  Full-stack freelance work and product builds focused on real use-cases, clean UX, and scalable systems.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <FilterButton value="all" label="All" count={counts.all} />
                  <FilterButton value="shipped" label="Shipped" count={counts.shipped} />
                  <FilterButton value="in-progress" label="In Progress" count={counts.inProgress} />
                </div>
              </div>

              <div className="text-xs text-white/60">
                Showing <span className="text-white/80">{filteredProjects.length}</span> of{" "}
                <span className="text-white/80">{projects.length}</span>
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-8 grid gap-6"
            >
              {filteredProjects.map((p) => (
                <motion.div key={p.title} variants={item}>
                  <ProjectCard p={p} />
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-white">Have a project in mind?</p>
                  <p className="mt-1 text-xs text-white/70">
                    I’m available for freelance work—landing pages, dashboards, and full-stack web apps.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/15 sm:w-auto"
                >
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}