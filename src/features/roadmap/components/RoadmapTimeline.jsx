import styles from "../Roadmap.module.css";
import { RoadmapCard } from "./RoadmapCard";

const phases = [
  { phase: "Phase 1", description: "Initial project setup", status: "done" },
  { phase: "Phase 2", description: "Add basic features", status: "in-progress" },
  { phase: "Phase 3", description: "Polish and refine", status: "todo" },
];

export function RoadmapTimeline() {
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
