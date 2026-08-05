import { Link } from "react-router-dom";
import { Tag } from "../UI";
import { PROJECT_DETAIL_PAGES_ENABLED } from "../../config/features";

/**
 * Preview card for a project.
 *
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.title
 * @param {string} props.subtitle
 * @param {string[]} props.tags
 * @param {string} props.imageSrc
 * @param {string} [props.imagePosition] - CSS object-position override for the preview crop (defaults to the stylesheet's top anchor).
 * @param {string} [props.className=""]
 * @param {string} [props.tagClassName=""]
 * @returns {JSX.Element}
 */
function ProjectCard({
  id,
  title,
  subtitle,
  tags,
  imageSrc,
  imagePosition,
  className = "",
  tagClassName = "",
}) {
  const cardClassName =
    `project-card ${PROJECT_DETAIL_PAGES_ENABLED ? "" : "project-card--static"} ${className}`.trim();

  const content = (
    <>
      <img
        src={imageSrc}
        alt={`${title} project preview`}
        className="project-card__image"
        style={imagePosition ? { objectPosition: imagePosition } : undefined}
        loading="lazy"
        decoding="async"
      />

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
    </>
  );

  if (PROJECT_DETAIL_PAGES_ENABLED) {
    return (
      <Link to={`/projects/${id}`} className={cardClassName}>
        {content}
      </Link>
    );
  }

  return (
    <article className={cardClassName} data-project-id={id}>
      {content}
    </article>
  );
}

export default ProjectCard;
