import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <SectionTitle
            title="Contact"
            subtitle="Send your project details and I’ll reply with a clear plan and timeline."
          />

          <div className="flex flex-col gap-4 text-sm text-white/70">
            <a className="hover:text-white" href="mailto:tarekelfanty@gmail.com">
              tarekelfanty@gmail.com
            </a>
            <a className="hover:text-white" href="tel:+201033967886">
              +20 10 339 67886
            </a>
            <a
              className="hover:text-white"
              href="https://github.com/taroouk"
              target="_blank"
              rel="noreferrer"
            >
              GitHub: taroouk
            </a>
            <a
              className="hover:text-white"
              href="https://www.facebook.com/tarek.ahmed.zakaria"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>

          <div className="mt-8">
            <a
              href="mailto:tarekelfanty@gmail.com?subject=Freelance%20Project%20Inquiry"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-black hover:opacity-90"
            >
              Email me
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}