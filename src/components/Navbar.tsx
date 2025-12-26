import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = links.map((l) => document.getElementById(l.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 rounded-2xl border border-white/10 bg-black/60 px-6 py-4 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between">
            <a
              href="#top"
              className="text-sm font-semibold tracking-wide text-white"
            >
              Tarek Ahmed
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  className="group relative px-1 text-white/70 transition hover:text-white"
                >
                  {l.label}

                  {/* underline */}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 group-hover:scale-x-100 ${
                      active === l.id ? "scale-x-100" : ""
                    }`}
                  />
                </a>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
