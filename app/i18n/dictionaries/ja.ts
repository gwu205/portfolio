import { Dictionary } from "./types";

/**
 * Japanese locale.
 *
 * Deliberate convention: short labels — navigation, section headings, CTAs,
 * badges, tags, job titles, and the brand taglines — stay in English, matching
 * `en.ts` verbatim. Their meaning and intent drift when translated, and they
 * read as brand voice rather than information. Running prose (bios, principle
 * bodies, case-study copy, alt text) and SEO metadata are translated.
 */
export const ja: Dictionary = {
  meta: {
    siteTitle: "Geoffrey Wu | プロダクトデザイナー",
    siteDescription:
      "プロダクトチームがユーザー中心のプロダクトをリリースできるよう支援し、丁寧に設計されたデザインシステムを構築し、革新的なユーザー体験を生み出しています。",
  },
  nav: {
    work: "Work",
    about: "About",
    contact: "Contact",
    backHome: "Home",
    // Identical to en.ts: "Designer based in Tokyo" stays English, with the
    // existing EN↔JA script flourish intact.
    tagline: {
      leadSwap: ["Designer", "デザイナー"],
      middle: "Based in",
      trailSwap: ["Tokyo", "東京"],
      citySlot: "trail",
    },
  },
  localeSwitcher: {
    // Assistive-only labels, never rendered visually.
    toEnglish: "英語に切り替える",
    toJapanese: "日本語に切り替える",
  },
  footer: {
    connectHeading: "Say<br/><a class=\"hover:underline\" href='mailto:hello@wuxdesign.dev'>hello@wuxdesign.dev</a>",
    returnToTop: "Return to top",
    articleBioIntro:
      "Geoffrey Wuは、{city}を拠点とするプロダクトデザイナー、フロントエンドエンジニア、クリエイティブテクノロジストです。",
    cityName: "東京",
    articleBioBody:
      "プロダクトチームが迷いなく、自信を持ってリリースできるよう、摩擦を取り除き、関係者間の調整を行い、ユーザー体験の価値を伝える役割を担っています。Web・モバイル向けのSaaSプロダクトから、コンバージョンを重視した複雑なブランドサイトまで、あらゆる新しい課題に対して常に丁寧で解決志向のアプローチを大切にしています。",
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
      "動くものをつくる。使い続けられるものに仕上げる。それがデザインだと考えています。",
    aboutBrandsLabel: "Brands",
    aboutFocusLabel: "Focus",
    skills: {
      designSystems: {
        title: "Design Systems & UI Libraries",
        description:
          "チーム全体の認識を揃え、インターフェースに一貫性をもたらす、拡張性の高いコンポーネントシステム。",
      },
      productUi: {
        title: "Product UI & Interaction",
        description:
          "複雑なB2B業務や多言語ワークフローに対応する、明快でインタラクション豊かなインターフェース。",
      },
      designEngineering: {
        title: "Design-Engineering Collaboration",
        description:
          "トークンや仕様からプロダクションレディなUIまで、コードで語れるデザイン。",
      },
      landingPages: {
        title: "Conversion Landing Pages",
        description:
          "ストーリー性、明快さ、パフォーマンスのバランスを追求した、コンバージョン重視のページ設計。",
      },
      aiWorkflows: {
        title: "AI-Powered Workflows",
        description:
          "AIを組み込み、意思決定やユーザーのタスクを効率化するインターフェースとフロー。",
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
    cardImageAlt: (title, client) => `${client}向けプロジェクト「${title}」`,
  },
};
