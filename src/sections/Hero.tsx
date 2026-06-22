import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { Container } from "../components/Container";

const reveal = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  const base = import.meta.env.BASE_URL;
  const portraitRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [30, -32]);
  const marqueeItems = ["React", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Authentication"];

  return (
    <section id="top" className="overflow-hidden pb-24 pt-2 md:pb-32 md:pt-4">
      <Container>
        <div className="mb-10 flex items-center justify-between border-b border-[#dce9e6]/10 pb-5 text-[10px] uppercase tracking-[0.2em] text-[#81918f] md:mb-14">
          <span className="flex items-center gap-2 text-[#d2b98e]"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#d2b98e]" /> Available</span>
        </div>
        <div className="grid items-end gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            className="relative z-10"
          >
            <motion.div variants={reveal} className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#d2b98e]">
              <span className="h-px w-8 bg-[#d2b98e]/60" /> Mid-Level Software Engineer
            </motion.div>

            <motion.h1 variants={reveal} className="mt-7 max-w-[760px] text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.84] tracking-[-0.065em] text-[#f4f0e7]">
              I build digital
              <br />products with
              <br /><span className="editorial text-[#d2b98e]">clarity & craft.</span>
            </motion.h1>

            <motion.p variants={reveal} className="mt-8 max-w-[610px] text-[15px] leading-7 text-[#a8b5b3] md:text-[17px] md:leading-8">
              I’m Tarek Ahmed, a mid-level software engineer with freelance experience since 2022, building responsive web applications, REST APIs, authentication flows, and maintainable full-stack products.
            </motion.p>

            <motion.div variants={reveal} className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="group flex items-center gap-3 rounded-full bg-[#d2b98e] px-6 py-3.5 text-sm font-medium text-[#162729] hover:-translate-y-0.5 hover:bg-[#f0d7aa]">
                Explore my work <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a href={`${base}cv.pdf`} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-[#dce9e6]/15 px-6 py-3.5 text-sm text-[#dbe5e2] hover:border-[#d2b98e]/45 hover:text-[#f0d7aa]">
                <Download className="h-4 w-4" /> Download CV
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            ref={portraitRef}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:ml-auto"
            style={{ y: portraitY }}
          >
            <div className="absolute -left-12 top-10 hidden text-[10px] uppercase tracking-[0.25em] text-[#6d7e7b] [writing-mode:vertical-rl] lg:block">Designing · Building · Shipping</div>
            <div className="noise relative overflow-hidden rounded-[2rem] border border-[#dce9e6]/10 bg-[#20383b] p-2">
              <div className="animate-soft-pulse pointer-events-none absolute -right-16 -top-16 z-10 h-44 w-44 rounded-full border border-[#91b9b3]/25" />
              <div className="relative overflow-hidden rounded-[1.55rem]">
                <img src={`${base}hero.png`} alt="Tarek Ahmed" className="h-[470px] w-full object-cover object-[center_20%] grayscale-[12%] sm:h-[570px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#162729]/80 via-transparent to-[#91b9b3]/[0.08]" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#c7d4d1]/60">Based in</p>
                    <p className="mt-1 text-sm text-[#f4f0e7]">Cairo, Egypt</p>
                  </div>
                  <a href="#contact" aria-label="Contact Tarek" className="grid h-12 w-12 place-items-center rounded-full bg-[#f4f0e7] text-[#162729] hover:rotate-6 hover:bg-[#f0d7aa]">
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative -mt-1 grid grid-cols-3 border-x border-b border-[#dce9e6]/10 bg-[#1b3033]">
              {[['4+', 'Years'], ['2022', 'Freelancing'], ['FE + BE', 'Full stack']].map(([value, label], index) => (
                <div key={label} className={`px-3 py-5 text-center ${index !== 2 ? 'border-r border-[#dce9e6]/10' : ''}`}>
                  <div className="text-lg font-medium text-[#f4f0e7]">{value}</div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#81918f]">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="marquee-shell mt-20 overflow-hidden border-y border-[#dce9e6]/10 py-4 md:mt-28"
        >
          <div className="animate-marquee flex w-max">
            {[0, 1].map((cycle) => (
              <div key={cycle} aria-hidden={cycle === 1} className="flex shrink-0 items-center">
                {marqueeItems.map((item) => (
                  <div key={`${cycle}-${item}`} className="flex items-center">
                    <span className="px-6 text-[11px] uppercase tracking-[0.22em] text-[#81918e] md:px-9">{item}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#d2b98e]/55" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
