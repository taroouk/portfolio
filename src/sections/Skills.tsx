import { Reveal } from "../components/Reveal";
import { motion, type Variants } from "framer-motion";

const groups = [
  { title: "Frontend", skills: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"] },
  { title: "Backend", skills: ["Laravel", "PHP", "REST APIs", "Authentication", "Authorization"] },
  { title: "Database", skills: ["MySQL", "Schema Design", "Query Optimization"] },
  { title: "Tools & Practices", skills: ["Git", "GitHub", "Clean Architecture", "MVC", "SaaS Patterns"] },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
                <p className="mt-2 text-sm text-white/70">
                  A balanced stack for building complete web products.
                </p>
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 grid gap-6 md:grid-cols-2"
            >
              {groups.map((g) => (
                <motion.div
                  key={g.title}
                  variants={item}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 p-6 hover:border-white/25 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)]"
                >
                  <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

                  <div className="text-sm font-medium">{g.title}</div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 transition group-hover:border-white/20 group-hover:bg-white/10"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
