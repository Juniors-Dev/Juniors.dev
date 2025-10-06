import { useLanguageStore } from "@/state/languageStore";
import { translations } from "@/translations";

export const useTranslation = () => {
  const { language } = useLanguageStore();

  const t = (key, fallback = "") => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }

    return value || fallback || key;
  };

  return { t, language };
};
