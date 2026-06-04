function PrivacyPolicyArticle({ section, paragraphClass, listClass }) {
  return (
    <article className="flex flex-col gap-4">
      <h2 className="text-subheading-1 font-semibold text-primary-900 text-pretty">
        {section.heading}
      </h2>

      {section.paragraphs?.map((text, index) => (
        <p key={index} className={paragraphClass}>
          {text}
        </p>
      ))}

      {section.listItems ? (
        <ul className={listClass}>
          {section.listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : null}

      {section.paragraphsAfter?.map((text, index) => (
        <p key={index} className={paragraphClass}>
          {text}
        </p>
      ))}

      {section.subsections?.map((sub, index) => (
        <div key={index} className="flex flex-col gap-3">
          <h3 className="text-subheading-1 text-primary-900">{sub.title}</h3>
          {sub.paragraphs?.map((text, i) => (
            <p key={i} className={paragraphClass}>
              {text}
            </p>
          ))}

          {sub.items ? (
            <ul className={listClass}>
              {sub.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}

      {section.contactLines ? (
        <address className={`not-italic ${paragraphClass} flex flex-col gap-1`}>
          {section.contactLines.map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </address>
      ) : null}
    </article>
  );
}

export default PrivacyPolicyArticle;
