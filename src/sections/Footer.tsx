import { ArrowUpRight, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-6">
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-medium text-white/90">
                Tarek Ahmed
              </div>
              <div className="mt-1 text-xs text-white/60">
                Full-Stack Developer & Open Source Enthusiast
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://github.com/taroouk"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white/75 transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-black/40 hover:text-white"
              >
                GitHub
                <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:opacity-100" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                Let’s talk
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Tarek Ahmed. All rights reserved.</p>

          </div>
        </div>
      </div>

      {/* Back to top floating button */}
      <motion.a
        href="#top"
        aria-label="Back to top"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="fixed bottom-6 right-6 z-[60] inline-flex items-center justify-center rounded-2xl border border-white/10 bg-black/60 p-3 text-white/80 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-black/70 hover:text-white hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.35)]"
      >
        <ChevronUp className="h-5 w-5" />
      </motion.a>
    </footer>
  );
}
