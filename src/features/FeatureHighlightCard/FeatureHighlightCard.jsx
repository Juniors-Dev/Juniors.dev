import { createElement } from "react";

/**
 * Highlight card for feature grids (e.g. “What to expect”).
 *
 * @param {object} props
 * @param {"blue"|"lime"} props.tone
 * @param {import("lucide-react").LucideIcon} props.icon
 * @param {string} props.title
 * @param {string} props.description
 */
function FeatureHighlightCard({ tone, icon: Icon, title, description }) {
  const isBlue = tone === "blue";

  return (
    <article
      className={`rounded-xl p-6 shadow-[0_1px_3px_rgba(4,48,101,0.08)] md:p-8 ${
        isBlue ? "bg-primary-500 text-off-white" : "bg-secondary-300 text-primary-900"
      }`}
    >
      <div
        className={`mb-4 inline-flex rounded-full p-3 ${
          isBlue ? "bg-primary-800/30 text-off-white" : "bg-primary-900/10 text-primary-900"
        }`}
      >
        {createElement(Icon, {
          className: "size-8 md:size-9",
          strokeWidth: 1.75,
          "aria-hidden": true,
        })}
      </div>
      <h3 className="text-subheading-1 mb-3">{title}</h3>
      <p className="text-body text-pretty">{description}</p>
    </article>
  );
}

export default FeatureHighlightCard;
