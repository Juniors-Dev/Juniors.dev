import { useLanguageStore } from "@/state/languageStore";
import styles from "./LanguageToggle.module.css";

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguageStore();

  return (
    <button
      onClick={toggleLanguage}
      className={`${styles.button} ${styles.fancy} px-3 py-1`} // Tailwind + CSS Module
    >
      <span className={styles.fancy}>
        {language === "en" ? "English" : "Norsk"}
      </span>
    </button>
  );
}

export default LanguageToggle;
