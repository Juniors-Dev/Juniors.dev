import { BookOpenText, CalendarCheck, Code2, Folder } from "lucide-react";
import { Section } from "../../../features/UI/index.js";
import InformationCard from "../../../features/InformationCard/InformationCard.jsx";
import { expect1, expect2, expect3, expect4, headline } from "../translations/whatToExpect.js";
import { useT } from "../../../stores/languageStore";

function WhatToExpect() {
  const t0 = useT(headline);
  const t1 = useT(expect1);
  const t2 = useT(expect2);
  const t3 = useT(expect3);
  const t4 = useT(expect4);

  return (
    <Section className="bg-slate-50">
      <h2 className="text-heading-3 mb-8">{t0.headline}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <InformationCard
          title={t1.title}
          body={t1.body}
          variant="blue"
          icon={<BookOpenText className="h-8 w-8" aria-hidden />}
        />
        <InformationCard
          title={t2.title}
          body={t2.body}
          variant="green"
          icon={<CalendarCheck className="h-8 w-8" aria-hidden />}
        />
        <InformationCard
          title={t3.title}
          body={t3.body}
          variant="green"
          icon={<Code2 className="h-8 w-8" aria-hidden />}
        />
        <InformationCard
          title={t4.title}
          body={t4.body}
          variant="blue"
          icon={<Folder className="h-8 w-8" aria-hidden />}
        />
      </div>
    </Section>
  );
}

export default WhatToExpect;
