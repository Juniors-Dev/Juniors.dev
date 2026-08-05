/**
 * Layout section wrapper.
 *
 * Provides:
 * - consistent vertical spacing between sections
 * - full-width background support via the <section> element
 * - a centered content container with max-width and horizontal padding
 *
 * Intended usage:
 * - apply background / section-level styling via `className`
 * - adjust inner content width or layout via `containerClassName`
 *
 * @component
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Section content
 * @param {string} [props.className=""] - Classes applied to the outer <section> (background, text color, etc.)
 * @param {string} [props.containerClassName=""] - Classes applied to the inner container (layout, width overrides, etc.)
 *
 * @returns {JSX.Element}
 *
 * @example
 * <Section className="bg-primary-800 text-white">
 *   <h1>Hero</h1>
 * </Section>
 *
 * @example
 * <Section containerClassName="max-w-4xl">
 *   <p>Narrow content section</p>
 * </Section>
 */
function Section({ children, className = "", containerClassName = "", id }) {
  return (
    <section id={id} className={`py-10 md:py-14 lg:py-20 ${className}`}>
      <div className={`mx-auto w-full max-w-app px-4 md:px-8 lg:px-12 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}

export default Section;
