import { Section } from "../../features/UI";
import ProjectCard from "../../features/ProjectCard/ProjectCard";
import { featuredProjects } from "../Home/sections/OurProjects";
import { projects } from "../Home/translations/projects";
import { useT } from "../../stores/languageStore";

function Projects() {
  const t = useT(projects);

  return (
    <Section>
      <h1 className="text-h1 text-primary-800">{t.heading}</h1>

      <div className="projects-grid mt-8 grid gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
}

export default Projects;
