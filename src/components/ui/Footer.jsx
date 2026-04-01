import { Link, NavLink } from "react-router-dom";
import logoDark from "../../assets/SVG-logo-darkmode.svg";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/work-with-us", label: "Work with us" },
  { to: "/about", label: "About us" },
  { to: "/projects", label: "Projects" },
];

const socialLinks = [
  { href: "https://github.com", label: "Github" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://facebook.com", label: "Facebook" },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-off-white">
      <div className="mx-auto max-w-screen-2xl px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16">
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
              {navLinks.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `footer-link ${isActive ? "footer-link--active" : ""}`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footer-contact" aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title" className="footer-contact-title">
              Contact us
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
          © {year} Juniors.dev <span className="footer-divider">|</span> All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
