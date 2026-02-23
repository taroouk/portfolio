import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { skills } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <SectionTitle title="Skills" subtitle="A stack built for shipping modern web apps." />

          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/75"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}