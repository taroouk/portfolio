// src/sections/Projects.tsx
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <Container>
        <SectionTitle
          index=""
          title="Projects with purpose."
          subtitle="Selected freelance and project-based work across e-commerce, real estate, dashboards, and full-stack application development."
        />

        <div className="grid gap-8 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} p={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
