import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { getSystemPreference, useThemeStore } from "../../../stores/themeProvider";

function ThemeToggle() {
  const userTheme = useThemeStore((state) => state.userTheme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const [systemTheme, setSystemTheme] = useState(getSystemPreference);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setSystemTheme(mediaQuery.matches ? "dark" : "light");

    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  const theme = userTheme ?? systemTheme;
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center p-1 text-primary-50 transition-opacity hover:opacity-80"
    >
      {isDark ? (
        <Moon size={24} fill="currentColor" strokeWidth={0} />
      ) : (
        <Sun size={24} fill="currentColor" strokeWidth={2} />
      )}
    </button>
  );
}

export default ThemeToggle;
