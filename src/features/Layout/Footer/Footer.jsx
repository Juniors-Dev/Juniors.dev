import { Link, NavLink } from "react-router-dom";
import { useT } from "../../../stores/languageStore";
import { translations } from "../translations/ui";
import logoDark from "../../../assets/SVG-logo-darkmode.svg";

const navLinks = [
  { to: "/", key: "home", end: true },
  { to: "/projects", key: "projects" },
  { to: "/about", key: "about" },
  { to: "/work-with-us", key: "work" },
  { to: "/contact", key: "contact" },
];

const socialLinks = [
  { href: "https://github.com", label: "Github" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://facebook.com", label: "Facebook" },
];

function Footer() {
  const t = useT(translations);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-off-white">
      <div className="mx-auto max-w-app px-8 py-10 md:px-10 md:py-14 lg:px-12 lg:py-16">
        <Link to="/" className="footer-logo-link">
          <img
            src={logoDark}
            className="h-auto w-[210px] md:w-[260px]"
            alt="Juniors.dev logo. The dot in the logo is an image of a tiny yellow rubber duck."
          />
        </Link>

        <div className="footer-columns">
          <nav aria-label="Footer navigation">
            <ul className="footer-list">
              {navLinks.map(({ to, key, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `footer-link ${isActive ? "footer-link--active" : ""}`
                    }
                  >
                    {t.nav[key]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer-contact" aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title" className="footer-contact-title">
              {t.footer.contact}
            </h2>
            <a
              href="mailto:email@hotmail.com"
              className="footer-link footer-link--underline footer-contact-email"
            >
              email@hotmail.com
            </a>
          </section>

          <section aria-label="Social media links">
            <ul className="footer-list md:items-end">
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link footer-link--underline"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <p className="footer-copyright">
          © {year} Juniors.dev <span className="footer-divider">|</span> {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
