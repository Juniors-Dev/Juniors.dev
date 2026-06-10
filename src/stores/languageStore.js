import { create } from "zustand";
import { persist } from "zustand/middleware";

// Get language from browser settings (first time visits)
function getInitialLanguage() {
  if (typeof navigator === "undefined") return "en";

  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language];

  for (const tag of preferred) {
    const lower = (tag ?? "").toLowerCase();
    if (lower.startsWith("nb") || lower.startsWith("nn") || lower.startsWith("no")) return "no";
    if (lower.startsWith("en")) return "en";
  }

  return "en";
}

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: getInitialLanguage(),
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
