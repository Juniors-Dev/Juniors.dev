import logoSrc from "@/assets/logo.svg";

const LOGO_ALT = "Juniors.dev";

const SIZE_CLASS = {
  header: "h-auto w-44 sm:w-48 md:w-52 lg:w-56",
  footer: "h-auto w-40 sm:w-44 md:w-48 lg:w-52",
};

/**
 * Brand logo — fixed colors; same in light and dark mode.
 * @param {"header" | "footer"} [size="header"]
 * @param {string} [className]
 */
function Logo({ size = "header", className = "" }) {
  return (
    <img
      src={logoSrc}
      alt={LOGO_ALT}
      width={225}
      height={64}
      className={`block shrink-0 ${SIZE_CLASS[size] ?? size} ${className}`.trim()}
      decoding="async"
    />
  );
}

export default Logo;
