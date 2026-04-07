import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () => set((state) => ({ language: state.language === "en" ? "no" : "en" })),
    }),
    { name: "language-storage" }
  )
);

export function useT(scope) {
  const language = useLanguageStore((state) => state.language);
  return scope[language];
}
