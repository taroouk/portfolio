import { Container } from "../components/Container";

export function Navbar() {
  return (
    <nav className="py-6">
      <Container>
        <div className="flex justify-between items-center">

          <div className="font-bold text-lg">
            Tarek Ahmed
          </div>

          <div className="flex gap-6 text-sm text-white/70">

            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            <a
              href="/cv.pdf"
              className="border border-white/20 px-4 py-1 rounded-lg"
            >
              CV
            </a>

          </div>
        </div>
      </Container>
    </nav>
  );
}