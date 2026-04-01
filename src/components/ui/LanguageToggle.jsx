import { useLanguageStore } from "../../stores/languageStore";

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
      <div
        className="w-14 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800
               peer-checked:bg-neutral-700 transition-colors duration-300"
      ></div>
      <div
        className="absolute left-1 top-1 w-6 h-6 rounded-full bg-cover bg-center
               transition-transform duration-300
               peer-checked:translate-x-6"
        style={{
          backgroundImage: `url(${
            language === "en"
              ? "src/assets/emojione_flag-for-united-kingdom.png"
              : "src/assets/emojione_flag-for-norway.png"
          })`,
        }}
      ></div>
    </label>
  );
}

export default LanguageToggle;
