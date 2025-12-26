import { motion, AnimatePresence } from "framer-motion";

export function IntroLoader({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#05060a]"
        >
          <div className="relative">
            {/* glow */}
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-white/10 blur-3xl" />

            <motion.div
              initial={{ opacity: 0, y: 12, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <div className="text-sm text-white/60">Loading portfolio</div>

              <div className="mt-2 text-2xl font-semibold tracking-tight">
                Tarek Ahmed
              </div>

              {/* progress bar */}
              <div className="mt-6 h-1.5 w-64 overflow-hidden rounded-full border border-white/10 bg-white/5">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full w-full bg-white/70"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
