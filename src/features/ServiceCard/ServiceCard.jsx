import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "../UI";

/**
 * Service preview card.
 *
 * @param {object} props
 * @param {string} props.id - Service identifier used in route
 * @param {string} props.title - Service title
 * @param {string} props.details - Short service description
 * @param {string[]} props.tags - Tags shown in the card
 * @param {string} [props.className=""] - Extra classes for the outer card
 * @param {string} [props.panelClassName=""] - Classes for the coloured top panel
 * @param {string} [props.tagClassName=""] - Classes applied to each tag
 * @returns {JSX.Element}
 */
function ServiceCard({
  // id,
  title,
  details,
  tags,
  className = "",
  panelClassName = "",
  tagClassName = "",
}) {
  return (
    <Link to={`#`} className={`service-card ${className}`}>
      <div className={`service-card__panel ${panelClassName}`}>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__details">{details}</p>
        <div className="service-card__tags">
          {tags.map((tag) => (
            <Tag key={tag} className={tagClassName}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      {/* This could be a component if its something we want to use elsewhere */}
      <div className="service-card__footer">
        <span className="service-card__action">Explore</span>
        <span className="service-card__icon-wrap" aria-hidden="true">
          <ArrowUpRight className="service-card__icon" />
        </span>
      </div>
    </Link>
  );
}

export default ServiceCard;
