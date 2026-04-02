/**
 * Generic tag / pill component.
 *
 * Designed to be flexible:
 * - colour is controlled via className (Tailwind utilities)
 * - no opinionated variants
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Tag label
 * @param {string} [props.className=""] - Tailwind classes for colour / overrides
 * @returns {JSX.Element}
 */
function Tag({ children, className = "" }) {
  return <span className={`tag ${className}`}>{children}</span>;
}

export default Tag;
