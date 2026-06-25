/**
 * Hero Layout component.
 *
 * Provides:
 * - a reusable hero layout with a title and body text
 * - responsive two-column layout on larger screens and stacked layout on mobile
 * - optional CTA / extra content area  rendered below the main hero text via 'children'
 *
 * Intended usage:
 * - pass localized `title` and `body` strings (e.g. from `useT(hero)`)
 * - control background and text colors via `className` on the underlying `Section`
 * - pass a CTA button (e.g. `NavIconButton`) or other elements as `children`
 *
 * @component
 *
 * @param {object} props
 * @param {string} props.title - Main hero heading text rendered in an <h1>
 * @param {string} props.body - Supporting hero body text rendered in a <p>
 * @param {React.ReactNode} [props.children] - Optional extra content (CTA button, links, tags, etc.)
 * @param {string} [props.className=""] - Classes applied to the outer `Section` (background, text color, etc.)
 * @param {string} [props.titleClassName="max-w-[12ch]"] - Classes applied to the `<h1>`
 * @param {string} [props.bodyClassName] - Classes applied to the body `<p>`
 * @param {string} [props.rowClassName=""] - Classes applied to the title/body row wrapper
 *
 * @returns {JSX.Element}
 *
 * @example
 * //simple hero without CTA
 * <Hero
 *    title="Work at juniors.dev"
 *    body="Always looking for hungry developers and designers ready to grow and gain real work experience."
 * className="bg-primary-800 text-off-white"
 * />
 *
 * @example
 * <Hero
 *    title={t.title}
 *    body={t.body}
 *    className="bg-primary-800 text-off-white"
 * >
 *    <NavIconButton to="#contact" variant="nav" icon>
 *      {t.cta}
 *    </NavIconButton>
 * </Hero>
 */

import Section from "../Section/Section.jsx";

function Hero({
  title,
  body,
  className = "",
  titleClassName = "max-w-[12ch]",
  bodyClassName = "text-subheading-2 max-w-md md:max-w-2xl text-balance md:text-pretty",
  rowClassName = "",
  children,
}) {
  return (
    <Section className={`hero-section ${className}`.trim()}>
      <div
        className={`mx-auto flex flex-col gap-14 text-left md:flex-row md:items-center md:justify-between ${rowClassName}`}
      >
        <h1 className={titleClassName}>{title}</h1>
        <p className={bodyClassName}>{body}</p>
      </div>

      {children && (
        <div className="mx-auto mt-8 flex w-full max-w-4xl justify-center">{children}</div>
      )}
    </Section>
  );
}

export default Hero;
