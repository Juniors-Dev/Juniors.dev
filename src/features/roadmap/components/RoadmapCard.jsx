import styles from "../Roadmap.module.css";

export function RoadmapCard({ phase, description, status, translate }) {
  const statusColors = {
    done: "bg-green-500 text-white",
    "in-progress": "bg-blue-500 text-white",
    todo: "bg-yellow-500 text-black",
  };

  const getStatusText = (statusKey) => translate?.(statusKey) ?? statusKey;

  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{phase}</h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">{description}</p>
      <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${statusColors[status]}`}>
        {getStatusText(status)}
      </span>
    </div>
  );
}
