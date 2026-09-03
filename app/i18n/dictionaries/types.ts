export interface Dictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
  nav: {
    work: string;
    philosophy: string;
    /** Bottom sticky-nav jumplink label (points at the in-page #about section). */
    about: string;
    /** Bottom sticky-nav jumplink label (points at the in-page #contact section). */
    contact: string;
    basedIn: string;
    backHome: string;
    /**
     * Header flourish. Each slot cycles between two scripts. Slot order is
     * locale-specific: English reads "Designer / Based in / Tokyo", Japanese
     * reads "東京 / を拠点とする / デザイナー".
     */
    tagline: {
      leadSwap: [string, string];
      middle: string;
      trailSwap: [string, string];
      /** Which slot carries the Tokyo cursor easter egg. */
      citySlot: "lead" | "trail";
    };
  };
  localeSwitcher: {
    toEnglish: string;
    toJapanese: string;
  };
  footer: {
    connectHeading: string;
    reachOut: string;
    returnToTop: string;
    /** Contains a {city} placeholder that renders the Tokyo cursor easter egg. */
    articleBioIntro: string;
    cityName: string;
    articleBioBody: string;
    articleBioCtaPrefix: string;
    articleBioCtaLink: string;
    avatarAlt: string;
  };
  home: {
    /**
     * Hero headline, split around two fixed inline media elements the
     * component inserts itself (a photo after `before`, a looping clip
     * after `after`): "{before} [photo] {after} [clip]".
     */
    heroIntro: {
      before: string;
      after: string;
    };
    focusAreas: string;
    skills: {
      designSystems: { title: string; description: string };
      productUi: { title: string; description: string };
      designEngineering: { title: string; description: string };
      landingPages: { title: string; description: string };
      aiWorkflows: { title: string; description: string };
    };
    stackCta: string;
    jobTitle: string;
    designedBuilt: string;
    openForWorkAlt: string;
    sayHi: string;
    copied: string;
    experienceHeading: string;
    experienceIntro: string;
    presentLabel: string;
    presentRole: string;
    role2020Label: string;
    role2020: string;
    role2017Label: string;
    role2017: string;
    role2015Label: string;
    role2015: string;
  };
  about: {
    seoTitle: string;
    seoDescription: string;
    heroTitleLinesDesktop: string[];
    heroTitleLinesMobile: string[];
    bioParagraph1: string;
    bioParagraph2: string;
    philosophyHeading1: string;
    philosophyHeading2: string;
    principles: {
      title: string;
      body: string;
    }[];
    stackHeading: string;
    stackSections: {
      design: string;
      development: string;
      workflow: string;
      delivery: string;
      qualifications: string;
      portfolio: string;
    };
    workflowBadges: string[];
    deliveryBadges: string[];
    qualifications: string[];
    portfolioBuiltWith: string;
    portfolioBuiltWithConjunction: string;
    portfolioBuiltWithSuffix: string;
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
    skillLabels: Record<string, string>;
    /**
     * Project title + client, split into styled segments. Order differs by
     * locale: English trails the client ("X for Y"), Japanese leads with it.
     * Concatenated (segment `.text` values, no extra separator — the
     * non-leading segment already carries its own leading space) into each
     * work card's `aria-label`, since the client name is otherwise only
     * ever shown via a mouse-following label a keyboard/no-hover visitor
     * can't reach.
     */
    cardHeading: (
      title: string,
      client: string,
    ) => { text: string; muted: boolean }[];
    cardImageAlt: (title: string, client: string) => string;
  };
}
