import { RoadmapTimeline } from "@/features/roadmap/components/RoadmapTimeline";
import { useTranslation } from "@/hooks/useTranslation";
import { roadmapTranslations } from "@/features/roadmap/translations";

const CLASSES = {
  section: "py-12",
  heading: "text-2xl font-bold mb-6 text-center",
  container: "max-w-2xl mx-auto",
};

const TRANSLATION_KEYS = {
  ROADMAP: "roadmap",
};

export function Roadmap() {
  const { translate } = useTranslation(roadmapTranslations);

  return (
    <section className={CLASSES.section}>
      <h2 className={CLASSES.heading}>{translate(TRANSLATION_KEYS.ROADMAP)}</h2>
      <div className={CLASSES.container}>
        <RoadmapTimeline />
      </div>
    </section>
  );
}

export default Roadmap;
