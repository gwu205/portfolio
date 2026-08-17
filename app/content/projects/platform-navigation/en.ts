import { CaseStudy } from "../../types";

export const en: CaseStudy = {
  card: {
    title: "Platform Navigation",
    skills: ["UI Design", "B2C", "Branding"],
    imgSrc: "/images/projects/navigation.jpg",
  },
  meta: {
    articleTitle: "Platform Navigation",
    heroImageSrc: "/images/projects/navigation.jpg",
    heroImageAlt: "Platform navigation",
    clientName: "Sollective",
    year: "2024",
    role: "Product Designer",
    stack: ["Figma", "Slack"],
    themes: [
      "Product design",
      "Information architecture",
      "Navigation design",
      "User testing",
    ],
    h1Title: "Adapting Site Navigation to a Rapidly Changing Platform",
    timeline: "6 weeks",
    introduction: [
      "Sollective is a vetted freelancer matching platform in Japan, connecting highly skilled freelancers with companies looking to expand their business operations. In addition to matching, Sollective aims to support the future of freelance work in Japan through community events and made-for-freelance workflow tools.",
      "As the platform's offerings grew, so did its audience, attracting not only job seekers but also users searching for productivity solutions. This expansion presented a critical challenge for the platform's information architecture.",
    ],
  },
  seo: {
    title: "Platform Navigation Redesign for Sollective | Geoffrey Wu",
    description:
      "Rebuilding Sollective's information architecture and navigation as the platform grew from a matching service into a productivity suite and community hub.",
  },
  blocks: [
    { type: "h2", text: "The Problem" },
    {
      type: "p",
      text: "At launch, Sollective focused solely on freelancer-to-business matching. However, its scope has since expanded to include freelancer productivity tools and business administration features.",
    },
    {
      type: "p",
      text: "As the platform's offerings grew, so did its audience, attracting not only job seekers but also users searching for productivity solutions. This expansion presented a critical challenge:",
    },
    {
      type: "ul",
      items: [
        "How could the platform's **information architecture** and **feature prioritisation** evolve to showcase its new capabilities?",
        "How could we ensure users recognised Sollective as a **matching service**, a **productivity suite**, and a **community hub**?",
      ],
    },
    {
      type: "p",
      text: "The existing navigation struggled with feature discoverability and scalability, leading to difficulties for freelancers and recruiters in navigating between tools like job postings, contracts, and messaging.",
    },
    {
      type: "image",
      src: "/images/projects/old_nav.jpg",
      alt: "The original Sollective navigation before the redesign",
      width: 1920,
      height: 1080,
    },
    {
      type: "p",
      text: "The core issue of the existing navigation was in the discoverability of features and scalability. This had the impact of freelancers and recruiters struggling to find tools and navigate between job postings, contracts, and messaging.",
    },
    { type: "h2", text: "The Solution" },
    { type: "p", variant: "subheading", text: "Separation of concerns" },
    {
      type: "p",
      text: "The redesign aimed to improve user engagement by creating a unified, intuitive structure that clearly communicated the platform's core offerings:",
    },
    {
      type: "ol",
      items: [
        "**Matching Services**",
        "**Productivity Tools**",
        "**Community Access**",
      ],
    },
    { type: "p", text: "We prioritised addressing common user pain points:" },
    {
      type: "ul",
      items: [
        "Lack of clarity on where to access productivity tools.",
        "Uncertainty about what to do after signing up.",
        "Limited awareness of the community and how to participate.",
      ],
    },
    {
      type: "aside",
      lead: "How might we",
      highlight:
        "effectively inform users of everything that the product offers while easing them into the user experience?",
    },
    { type: "h3", text: "Design Approach" },
    {
      type: "p",
      variant: "subheading",
      text: "Defining a cohesive user experience",
    },
    {
      type: "p",
      text: "To develop a navigation system that felt intuitive, we conducted a competitive analysis of similar platforms. We noted that successful solutions presented features in approachable, contextual ways while minimising cognitive load for first-time users.",
    },
    {
      type: "p",
      variant: "subheading",
      text: "Key Insight: Context Switching",
    },
    {
      type: "p",
      text: "Inspired by platforms like Slack, which uses a context switcher and app-like icon affordance, we explored ways to separate and streamline user flows. This approach allows users to focus on a single task or feature without distraction, reducing overwhelm and enhancing usability.",
    },
    {
      type: "image",
      src: "/images/projects/slack-switcher.png",
      alt: "Slack's workspace context switcher, used as a reference pattern",
      width: 1920,
      height: 1080,
    },
    { type: "h2", text: "Iterations and Testing" },
    { type: "p", variant: "subheading", text: "Design iterations" },
    {
      type: "p",
      text: "Given the far-reaching impact of navigation design, we undertook multiple iterations, testing variations with both our internal team and external users:",
    },
    {
      type: "image",
      src: "/images/projects/nav_iterations_1.png",
      alt: "Early navigation iterations explored side by side",
      width: 2860,
      height: 1516,
    },
    {
      type: "image",
      src: "/images/projects/nav_iteration_2.jpg",
      alt: "Navigation iteration: slide-out menu",
      width: 1440,
      height: 982,
    },
    {
      type: "image",
      src: "/images/projects/nav_iteration_3.jpg",
      alt: "Navigation iteration: dropdown menu above the main UI",
      width: 1440,
      height: 982,
    },
    {
      type: "ul",
      items: [
        "Iteration 1: A slide-out menu that locks the interface when activated.",
        "Iteration 2: A dropdown menu appearing above the main UI context.",
      ],
    },
    {
      type: "p",
      text: "Users favored a full-height menu, finding it approachable and easy to navigate. Some expressed interest in a fixed side menu, but we determined this wasn't ideal for Sollective's highly focused user flows.",
    },
    { type: "p", variant: "subheading", text: "Final Design" },
    {
      type: "p",
      text: "We adopted a hybrid navigation system featuring a top navigation bar complemented by a collapsible main menu. This structure balances clarity and accessibility while reducing cognitive load.",
    },
    {
      type: "image",
      src: "/images/projects/navigation_dark.jpg",
      alt: "The final navigation on the profile page, dark theme",
      width: 1800,
      height: 1200,
    },
    {
      type: "image",
      src: "/images/projects/navigation_light.jpg",
      alt: "The final navigation on the dashboard page, light theme",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "Conclusion" },
    { type: "p", text: "The redesigned navigation system achieved its goals by:" },
    {
      type: "ul",
      items: [
        "Clarifying the platform's diverse offerings.",
        "Reducing friction for first-time users.",
        "Creating a scalable architecture for future growth.",
      ],
    },
    {
      type: "p",
      text: "Through thoughtful design and iteration, Sollective now provides a cohesive user experience that empowers freelancers and companies to connect and thrive.",
    },
    {
      type: "p",
      text: "This project underscored the importance of grounding design decisions in user feedback and competitive insights. While every platform has unique needs, designing for scalability and clarity ensures a foundation for long-term success.",
    },
  ],
};
