import styles from "../Roadmap.module.css";

// Status constants (outside component to avoid recreation)
const STATUS_TYPES = {
  DONE: "done",
  IN_PROGRESS: "in-progress",
  TODO: "todo",
};

const STATUS_CONFIG = {
  [STATUS_TYPES.DONE]: {
    icon: "✓",
    color: "text-green-600 dark:text-green-500",
    translationKey: "done",
    fallbackLabel: "Done!",
  },
  [STATUS_TYPES.IN_PROGRESS]: {
    icon: "○",
    color: "text-blue-600 dark:text-blue-500",
    translationKey: "in-progress",
    fallbackLabel: "In progress",
  },
  [STATUS_TYPES.TODO]: {
    icon: "✎",
    color: "text-orange-600 dark:text-orange-500",
    translationKey: "todo",
    fallbackLabel: "To do",
  },
};

// Support multiple status format variations
const normalizeStatus = (status) => {
  const normalized = status?.toLowerCase().replace(/\s+/g, "-");
  return STATUS_CONFIG[normalized] ? normalized : STATUS_TYPES.TODO;
};

// CSS class constants
const CLASSES = {
  cardContainer: "bg-white/5 dark:bg-transparent",
  iconWrapper: "mb-4",
  iconImage: "w-12 h-12 filter dark:brightness-0 dark:invert",
  iconComponent: "text-gray-900 dark:text-white text-3xl",
  title:
    "!text-[var(--color-primary-nightwing-hex)] dark:!text-[var(--color-accent-eggshell-hex)] mb-2",
  description:
    "text-sm !text-gray-700 dark:!text-[var(--color-accent-eggshell-hex)] mb-4 leading-relaxed",
  statusContainer: "flex items-center gap-2",
  statusIcon: "text-lg font-bold",
  statusLabel: "text-sm font-semibold",
};

export function RoadmapCard({ icon, title, text, status, translate }) {
  const normalizedStatus = normalizeStatus(status);
  const statusData = STATUS_CONFIG[normalizedStatus];
  const statusLabel = translate?.(statusData.translationKey) ?? statusData.fallbackLabel;

  return (
    <div className={`${styles.card} ${CLASSES.cardContainer}`}>
      {icon && (
        <div className={CLASSES.iconWrapper}>
          {typeof icon === "string" ? (
            <img src={icon} alt="" className={CLASSES.iconImage} aria-hidden="true" />
          ) : (
            <div className={CLASSES.iconComponent}>{icon}</div>
          )}
        </div>
      )}

      <h3 className={`${styles.title} ${CLASSES.title}`}>{title}</h3>

      <p className={CLASSES.description}>{text}</p>

      <div
        className={`${CLASSES.statusContainer} ${statusData.color}`}
        role="status"
        aria-label={`Status: ${statusLabel}`}
      >
        <span className={CLASSES.statusIcon}>{statusData.icon}</span>
        <span className={CLASSES.statusLabel}>{statusLabel}</span>
      </div>
    </div>
  );
}

export { STATUS_TYPES };
