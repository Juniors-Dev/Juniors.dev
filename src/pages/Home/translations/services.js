export const services = {
  en: {
    heading: "Our services",
    cta: "Explore our services",
    carouselPrev: "Previous service",
    carouselNext: "Next service",
    carouselDot: "Go to service",
  },
  no: {
    heading: "Våre tjenester",
    cta: "Utforsk tjenestene våre",
    carouselPrev: "Forrige tjeneste",
    carouselNext: "Neste tjeneste",
    carouselDot: "Gå til tjeneste",
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
    panelClassName: "bg-primary-500 text-off-white",
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
    panelClassName: "bg-secondary-200 text-roadmap-blue",
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
    panelClassName: "bg-primary-200 text-roadmap-blue",
    tagClassName: "bg-primary-100 text-roadmap-blue",
  },
  {
    id: "coaching",
    en: {
      title: "Coaching",
      details:
        "Support developers with guidance, feedback, and mentorship to accelerate growth and build real-world confidence.",
      tags: ["Technical Guidance", "Performance Feedback", "Mentorship", "Code Review"],
    },
    no: {
      title: "Veiledning",
      details:
        "Støtter utviklere med veiledning, tilbakemeldinger og veiledning for å akselerere vekst og bygge selvtillit i den virkelige verden.",
      tags: ["Teknisk veiledning", "Ytelsestilbakemelding", "Mentorordning", "Kodegjennomgang"],
    },
    panelClassName: "bg-primary-900 text-off-white",
    tagClassName: "bg-primary-700 dark:bg-tag-dark-blue text-primary-100",
  },
];
