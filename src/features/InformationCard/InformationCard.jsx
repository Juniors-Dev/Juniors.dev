/**
 * Reusable information card
 *
 * Provides:
 * - icon + title + body layout
 * - two visual variants (blue/green)
 * - consistent spacing, border, and radius
 *
 * Intended usage:
 * - pass localized `title` and `body` from section translations
 * - choose `variant` per card to alternate color styling
 *
 *
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.body
 * @param {React.ReactNode} [props.icon]
 * @param {"blue"|"green"} [props.variant="blue"]
 * @param {string} [props.className=""]
 *
 * @returns {JSX.Element}
 *
 * @example
 * <InformationCard
 *    title={t.items.learning.title}
 *    body={t.items.learning.body}
 *    icon={<BookOpen size={32} />}
 *    variant="blue"
 * />
 *
 * @example
 * <InformationCard
 *    title={t.items.checkins.title}
 *    body={t.items.checkins.body}
 *    icon={<CalendarCheck size={32} />}
 *    variant="green"
 * />
 */

function InformationCard({ title, body, icon, variant = "blue", className = "" }) {
  const VARIANT_STYLES = {
    blue: {
      card: "information-card--blue bg-primary-500 text-primary-100 border-card-blue-border",
      iconBox:
        "information-card__icon information-card__icon--blue bg-primary-600 border-primary-800 text-primary-100",
    },
    green: {
      card: "information-card--green bg-secondary-300 text-roadmap-blue border-secondary-600",
      iconBox:
        "information-card__icon information-card__icon--green bg-secondary-100 border-secondary-600 text-roadmap-blue",
    },
  };

  const styles = VARIANT_STYLES[variant] ?? VARIANT_STYLES.blue;

  return (
    <article
      className={[
        "information-card h-full w-full rounded-lg border p-6 md:p-8",
        "flex flex-col items-center text-center",
        "min-h-65 justify-start",
        styles.card,
        className,
      ].join(" ")}
    >
      {icon && (
        <div
          aria-hidden="true"
          className={[
            "mb-5 inline-flex h-14 w-14 items-center justify-center",
            "rounded-md border shadow-sm",
            styles.iconBox,
          ].join(" ")}
        >
          {icon}
        </div>
      )}

      <h3 className="information-card__title text-balance max-w-[22ch]">{title}</h3>

      <p className="information-card__body mt-4 max-w-[34ch] flex-1 text-balance">{body}</p>
    </article>
  );
}

export default InformationCard;
