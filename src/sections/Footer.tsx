import { Container } from "../components/Container";

export function Footer() {
  return (
    <footer className="py-10">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} Tarek Ahmed</span>
          <a className="hover:text-white" href="#top">
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}