import styles from "../Roadmap.module.css";
import { RoadmapCard } from "./RoadmapCard";
import { useTranslation } from "../../../hooks/useTranslation";

export function RoadmapTimeline() {
  const { t } = useTranslation();

  const phases = [
    { phase: t("phase1"), description: t("phase1Description"), status: "done" },
    { phase: t("phase2"), description: t("phase2Description"), status: "in-progress" },
    { phase: t("phase3"), description: t("phase3Description"), status: "todo" },
  ];

  return (
    <div className={styles.timeline}>
      {phases.map((item, idx) => (
        <div key={idx} className={styles.phase}>
          <div
            className={`${styles.icon} ${
              item.status === "done"
                ? "bg-green-500"
                : item.status === "in-progress"
                  ? "bg-blue-500"
                  : "bg-yellow-500"
            }`}
          />
          <RoadmapCard {...item} />
        </div>
      ))}
    </div>
  );
}
