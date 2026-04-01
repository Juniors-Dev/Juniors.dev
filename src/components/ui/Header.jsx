import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logoDark from "../../assets/SVG-logo-darkmode.svg";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About us" },
  { to: "/work-with-us", label: "Work with us" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-primary-800 text-off-white">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-6 lg:px-12">
        <Link to="/" className="shrink-0" onClick={closeMenu}>
          <img
            src={logoDark}
            className="h-auto w-40"
            alt="Juniors.dev logo. The dot in the logo is an image of a tiny yellow rubber duck."
          />
        </Link>

        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) => `nav-link ${isActive ? "nav-link--active" : ""}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
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
            {navLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
