import { Container } from "../components/Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#05060a]/65 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between py-5">
          <a href="#top" className="text-sm font-semibold tracking-tight text-white">
            Tarek Ahmed
          </a>

          <nav className="flex items-center gap-5 text-sm text-white/70">
            <a className="hidden transition hover:text-white sm:inline" href="#about">
              About
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hidden transition hover:text-white sm:inline" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>

            <a
              href={`${import.meta.env.BASE_URL}cv.pdf`}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-2 text-white transition hover:bg-white/[0.08]"
            >
              CV
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}