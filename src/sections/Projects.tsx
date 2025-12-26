import { Reveal } from "../components/Reveal";
import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
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

export function Projects() {
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
                  Selected work focused on real use-cases, clean UX, and scalable systems.
                </p>
              </div>
              <div className="text-xs text-white/60">{projects.length} projects</div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-8 grid gap-6"
            >
              {projects.map((p) => (
                <motion.div key={p.title} variants={item}>
                  <ProjectCard p={p} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
