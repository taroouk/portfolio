import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-6 md:p-10">
          <SectionTitle
            title="Projects"
            subtitle="Selected work focused on real use-cases, polished interfaces, and scalable implementation."
          />

          <div className="grid gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} p={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}