import Hero from "../../../features/UI/Hero/Hero.jsx";
import { NavIconButton } from "../../../features/UI";
import { hero } from "../translations/hero";
import { useT } from "../../../stores/languageStore";

function HeroSection() {
  const t = useT(hero);
  return (
    <Hero
      title={
        <>
          {t.titleLines.map((line) => (
            <span key={line} className="home-hero-section__title-line">
              {line}
            </span>
          ))}
        </>
      }
      body={t.body}
      className="home-hero-section bg-primary-800 text-off-white"
      titleClassName="home-hero-section__title"
      bodyClassName="home-hero-section__body"
    >
      <NavIconButton to="/about#contact" variant="nav" icon>
        {t.cta}
      </NavIconButton>
    </Hero>
  );
}

export default HeroSection;
