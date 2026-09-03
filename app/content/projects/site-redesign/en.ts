import { CaseStudy } from "../../types";

export const en: CaseStudy = {
  card: {
    title: "Brand Site",
    skills: ["Web Design", "Framer", "Motion Design", "Branding"],
    videoSrc:
      "https://res.cloudinary.com/gswu205/video/upload/v1770948413/sollectivejp-reel_zdbmbj.mp4",
  },
  meta: {
    articleTitle: "Platform Website",
    heroImageSrc: "/images/projects/sollective.jpg",
    heroImageAlt: "Sollective website",
    clientName: "Sollective",
    year: "2024",
    role: "Product Designer",
    stack: ["Framer"],
    themes: [
      "Web design",
      "Framer",
      "Visual storytelling",
      "Conversion optimization",
    ],
    h1Title: "The All-In-One Freelancer Platform in Japan",
    timeline: "6 weeks",
    link: "https://sollective.jp",
    introduction: [
      "Sollective is a vetted freelancer matching platform in Japan, connecting highly skilled freelancers with companies seeking to expand their operations. Beyond matching services, Sollective fosters the future of freelance work in Japan through community events and purpose-built workflow tools.",
      'As the platform evolved to offer more than just job matching, the need arose for the website to reflect its expanded mission: to serve as "The All-In-One Freelancer Platform." This case study outlines how we reimagined the website to better communicate its offerings, enhance user engagement, and support business growth.',
    ],
  },
  seo: {
    title: "Sollective Platform Website Redesign | Geoffrey Wu",
    description:
      "Restructuring Sollective's landing page around a clear narrative — separating freelancer and business messaging, and lifting engagement time by 50%.",
  },
  blocks: [
    { type: "h2", text: "The Problem" },
    {
      type: "p",
      text: "As Sollective grew, so did the breadth of its offerings, spanning:",
    },
    {
      type: "ul",
      items: [
        "Freelancer Matching Services",
        "Workflow Tools",
        "A Thriving User Community",
      ],
    },
    {
      type: "p",
      text: "However, the existing website fell short in several critical areas:",
    },
    {
      type: "ol",
      items: [
        "**Messaging Clarity:** The platform's expanded value proposition was unclear, making it difficult for first-time visitors to grasp the breadth of services offered.",
        "**User Engagement:** The landing page lacked the narrative flow to keep users engaged, leading to high bounce rates.",
        "**Outdated Visuals:** The design no longer reflected the company's dynamic and growing identity.",
        "**Target Audience Focus:** The mixed messaging confused freelancers and business users, diluting the impact for both groups.",
      ],
    },
    {
      type: "p",
      text: 'The overarching challenge was to align the website\'s design and messaging with Sollective\'s brand mission: **"Prove the value of freelance."** This meant showcasing the platform as a hub for professional growth, collaboration, and efficiency.',
    },
    {
      type: "image",
      src: "/images/projects/sol-oldhome.jpg",
      alt: "The previous Sollective landing page",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "The Approach" },
    { type: "h3", text: "Structuring the narrative" },
    {
      type: "p",
      text: "We started by focusing on storytelling. The landing page needed to:",
    },
    {
      type: "ul",
      items: [
        "Be approachable and welcoming to first-time visitors.",
        {
          text: "Clearly articulate the platform's value to freelancers, answering key questions upfront:",
          items: [
            "**What is Sollective?**",
            "**Why should I join?**",
            "**How does it benefit me?**",
          ],
        },
      ],
    },
    {
      type: "p",
      text: "To streamline communication, we separated freelancer-focused messaging from business-oriented content, moving the latter to a dedicated B2B site. This allowed us to craft a targeted narrative tailored specifically to freelancers.",
    },
    { type: "h3", text: "Redesigning the Page Flow" },
    {
      type: "p",
      text: "We restructured the landing page into distinct sections:",
    },
    {
      type: "ol",
      items: [
        "**Showcasing Freelancers:** Highlighting success stories to create relatability and inspire trust.",
        "**Projects and Matching:** Demonstrating how the platform connects users to meaningful opportunities.",
        "**Core Features and Benefits:** Breaking down functionality with an emphasis on usability and efficiency.",
        "**Case Studies and Reassurances:** Sharing testimonials and proof points to build credibility.",
        "**Workflow Tools:** Introducing the tools that streamline freelance work.",
        "**Community and Ecosystem:** Highlighting the value of collaboration and off-platform initiatives.",
      ],
    },
    {
      type: "p",
      text: "This logical progression ensured a seamless flow, guiding users from discovery to action.",
    },
    { type: "h3", text: "Leveraging Framer for Rapid Development" },
    { type: "p", text: "We used Framer to build the site, enabling:" },
    {
      type: "ul",
      items: [
        "**Fast Iteration:** Rapid prototyping and deployment to keep pace with business needs.",
        "**Custom Functionality:** Tailoring components for unique interactions and animations.",
        "**Engaging Visuals:** Playful animations and ready-made assets created a sense of curiosity, encouraging exploration.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/sol-match.png",
      alt: "The matching section of the redesigned landing page",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "The Solution" },
    {
      type: "p",
      text: "The redesigned landing page effectively addressed the challenges:",
    },
    {
      type: "ul",
      items: [
        "**Clear Messaging:** Users immediately understand Sollective's offerings and benefits.",
        "**Engaging Design:** A refreshed visual identity aligns with the brand's dynamic growth and mission.",
        "**Focused Targeting:** Freelancer-centric messaging resonates with the primary audience.",
        "**Optimised Flow:** Logical content structure keeps users engaged and guides them to sign-up.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/sol-tools.png",
      alt: "The workflow tools section of the redesigned landing page",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "The Results" },
    { type: "p", text: "The redesign delivered measurable improvements:" },
    {
      type: "ul",
      items: [
        "**50% Increase in Average Engagement Time:** Users spent more time exploring the platform.",
        "**Improved Clarity:** Feedback from usability testing showed users better understood the platform's value.",
        "**Higher Conversion Rates:** A more cohesive narrative and design boosted sign-up rates.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/sol-community.png",
      alt: "The community section of the redesigned landing page",
      width: 1800,
      height: 1200,
    },
    { type: "h2", text: "Key Takeaways" },
    {
      type: "ul",
      items: [
        "**Storytelling Matters:** Structuring the page as a narrative helped retain user attention.",
        "**User-Centric Design:** Separating freelancer and business content improved focus and impact.",
        "**Scalable Tools:** Using Framer allowed for rapid, scalable design solutions that could evolve with the platform.",
      ],
    },
  ],
};
