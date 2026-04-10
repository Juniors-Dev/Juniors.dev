import { Section } from "../../../features/UI";
import { useT } from "../../../stores/languageStore";
import { workWithUs } from "../translations/workWithUs";

function WorkWithUsHero() {
  const t = useT(workWithUs);

  return (
    <Section className="bg-primary-800 text-off-white">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <h1 className="max-w-[14ch] text-balance">{t.heroTitle}</h1>
        <p className="text-subheading-2 max-w-xl shrink-0 lg:pt-2 lg:text-right">
          {t.heroSubtitle}
        </p>
      </div>
    </Section>
  );
}

export default WorkWithUsHero;
