import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

/**
 * Navigation-style button with optional icon.
 *
 * Renders as:
 * - <Link> when `to` is provided (internal routing)
 * - <a> when `href` is provided (external link)
 * - <button> as fallback
 *
 * Designed for CTA usage (e.g. hero, cards) where the button includes
 * a split layout with text and optional icon container.
 *
 * @component
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Button label content
 * @param {string} [props.to] - Internal route path (react-router)
 * @param {string} [props.href] - External URL
 * @param {"primary" | "secondary" | "nav"} [props.variant="primary"] - Visual style variant
 * @param {boolean} [props.icon=false] - Whether to render the icon
 * @param {string} [props.className=""] - Additional class names
 *
 * @returns {JSX.Element}
 *
 * @example
 * <NavIconButton to="/contact" variant="nav" icon>
 *   Contact us
 * </NavIconButton>
 *
 * @example
 * <NavIconButton href="https://github.com" variant="secondary">
 *   View repo
 * </NavIconButton>
 */
function NavIconButton({ children, to, href, variant = "primary", icon = false, className = "" }) {
  const classes = `btn btn-${variant} ${icon ? "btn-with-icon" : ""} ${className}`;

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {icon && (
        <span className="btn__icon-wrap" aria-hidden="true">
          <ArrowUpRight className="btn__icon" />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} rel="noreferrer" target="_blank" className={classes}>
        {content}
      </a>
    );
  }

  return <button className={classes}>{content}</button>;
}

export default NavIconButton;
