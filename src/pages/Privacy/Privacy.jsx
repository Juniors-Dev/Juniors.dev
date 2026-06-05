import { Section } from "../../features/UI";
import { privacyPolicy, privacySections } from "./translations/privacyPolicy";
import { useT, useLanguageStore } from "../../stores/languageStore";

function PrivacyPolicy() {
  const t = useT(privacyPolicy);
  const language = useLanguageStore((state) => state.language);

  return (
    <div lassName="bg-primary-50 text-primary-900 dark:bg-roadmap-blue dark:text-primary-50">
      <section className="bg-primary-900 text-white ">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-secondary-500">
            {t.label}
          </p>

          <h1 className="max-w-3xl text-4xl font-bold md:text-6xl">{t.title}</h1>

          <p className="mt-6 max-w-2xl text-lg text-primary-100">
            {t.updatedPrefix}: <span className="text-secondary-500">{t.lastUpdated}</span> ·{" "}
            {t.intro}
          </p>
        </div>
      </section>

      <Section className="bg-primary-50 dark:bg-roadmap-blue">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-24 rounded-2xl border border-primary-200 bg-white p-6 shadow-sm dark:border-primary-700 dark:bg-primary-800">
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-primary-600 dark:text-secondary-300">
                {t.contents}
              </p>

              <ul className="space-y-3 text-sm">
                {privacySections.map((section) => {
                  const content = section[language];

                  return (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-primary-800 hover:text-primary-500 dark:text-primary-50 dark:hover:text-secondary-300"
                      >
                        {content.navTitle}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </aside>

          <div className="space-y-12">
            {privacySections.map((section, index) => {
              const content = section[language];

              return (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="border-b border-secondary-500 pb-3 text-2xl font-bold text-primary-900 dark:border-secondary-300 dark:text-primary-50">
                    {index + 1}. {content.title}
                  </h2>

                  <div className="mt-6 space-y-4 leading-7 text-primary-800 dark:text-primary-50">
                    {content.body.map((block, blockIndex) => {
                      if (block.type === "paragraph") {
                        return <p key={blockIndex}>{block.text}</p>;
                      }

                      if (block.type === "list") {
                        return (
                          <ul
                            key={blockIndex}
                            className="list-disc space-y-3 ps-6 marker:text-secondary-600 dark:marker:text-secondary-300"
                          >
                            {block.items.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="pl-2 text-primary-800 dark:text-primary-50"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      if (block.type === "contact") {
                        return (
                          <div
                            key={blockIndex}
                            className="rounded-2xl border border-primary-200 bg-primary-100 p-6 dark:border-primary-700 dark:bg-primary-800"
                          >
                            <p className="font-bold text-primary-900 dark:text-primary-50">
                              Juniors.dev
                            </p>
                            <p>{block.address}</p>
                            <p>{block.org}</p>
                            <a
                              href={`mailto:${block.email}`}
                              className="font-medium text-primary-600 underline-offset-4 hover:underline dark:text-secondary-300"
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
