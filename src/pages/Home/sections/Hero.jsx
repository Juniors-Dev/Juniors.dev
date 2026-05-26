import Hero from "../../../features/UI/Hero/Hero.jsx";
import { NavIconButton } from "../../../features/UI";
import { hero } from "../translations/hero";
import { useT } from "../../../stores/languageStore";

function HeroSection() {
  const t = useT(hero);

  return (
    <Hero
      title={t.title}
      body={t.body}
      className="bg-primary-800 text-off-white"
      rowClassName="mx-auto max-w-4xl flex-col items-center text-center md:flex-col md:gap-6"
      titleClassName="max-w-[12ch] text-balance text-center"
      bodyClassName="text-subheading-2 max-w-3xl text-balance text-center"
    >
      <NavIconButton to="#contact" variant="nav" icon>
        {t.cta}
      </NavIconButton>
    </Hero>
  );
}

export default HeroSection;
