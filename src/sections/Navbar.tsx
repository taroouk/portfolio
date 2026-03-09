import { Container } from "../components/Container";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05060a]/70 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Tarek Ahmed
          </a>

          <nav className="flex items-center gap-4 text-sm text-white/70">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}