import { TextSection, TextSectionQuoteAside } from "../../features/UI";
import { mission } from "./translations/mission";
import { useT } from "../../stores/languageStore";
import RoadmapSection from "./sections/Roadmap/Roadmap";

function About() {
  const tMission = useT(mission);

  return (
    <>
      <TextSection
        title={tMission.title}
        intro={tMission.intro}
        paragraphs={[tMission.body]}
        paragraphClassName="text-body text-grey-700 text-pretty"
        contentRowClassName="md:items-center md:basis-3/5 xl:basis-1/2"
        aside={
          <TextSectionQuoteAside
            quote={tMission.quote}
            attribution={tMission.attribution}
            initials={tMission.initials}
          />
        }
        asideClassName="w-full shrink-0 md:basis-2/5 xl:basis-1/2 mt-6 md:max-w-md lg:max-w-lg xl:max-w-xl"
      />
      <RoadmapSection />
    </>
  );
}

export default About;
