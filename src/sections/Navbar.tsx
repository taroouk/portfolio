import { Container } from "../components/Container";

export function Navbar() {
  const base = import.meta.env.BASE_URL;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060a]/70 backdrop-blur-2xl">
      <Container>
        <div className="flex items-center justify-between py-4 md:py-5">
          <a
            href="#top"
            className="text-[15px] font-semibold tracking-tight text-white transition-all duration-300 ease-out hover:opacity-80"
          >
            Tarek Ahmed
          </a>

          <nav className="flex items-center gap-2 text-sm text-white/60 sm:gap-4 md:gap-6">
            <a
              className="hidden transition-all duration-300 ease-out hover:text-purple-300 sm:inline"
              href="#about"
            >
              About
            </a>

            <a
              className="transition-all duration-300 ease-out hover:text-purple-300"
              href="#projects"
            >
              Projects
            </a>

            <a
              className="hidden transition-all duration-300 ease-out hover:text-purple-300 sm:inline"
              href="#skills"
            >
              Skills
            </a>

            <a
              className="transition-all duration-300 ease-out hover:text-purple-300"
              href="#contact"
            >
              Contact
            </a>

            <span className="hidden h-4 w-px bg-white/10 md:inline-block" />

            <a
              href={`${base}cv.pdf`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-purple-500/20 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
            >
              Download CV
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}