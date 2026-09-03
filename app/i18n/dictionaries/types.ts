export interface Dictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
  nav: {
    work: string;
    about: string;
    contact: string;
    backHome: string;
    /** Header flourish. Each slot cycles between two scripts. */
    tagline: {
      leadSwap: [string, string];
      middle: string;
      trailSwap: [string, string];
      citySlot: "lead" | "trail";
    };
  };
  localeSwitcher: {
    toEnglish: string;
    toJapanese: string;
  };
  footer: {
    connectHeading: string;
    returnToTop: string;
    /** Contains a {city} placeholder. */
    articleBioIntro: string;
    cityName: string;
    articleBioBody: string;
    articleBioCtaPrefix: string;
    articleBioCtaLink: string;
    avatarAlt: string;
  };
  home: {
    /** Split around two inline media elements: "{before} [photo] {after} [clip]". */
    heroIntro: {
      before: string;
      after: string;
    };
    aboutIntro: string;
    aboutBrandsLabel: string;
    aboutFocusLabel: string;
    skills: {
      designSystems: { title: string; description: string };
      productUi: { title: string; description: string };
      designEngineering: { title: string; description: string };
      landingPages: { title: string; description: string };
      aiWorkflows: { title: string; description: string };
    };
    jobTitle: string;
    openForWorkAlt: string;
  };
  caseStudy: {
    client: string;
    year: string;
    role: string;
    stack: string;
    themes: string;
    timeline: string;
  };
  folio: {
    /** Title + client as styled segments; order differs by locale. */
    cardHeading: (
      title: string,
      client: string,
    ) => { text: string; muted: boolean }[];
    cardImageAlt: (title: string, client: string) => string;
  };
}
