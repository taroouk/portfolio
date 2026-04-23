import { Container } from "../components/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-4 md:pb-10 md:pt-6">
      <Container>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] px-5 py-5 backdrop-blur-xl md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-white/88">Tarek Ahmed</p>
              <p className="mt-1 text-sm text-white/45">
                Full-Stack Developer building polished, scalable web products.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
              <a href="#projects" className="transition hover:text-white">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
              <a href="#top" className="transition hover:text-white">
                Back to top
              </a>
            </div>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4 text-xs text-white/35">
            © {year} Tarek Ahmed. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}