/** Bordered quote card with avatar initials (About). Figma colors in light and dark. */
function TextSectionQuoteAside({ quote, attribution, initials }) {
  return (
    <figure className="mission-quote-aside">
      <blockquote className="mission-quote-aside__quote text-pretty">{quote}</blockquote>
      <figcaption className="mission-quote-aside__attribution">
        <span className="mission-quote-aside__avatar" aria-hidden="true">
          {initials}
        </span>
        <span className="mission-quote-aside__name">{attribution}</span>
      </figcaption>
    </figure>
  );
}

export default TextSectionQuoteAside;
