import { Section, Carousel } from "../../../features/UI";
import ServiceCard from "../../../features/ServiceCard/ServiceCard";
import { services, serviceCards } from "../translations/services";
import { useT, useLanguageStore } from "../../../stores/languageStore";

function OurServices() {
  const t = useT(services);
  const language = useLanguageStore((state) => state.language);

  return (
    <Section className="bg-primary-100 relative font-body text-pretty">
      <h2>{t.heading}</h2>

      <Carousel
        ariaLabel={t.heading}
        className="carousel--grid-mobile"
        pageCount={2}
        prevLabel={t.carouselPrev}
        nextLabel={t.carouselNext}
        dotLabel={t.carouselDot}
      >
        {serviceCards.map((card) => {
          const content = card[language];

          return (
            <ServiceCard
              key={card.id}
              className="carousel__slide"
              title={content.title}
              details={content.details}
              tags={content.tags}
              panelClassName={card.panelClassName}
              tagClassName={card.tagClassName}
            />
          );
        })}
      </Carousel>
    </Section>
  );
}

export default OurServices;
