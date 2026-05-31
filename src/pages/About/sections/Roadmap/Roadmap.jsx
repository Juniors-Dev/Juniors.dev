import { Section } from "../../../../features/UI";
import RoadmapItem from "../../../../features/Roadmap/RoadmapItem.jsx";
import { roadmap } from "../../translations/roadmap";
import { useT } from "../../../../stores/languageStore";

function RoadmapSection() {
  const t = useT(roadmap);

  return (
    <Section className="roadmap-section bg-primary-100">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-10 text-h2">{t.sectionTitle}</h2>

        <div className="flex flex-col">
          {t.items.map((item, index) => (
            <RoadmapItem
              key={item.year}
              year={item.year}
              title={item.title}
              body={item.body}
              defaultOpen={true}
              highlighted={index === t.items.length - 1}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default RoadmapSection;
