import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-5">

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        {/* LEFT */}
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
            Full-Stack Developer
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
            Hi, I’m Tarek
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
            className="mt-6 text-base leading-7 text-white/70"
          >
            I build scalable web applications end-to-end — clean UI on the
            frontend, solid APIs and business logic on the backend.
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
            className="mt-8 flex flex-wrap gap-3 text-sm text-white/70"
          >
            <a className="hover:text-white" href="mailto:tarekelfanty@gmail.com">
              tarekelfanty@gmail.com
            </a>
            <span className="text-white/30">•</span>
            <a className="hover:text-white" href="tel:+201033967886">
              +20 10 339 67886
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-8 rounded-full bg-white/10 blur-3xl" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto w-full max-w-sm overflow-hidden rounded-[32px] border border-white/15 bg-black/40 p-4"
          >
            <img
              src={`${import.meta.env.BASE_URL}hero.png`}
              alt="Tarek Ahmed"
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
