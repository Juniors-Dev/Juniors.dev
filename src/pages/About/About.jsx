import { TextSection, TextSectionQuoteAside } from "../../features/UI";
import { mission } from "./translations/mission";
import { useT } from "../../stores/languageStore";
import AboutHeroSection from "./sections/AboutHeroSection";
import RoadmapSection from "./sections/Roadmap/Roadmap";
import ContactSection from "./sections/Contact";

function About() {
  const tMission = useT(mission);

  return (
    <>
      <AboutHeroSection />
      <TextSection
        sectionClassName="mission-section bg-off-white"
        title={tMission.title}
        intro={tMission.intro}
        paragraphs={[tMission.body]}
        titleClassName="mission-section__title text-h2 w-fit text-pretty"
        paragraphClassName="mission-section__body text-body text-pretty"
        contentRowClassName="mission-section__layout md:items-start md:basis-3/5 xl:items-center xl:basis-1/2"
        aside={
          <TextSectionQuoteAside
            quote={tMission.quote}
            attribution={tMission.attribution}
            initials={tMission.initials}
          />
        }
        asideClassName="mission-section__aside w-full shrink-0 mt-6 md:mt-0 md:basis-2/5 xl:basis-1/2 md:max-w-md lg:max-w-lg xl:max-w-xl"
      />
      <RoadmapSection />
      <ContactSection />
    </>
  );
}

export default About;
