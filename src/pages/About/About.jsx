import { TextSection, TextSectionQuoteAside } from "../../features/UI";
import { mission } from "./translations/mission";
import { useT } from "../../stores/languageStore";

function About() {
  const tMission = useT(mission);

  return (
    <>
      <TextSection
        title={tMission.title}
        intro={tMission.intro}
        paragraphs={[tMission.body]}
        paragraphClassName="text-body text-grey-700 text-pretty"
        aside={
          <TextSectionQuoteAside
            quote={tMission.quote}
            attribution={tMission.attribution}
            initials={tMission.initials}
          />
        }
      />
      <div className="flex flex-col baseline-start gap-4">
        {/* <img src="/src/assets/placeholder-img.png" alt="placeholder image" /> */}
        <h1 className="text-h1 text-fg text-pretty text-left xs:text-center sm:text-center">
          Heading 1
        </h1>
        <h2 className="text-h2 text-fg text-pretty text-left xs:text-center sm:text-center">
          Heading 2
        </h2>
        <h3 className="text-h3 text-fg text-pretty text-left xs:text-center sm:text-center">
          Heading 3
        </h3>
        <h3 className="text-subheading-1 text-fg text-pretty text-left xs:text-center sm:text-center">
          Sub-Heading 1
        </h3>
        <h4 className="text-subheading-2 text-fg text-pretty text-left xs:text-center sm:text-center">
          Sub-Heading 2
        </h4>

        <p className="text-body text-fg text-left text-pretty xs:text-center sm:text-center">
          Empowering developers through community, <br className="hidden xs:block" />
          collaboration and career opportunities.
        </p>

        <p className="text-label text-fg text-left text-pretty xs:text-center sm:text-center">
          Empowering developers through community, <br className="hidden xs:block" />
          collaboration and career opportunities.
        </p>
        <div className="text-center">
          <button className="btn">Base</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-nav">Nav</button>
        </div>
      </div>
    </>
  );
}

export default About;
