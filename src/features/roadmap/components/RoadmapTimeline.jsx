import styles from "../Roadmap.module.css";
import { RoadmapCard } from "./RoadmapCard";
import { useTranslation } from "../../../hooks/useTranslation";
import { roadmapTranslations } from "../translations";

export function RoadmapTimeline() {
  const { translate } = useTranslation(roadmapTranslations);

  const phases = [
    { phase: translate("phase1"), description: translate("phase1Description"), status: "done" },
    {
      phase: translate("phase2"),
      description: translate("phase2Description"),
      status: "in-progress",
    },
    { phase: translate("phase3"), description: translate("phase3Description"), status: "todo" },
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
          <RoadmapCard {...item} translate={translate} />
        </div>
      ))}
    </div>
  );
}
