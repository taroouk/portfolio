import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { skills } from "../data/skills";

const groupedSkills = [
  {
    title: "Frontend",
    items: skills.filter((skill) =>
      [
        "React",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Responsive Design",
      ].includes(skill)
    ),
  },
  {
    title: "Backend",
    items: skills.filter((skill) =>
      ["Node.js", "Express.js", "MongoDB", "REST APIs"].includes(skill)
    ),
  },
  {
    title: "Workflow & Delivery",
    items: skills.filter((skill) =>
      ["Git & GitHub", "Deployment"].includes(skill)
    ),
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24 lg:py-28">
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 ease-out hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] md:p-10 lg:p-12">
          <div className="mb-8 border-b border-white/10 pb-8 md:mb-10">
            <SectionTitle
              title="Core Skills"
              subtitle="A practical toolkit for building polished frontends, scalable backend services, and production-ready web experiences."
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {groupedSkills.map((group) => (
              <div
                key={group.title}
                className="rounded-[24px] border border-white/10 bg-black/20 p-5 md:p-6"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
                  {group.title}
                </div>

                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/74 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}