import { Link } from "react-router-dom";
import { Tag } from "../UI";

/**
 * Preview card for a project.
 *
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string[]} props.tags
 * @param {string} props.imageSrc
 * @param {string} [props.className=""]
 * @param {string} [props.tagClassName=""]
 * @returns {JSX.Element}
 */
function ProjectCard({ id, title, subtitle, tags, imageSrc, className = "", tagClassName = "" }) {
  return (
    <Link to={`/projects/${id}`} className={`project-card ${className}`}>
      <img src={imageSrc} alt="" className="project-card__image" />

      <div className="project-card__content">
        <p className="project-card__subtitle">{subtitle}</p>
        <h3 className="project-card__title">{title}</h3>

        <div className="project-card__tags">
          {tags.map((tag) => (
            <Tag key={tag} className={tagClassName}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
