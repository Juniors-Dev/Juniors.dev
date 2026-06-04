import { Link, NavLink } from "react-router-dom";
import { useT } from "../../../stores/languageStore";
import { translations } from "../translations/ui";
import logoDark from "../../../assets/SVG-logo-darkmode.svg";

const navLinks = [
  { to: "/", key: "home", end: true },
  { to: "/work-with-us", key: "work" },
  { to: "/about", key: "about" },
  { to: "/projects", key: "projects" },
];

const socialLinks = [
  { href: "https://github.com/Juniors-Dev", label: "GitHub" },
  { href: "https://www.linkedin.com/company/juniors-dev/posts/?feedView=all", label: "LinkedIn" },
];

function Footer() {
  const t = useT(translations);
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-off-white">
      <div className="mx-auto max-w-app px-8 py-10 md:px-10 md:py-14 lg:px-12 lg:py-16">
        <div className="text-center md:text-start">
          <Link to="/" className="footer-logo-link text-center md:text-start">
            <img
              src={logoDark}
              className="h-auto w-[210px] md:w-[260px] "
              alt="Juniors.dev logo. The dot in the logo is an image of a tiny yellow rubber duck."
            />
          </Link>
        </div>
        <div className="footer-columns">
          <nav aria-labelledby="footer-navigation-title">
            <h2
              id="footer-navigation-title"
              className="footer-navigation-title sr-only md:not-sr-only"
            >
              {t.footer.navigation}
            </h2>
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
              href="mailto:juniors@thejuniors.dev"
              className="footer-link footer-link--underline footer-contact-email"
            >
              juniors@thejuniors.dev
            </a>
          </section>

          <section aria-labelledby="footer-social-title">
            <div className="socials-container">
              <h2 id="footer-social-title" className="footer-social-title sr-only md:not-sr-only">
                {t.footer.social}
              </h2>
              <ul className="footer-list-socials">
                {socialLinks.map(({ href, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link footer-link--underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Juniors.dev <span className="footer-divider">|</span> {t.footer.rights}
          </p>
          <Link to="/privacy" className="footer-link footer-link--underline footer-privacy">
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
