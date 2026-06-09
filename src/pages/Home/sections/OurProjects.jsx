import { Section, NavIconButton } from "../../../features/UI";
import ProjectCard from "../../../features/ProjectCard/ProjectCard";
import { projects } from "../translations/projects";
import { useT } from "../../../stores/languageStore";
import graveyardImg from "@/assets/projects/productivity-graveyard.jpg";
import junobotImg from "@/assets/projects/junobot.jpg";
import jonnyBayerImg from "@/assets/projects/jonny-bayer.jpg";

const featuredProjects = [
  {
    id: "productivity-graveyard",
    title: "Productivity Graveyard",
    subtitle: "Community project",
    tags: ["UX/UI", "Software development", "Framework"],
    imageSrc: graveyardImg,
  },
  {
    id: "junobot",
    title: "Junobot",
    subtitle: "Internal tool",
    tags: ["UX/UI", "Software development", "Framework"],
    imageSrc: junobotImg,
  },
  {
    id: "jonny-bayer",
    title: "Jonny Bayer",
    subtitle: "Client Site",
    tags: ["UX/UI", "Software development", "Framework"],
    imageSrc: jonnyBayerImg,
  },
];

function OurProjects({ showCta = true }) {
  const t = useT(projects);
  return (
    <Section>
      <h2 className="text-primary-800">{t.heading}</h2>

      <div className="projects-grid mt-8 grid gap-6">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

      {showCta && (
        <div className="mt-10 flex justify-center">
          <NavIconButton to="/projects" variant="nav" icon>
            {t.cta}
          </NavIconButton>
        </div>
      )}
    </Section>
  );
}

export default OurProjects;
