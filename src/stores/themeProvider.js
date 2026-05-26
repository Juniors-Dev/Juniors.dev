import { create } from "zustand";
import { persist } from "zustand/middleware";

export const getSystemPreference = () => {
  if (typeof window === "undefined") return "light";

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

export const useThemeStore = create(
  persist(
    (set, get) => ({
      userTheme: null,
      setTheme: (theme) => set({ userTheme: theme }),
      toggleTheme: () => {
        const current = get().userTheme ?? getSystemPreference();
        set({ userTheme: current === "dark" ? "light" : "dark" });
      },
      getTheme: () => get().userTheme ?? getSystemPreference(),
    }),
    {
      name: "theme-storage",
      partialize: (state) => ({ userTheme: state.userTheme }),
    }
  )
);
