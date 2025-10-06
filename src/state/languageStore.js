import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () =>
        set((state) => ({ language: state.language === "en" ? "no" : "en" })),
    }),
    { name: "language-storage" } // key in localStorage it will handle storing and retrieving on reload 😉
  )
);
