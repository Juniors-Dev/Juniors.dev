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

export default TextSectionQuoteAside;
