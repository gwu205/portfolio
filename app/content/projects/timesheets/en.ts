import { CaseStudy } from "../../types";

export const en: CaseStudy = {
  card: {
    title: "B2B Timesheets",
    skills: ["UI Design", "UX Research", "Web SaaS"],
    imgSrc: "/images/projects/timesheets-hero.png",
  },
  meta: {
    articleTitle: "Timesheets",
    heroImageSrc: "/images/projects/timesheets-hero.png",
    heroImageAlt: "Timesheets",
    clientName: "Sollective",
    year: "2025",
    role: "Lead Product Designer",
    stack: ["Figma", "Figma Make", "TypeScript / React"],
    themes: [
      "B2B workflows",
      "internal tools",
      "reporting",
      "prototyping",
    ],
    h1Title: "Simplifying B2B Complexity in Timesheet Reporting",
    timeline: "8 weeks",
    introduction: [
      "Sollective is a vetted freelancer matching platform in Japan, connecting highly skilled freelancers with companies looking to expand their business operations. FreelanceOS is Sollective's toolkit for freelancers to manage their engagements, including timesheets, invoicing, and reporting.",
      "In 2024, the team launched a Timesheets feature aimed primarily at freelancers: a way for individuals to log time across multiple projects and export their records as needed. As Sollective's operations scaled, the internal team began using Timesheets as a core reporting tool between freelancers and client back offices. The original design, optimised for freelancer self‑management, no longer fit the emerging workflows and created friction for both freelancers and internal staff.",
      "In 2025, the Timesheets experience was redesigned to support this new reality: a monthly reporting tool that works equally well for freelancers and the Sollective back office, while remaining familiar, clear, and efficient.",
    ],
  },
  seo: {
    title: "Timesheets Redesign for Sollective | Geoffrey Wu",
    description:
      "Reorienting a freelancer time-logging tool into a monthly reporting and approval workflow for both freelancers and back-office teams, validated with AI-assisted prototyping.",
  },
  blocks: [
    {
      type: "image",
      src: "/images/projects/timesheets-original.png",
      alt: "The original Timesheets interface before the redesign",
      width: 1200,
      height: 600,
    },
    { type: "h2", text: "Context & Problem" },
    {
      type: "p",
      text: "The original Timesheets feature was designed with a clear target user in mind: freelancers acting as their own business administrators. The interface supported:",
    },
    {
      type: "ul",
      items: [
        "Weekly time logging.",
        "Multiple projects side by side.",
        "Flexible exports that freelancers could file or send as needed.",
      ],
    },
    {
      type: "p",
      text: "As adoption grew and our internal processes started to utilise this tool, a different use case emerged:",
    },
    {
      type: "ul",
      items: [
        "Freelancers were logging hours monthly rather than weekly.",
        "The Sollective team used Timesheets as their primary reporting source to client back‑office staff.",
        "The end goal shifted from general record‑keeping to structured reporting and approval.",
      ],
    },
    { type: "p", text: "This mismatch led to several issues:" },
    {
      type: "ul",
      items: [
        "The multi‑project, weekly input interface was cumbersome for freelancers who only needed to submit one monthly timesheet per engagement.",
        "Freelancers had to log time in Timesheets, export a PDF, and email it to back-office contacts, introducing manual steps and room for error.",
        "Analytics-focused elements from the original design were underused; many users were not migrating their entire workflow into FreelanceOS and preferred to pick specific tools for specific needs.",
        "The Sollective team had additional requirements, such as expense tracking, approvals, and verification, that were not supported in the initial design.",
        "In short, the tool was designed for a freelancer-first, analytics-oriented workflow, but had become central to a freelancer-back office reporting flow instead.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/timesheets-flow.png",
      alt: "The reporting flow between freelancers and back-office staff",
      width: 1200,
      height: 600,
    },
    { type: "h2", text: "Goals" },
    {
      type: "p",
      text: "We decided to repurpose the timesheets infrastructure to better support our internal processes. This iteration focused on aligning the product with the actual workflows of our users:",
    },
    {
      type: "ul",
      items: [
        "Reorient Timesheets toward monthly reporting and approval, rather than multi‑project weekly logging.",
        "Streamline input so freelancers can complete and submit timesheets with minimal friction.",
        "Build in capabilities needed by the internal Sollective team and client back offices (expenses, approvals, verification).",
        "Preserve familiarity by leaning into spreadsheet‑like interactions, while removing unnecessary analytics and complexity.",
        "Use AI‑assisted rapid prototyping to gather feedback quickly from founders, engineers, and operations.",
      ],
    },
    { type: "h2", text: "Constraints" },
    { type: "p", text: "Key constraints included:" },
    {
      type: "ul",
      items: [
        "A live production feature already in use by freelancers and internal staff; changes needed to improve the experience without breaking existing workflows.",
        "A small, cross‑functional team (co‑founder + front‑end + back‑end) responsible for both operations and delivery.",
        "The need to stay within the existing technical stack while minimising engineering overhead. Reuse existing components and patterns where possible.",
        "Operational requirements from the internal team that had to be met for the redesign to be considered successful.",
      ],
    },
    { type: "h2", text: "Research & Insights" },
    { type: "h3", text: "Reviewing the Existing Interface" },
    {
      type: "p",
      text: "The first step was a structured review of the existing Timesheets UI:",
    },
    {
      type: "ul",
      items: [
        "Identified which elements were genuinely used vs. which were legacy or aspirational (e.g., analytics widgets and broader workflow features).",
        "Confirmed that users were not moving entire admin workflows into FreelanceOS; instead, they were selectively adopting specific tools, including Timesheets.",
        "Observed that the layout assumed frequent, multi‑project, weekly input - a pattern that didn't match the majority of freelancer behaviour.",
      ],
    },
    { type: "h3", text: "Talking to Users" },
    {
      type: "p",
      text: "Interviews with freelancers and internal stakeholders surfaced several key insights:",
    },
    {
      type: "ul",
      items: [
        "Freelancers were most familiar with Excel or spreadsheet interfaces in the context of time logging.",
        "The weekly, multi‑project input structure made navigation and data entry more complex than necessary for simple monthly reporting.",
        {
          text: "Internal operations required more than just time totals:",
          items: [
            "A monthly reporting model.",
            "Approve/reject functionality directly within the interface.",
            "Verification features to ensure reported hours matched internal records.",
            "Space for detailed notes, so freelancers could record what they worked on day by day.",
          ],
        },
      ],
    },
    {
      type: "p",
      text: "These findings reframed Timesheets from a flexible, analytics‑adjacent tool into a structured workflow product: one that must guide users through a predictable monthly reporting process.",
    },
    {
      type: "image",
      src: "/images/projects/timesheets-iteration.png",
      alt: "Design iterations for the redesigned timesheet",
      width: 1200,
      height: 600,
    },
    {
      type: "image",
      src: "/images/projects/timesheets-early.png",
      alt: "An early layout exploration with month navigation in a side panel",
      width: 1200,
      height: 600,
    },
    { type: "h2", text: "Design Approach" },
    { type: "h3", text: "Refocusing on Monthly Reporting" },
    {
      type: "p",
      text: "The redesigned experience shifted from weekly, multi‑project input to a monthly, engagement‑focused model:",
    },
    {
      type: "ul",
      items: [
        "A single timesheet per engagement per month, aligned with how freelancers and back‑office staff actually collaborate.",
        "Simplified navigation that prioritises the current or most relevant month.",
        'Clear flows from "log hours" to "submit for approval" to "approved/rejected," rather than open‑ended logging.',
      ],
    },
    {
      type: "p",
      text: "Initially, a month list in a left‑side navigation panel allowed quick switching between months. Feedback from the team highlighted that this introduced unnecessary interface weight. A more focused solution was adopted:",
    },
    {
      type: "ul",
      items: [
        "A simple month dropdown picker to change the active period.",
        "A default focus on the current reporting month, reducing navigation and decision-making for freelancers.",
      ],
    },
    {
      type: "p",
      text: "This supported the core behavioural goal: make timely monthly submission as easy and low‑friction as possible.",
    },
    {
      type: "image",
      src: "/images/projects/timesheets-state.png",
      alt: "Timesheet submission and approval states",
      width: 1200,
      height: 600,
    },
    { type: "h3", text: "Aligning with Spreadsheet Mental Models" },
    {
      type: "p",
      text: "Given the strong association between time reporting and spreadsheets, the interface deliberately leaned into that mental model:",
    },
    {
      type: "ul",
      items: [
        "Tabular layout with rows representing days and columns for hours, expenses, and notes.",
        "Inline editing that feels familiar to users accustomed to Excel or Google Sheets.",
        "Clear totals and summaries that help both freelancers and the internal team verify correctness at a glance.",
      ],
    },
    {
      type: "p",
      text: "To validate interaction patterns and edge cases, a spreadsheet-like prototype was built using Figma Make. This allowed simulation of input behaviour, navigation patterns, and state changes without committing engineering time prematurely.",
    },
    {
      type: "image",
      src: "/images/projects/timesheets-make.png",
      alt: "The interactive prototype built in Figma Make",
      width: 1200,
      height: 600,
    },
    { type: "h3", text: "Integrating Operational Requirements" },
    {
      type: "p",
      text: "The redesign baked internal and client-facing needs directly into the UI:",
    },
    {
      type: "ul",
      items: [
        "**Expenses:** A dedicated area within the timesheet for expenses, preventing the need for parallel emails or separate spreadsheets.",
        "**Approval Workflow:** Interface support for approve/reject states so back‑office teams can handle timesheets in one place.",
        "**Verification:** Fields and views designed to make it easy to compare freelancer‑reported hours with internal records.",
        "**Detailed Notes:** Per‑record notes so freelancers can describe what they worked on each day, improving transparency and reducing back‑and‑forth questions.",
      ],
    },
    {
      type: "p",
      text: "These requirements guided both the information architecture and the visual hierarchy, ensuring that the most critical actions (logging, reviewing, approving) were always visible and straightforward.",
    },
    {
      type: "image",
      src: "/images/projects/timesheets-ui.png",
      alt: "The redesigned timesheet interface",
      width: 1200,
      height: 600,
    },
    { type: "h2", text: "Collaboration & AI‑Assisted Prototyping" },
    {
      type: "p",
      text: "The project relied on tight collaboration between product, engineering, and operations. Utilising AI tools like Figma Make allowed team members to provide early and actionable feedback. Stakeholders could interact with realistic behaviour early, rather than reacting to static mockups. The team could also quickly converge on a solution that balanced usability, technical feasibility, and operational requirements:",
    },
    {
      type: "ul",
      items: [
        "Co‑founder: validated the approach against business objectives and freelancer experience.",
        "Front‑end and Back‑end Engineers: assessed technical feasibility and helped to define the scope of what could be delivered within constraints.",
        "Internal Back‑office Team: provided practical requirements and evaluated whether the new interface would genuinely reduce manual work.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/timesheets-components.png",
      alt: "The component set built for the Timesheets redesign",
      width: 1200,
      height: 600,
    },
    { type: "h2", text: "Final Experience" },
    { type: "p", text: "The final Timesheets design delivered:" },
    {
      type: "ul",
      items: [
        "A streamlined, monthly‑oriented input interface aligned with how freelancers and back‑office teams actually work.",
        "A spreadsheet‑like interaction model that feels familiar, while still being tailored to the specific timesheet use case.",
        "Integrated support for expenses, approvals, verification, and detailed notes within a single, coherent view.",
        "Reduced visual noise through the removal of underused analytics and features that did not directly contribute to reporting.",
      ],
    },
    {
      type: "p",
      text: "The result is an interface that serves both primary audiences - freelancers and internal staff - without forcing either group into cumbersome workarounds.",
    },
    {
      type: "image",
      src: "/images/projects/timesheets-hero.png",
      alt: "The final Timesheets design",
      width: 1200,
      height: 600,
    },
    { type: "h2", text: "Outcomes & Impact" },
    {
      type: "p",
      text: "The redesigned Timesheets produced tangible improvements for both freelancers and the Sollective team:",
    },
    {
      type: "ul",
      items: [
        "**Improved usability:** Freelancers and back‑office staff praised the new interface for its clarity and ease of use, particularly the more focused monthly flow.",
        "**Operational efficiency:** Integration with the internal reporting system eliminated manual export and email steps, significantly reducing time spent on repetitive reporting tasks.",
        "**Reduced effort for freelancers:** The reporting process shifted from a chore that could take hours each month to a streamlined workflow that typically took at most 30 minutes per freelancer per month.",
        "**Alignment with real-world workflows:** By removing unnecessary analytics and focusing the product on reporting, Timesheets became a better fit for how the platform's most engaged users actually worked.",
      ],
    },
    { type: "h2", text: "Learnings & Reflection" },
    {
      type: "p",
      text: "The Timesheets redesign reinforced several principles for tooling in operationally complex environments:",
    },
    {
      type: "ul",
      items: [
        "Products often expand beyond their original target user; redesigns must start with real usage, not the original intent.",
        "Aligning with existing mental models (like spreadsheets) can dramatically lower friction, especially in tasks like time reporting.",
        "Internal operational requirements (approvals, verification, expenses) are as important as the freelancer's individual experience when a tool sits between multiple parties.",
        "AI‑assisted prototyping can speed up exploration and allow teams to converge on interaction patterns that work across design, engineering, and operations.",
      ],
    },
    {
      type: "p",
      text: "This project now serves as a reference point for future workflow tools within FreelanceOS, demonstrating how a feature can evolve from a single‑persona utility into a multi‑stakeholder product without sacrificing clarity or ease of use.",
    },
  ],
};
