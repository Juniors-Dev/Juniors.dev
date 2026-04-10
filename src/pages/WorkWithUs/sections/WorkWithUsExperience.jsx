import { Section, SplitContentSection } from "../../../features/UI";
import { useT } from "../../../stores/languageStore";
import { workWithUs } from "../translations/workWithUs";

function WorkWithUsExperience() {
  const t = useT(workWithUs);

  return (
    <Section className="bg-off-white text-primary-900">
      <SplitContentSection
        leading={
          <div className="max-w-xl">
            <h2 className="text-h2 mb-4">{t.introTitle}</h2>
            <p className="text-paragraph text-pretty">{t.introBody}</p>
          </div>
        }
        trailing={
          <div className="flex flex-wrap items-start gap-4 lg:justify-end">
            <span
              className="select-none font-sans text-[5rem] leading-none font-light text-primary-500 md:text-[7rem]"
              aria-hidden="true"
            >
              {"{"}
            </span>
            <p className="text-subheading-1 max-w-md pt-4 text-pretty">
              {t.introAsideLead}{" "}
              <strong className="font-semibold text-primary-800">{t.introAsideEmphasis}</strong>{" "}
              {t.introAsideTail}
            </p>
          </div>
        }
      />
    </Section>
  );
}

export default WorkWithUsExperience;
