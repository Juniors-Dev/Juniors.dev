import Hero from "../../../features/UI/Hero/Hero.jsx";
import { hero } from "../translations/hero";
import { useT } from "../../../stores/languageStore";

function PrivacyHeroSection() {
  const t = useT(hero);

  return (
    <Hero
      title={t.title}
      body={t.body}
      className="about-hero-section bg-primary-800 text-off-white"
      rowClassName="md:items-start md:gap-6 lg:items-center lg:gap-14"
      titleClassName="text-balance"
      bodyClassName="about-hero-section__body text-balance md:text-pretty"
    />
  );
}

export default PrivacyHeroSection;
