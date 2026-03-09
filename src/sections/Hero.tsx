import { motion } from "framer-motion";
import { Container } from "../components/Container";

export function Hero() {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-20 md:pt-20 md:pb-24">
      <div className="absolute left-1/2 top-12 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      <div className="absolute right-[10%] top-[18%] -z-10 h-[300px] w-[300px] rounded-full bg-cyan-400/8 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.08 } },
            }}
            className="max-w-[640px]"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] text-white/60 backdrop-blur-sm"
            >
              Full-Stack Developer • Available for freelance projects
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className="mt-6 max-w-[620px] text-5xl font-semibold leading-[0.96] tracking-[-0.04em] text-white md:text-7xl"
            >
              I build polished
              <br />
              web products
              <br />
              that feel premium.
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="mt-7 max-w-[620px] text-[15px] leading-8 text-white/68 md:text-[17px]"
            >
              Hi, I&apos;m Tarek Ahmed. I design and develop complete web
              experiences — from modern interfaces to scalable backend APIs,
              with a strong focus on smooth UX, refined visuals, and
              production-ready quality.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-2xl bg-white px-7 py-3.5 text-sm font-medium text-black transition hover:-translate-y-0.5 hover:opacity-90"
              >
                View Projects
              </a>

              <a
                href={`${base}cv.pdf`}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm text-white transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                Show CV
              </a>
            </motion.div>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="mt-8 flex flex-wrap items-center gap-3 text-xs text-white/52 md:text-sm"
            >
              <a className="transition hover:text-white" href="mailto:tarekelfanty@gmail.com">
                tarekelfanty@gmail.com
              </a>
              <span className="text-white/20">•</span>
              <a className="transition hover:text-white" href="tel:+201033967886">
                WhatsApp: +20 10 339 67886
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute -inset-10 rounded-full bg-cyan-400/10 blur-[120px]" />

            <div className="relative rounded-[34px] border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.04] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[radial-gradient(circle_at_top,#173047_0%,#0d1621_45%,#0a1017_100%)]">
                <img
                  src={`${base}hero.png`}
                  alt="Tarek Ahmed portrait"
                  className="h-[500px] w-full object-cover object-top md:h-[560px]"
                />
              </div>

              <div className="absolute inset-x-4 bottom-4">
                <div className="grid grid-cols-3 gap-3 rounded-[22px] border border-white/10 bg-[#0c1018]/88 p-3 backdrop-blur-xl">
                  <div className="rounded-2xl bg-white/[0.05] py-3 text-center">
                    <div className="text-lg font-semibold text-white">10+</div>
                    <div className="mt-1 text-[11px] text-white/55">Projects</div>
                  </div>

                  <div className="rounded-2xl bg-white/[0.05] py-3 text-center">
                    <div className="text-lg font-semibold text-white">4+</div>
                    <div className="mt-1 text-[11px] text-white/55">Years</div>
                  </div>

                  <div className="rounded-2xl bg-white/[0.05] py-3 text-center">
                    <div className="text-lg font-semibold text-white">24h</div>
                    <div className="mt-1 text-[11px] text-white/55">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}