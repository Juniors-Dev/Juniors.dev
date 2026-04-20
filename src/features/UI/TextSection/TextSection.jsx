import Section from "../Section/Section.jsx";

/**
 * Two-column text section: primary copy + optional intro paragraphs on the left,
 * custom aside (e.g. brace highlight or quote card) on the right.
 * Uses shared Section spacing and design tokens (text-h2, text-body, primary/grey).
 *
 * @param {string} [props.contentRowClassName="lg:items-start"] - Row alignment (e.g. `lg:items-center`).
 */
function TextSection({
  title,
  intro,
  paragraphs = [],
  aside,
  sectionClassName = "bg-off-white",
  containerClassName = "",
  titleClassName = "text-h2 w-fit text-pretty text-primary-900",
  paragraphClassName = "text-body text-primary-900 text-pretty",
  asideClassName = "w-full shrink-0 md:max-w-md lg:max-w-lg xl:max-w-xl",
  contentRowClassName = "md:items-center",
}) {
  return (
    <Section className={sectionClassName} containerClassName={containerClassName}>
      <div
        className={`flex flex-col md:flex-row md:justify-between md:gap-8 lg:gap-12 xl:gap-16 ${contentRowClassName}`}
      >
        <div className="flex max-w-3xl flex-1 flex-col gap-6 text-left">
          <h2 className={titleClassName}>{title}</h2>
          {intro ? <p className="text-subheading-1 text-primary-900 text-pretty">{intro}</p> : null}
          <div className="flex flex-col gap-4">
            {paragraphs.map((text, i) => (
              <p key={i} className={paragraphClassName}>
                {text}
              </p>
            ))}
          </div>
        </div>
        {aside ? <div className={asideClassName}>{aside}</div> : null}
      </div>
    </Section>
  );
}

export default TextSection;
