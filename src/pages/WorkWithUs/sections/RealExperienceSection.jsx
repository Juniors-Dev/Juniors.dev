import { TextSection, TextSectionBraceAside } from "../../../features/UI";
import { realExperience } from "../translations/realExperience";
import { useT } from "../../../stores/languageStore";

function RealExperienceSection() {
  const t = useT(realExperience);

  return (
    <TextSection
      title={t.title}
      sectionClassName="real-experience-section bg-off-white"
      titleClassName="text-h2 w-fit text-pretty"
      paragraphs={t.paragraphs}
      aside={
        <TextSectionBraceAside
          sentence={t.highlightSentence}
          before={t.highlightBefore}
          emphasis={t.highlightEmphasis}
          after={t.highlightAfter}
        />
      }
    />
  );
}

export default RealExperienceSection;
