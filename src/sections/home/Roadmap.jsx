import { RoadmapTimeline } from "../../features/roadmap/index.js";
import { useTranslation } from "../../hooks/useTranslation";

function Roadmap() {
  const { t, language } = useTranslation();

  // Debug logging
  console.log("Current language:", language);
  console.log("Roadmap translation:", t("roadmap"));

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">{t("roadmap")}</h2>
      <div className="max-w-2xl mx-auto">
        <RoadmapTimeline />
      </div>
    </section>
  );
}

export default Roadmap;
