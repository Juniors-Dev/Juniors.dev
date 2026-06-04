import { Section } from "../../../features/UI";
import { content } from "../translations/content";
import { useT } from "../../../stores/languageStore";
import PrivacyPolicyArticle from "./PrivacyPolicyArticle";

const paragraphClass = "text-body text-grey-700 text-pretty";
const listClass = "list-disc pl-6 text-body text-grey-700 flex flex-col gap-2";

function PrivacyContentSection() {
  const t = useT(content);

  return (
    <Section
      className="privacy-section mission-section bg-off-white"
      containerClassName="max-w-3xl"
    >
      <p className="privacy-section__meta text-body text-grey-700">{t.meta.lastUpdated}</p>

      <div className="mt-8 flex flex-col gap-6 md:mt-10">
        {t.intro.map((text, index) => (
          <p
            key={index}
            className={
              index === 0
                ? "privacy-section__lead text-subheading-1 text-primary-900 text-pretty"
                : "privacy-section__body text-body text-grey-700 text-pretty"
            }
          >
            {text}
          </p>
        ))}
      </div>

      <div className="mt-12 flex flex-col gap-10">
        {t.sections.map((section, index) => (
          <PrivacyPolicyArticle
            key={index}
            section={section}
            paragraphClass={paragraphClass}
            listClass={listClass}
          />
        ))}
      </div>
    </Section>
  );
}

export default PrivacyContentSection;
