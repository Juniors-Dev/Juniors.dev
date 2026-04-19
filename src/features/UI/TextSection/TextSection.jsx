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

/**
 * Work With Us callout: tall skinny `{` on the left, centered bold copy on the right.
 * Brace stretched with `scaleY` to hit the Figma aspect ratio (60×150 / 60×242 / 60×377).
 */
function TextSectionBraceAside({ before, emphasis, after, sentence }) {
  return (
    <>
      <p className="sr-only">{sentence}</p>
      <div
        aria-hidden="true"
        className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10 xl:gap-16"
      >
        <span className="inline-block -my-12 select-none text-[140px] font-light leading-none tracking-normal text-primary-500 origin-[50%_60%] [transform:rotate(-90deg)] md:origin-center md:-mt-14 md:mb-0 md:text-[160px] md:leading-[1.51] md:[transform:none] xl:text-[250px]">
          {"{"}
        </span>
        <p className="max-w-[280px] text-center text-base font-bold leading-[1.4] text-primary-700 md:max-w-[260px] md:text-lg xl:max-w-[330px] xl:text-2xl">
          {before}
          <span className="font-extrabold uppercase">{emphasis}</span>
          {after}
        </p>
      </div>
    </>
  );
}

/** Bordered quote card with avatar initials (About). */
function TextSectionQuoteAside({ quote, attribution, initials }) {
  return (
    <figure className="border-l-4 border-primary-800 bg-primary-100 p-6 md:p-8">
      <blockquote className="text-body text-pretty font-bold italic text-primary-900">
        {quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-900 text-caption font-medium text-off-white"
          aria-hidden="true"
        >
          {initials}
        </span>
        <span className="text-caption text-grey-600">{attribution}</span>
      </figcaption>
    </figure>
  );
}

export default TextSection;
export { TextSectionBraceAside, TextSectionQuoteAside };
