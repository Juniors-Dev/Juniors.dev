import { useEffect } from "react";
import "./App.css";
import productivityBanner from "./assets/productivity-graveyard-banner.jpg";
import discordLogo from "./assets/Discord-Symbol-Blurple.svg";
import jiraLogo from "./assets/Jira mark brand RGB.svg";
import figmaLogo from "./assets/Figma-logo.svg.png";
import githubLogo from "./assets/github-mark.svg";
import codingDucky from "./assets/coding-ducky.png";
import LanguageToggle from "./components/ui/LanguageToggle";
import { useTranslation } from "./hooks/useTranslation";

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Welcome to Juniors.Dev, a creative community and collaboration hub built to give junior developers real-world experience through teamwork, hands-on learning, and ship-worthy projects."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Welcome to Juniors.Dev, a creative community and collaboration hub built to give junior developers real-world experience through teamwork, hands-on learning, and ship-worthy projects.";
      document.head.appendChild(meta);
    }
  }, []);
  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-center text-white relative">
        {/* Language Toggle - Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <LanguageToggle />
        </div>
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight bg-gradient-to-r from-blue-300 via-blue-200 to-[var(--color-offwhite)] bg-clip-text text-transparent">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl font-mono">{t("subtitle")}</p>
        </div>
        <main className="w-full max-w-3xl rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/10 backdrop-blur-md bg-offwhite">
          <blockquote className="italic text-primary mb-6 text-center">
            "{t("tagline")}"
          </blockquote>
          <section className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-2xl">🚧</span>
              <h2 className="text-xl font-bold text-primary">
                {t("comingSoon")}
              </h2>
            </div>
            <p className="mb-2 text-primary text-center">
              {t("comingSoonText")}
            </p>
            <div className="flex justify-center">
              <img
                src={codingDucky}
                alt="Coding Ducky"
                className="w-40 h-auto mt-2"
              />
            </div>
          </section>
          <hr className="my-6 border-primary/20" />
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-1 text-primary text-center">
              {t("about")}
            </h3>
            <p className="mb-2 text-primary">
              {t("aboutText1")}{" "}
              <span className="font-bold text-primary">{t("aboutText2")}</span>{" "}
              {t("aboutText3")}
            </p>
            <p className="mb-2 text-primary">
              <b>{t("mission")}</b>: {t("missionText")}{" "}
              <span className="font-bold text-primary">
                {t("missionText2")}
              </span>{" "}
              {t("missionText3")}
            </p>
          </section>
          <hr className="my-6 border-primary/20" />
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-1 text-primary text-center">
              {t("vision")}
            </h3>
            <ul className="list-disc list-inside pl-4 mb-2 text-primary space-y-1 md:space-y-2">
              {t("visionItems").map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </section>
          <hr className="my-6 border-primary/20" />
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-1 text-primary text-center">
              {t("ethos")}
            </h3>
            <ul className="list-disc list-inside pl-4 mb-2 text-primary space-y-1 md:space-y-2">
              {t("ethosItems").map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </section>
          <hr className="my-6 border-primary/20" />
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-1 text-primary text-center">
              {t("learning")}
            </h3>
            <ul className="list-disc list-inside pl-4 mb-2 text-primary space-y-1 md:space-y-2">
              {t("learningItems").map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </section>
          <hr className="my-6 border-primary/20" />
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-1 text-primary text-center">
              {t("workflow")}
            </h3>
            <ul className="list-disc list-inside pl-4 mb-2 text-primary space-y-1 md:space-y-2">
              <li className="flex items-center gap-2">
                <img
                  src={discordLogo}
                  alt="Discord logo"
                  className="w-5 h-5 inline-block"
                />
                <span dangerouslySetInnerHTML={{ __html: t("tools")[0] }} />
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={jiraLogo}
                  alt="Jira logo"
                  className="w-5 h-5 inline-block"
                />
                <span dangerouslySetInnerHTML={{ __html: t("tools")[1] }} />
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={figmaLogo}
                  alt="Figma logo"
                  className="w-5 h-5 inline-block"
                />
                <span dangerouslySetInnerHTML={{ __html: t("tools")[2] }} />
              </li>
              <li className="flex items-center gap-2">
                <img
                  src={githubLogo}
                  alt="GitHub logo"
                  className="w-5 h-5 inline-block"
                />
                <span dangerouslySetInnerHTML={{ __html: t("tools")[3] }} />
              </li>
            </ul>
          </section>
          <hr className="my-6 border-primary/20" />
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-1 text-primary text-center">
              {t("currentProject")}
            </h3>
            <img
              src={productivityBanner}
              alt="Productivity Graveyard banner"
              className="w-full max-h-80 object-cover rounded-xl shadow mb-3 border border-primary/20"
            />
            <p className="mb-2 text-primary">
              <b>{t("projectTitle")}</b>: {t("projectDescription")}{" "}
              <span className="italic">{t("projectDescription2")}</span>{" "}
              {t("projectDescription3")}
            </p>
          </section>
          <hr className="my-6 border-primary/20" />
          <section className="mb-6">
            <h3 className="text-lg font-semibold mb-1 text-primary text-center">
              {t("wantToJoin")}
            </h3>
            <p className="mb-2 text-primary">
              <span className="font-bold">{t("joinText1")}</span>{" "}
              <span className="font-bold">{t("joinText2")}</span>,{" "}
              <span className="font-bold">{t("joinText3")}</span>,{" "}
              {t("joinText4")}{" "}
              <span className="font-bold">{t("joinText5")}</span>{" "}
              {t("joinText6")}
              <br />
              {t("joinText7")}
            </p>
          </section>
          <section className="flex flex-col items-center gap-2 mt-8 text-primary text-center">
            <a
              href="https://github.com/Juniors-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:underline justify-center"
            >
              <img
                src={githubLogo}
                alt="GitHub logo"
                className="w-5 h-5 inline-block"
              />
              <span>{t("findUsOnGithub")}</span>
            </a>
            <footer
              className="text-sm mt-2"
              style={{
                color:
                  "color-mix(in srgb, var(--color-primary) 60%, var(--color-offwhite) 40%)",
              }}
            >
              &copy; {new Date().getFullYear()} {t("copyright")}
            </footer>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
