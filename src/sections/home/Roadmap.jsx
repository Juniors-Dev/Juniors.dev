import { RoadmapTimeline } from "../../features/roadmap/components/RoadmapTimeline";
import { useTranslation } from "../../hooks/useTranslation";
import { roadmapTranslations } from "../../features/roadmap/translations";

export function Roadmap() {
  const { translate } = useTranslation(roadmapTranslations);

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">{translate("roadmap")}</h2>
      <div className="max-w-2xl mx-auto">
        <RoadmapTimeline />
      </div>
    </section>
  );
}

export default Roadmap;
