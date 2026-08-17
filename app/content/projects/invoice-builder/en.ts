import { CaseStudy } from "../../types";

const QUALIFIED_INVOICE_URL =
  "https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice_about.htm";

export const en: CaseStudy = {
  card: {
    title: "Invoice Builder",
    client: "FreelanceOS",
    skills: ["UI Design", "UX Research", "Web SaaS"],
    imgSrc: "/images/projects/invoices-hero.png",
  },
  meta: {
    articleTitle: "Freelancer Invoices",
    heroImageSrc: "/images/projects/invoices.jpg",
    heroImageAlt: "Invoice builder",
    clientName: "Sollective",
    year: "2023",
    role: "Product Designer",
    stack: ["Figma", "Google Meets"],
    themes: [
      "Financial tooling",
      "UX research",
      "Form design",
      "Compliance",
      "User interviews",
    ],
    h1Title: "Designing an Invoice Builder for Freelance Work in Japan",
    timeline: "12 weeks",
    link: "https://www.sollective.jp/invoices/about",
    introduction: [
      "Sollective is a vetted freelancer matching platform in Japan, connecting highly skilled freelancers with companies looking to expand their business operations. Beyond matching, the platform aims to support the future of freelance work through community events and workflow tools tailored to independent professionals.",
      "To support this vision, the team set out to design an invoice builder specifically for freelancers in Japan - a tool that simplifies invoice creation, respects local accounting standards, and feels approachable for users without a finance background.",
    ],
  },
  seo: {
    title: "Invoice Builder for Freelancers in Japan | Geoffrey Wu",
    description:
      "Designing a compliant, approachable invoice builder for Japanese freelancers navigating the Qualified Invoice System — research, form design, and key product decisions.",
  },
  blocks: [
    { type: "h2", text: "Context" },
    {
      type: "p",
      text: "Many freelancers in Japan lack formal financial training and are unfamiliar with local tax and invoicing laws. Existing solutions are typically optimized for accountants and back-office staff: feature-dense, jargon-heavy, and intimidating for solo freelancers handling their own operations.",
    },
    {
      type: "p",
      text: `The introduction of the [Qualified Invoice System](${QUALIFIED_INVOICE_URL}) (インボイス制度), combined with existing tax withholding rules for certain work categories, raised the stakes. Freelancers now needed to produce invoices that were both legally compliant and easily understood, without support from an in-house finance team.`,
    },
    {
      type: "p",
      text: "Sollective saw an opportunity to embed an accessible invoicing experience directly into its platform, reducing friction at a critical point in the freelancer–client relationship.",
    },
    { type: "h2", text: "Problem" },
    { type: "p", text: "Because of the new law, freelancers struggled to:" },
    {
      type: "ul",
      items: [
        `Understand what legally needed to appear on an invoice under the new [Qualified Invoice System](${QUALIFIED_INVOICE_URL}) (インボイス制度).`,
        "Navigate complex interfaces designed for finance professionals rather than non-experts.",
        "Confidently produce compliant invoices without relying on ad hoc spreadsheets or templates.",
      ],
    },
    {
      type: "p",
      text: "As regulations evolved, so did anxiety and ambiguity. The team required an experience that translated legal and accounting requirements into a guided, approachable flow, while still meeting strict compliance standards in Japan.",
    },
    { type: "h2", text: "Goals" },
    { type: "p", text: "The project focused on three primary goals:" },
    {
      type: "ul",
      items: [
        "Make invoice creation approachable for freelancers with limited accounting knowledge.",
        "Ensure generated invoices comply with Japanese regulations (e.g., Qualified Invoice System, tax withholding).",
        "Reduce friction and errors compared with existing workflows (spreadsheets, manual templates, generic accounting tools).",
      ],
    },
    {
      type: "p",
      text: "Success meant freelancers could move from uncertainty and manual workarounds to a confident, repeatable invoicing workflow inside Sollective.",
    },
    { type: "h2", text: "Approach" },
    { type: "h3", text: "Taking An Opinionated Product Direction" },
    {
      type: "p",
      text: "The experience was deliberately optimized for Sollective's core audience: freelancers in Japan with limited financial expertise. Rather than attempting to serve every market segment, the product took an opinionated stance:",
    },
    {
      type: "ul",
      items: [
        "Prioritize clarity over configurability.",
        "Surface only what is necessary at each step.",
        "Embed regulatory requirements into the workflow, not the user's memory.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/freee.avif",
      alt: "The freee accounting interface, dense with features aimed at back-office professionals",
      width: 2157,
      height: 1504,
    },
    {
      type: "p",
      text: 'Research on existing solutions, including market leaders such as freee, highlighted a gap. While robust, these tools were designed for back-office professionals. Interview participants consistently described them as "overwhelming" and "hard to understand," especially when trying to decode legal documentation requirements buried in dense navigation and terminology.',
    },
    {
      type: "p",
      text: "The design response was intentionally the opposite: create a simple, guided, and intuitive experience that encoded complexity behind the scenes.",
    },
    { type: "h2", text: "Key Design Decisions" },
    { type: "h3", text: "Pre-Creation Flow For Regulatory Confidence" },
    {
      type: "aside",
      lead: "How might we",
      highlight:
        "ensure that our users are well-informed and aware of all the information they are required to include according to the new tax law?",
    },
    {
      type: "p",
      text: "To address the complexity of new invoice requirements, the experience introduced a pre-creation flow that:",
    },
    {
      type: "ul",
      items: [
        "Collected key information upfront (scope of work, registration status under the Qualified Invoice System, client details, payment terms).",
        "Clarified which fields were legally required versus optional, reducing second-guessing later in the process.",
        "Used concise, plain-language explanations in Japanese and English where appropriate, aligned with Sollective's bilingual audience.",
      ],
    },
    {
      type: "p",
      text: "Where possible, the flow leveraged existing platform data to pre-select or pre-fill information, lowering cognitive load and reducing opportunities for error without removing transparency.",
    },
    {
      type: "image",
      src: "/images/projects/invoices-create.png",
      alt: "The guided pre-creation flow for a new invoice",
      width: 1213,
      height: 883,
    },
    {
      type: "h3",
      text: "Streamlining Administrative Tasks Around Familiar Mental Models",
    },
    {
      type: "p",
      text: "User interviews revealed that many freelancers continued to rely on Excel or Google Sheets, citing:",
    },
    {
      type: "ul",
      items: [
        "Familiarity with spreadsheet-style editing.",
        "Trust in workflows they had refined over years.",
        "Lack of awareness or confidence in more advanced tools.",
      ],
    },
    {
      type: "p",
      text: "The interface aligned with these expectations while introducing guardrails:",
    },
    {
      type: "ul",
      items: [
        'Clear, linear workflows made it difficult to "skip" critical steps.',
        "Pre-filled fields and sensible defaults minimized repetitive typing.",
        "Contextual explanations and helper text surfaced only when needed, avoiding the clutter of traditional accounting dashboards.",
      ],
    },
    {
      type: "p",
      text: "The result preserved the reassurance of a familiar pattern while quietly enforcing structure and compliance behind the scenes.",
    },
    { type: "h3", text: "Balancing Freelancer And Recipient Needs" },
    {
      type: "p",
      variant: "subheading",
      text: "Balancing User and Recipient Needs",
    },
    {
      type: "p",
      text: "The invoice builder needed to serve two distinct audiences:",
    },
    {
      type: "ul",
      items: [
        "Freelancers creating and editing invoices.",
        "Accountants and back-office staff reviewing, processing, and archiving them.",
      ],
    },
    { type: "p", text: "To support both, the interface differentiated between:" },
    { type: "h4", text: "Editing context:" },
    {
      type: "ul",
      items: [
        "Optimized for clarity and ease of input.",
        "Used form patterns and microcopy tuned for non-experts.",
        "Grouped fields into logical sections aligned with a freelancer's mental model (work details, client information, tax and payment conditions).",
      ],
    },
    { type: "h4", text: "Viewing/export context:" },
    {
      type: "ul",
      items: [
        "Optimized for legibility, compliance, and professionalism.",
        "Structured layouts ensured that all legally required fields appeared predictably.",
        "Generated outputs aligned with expectations of Japanese finance teams, reducing back-and-forth questions.",
      ],
    },
    {
      type: "p",
      text: "By separating these contexts, the tool could be forgiving and supportive during creation while remaining precise and formal in its final output.",
    },
    {
      type: "image",
      src: "/images/projects/invoices.jpg",
      alt: "The completed invoice builder interface",
      width: 1800,
      height: 1200,
    },
    {
      type: "image",
      src: "/images/projects/invoices-edit.jpg",
      alt: "Editing an invoice line by line",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "Outcome" },
    {
      type: "p",
      text: "Freelancers described the new invoice builder as more approachable and less intimidating than traditional accounting software. Qualitative feedback highlighted:",
    },
    {
      type: "ul",
      items: [
        "Greater confidence that invoices met Japanese legal requirements.",
        "Reduced reliance on ad hoc spreadsheets and manual templates.",
        'Less time spent revisiting old invoices to "copy and tweak" previous formats.',
      ],
    },
    {
      type: "p",
      text: "For Sollective, the tool reinforced the platform's position not only as a matching service but as infrastructure for sustainable freelance work in Japan. The invoice builder translated complex regulatory changes into a clear, guided experience tailored to the realities of solo freelancers, while still respecting the needs of the finance teams receiving those invoices.",
    },
  ],
};
