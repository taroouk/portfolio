import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { skills } from "../data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <Container>
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 md:p-10">
          <SectionTitle
            title="Skills"
            subtitle="A practical stack for shipping modern, scalable, and polished web products."
          />

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-white/75 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}