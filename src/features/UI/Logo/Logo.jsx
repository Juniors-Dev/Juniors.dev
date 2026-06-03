import logoSrc from "@/assets/logo.svg";

const LOGO_ALT = "Juniors.dev";

const SIZE_CLASS = {
  header: "h-auto w-52 sm:w-56 md:w-60 lg:w-64",
  footer: "h-auto w-40 sm:w-44 md:w-48 lg:w-52",
};

/**
 * Brand logo — fixed colors; same in light and dark mode.
 *
 * @param {object} props
 * @param {"header"|"footer"} [props.size="header"]
 * @param {string} [props.className=""]
 * @returns {JSX.Element}
 */
function Logo({ size = "header", className = "" }) {
  return (
    <img
      src={logoSrc}
      alt={LOGO_ALT}
      width={225}
      height={64}
      className={`block shrink-0 ${SIZE_CLASS[size] ?? SIZE_CLASS.header} ${className}`.trim()}
      decoding="async"
    />
  );
}

export default Logo;
