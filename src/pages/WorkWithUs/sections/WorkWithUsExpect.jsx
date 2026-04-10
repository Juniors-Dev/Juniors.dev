import { Section, FeatureHighlightCard } from "../../../features/UI";
import { useT } from "../../../stores/languageStore";
import { workWithUs } from "../translations/workWithUs";
import { workWithUsExpectItems } from "../data/expectCards";

function WorkWithUsExpect() {
  const t = useT(workWithUs);

  return (
    <Section className="bg-primary-100 text-primary-900">
      <h2 className="mb-10 text-center">{t.expectHeading}</h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {workWithUsExpectItems.map(({ id, Icon, tone, titleKey, bodyKey }) => (
          <FeatureHighlightCard
            key={id}
            tone={tone}
            icon={Icon}
            title={t[titleKey]}
            description={t[bodyKey]}
          />
        ))}
      </div>
    </Section>
  );
}

export default WorkWithUsExpect;
