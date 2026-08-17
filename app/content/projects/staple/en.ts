import { CaseStudy } from "../../types";

export const en: CaseStudy = {
  card: {
    title: "Web App Redesign",
    skills: ["Frontend Dev", "UI/UX Design", "B2B SaaS"],
    imgSrc: "/images/projects/staplecard.jpg",
  },
  meta: {
    articleTitle: "Corporate Payments",
    heroImageSrc: "/images/projects/s-expenses.jpg",
    heroImageAlt: "Staple Card",
    clientName: "Staple",
    year: "2022",
    role: "Product Designer & Frontend Developer",
    stack: ["Figma", "React", "CSS"],
    themes: [
      "UI/UX design",
      "Frontend development",
      "Design system",
      "SaaS design",
      "FinTech",
    ],
    h1Title: "Designing a Cashless Corporate Payments Future",
    timeline: "6 months",
    introduction: [
      "Staple is a corporate payments solution that empowers employees to handle payments, record receipts, and request reimbursements with ease. Paired with physical and virtual cards, the platform streamlines expense management and offers accountants a unified view of all company finances.",
      "By digitising workflows, Staple tackles Japan's traditional paper-based systems, delivering a modern solution to an outdated process.",
    ],
  },
  seo: {
    title: "Staple Corporate Payments Redesign | Geoffrey Wu",
    description:
      "Redesigning the Staple expense platform and building its design system — replacing Japan's paper-driven expense workflows with a cashless, role-aware product.",
  },
  blocks: [
    { type: "h2", text: "The Problem" },
    {
      type: "p",
      text: "In Japan, corporate expense management faces significant challenges:",
    },
    {
      type: "ol",
      items: [
        "**Paper-Driven Systems:** Many companies rely on paper receipts and records, making expense management prone to errors, loss, and even fraud. Strict legal reporting requirements exacerbate these inefficiencies, leaving businesses hesitant to transition to digital workflows.",
        "**Access to Corporate Cards:** Corporate cards are often inaccessible to smaller companies or startups without significant capital. This lack of access complicates expense management, especially for mandatory reimbursements like commuting costs.",
        "**Complex Workflows:** From managing expenses to uploading receipts, reviewing payments, and integrating with accounting tools, expense management involves numerous specialized tasks that vary by user role (e.g. employee vs. administrator).",
      ],
    },
    { type: "h2", text: "My Role" },
    {
      type: "p",
      text: "I joined the team during a phase of rapid growth, tasked with:",
    },
    {
      type: "ul",
      items: [
        "**Redesigning the User Experience:** Ensuring the platform was user-friendly, accessible, and scalable for future features.",
        "**Enhancing the Visual Identity:** Modernizing the Staple Card design, product website, and visual assets.",
        "**Improving Information Architecture:** Simplifying the complex structure to accommodate various user roles and use cases.",
        "**Building a Design System:** Developing a cohesive design system and custom CSS framework for scalable frontend development.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/staplecard-transactions.png",
      alt: "The Staple Card transactions view",
      width: 1440,
      height: 900,
    },
    { type: "h2", text: "Challenges" },
    {
      type: "p",
      text: "The project's complexity lay in its breadth of functionality and diverse user base:",
    },
    {
      type: "ul",
      items: [
        "**Specialised Features:** Staple supports tasks such as creating expenses, uploading receipts, reviewing payments, integrating with accounting software, managing user roles, approving expenses, and exporting financial data.",
        "**Role-Based Use Cases:** Employees need an intuitive way to manage payments, while administrators require robust tools for oversight, approvals, and reporting. Balancing these needs was a key challenge.",
      ],
    },
    { type: "h2", text: "The Process" },
    { type: "p", variant: "subheading", text: "Collaborating with Engineers" },
    {
      type: "p",
      text: "I worked closely with engineers to design and implement an intuitive user interface that aligned with technical and business requirements while improving the overall user experience.",
    },
    {
      type: "image",
      src: "/images/projects/s-workflows.png",
      alt: "Staple approval policies and workflow configuration",
      width: 1440,
      height: 900,
    },
    {
      type: "p",
      variant: "subheading",
      text: "Restructuring Information Architecture",
    },
    { type: "p", text: "To enhance usability:" },
    {
      type: "ul",
      items: [
        "I restructured the platform's information architecture, ensuring clear pathways for both employees and administrators.",
        "Features were grouped logically based on user workflows, reducing friction and enabling users to complete tasks with minimal effort.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/staplecard-add.png",
      alt: "Adding a new Staple Card",
      width: 1440,
      height: 900,
    },
    { type: "p", variant: "subheading", text: "Developing a Design System" },
    { type: "p", text: "To streamline design and development:" },
    {
      type: "ul",
      items: [
        "I created a design system with reusable components and detailed documentation, ensuring consistency across the platform.",
        "Inspired by [Atomic Design principles](https://bradfrost.com/blog/post/atomic-web-design/) and [this article by Sarah Dayan](https://frontstuff.io/generate-all-your-utility-classes-with-sass-maps), I adapted the concept into a custom CSS framework, allowing the team to build and scale pages quickly and efficiently.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/s-expenses.jpg",
      alt: "The Staple expenses view",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "The Solution" },
    { type: "p", text: "The final design successfully addressed the challenges:" },
    {
      type: "ol",
      items: [
        {
          text: "**Streamlined Expense Management:**",
          items: [
            "Employees could quickly create expenses, upload receipts, and manage payments through an intuitive interface.",
            "Administrators benefited from tools to oversee workflows, set approval processes, and generate reports with ease.",
          ],
        },
        {
          text: "**Unified Design System:**",
          items: [
            "The design system provided a cohesive and scalable foundation for future feature development, cutting down frontend implementation time by 50%.",
          ],
        },
        {
          text: "**Improved Brand Presence:**",
          items: [
            "The renewed Staple Card design and updated product website strengthened the brand's visual identity and market presence.",
          ],
        },
        {
          text: "**Simplified Financial Oversight:**",
          items: [
            "The platform eased the management burden on financial staff, empowering employees to handle payments independently while maintaining compliance.",
          ],
        },
      ],
    },
    { type: "h2", text: "Outcome" },
    {
      type: "p",
      text: "Through thoughtful design and collaboration, our team was able to achieve our goal of creating a cashless corporate payments solution tailored to Japan's unique business environment. The revamped platform streamlined expense management for businesses of all sizes, ensuring scalability, accessibility, and a user-friendly experience for employees and administrators alike.",
    },
    {
      type: "image",
      src: "/images/projects/s-addexpense.png",
      alt: "Adding a new expense",
      width: 1440,
      height: 900,
    },
    {
      type: "image",
      src: "/images/projects/s-account.png",
      alt: "Account management",
      width: 1440,
      height: 900,
    },
    {
      type: "image",
      src: "/images/projects/s-exports.png",
      alt: "Exporting financial data",
      width: 1440,
      height: 900,
    },
    {
      type: "image",
      src: "/images/projects/s-receipts.png",
      alt: "Managing receipts",
      width: 1440,
      height: 900,
    },
  ],
};
