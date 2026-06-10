import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import { getSystemPreference, useThemeStore } from "../../stores/themeProvider";

function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

function Layout() {
  const userTheme = useThemeStore((state) => state.userTheme);

  useEffect(() => {
    applyTheme(useThemeStore.getState().getTheme());
  }, [userTheme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const onSystemChange = () => {
      if (useThemeStore.getState().userTheme === null) {
        applyTheme(getSystemPreference());
      }
    };

    mediaQuery.addEventListener("change", onSystemChange);
    return () => mediaQuery.removeEventListener("change", onSystemChange);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
