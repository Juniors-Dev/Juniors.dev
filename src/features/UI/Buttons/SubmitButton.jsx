import { Link } from "react-router-dom";
import { Send } from "lucide-react";

/**
 * Navigation-style button with optional icon.
 *
 * Renders as:
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
function SubmitButton({ children, variant = "primary", icon = false, className = "" }) {
  const classes = `btn btn-${variant} ${icon ? "btn-submit-with-icon" : ""} ${className}`;

  const content = (
    <>
      {icon && (
        <span className="" aria-hidden="true">
          <Send className="btn__icon-submit" />
        </span>
      )}
      <span className="btn__label">{children}</span>
    </>
  );

  return <button className={classes}>{content}</button>;
}

export default SubmitButton;
