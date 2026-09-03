export interface Dictionary {
  meta: {
    siteTitle: string;
    siteDescription: string;
  };
  nav: {
    work: string;
    /** Bottom sticky-nav jumplink label (points at the in-page #about section). */
    about: string;
    /** Bottom sticky-nav jumplink label (points at the in-page #contact section). */
    contact: string;
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
    /** Home-page About section's lead heading. */
    aboutIntro: string;
    /** Home-page About section's micro-label above the brand list, rendered uppercase via CSS (stored normal-case, per convention). */
    aboutBrandsLabel: string;
    /** Home-page About section's micro-label above the focus-area rows, rendered uppercase via CSS (stored normal-case). */
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
