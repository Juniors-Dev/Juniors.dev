import React, { useEffect } from "react";
import { useThemeStore } from "../../state/themeProvider";

function ThemeToggle() {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="sr-only peer"
        />

        <div
          className={`relative w-20 h-10 rounded-full transition-colors duration-300 ${
            theme === "light" ? "bg-white" : "bg-gray-800"
          }`}
        >
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
            <svg
              className={`w-5 h-5 transition-opacity duration-300 ${
                theme === "light" ? "opacity-0" : "opacity-50"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: theme === "dark" ? "#6b7280" : "#d97706" }}
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </div>

          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-6 h-6 flex items-center justify-center">
            <svg
              className={`w-5 h-5 transition-opacity duration-300 ${
                theme === "dark" ? "opacity-0" : "opacity-50"
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: theme === "light" ? "#9ca3af" : "#e5e7eb" }}
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </div>

          <div
            className={`absolute top-1 left-1 w-8 h-8 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
              theme === "dark" ? "translate-x-10 bg-gray-700" : "translate-x-0 bg-white"
            }`}
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#d97706" }}
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "#e5e7eb" }}
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            )}
          </div>
        </div>
      </label>
    </div>
  );
}

export default ThemeToggle;
