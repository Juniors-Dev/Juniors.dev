import styles from "../Roadmap.module.css";
import { useTranslation } from "../../../hooks/useTranslation";

export function RoadmapCard({ phase, description, status }) {
  const { t } = useTranslation();

  const statusColors = {
    done: "bg-green-500 text-white",
    "in-progress": "bg-blue-500 text-white",
    todo: "bg-yellow-500 text-black",
  };

  const getStatusText = (status) => {
    switch (status) {
      case "done":
        return t("statusDone");
      case "in-progress":
        return t("statusInProgress");
      case "todo":
        return t("statusTodo");
      default:
        return status;
    }
  };

  return (
    <div className={`${styles.card} bg-white dark:bg-gray-800`}>
      <h3 className={styles.title}>{phase}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
      <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${statusColors[status]}`}>
        {getStatusText(status)}
      </span>
    </div>
  );
}
