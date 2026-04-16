import { NavIconButton } from "../../../features/UI";
import Hero from "../../../features/UI/Hero/Hero.jsx";
import { hero } from "../translations/hero";
import { useT } from "../../../stores/languageStore";

function HeroSection() {
  const t = useT(hero);
  return (
    <Hero title={t.title} body={t.body} className="bg-primary-800 text-off-white">
      <NavIconButton to="#contact" variant="nav" icon>
        {t.cta}
      </NavIconButton>
    </Hero>
  );
}

export default HeroSection;
