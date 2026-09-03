import { Dictionary } from "./types";

export const en: Dictionary = {
  meta: {
    siteTitle: "Geoffrey Wu | Product Designer",
    siteDescription:
      "Geoffrey helps product teams ship user-focused products, builds out thoughtfully considered design systems, and crafts innovative user experiences.",
  },
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
    backHome: "Home",
    tagline: {
      leadSwap: ["Designer", "デザイナー"],
      middle: "Based in",
      trailSwap: ["Tokyo", "東京"],
      citySlot: "trail",
    },
  },
  localeSwitcher: {
    toEnglish: "Switch to English",
    toJapanese: "Switch to Japanese",
  },
  footer: {
    connectHeading: "Say<br/><a class=\"hover:underline\" href='mailto:hello@wuxdesign.dev'>hello@wuxdesign.dev</a>",
    returnToTop: "Return to top",
    articleBioIntro:
      "Geoffrey is a product designer, front-end engineer, and creative technologist based in {city}.",
    cityName: "Tokyo",
    articleBioBody:
      "He helps product teams ship with clarity and confidence, reducing friction, mediating between stakeholders, and advocating for user experience. Whether it's a SaaS product for web or mobile, or a complex brand site focused on conversion, he consistently brings a thoughtful, solutions‑oriented approach to every new challenge.",
    articleBioCtaPrefix: "Interested in",
    articleBioCtaLink: "working together?",
    avatarAlt: "Geoffrey Wu",
  },
  home: {
    heroIntro: {
      before: "Geoffrey",
      after: "is a designer with a strong focus on delivering thoughtfully considered product experiences",
    },
    aboutIntro:
      "I design digital products that are clear to use, maintainable for teams, and grounded in real business goals.",
    aboutBrandsLabel: "Brands",
    aboutFocusLabel: "Focus",
    skills: {
      designSystems: {
        title: "Design Systems & UI Libraries",
        description:
          "Scalable component systems that keep teams aligned and interfaces consistent.",
      },
      productUi: {
        title: "Product UI & Interaction",
        description:
          "Clear, interaction-rich interfaces for complex B2B and multi-lingual workflows.",
      },
      designEngineering: {
        title: "Design-Engineering Collaboration",
        description:
          "Design that speaks code - from tokens and specs to production-ready UI.",
      },
      landingPages: {
        title: "Conversion Landing Pages",
        description:
          "Conversion-focused pages that balance narrative, clarity, and performance.",
      },
      aiWorkflows: {
        title: "AI-Powered Workflows",
        description:
          "Interfaces and flows that integrate AI to streamline decisions and user tasks.",
      },
    },
    jobTitle: "Product Designer + Design Engineer",
    openForWorkAlt: "Open for work",
  },
  caseStudy: {
    client: "Client",
    year: "Year",
    role: "Role",
    stack: "Stack",
    themes: "Themes",
    timeline: "Timeline:",
  },
  folio: {
    cardHeading: (title, client) => [
      { text: title, muted: false },
      { text: ` for ${client}`, muted: true },
    ],
    cardImageAlt: (title, client) => `${title} project for ${client}`,
  },
};
