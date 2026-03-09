import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";

export function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 md:p-10">
          <SectionTitle
            title="About"
            subtitle="Full-stack developer focused on building fast, polished, and scalable web experiences."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
              <p className="text-sm leading-8 text-white/72">
                I craft modern web products from concept to deployment. My work
                combines clean UI, practical backend architecture, and strong
                attention to performance so the final result feels refined and
                reliable.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/25 p-6">
              <p className="text-sm leading-8 text-white/72">
                I enjoy turning ideas into real products with thoughtful
                interaction design, maintainable code, and smooth user
                experience. I aim to build interfaces that look premium and
                systems that are easy to scale.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}