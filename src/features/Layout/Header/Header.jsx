import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoDark from "../../../assets/SVG-logo-darkmode.svg";
import { useT } from "../../../stores/languageStore";
import { translations } from "../translations/ui";
import LanguageToggle from "../LanguageToggle.jsx/LanguageToggle";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navLinks = [
  { to: "/", key: "home", end: true },
  { to: "/projects", key: "projects" },
  { to: "/about", key: "about" },
  { to: "/work-with-us", key: "work" },
];

function Header() {
  const t = useT(translations);

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-primary-800 text-off-white">
      <div className="mx-auto flex max-w-app items-center justify-between px-8 md:px-10 py-6 lg:px-12">
        <Link to="/" className="shrink-0" onClick={closeMenu}>
          <img
            src={logoDark}
            className="h-auto w-40"
            alt="Juniors.dev logo. The dot in the logo is an image of a tiny yellow rubber duck."
          />
        </Link>

        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ to, key, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => `nav-link ${isActive ? "nav-link--active" : ""}`}
                >
                  {t.nav[key]}
                </NavLink>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-off-white lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={40} strokeWidth={2.5} /> : <Menu size={40} strokeWidth={2.5} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-primary-600 bg-primary-800 px-6 pb-6 lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map(({ to, key, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`
                  }
                >
                  {t.nav[key]}
                </NavLink>
              </li>
            ))}
            <li className="flex items-center gap-4">
              <LanguageToggle />
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
