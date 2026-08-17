import { CaseStudy } from "../../types";

export const en: CaseStudy = {
  card: {
    title: "Staple Lite",
    skills: ["Mobile App", "Product Design", "Design System"],
    imgSrc: "/images/projects/staple-lite-hero.png",
  },
  meta: {
    articleTitle: "Staple Lite",
    heroImageSrc: "/images/projects/staple-lite-hero.png",
    heroImageAlt: "Staple Lite app",
    clientName: "Staple",
    year: "2023",
    role: "Product Designer",
    stack: ["Figma", "React", "CSS"],
    themes: ["Mobile App", "Product Design", "Design System", "FinTech"],
    h1Title: "No-Fuss Corporate Spend for Small Business",
    timeline: "8 weeks",
    introduction: [
      "Staple Lite is a new branded product under the Staple corporate payments brand, built to reach a market the flagship product was never designed for. Where Staple serves enterprise B2B customers with a full expense-management suite, Staple Lite targets small businesses and consumer-facing teams in hospitality and retail - at a lower, more accessible price point.",
      "The goal was to offer the ease and convenience of Staple without the complicated features or the steep learning curve. Staple Lite is mobile-first - built for owners and employees managing spend on the go - with a companion admin web app that gives org owners room for the heavier management tasks. Keep what matters - money and team management, distributable payment cards for a whole team, and clean integration with the tools a business already uses - and strip away the administrative overhead a smaller operator neither needs nor wants.",
    ],
  },
  seo: {
    title: "Staple Lite: Corporate Spend for Small Business | Geoffrey Wu",
    description:
      "Designing a mobile-first sub-brand of Staple for small hospitality and retail teams — deciding what to leave out, and splitting the experience across mobile and web.",
  },
  blocks: [
    { type: "h2", text: "The Problem" },
    {
      type: "p",
      text: "Staple's flagship product was built for enterprise finance teams: rich in approvals, reporting, and role-based controls. That depth is exactly what a small business does not need. For a café, a retail floor, or a small hospitality group, the enterprise product is overkill - too much setup, too much cost, too much process for the way they actually work.",
    },
    { type: "p", text: "Yet the underlying need is real, and it cuts two ways:" },
    {
      type: "ul",
      items: [
        "The owner wants to give employees spending flexibility without sacrificing financial security - and wants it to fit the accounting software they already run, not replace it.",
        "The employee wants to use pre-approved company funds directly, instead of fronting personal money and chasing reimbursement afterward.",
      ],
    },
    {
      type: "p",
      text: "The opportunity: take the core value of Staple's corporate spend workflow and repackage it as a straightforward, paperless alternative to traditional corporate cards and reimbursement - at a price and complexity that fits a smaller team.",
    },
    {
      type: "image",
      src: "/images/projects/staple-lite-flow.png",
      alt: "Staple Lite user flow map",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "My Role" },
    {
      type: "p",
      text: "I led the overall creative vision for Staple Lite - defining what a second product under the Staple brand should be, and how it should differ from the flagship without breaking from it.",
    },
    {
      type: "ul",
      items: [
        "Setting the creative direction for a distinct sub-brand that reads as accessible and consumer-friendly while staying recognisably Staple.",
        "Defining the product scope - deciding which features carried over, which were cut, and how the pared-back set should hang together.",
        "Designing the core experience across money management, team management, and team-wide card distribution - mobile-first for everyday use, with a companion admin web app for the more complex owner tasks.",
        "Extending the design system so Staple Lite could ship quickly on Staple's existing foundation while carrying its own identity.",
      ],
    },
    { type: "h2", text: "Challenges" },
    { type: "p", text: "The hard part was subtraction, not addition." },
    {
      type: "ul",
      items: [
        "**Deciding what to leave out.** The enterprise product's power lives in its depth. Staple Lite's value lives in its simplicity. Every feature had to earn its place, and the instinct to carry familiar tools along had to be resisted.",
        "**Two users, one lightweight product.** The owner needs oversight, budgets, and clean data export; the employee needs to pay with pre-approved funds and move on. Both had to be served without adding back the complexity Staple Lite exists to remove.",
        "**Splitting the experience across two surfaces.** Everyday spending and team management had to feel effortless on mobile, while heavier administrative work belonged on a larger screen. Deciding what lived where - without fragmenting the product - was central to keeping Staple Lite simple.",
        "**A sub-brand that belongs but stands apart.** Staple Lite needed to feel lighter and more approachable for a different audience - without diluting the trust the Staple name carries - and ideally act as an on-ramp that could upsell users to the full Staple app later.",
        "**Fitting into an existing accounting framework.** Small businesses already have a way of doing their books. Staple Lite had to supplement that process with seamless imports and exports, not force a migration.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/staple-lite-card.png",
      alt: "The Staple Lite payment card",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "The Process" },
    { type: "h3", text: "Defining the barebones product" },
    {
      type: "p",
      text: "I started from the core jobs to be done - let an owner distribute employee budgets safely, and let an employee spend pre-approved funds without paperwork - and worked backwards, cutting anything that served enterprise oversight rather than everyday operation.",
    },
    { type: "h3", text: "Designing mobile-first, for two roles" },
    {
      type: "p",
      text: "I designed Staple Lite mobile-first, so an employee could pay with pre-approved funds on the go and an owner could handle day-to-day team and money management from their phone. The more complex tasks - deeper oversight, budgets, and configuration - moved to a companion admin web app, giving owners a larger canvas without weighing down the mobile experience everyone shares.",
    },
    { type: "h3", text: "Making Staple Lite fit an existing workflow" },
    {
      type: "p",
      text: "Because the target user already has an accounting process, I designed around seamless data import and export - positioning Staple Lite as a supplement to their current framework rather than a replacement - and as a natural stepping stone toward the full Staple product.",
    },
    {
      type: "h3",
      text: "Building a consumer-facing identity on an enterprise foundation",
    },
    {
      type: "p",
      text: "Working from Staple's existing design system, I extended it into a lighter visual language suited to a consumer audience - keeping structural consistency for speed of build, while giving Staple Lite a distinct, more accessible feel.",
    },
    {
      type: "image",
      src: "/images/projects/staple-lite-manage.png",
      alt: "Team and budget management in Staple Lite",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "The Solution" },
    {
      type: "ul",
      items: [
        "A mobile-first product with a companion admin web app - effortless everyday spending and management on the phone, with the heavier owner tools on a larger screen.",
        "A focused feature set - money management, team management, and team-wide card distribution - with the enterprise administrative layer removed.",
        "A paperless alternative to corporate cards and reimbursement, letting employees spend pre-approved funds directly and freeing owners from manual expense processing.",
        "Seamless accounting integration through easy import/export, supplementing a business's existing framework instead of replacing it.",
        "An accessible price point that opens corporate-grade spend management to SMEs previously priced out.",
        "A distinct but connected sub-brand that showcases the best of Staple Card and creates a natural path to upsell users into the full Staple app.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/staple-lite-onboard.png",
      alt: "The Staple Lite onboarding flow",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "Outcome" },
    {
      type: "p",
      text: "Staple Lite extends the Staple brand into a new market - small businesses and consumer-facing teams in hospitality and retail - delivering the core Staple spending workflow as a no-fuss, paperless product, and opening a route for those users to grow into the full platform.",
    },
    { type: "h2", text: "Key Takeaways" },
    {
      type: "ul",
      items: [
        "**Simplicity is a design decision, not a smaller version of complexity.** The value of Staple Lite came from what it left out, and holding that line was the hardest and most important part of the work.",
        "**Match the surface to the task.** Putting everyday spending on mobile and complex administration on the web let each role work in the right place - and kept the mobile experience as light as the product promised.",
        "**Meeting users where they already are wins adoption.** Fitting into an existing accounting process, rather than demanding a switch, lowered the barrier to trying Staple Lite.",
      ],
    },
  ],
};
