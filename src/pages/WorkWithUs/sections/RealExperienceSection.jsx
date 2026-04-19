import { TextSection, TextSectionBraceAside } from "../../../features/UI";
import { realExperience } from "../translations/realExperience";
import { useT } from "../../../stores/languageStore";

function RealExperienceSection() {
  const t = useT(realExperience);

  return (
    <TextSection
      title={t.title}
      titleClassName="text-h2 w-fit text-pretty text-primary-650"
      paragraphs={t.paragraphs}
      asideClassName="w-full shrink-0 md:max-w-[340px] lg:max-w-md xl:max-w-xl"
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
