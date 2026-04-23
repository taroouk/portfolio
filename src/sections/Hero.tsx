import { motion } from "framer-motion";
import { Container } from "../components/Container";

export function Hero() {
  const base = import.meta.env.BASE_URL;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28"
    >
      {/* Background glow */}
      <div className="absolute left-1/2 top-8 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />
      <div className="absolute right-[8%] top-[16%] -z-10 h-[280px] w-[280px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          
          {/* LEFT */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.08 },
              },
            }}
            className="max-w-[680px]"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm"
            >
              Full-Stack Developer · React · Node.js
            </motion.div>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { duration: 0.65 },
                },
              }}
              className="mt-6 max-w-[700px] text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                I build scalable,
                <br />
                modern web experiences
                <br />
                with full-stack precision.
              </span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="mt-6 max-w-[620px] text-[15px] leading-7 text-white/65 md:text-[17px] md:leading-8"
            >
              I’m Tarek Ahmed, a full-stack developer focused on building
              responsive interfaces, scalable backend systems, and polished
              digital products that feel fast, clear, and production-ready.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              className="mt-8 flex gap-4"
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 px-7 py-3.5 text-sm text-white transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Explore Projects
              </a>

              <a
                href={`${base}cv.pdf`}
                className="rounded-full border border-white/20 px-7 py-3.5 text-sm"
              >
                Download CV
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-[420px] pb-24"
          >
            <div className="relative">
              <img
                src={`${base}hero.png`}
                alt="Tarek Ahmed"
                className="h-[360px] w-full rounded-[28px] object-cover object-[center_20%] sm:h-[420px] md:h-[480px]"
              />

              {/* Stats Box */}
              <div className="absolute inset-x-3 -bottom-16">
                <div className="grid grid-cols-3 gap-2 rounded-[20px] bg-[#0f0a18]/85 p-3 backdrop-blur-md shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                  
                  <div className="rounded-[14px] bg-white/[0.05] py-3 text-center">
                    <div className="text-lg font-semibold text-white">10+</div>
                    <div className="text-[10px] text-white/45">PROJECTS</div>
                  </div>

                  <div className="rounded-[14px] bg-white/[0.05] py-3 text-center">
                    <div className="text-lg font-semibold text-white">4+</div>
                    <div className="text-[10px] text-white/45">YEARS</div>
                  </div>

                  <div className="rounded-[14px] bg-white/[0.05] py-3 text-center">
                    <div className="text-lg font-semibold text-white">UI + API</div>
                    <div className="text-[10px] text-white/45">FULL STACK</div>
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