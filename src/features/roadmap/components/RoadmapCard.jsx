import { CheckCircle2, Clock, Circle, Pencil } from "lucide-react";
import styles from "../Roadmap.module.css";

const STATUS_TYPES = {
  DONE: "done",
  IN_PROGRESS: "in-progress",
  TODO: "todo",
};

const STATUS_CONFIG = {
  [STATUS_TYPES.DONE]: {
    icon: CheckCircle2,
    color: "text-green-600 dark:text-green-500",
    translationKey: "done",
    fallbackLabel: "Done!",
  },
  [STATUS_TYPES.IN_PROGRESS]: {
    icon: Clock,
    color: "text-blue-600 dark:text-blue-500",
    translationKey: "in-progress",
    fallbackLabel: "In progress",
  },
  [STATUS_TYPES.TODO]: {
    icon: Pencil,
    color: "text-orange-600 dark:text-orange-500",
    translationKey: "todo",
    fallbackLabel: "To do",
  },
};

const normalizeStatus = (status) => {
  const normalized = status?.toLowerCase().replace(/\s+/g, "-");
  return STATUS_CONFIG[normalized] ? normalized : STATUS_TYPES.TODO;
};

const CLASSES = {
  cardContainer: "bg-white/5 dark:bg-transparent",
  iconWrapper: "mb-4",
  iconImage: "w-12 h-12 filter dark:brightness-0 dark:invert",
  iconComponent: "w-12 h-12 text-gray-900 dark:text-white",
  title: "text-fg mb-2",
  description: "text-sm text-fg mb-4 leading-relaxed",
  statusContainer: "flex items-center gap-2",
  statusIcon: "w-5 h-5 stroke-2",
  statusLabel: "text-sm font-semibold",
};

export function RoadmapCard({ icon: Icon, title, text, status, translate }) {
  const normalizedStatus = normalizeStatus(status);
  const statusData = STATUS_CONFIG[normalizedStatus];
  const StatusIcon = statusData.icon;
  const statusLabel = translate?.(statusData.translationKey) ?? statusData.fallbackLabel;

  return (
    <div className={`${styles.card} ${CLASSES.cardContainer}`}>
      {Icon && (
        <div className={CLASSES.iconWrapper}>
          {typeof Icon === "string" ? (
            <img src={Icon} alt="" className={CLASSES.iconImage} aria-hidden="true" />
          ) : (
            <Icon className={CLASSES.iconComponent} strokeWidth={1} aria-hidden="true" />
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
        <StatusIcon className={CLASSES.statusIcon} aria-hidden="true" />
        <span className={CLASSES.statusLabel}>{statusLabel}</span>
      </div>
    </div>
  );
}
