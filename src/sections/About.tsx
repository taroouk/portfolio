import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <SectionTitle
            title="About"
            subtitle="Full-stack developer focused on building fast, clean, and scalable web apps for real clients."
          />

          <div className="max-w-3xl text-sm leading-7 text-white/70">
            I work freelance and build end-to-end web applications — from designing clean,
            responsive interfaces to implementing APIs, database logic, and deployments.
            My goal is simple: ship reliable products that look great, perform well, and
            are easy to maintain.
          </div>
        </div>
      </Container>
    </section>
  );
}