import { Container } from "../components/Container";

export function Footer() {
  return (
    <footer className="pb-8 pt-6">
      <Container>
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center">
          <p>© 2026 Tarek Ahmed. All rights reserved.</p>

          <a
            href="#top"
            className="transition hover:text-white"
          >
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}