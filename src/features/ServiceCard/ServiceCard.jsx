import { Tag } from "../UI";

/**
 * Service preview card.
 *
 * @param {object} props
 * @param {string} props.title - Service title
 * @param {string} props.details - Short service description
 * @param {string[]} props.tags - Tags shown in the card
 * @param {string} [props.className=""] - Extra classes for the outer card
 * @param {string} [props.panelClassName=""] - Classes for the coloured top panel
 * @param {string} [props.tagClassName=""] - Classes applied to each tag
 * @returns {JSX.Element}
 */
function ServiceCard({
  title,
  details,
  tags,
  className = "",
  panelClassName = "",
  tagClassName = "",
}) {
  return (
    <article className={`service-card ${className}`}>
      <div className={`service-card__panel ${panelClassName}`}>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__details">{details}</p>
        <div className="service-card__tags">
          {tags.map((tag, index) => (
            <Tag key={tag + index} className={tagClassName}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
