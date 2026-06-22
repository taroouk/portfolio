import { ArrowUp } from "lucide-react";
import { Container } from "../components/Container";

export function Footer() {
  return (
    <footer className="pb-8 pt-4 md:pb-10">
      <Container>
        <div className="flex flex-col gap-5 border-t border-[#dce9e6]/10 py-7 text-xs text-[#6c7d7a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tarek Ahmed · Mid-Level Software Engineer · Cairo.</p>
          <div className="flex items-center gap-6">
            <a href="#projects" className="hover:text-[#f0d7aa]">Work</a>
            <a href="#contact" className="hover:text-[#f0d7aa]">Contact</a>
            <a href="#top" aria-label="Back to top" className="grid h-9 w-9 place-items-center rounded-full border border-[#dce9e6]/10 text-[#d2b98e] hover:border-[#d2b98e]/35"><ArrowUp className="h-3.5 w-3.5" /></a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
