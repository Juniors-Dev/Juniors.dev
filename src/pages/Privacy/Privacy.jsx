import { Section } from "../../features/UI";
import { privacyPolicy, privacySections } from "./translations/privacyPolicy";
import { useT, useLanguageStore } from "../../stores/languageStore";

function PrivacyPolicy() {
  const t = useT(privacyPolicy);
  const language = useLanguageStore((state) => state.language);

  return (
    <div className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-hero__inner">
          <p className="privacy-hero__label">{t.label}</p>

          <h1 className="privacy-hero__title">{t.title}</h1>

          <p className="privacy-hero__intro">
            {t.updatedPrefix}: <span className="text-secondary-500">{t.lastUpdated}</span> ·{" "}
            {t.intro}
          </p>
        </div>
      </section>

      <Section className="bg-primary-50 dark:bg-roadmap-blue">
        <div className="privacy-layout">
          <aside className="hidden lg:block">
            <nav className="privacy-nav">
              <p className="privacy-nav__title">{t.contents}</p>

              <ul className="privacy-nav__list">
                {privacySections.map((section, index) => {
                  const content = section[language];

                  return (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="privacy-nav__link">
                        <span className="privacy-nav__number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="privacy-nav__text">{content.navTitle}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div className="privacy-content">
            {privacySections.map((section, index) => {
              const content = section[language];

              return (
                <section key={section.id} id={section.id} className="privacy-section">
                  <h2 className="privacy-section__title">
                    {index + 1}. {content.title}
                  </h2>

                  <div className="privacy-section__body">
                    {content.body.map((block, blockIndex) => {
                      if (block.type === "paragraph") {
                        return <p key={blockIndex}>{block.text}</p>;
                      }

                      if (block.type === "list") {
                        return (
                          <ul key={blockIndex} className="privacy-list">
                            {block.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="privacy-list__item">
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      if (block.type === "contact") {
                        return (
                          <div key={blockIndex} className="privacy-contact-card">
                            <p className="privacy-contact-card__title">Juniors.dev</p>
                            <p>{block.address}</p>
                            <p>{block.org}</p>
                            <a
                              href={`mailto:${block.email}`}
                              className="privacy-contact-card__email"
                            >
                              {block.email}
                            </a>
                          </div>
                        );
                      }

                      return null;
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default PrivacyPolicy;
