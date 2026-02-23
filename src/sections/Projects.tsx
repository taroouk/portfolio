import { useMemo, useState } from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";

type Filter = "all" | "shipped" | "in-progress";

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const shipped = projects.filter((p) => p.status === "Shipped").length;
    const inProgress = projects.filter((p) => p.status === "In Progress").length;
    return { all: projects.length, shipped, inProgress };
  }, []);

  const filtered = useMemo(() => {
    if (filter === "shipped") return projects.filter((p) => p.status === "Shipped");
    if (filter === "in-progress") return projects.filter((p) => p.status === "In Progress");
    return projects;
  }, [filter]);

  const Btn = ({ v, label, count }: { v: Filter; label: string; count: number }) => {
    const active = filter === v;
    return (
      <button
        type="button"
        onClick={() => setFilter(v)}
        className={[
          "rounded-full border px-3 py-1.5 text-xs transition",
          active
            ? "border-white/20 bg-white/10 text-white"
            : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
        ].join(" ")}
      >
        {label} <span className="ml-1 text-white/60">({count})</span>
      </button>
    );
  };

  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle
              title="Projects"
              subtitle="Selected work focused on real use-cases, clean UX, and scalable systems."
            />
            <div className="text-xs text-white/60">
              Showing <span className="text-white/80">{filtered.length}</span> of{" "}
              <span className="text-white/80">{projects.length}</span>
            </div>
          </div>

          <div className="-mt-2 mb-8 flex flex-wrap gap-2">
            <Btn v="all" label="All" count={counts.all} />
            <Btn v="shipped" label="Shipped" count={counts.shipped} />
            <Btn v="in-progress" label="In Progress" count={counts.inProgress} />
          </div>

          <div className="grid gap-6">
            {filtered.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>

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
      </Container>
    </section>
  );
}