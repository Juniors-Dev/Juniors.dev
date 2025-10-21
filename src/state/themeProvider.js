import { create } from "zustand";
import { persist } from "zustand/middleware";

const getSystemPreference = () => {
  if (typeof window === "undefined") return "light";

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

export const useThemeStore = create(
  persist(
    (set) => ({
      theme: getSystemPreference(),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme-storage",
    }
  )
);
