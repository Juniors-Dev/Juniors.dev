export const services = {
  en: {
    heading: "Our services",
    cta: "Explore our services",
  },
  no: {
    heading: "Våre tjenester",
    cta: "Utforsk tjenestene våre",
  },
};

export const serviceCards = [
  {
    id: "ux-ui",
    en: {
      title: "UX/UI",
      details:
        "Juniors.dev analyzses user personas, acssessing accessibility, best practices for compliance & other critical UX/UI parameters.",
      tags: ["User-centered Design", "Design System", "Accessibility", "Prototyping"],
    },
    no: {
      title: "UX/UI",
      details:
        "Juniors.dev analyserer brukerpersonaer, vurderer tilgjengelighet, beste tiltak for samsvar og andre kritiske UX/UI-parametere.",
      tags: ["Brukersentrert design", "Designsystem", "Tilgjengelighet", "Prototyping"],
    },
    panelClassName: "bg-primary-500 hover:bg-primary-600 text-off-white",
    tagClassName: "bg-primary-700 dark:bg-tag-dark-blue text-primary-100",
  },
  {
    id: "frontend",
    en: {
      title: "Frontend",
      details:
        "Juniors.dev builds fast, responsive interfaces that deliver seamless, accessible user experiences across devices.",
      tags: ["Responsive Design", "Performance Optimization", "Accessibility", "Modern Frameworks"],
    },
    no: {
      title: "Frontend",
      details:
        "Juniors.dev bygger raske, responsive grensesnitt som gir sømløse og tilgjengelige brukeropplevelser på tvers av enheter.",
      tags: ["Responsivt design", "Ytelsesoptimalisering", "Tilgjengelighet", "Moderne rammeverk"],
    },
    panelClassName: "bg-secondary-200 hover:bg-secondary-500 text-roadmap-blue",
    tagClassName: "bg-secondary-300 text-roadmap-blue",
  },
  {
    id: "backend",
    en: {
      title: "Backend",
      details:
        "Juniors.dev develops scalable, secure systems that power performance, data management, and reliable application functionality.",
      tags: ["Scalable Architecture", "API Development", "Database Management", "Security"],
    },
    no: {
      title: "Backend",
      details:
        "Juniors.dev utvikler skalerbare, sikre systemer som styrker ytelse, datahåndtering og pålitelig applikasjonsfunksjonalitet.",
      tags: ["Skalerbar arkitektur", "API-utvikling", "Databasehåndtering", "Sikkerhet"],
    },
    panelClassName: "bg-primary-200 hover:bg-primary-300 text-roadmap-blue",
    tagClassName: "bg-primary-100 text-roadmap-blue",
  },
  {
    id: "coaching",
    en: {
      title: "Coaching",
      details: "lorem ipsumlorem ipsumlorem ipsum",
      tags: ["Web site", "Web site", "Web site"],
    },
    no: {
      title: "Veiledning",
      details: "lorem ipsumlorem ipsumlorem ipsum",
      tags: ["Nettside", "Nettside", "Nettside"],
    },
    panelClassName: "bg-primary-900 hover:bg-primary-600 text-off-white",
    tagClassName: "bg-primary-700 dark:bg-tag-dark-blue text-primary-100",
  },
];
