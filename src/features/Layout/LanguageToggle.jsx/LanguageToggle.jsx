import { useLanguageStore } from "../../../stores/languageStore";
import ukFlag from "../../../assets/emojione_flag-for-united-kingdom.png";
import noFlag from "../../../assets/emojione_flag-for-norway.png";

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={language === "no"}
        onChange={toggleLanguage}
        className="sr-only peer"
      />
      <div className="h-8 w-14 rounded-full border border-primary-50 bg-transparent" />
      <div
        className="absolute left-1 top-1 w-6 h-6 rounded-full bg-cover bg-center
               transition-transform duration-300
               peer-checked:translate-x-6"
        style={{
          backgroundImage: `url(${language === "en" ? ukFlag : noFlag})`,
        }}
      ></div>
    </label>
  );
}

export default LanguageToggle;
