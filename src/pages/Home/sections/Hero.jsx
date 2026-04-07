import { Section, NavIconButton } from "../../../features/UI";
import { hero } from "../translations/hero";
import { useT } from "../../../stores/languageStore";

function HeroSection() {
  const t = useT(hero);
  return (
    <Section className="bg-primary-800 text-off-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="max-w-[12ch]">{t.title}</h1>

        <p className="text-subheading-2 mt-6 max-w-3xl">{t.body}</p>

        <NavIconButton to="#contact" variant="nav" icon className="mt-8">
          {t.cta}
        </NavIconButton>
      </div>
    </Section>
  );
}

export default HeroSection;
