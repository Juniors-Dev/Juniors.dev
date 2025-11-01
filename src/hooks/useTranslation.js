import { useLanguageStore } from "@/state/languageStore";

export const useTranslation = (translations) => {
  if (!translations) {
    console.warn("useTranslation: missing translations input");
  }

  const { language } = useLanguageStore();

  const translate = (key, fallback = `[missing:${key}]`) => {
    const value = translations?.[language]?.[key];
    return value ?? fallback;
  };

  return { translate, language };
};
