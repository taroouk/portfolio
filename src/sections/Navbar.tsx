import { Container } from "../components/Container";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const base = import.meta.env.BASE_URL;

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce9e6]/10 bg-[#162729]/80 backdrop-blur-2xl">
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <a
            href="#top"
            className="group flex items-center gap-3 text-sm font-medium text-[#f4f0e7]"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#d2b98e]/25 bg-[#d2b98e]/10 text-[11px] tracking-[0.08em] text-[#f0d7aa] transition duration-500 group-hover:rotate-[360deg] group-hover:bg-[#d2b98e]/20">TA</span>
            <span className="hidden sm:block">
              <span className="block">Tarek Ahmed</span>
              <span className="mt-0.5 block text-[9px] font-normal uppercase tracking-[0.15em] text-[#71827f]">Mid-Level Software Engineer</span>
            </span>
          </a>

          <nav className="flex items-center gap-4 text-[13px] text-[#a8b5b3] sm:gap-6">
            <a
              className="hidden hover:text-[#f0d7aa] sm:inline"
              href="#about"
            >
              About
            </a>

            <a
              className="hover:text-[#f0d7aa]"
              href="#projects"
            >
              Projects
            </a>

            <a
              className="hidden hover:text-[#f0d7aa] sm:inline"
              href="#skills"
            >
              Skills
            </a>

            <a
              className="hidden hover:text-[#f0d7aa] md:inline"
              href="#contact"
            >
              Contact
            </a>

            <a
              href={`${base}cv.pdf`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 rounded-full border border-[#dce9e6]/15 bg-[#f4f0e7] px-4 py-2.5 font-medium text-[#162729] hover:-translate-y-0.5 hover:bg-[#f0d7aa]"
            >
              CV <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
