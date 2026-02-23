import { motion } from "framer-motion";
import { Container } from "../components/Container";

export function Hero() {
  return (
    <section id="top" className="relative py-20">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[#05060a]" />
      <div className="fixed inset-0 -z-10 opacity-70 [background:radial-gradient(1000px_circle_at_15%_10%,rgba(99,102,241,0.22),transparent_55%),radial-gradient(900px_circle_at_85%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(900px_circle_at_50%_90%,rgba(168,85,247,0.14),transparent_60%)]" />

      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="text-sm text-white/60"
            >
              Full-Stack Developer • Freelance
            </motion.p>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mt-3 text-4xl font-bold leading-tight md:text-6xl"
            >
              Hi, I’m Tarek Ahmed
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mt-6 max-w-xl text-base leading-7 text-white/70"
            >
              I build end-to-end web applications — clean UI on the frontend,
              solid APIs and business logic on the backend, and reliable deployments.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:opacity-90"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-6 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-white/5"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 8 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mt-8 flex flex-wrap items-center gap-3 text-sm text-white/70"
            >
              <a className="hover:text-white" href="mailto:tarekelfanty@gmail.com">
                tarekelfanty@gmail.com
              </a>
              <span className="text-white/30">•</span>
              <a className="hover:text-white" href="tel:+201033967886">
                +20 10 339 67886
              </a>
              <span className="text-white/30">•</span>
              <a
                className="hover:text-white"
                href="https://github.com/taroouk"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <span className="text-white/30">•</span>
              <a
                className="hover:text-white"
                href="https://www.facebook.com/tarek.ahmed.zakaria"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-8 rounded-full bg-white/10 blur-3xl" />

            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[32px] border border-white/15 bg-black/40 p-8">
              <div className="text-sm text-white/60">Available for freelance</div>
              <div className="mt-2 text-2xl font-semibold tracking-tight">
                Let’s build something solid.
              </div>
              <div className="mt-4 text-sm leading-6 text-white/70">
                Clean UI, reliable APIs, and production-ready deployments.
              </div>
              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}