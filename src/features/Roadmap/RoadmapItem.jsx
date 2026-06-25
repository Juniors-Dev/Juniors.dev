function RoadmapItem({ year, title, body, defaultOpen = true, highlighted = false }) {
  return (
    <article className="roadmap-item">
      <p className="roadmap-item__year text-subheading-1 text-end">{year}</p>

      <div className="roadmap-item__track">
        <span className="roadmap-item__line" aria-hidden="true" />
        <span
          className={`roadmap-item__dot${highlighted ? " roadmap-item__dot--highlighted" : ""}`}
          aria-hidden="true"
        />
      </div>

      <details className="roadmap-item__content group" open={defaultOpen}>
        <summary className="roadmap-item__title text-subheading-1">{title}</summary>
        <p className="roadmap-item__body text-paragraph">{body}</p>
      </details>
    </article>
  );
}

export default RoadmapItem;
