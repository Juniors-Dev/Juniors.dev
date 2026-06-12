import { Section } from "../../../features/UI";
import ServiceCard from "../../../features/ServiceCard/ServiceCard";
import { services, serviceCards } from "../translations/services";
import { useT, useLanguageStore } from "../../../stores/languageStore";

function OurServices() {
  const t = useT(services);
  const language = useLanguageStore((state) => state.language);
  return (
    <Section className="bg-primary-100 relative">
      <h2>{t.heading}</h2>

      <div className="services-section__container">
        <div className="services-rail">
          {serviceCards.map((card) => {
            const content = card[language];

            return (
              <ServiceCard
                key={card.id}
                id={card.id}
                title={content.title}
                details={content.details}
                tags={content.tags}
                panelClassName={card.panelClassName}
                tagClassName={card.tagClassName}
              />
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default OurServices;
