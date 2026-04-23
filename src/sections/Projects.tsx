// src/sections/Projects.tsx
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <Container>
        <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] md:p-10">
          <SectionTitle
            title="Projects"
            subtitle="Selected full-stack work built around real use-cases, clean user experience, and solid implementation."
          />

          <div className="grid gap-8 md:gap-10">
            {projects.map((project) => (
              <ProjectCard key={project.title} p={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}