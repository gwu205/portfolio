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
    philosophy: "Philosophy",
    about: "About",
    contact: "Contact",
    basedIn: "Based in",
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
    reachOut: "Reach Out",
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
    stackCta: "Technology Stack",
    jobTitle: "Product Designer + Design Engineer",
    designedBuilt:
      "Design built on clarity, refined with motion, and powered by code to bring products to life.",
    openForWorkAlt: "Open for work",
    sayHi: "Say",
    copied: "Copied!",
    experienceHeading: "Experience",
    experienceIntro:
      "マルチディシプリナリーなデザイナーとして、*オーストラリア・メルボルン*で生まれ育ち、現在は*東京*を拠点に活動しています。これまで{years}年以上にわたり、スタートアップや成長中のチームとともにデジタルプロダクトの設計とリリースに携わってきました。SaaSやB2Bのワークフローに精通し、アジャイルなプロダクト開発チームの最前線でデザイン制作とオペレーションを担ってきました。",
    presentLabel: "Present",
    presentRole: "UX Designer — Sollective (HR Tech)",
    role2020Label: "2020",
    role2020: "Senior UX Designer — Crowd Cast (FinTech)",
    role2017Label: "2017",
    role2017:
      "Graphic Designer & Front-End Developer — Wisenet Information Systems (EdTech)",
    role2015Label: "2015",
    role2015: "Bachelor of Design (Digital Media) — RMIT University",
  },
  about: {
    seoTitle: "デザイン哲学 | Geoffrey Wu",
    seoDescription:
      "システムを起点に、巧妙さより明快さを、デザインとエンジニアリングをひとつのループに。プロダクトデザインへの考え方と、実際に使っているツールやワークフローをご紹介します。",
    heroTitleLinesDesktop: [
      "Product designer focused on",
      "systems, clarity, and ",
      "end‑to‑end execution",
    ],
    heroTitleLinesMobile: [
      "Designing",
      "systems",
      "with clarity",
      "and execution",
    ],
    bioParagraph1:
      "私は、使いやすく、チームにとって保守しやすく、実際のビジネス目標に根ざしたデジタルプロダクトをデザインしています。プロダクトデザイン、UI/モーション、フロントエンド開発の経験を活かし、Figma、コード、そしてステークホルダーとの対話を自在に行き来しながら、デザインと実装の一貫性を保っています。",
    bioParagraph2:
      "手がけてきた仕事の多くは、ブランド/マーケティング、B2B SaaS、デザインシステムの交差点に位置し、複雑な要件をシンプルで意図的な体験へと落とし込む役割を担ってきました。オーストラリアと日本の両方で、主にスタートアップや小規模チームと働いてきた経験から、欧米とアジア双方のローカル市場を深く理解しています。それぞれの文化的なニュアンスを踏まえながら、混沌とした課題を明快でリリース可能なプロダクトへと形にしていく環境で力を発揮します。",
    philosophyHeading1: "Design",
    philosophyHeading2: "Philosophy",
    principles: [
      {
        title: "Systems first.",
        body: "優れたインターフェースとは、単一の画面以上のものです。チームが理解し、そのうえに積み上げていけるコンポーネント、パターン、ルールの集合体です。デザイン上の意思決定を再利用可能で一貫性があり、拡張しやすいものにすることを重視し、プロダクトが成長してもまとまりを保てるようにしています。",
      },
      {
        title: "Clarity over cleverness.",
        body: "情報量の多いテーブル、フォーム、ダッシュボードであっても、可読性、階層構造、そして理解を助ける丁寧なインタラクションを優先します。画面上のすべての要素には明確な目的があるべきで、すべてのインタラクションは予測可能であるべきだと考えています。認知負荷を減らし、ユーザーの体験を分かりやすく、ストレスのないものにすることに注力しています。",
      },
      {
        title: "Design and engineering as one loop.",
        body: "優れたプロダクトは、多様な視点とオープンなコミュニケーションから生まれます。意思決定を記録し、ワークショップを主導し、チーム全体のスピードを高める共通言語をつくることで、コラボレーションを育てています。エンジニアをパートナーとして捉え、価値があればコードでプロトタイピングを行い、制約を早い段階で共有し、トークンやバリアント、propsといった共通言語でハンドオフの摩擦を減らしています。",
      },
      {
        title: "Continuous learning.",
        body: "ユーザーから、データから、そして共に働く人々から、私は常に学び続けています。憶測ではなく、実際のフィードバックに基づいて改善を重ねることを大切にしています。A/Bテスト、アナリティクス、ユーザーリサーチなど、データを活用して意思決定を導き、時間をかけて体験を磨き上げています。",
      },
      {
        title: "Local context, global standards.",
        body: "日本でバイリンガル対応のプロダクトに携わってきた経験から、言語やレイアウト、文化的なニュアンスといったローカルな期待と、グローバルなユーザビリティ/アクセシビリティのベストプラクティスとのバランスを大切にしています。",
      },
    ],
    stackHeading: "Stack",
    stackSections: {
      design: "Design",
      development: "Development",
      workflow: "Workflow",
      delivery: "Delivery",
      qualifications: "Qualifications",
      portfolio: "Portfolio",
    },
    workflowBadges: [
      "Design Tokens",
      "Component Libraries",
      "Design Documentation",
      "Git-based Collaboration",
      "UX Copywriting",
      "Accessibility",
      "AI Photo/Video",
    ],
    deliveryBadges: [
      "Design Specs",
      "Interactive Prototypes",
      "Production Code",
      "Performance Metrics",
      "User Testing",
      "Product Showcases",
    ],
    qualifications: ["Framer Expert", "日本語能力試験 (JLPT) N2"],
    portfolioBuiltWith: "Built with",
    portfolioBuiltWithConjunction: ", and ",
    portfolioBuiltWithSuffix: ".",
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
    skillLabels: {
      Framer: "Framer",
      Weavy: "Weavy",
      "Frontend Dev": "Frontend Dev",
      "Motion Design": "Motion Design",
      "LP Design": "LP Design",
      "UI Design": "UI Design",
      "UX Research": "UX Research",
      "Web SaaS": "Web SaaS",
      "Web Design": "Web Design",
      Branding: "Branding",
      B2C: "B2C",
      "Mobile App": "Mobile App",
      "Product Design": "Product Design",
      "Design System": "Design System",
      "B2B SaaS": "B2B SaaS",
      "Visual Design": "Visual Design",
      "Visual identity": "Visual identity",
      "UI/UX Design": "UI/UX Design",
    },
    cardHeading: (title, client) => [
      { text: title, muted: false },
      { text: ` for ${client}`, muted: true },
    ],
    cardImageAlt: (title, client) => `${client}向けプロジェクト「${title}」`,
  },
};
