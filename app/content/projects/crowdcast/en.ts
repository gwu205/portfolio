import { CaseStudy } from "../../types";

export const en: CaseStudy = {
  card: {
    title: "Corporate Brand",
    skills: ["Branding", "Visual Design"],
    imgSrc: "/images/projects/crowdcast.jpg",
  },
  meta: {
    articleTitle: "Brand Renewal",
    heroImageSrc: "/images/projects/crowdcast.jpg",
    heroImageAlt: "Crowd Cast website",
    clientName: "Crowd Cast",
    year: "2022",
    role: "Product Designer",
    stack: ["Figma", "Webflow"],
    themes: [
      "Branding",
      "Visual identity",
      "Logo design",
      "Web design",
      "Webflow development",
    ],
    h1Title: "Renewing the Corporate Brand for a Cashless Future",
    timeline: "6 weeks",
    introduction: [
      "Crowd Cast develops financial solutions for small-to-medium enterprises and aims to bring their internal accounting infrastructure paperless and up-to-date with the modern age in Japan.",
      "When I joined this early-stage startup, the company had minimal design direction and very few existing visual assets. As the business grew, there was a clear need for a more stable, scalable visual identity.",
    ],
  },
  seo: {
    title: "Crowd Cast Brand Renewal | Geoffrey Wu",
    description:
      "Rebuilding the logo, visual assets, and corporate website for Crowd Cast — a Japanese fintech startup bringing SME accounting into a cashless age.",
  },
  blocks: [
    { type: "h2", text: "Rebuilding the Logo and Visual Assets" },
    {
      type: "p",
      text: "When I joined this early-stage startup, the company had minimal design direction and very few existing visual assets. As the business grew, there was a clear need for a more stable, scalable visual identity. Recognising this, I took the initiative to develop an updated brand image and a comprehensive set of visual assets that could evolve with the company's needs.",
    },
    {
      type: "p",
      text: 'I started with the original logo as a foundation and rebuilt it using a geometric grid system to enhance consistency and legibility across various sizes and applications. The refined logo retains the spirit of the original design but is more adaptable for both digital and print media. The brand mark itself was inspired by the concept of unity, aligning with the company\'s motto: *"Power to the Crowds"*. By softening sharp angles and refining the asymmetrical shape, I improved the logo\'s visual impact, making it both modern and more representative of the company\'s core values.',
    },
    {
      type: "image",
      src: "/images/projects/cc_logo.jpg",
      alt: "The rebuilt Crowd Cast logo, constructed on a geometric grid",
      width: 1920,
      height: 1080,
    },
    {
      type: "image",
      src: "/images/projects/cc_brand.jpg",
      alt: "Crowd Cast brand assets and visual identity system",
      width: 1920,
      height: 1080,
    },
    { type: "h2", text: "Refreshing the Website" },
    {
      type: "p",
      text: "The corporate website needed a refresh to better reflect the company's growing professionalism and its personable, people-first culture. I wanted the website to not only communicate the company's story but also build trust with visitors, whether they were potential clients, partners, or employees.",
    },
    {
      type: "p",
      text: "I began by researching competitors and similar companies in the industry to understand best practices and how to position the company uniquely within its market. The landing page was designed to place both the products and the people at the forefront, showcasing the team's passion and expertise. By integrating more engaging imagery, clear messaging, and user-centered navigation, I aimed to make the site both visually appealing and intuitive to navigate, while also ensuring it conveyed the company's mission and values effectively.",
    },
    {
      type: "image",
      src: "/images/projects/cc_website.png",
      alt: "The redesigned Crowd Cast corporate website",
      width: 2048,
      height: 3219,
    },
  ],
};
