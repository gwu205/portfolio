import { CaseStudy } from "../../types";

const PINK = "#FF016C";

export const en: CaseStudy = {
  card: {
    title: "Experience.Lab",
    client: "Publicis Groupe",
    skills: ["Framer", "Frontend Dev", "Motion Design"],
    videoSrc:
      "https://res.cloudinary.com/gswu205/video/upload/v1771406232/explab-square_ryl87l.mp4",
  },
  meta: {
    articleTitle: "Experience.Lab",
    heroImageSrc: "/images/projects/explab-hero.png",
    heroImageAlt: "Experience.Lab",
    clientName: "Publicis Groupe Japan",
    year: "2026",
    role: "External Product Designer & Framer Expert",
    stack: ["Framer", "React (Framer code components)", "Three.js", "Claude Code"],
    themes: [
      "Creative technology",
      "3D integration",
      "motion systems",
      "performance optimisation",
      "brand storytelling",
    ],
    h1Title: "Brand Website for Experience.Lab",
    timeline: "5 weeks",
    link: "https://experiencelab.publicisgroupe.jp",
    introduction: [
      "Experience.Lab is Publicis Groupe Japan's bespoke experience practice - a studio focused on CX strategy, design systems, and creative technology across Japan and APAC. The brief was to create a flagship brand site that could act as a live portfolio: a single, seamless experience that showcases the team's capabilities in strategy, design, and creative tech.",
      "The result is a fully custom Framer build where layered motion, scroll‑tied interaction, and a bespoke 3D hero combine into an experience that feels distinctly “Tokyo at night” while remaining performant and maintainable for the internal team.",
      "The project launched in January 2026 and now serves as Experience.Lab's primary brand showcase. The site was highlighted within the Framer community and submitted to the “Best Animations” category in Framer's Community Awards, with average session times exceeding three minutes - a strong signal of engagement for a portfolio-style site.",
    ],
  },
  seo: {
    title: "Experience.Lab Brand Website | Geoffrey Wu",
    description:
      "A bespoke Framer build for Publicis Groupe Japan's experience practice — scroll-tied motion, a custom Three.js hero, and performance treated as a design constraint.",
  },
  blocks: [
    {
      type: "video",
      src: "https://res.cloudinary.com/gswu205/video/upload/v1771494232/explab-load_noirfg.mp4",
      background: PINK,
    },
    { type: "h2", text: "Role & Team" },
    {
      type: "p",
      text: "I joined as an external Product Designer and Framer expert. My role was to take an ambitious motion and 3D-heavy concept and turn it into a robust, performant implementation in Framer.",
    },
    { type: "p", text: "The project was delivered in close collaboration with:" },
    {
      type: "ul",
      items: [
        "A Creative Director, who led the overarching creative vision and narrative.",
        "An Art Director, who set the visual direction and core brand assets.",
        "An Experience Designer, who contributed design direction and produced the 3D assets.",
      ],
    },
    {
      type: "p",
      text: "Within this team, I was responsible for the Framer architecture, motion system, and all custom code integrations, acting as the bridge between visual concept and technical execution. This project was completed over a period of 5 weeks from initial concept to deployment.",
    },
    { type: "h2", text: "Context & Problem" },
    {
      type: "p",
      text: "Experience.Lab needed a site that did more than list services and logos. It had to:",
    },
    {
      type: "ul",
      items: [
        "Convey the studio's identity as a high-end, creative-technology practice in Tokyo.",
        "Demonstrate motion, interaction, and 3D capability at a level that matched the team's client work.",
        "Feel editorial and crafted, not like an off‑the‑shelf template.",
        "Be maintainable by the internal team and compatible with Framer as a core tool.",
      ],
    },
    {
      type: "p",
      text: "The most significant challenge was navigating the tension between ambition and constraints. The desired experience involved:",
    },
    {
      type: "ul",
      items: [
        "Continuous, scroll‑tied storytelling.",
        "Complex timeline animations.",
        "A prominent 3D hero element.",
        "A “Tokyo at night” dark mode that was more than a cosmetic theme.",
      ],
    },
    {
      type: "p",
      text: "All of these elements had to run smoothly across a range of devices and connection speeds, without compromising on visual quality.",
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/gswu205/video/upload/v1771486074/explab-hero_kowlg8.mp4",
      background: PINK,
    },
    { type: "h2", text: "Goals & Success Criteria" },
    {
      type: "p",
      text: "From the outset, the project was anchored to a few clear goals:",
    },
    {
      type: "ul",
      items: [
        "Build a brand site that feels like a cohesive, cinematic experience rather than a simple brand introduction.",
        "Use Framer to its full potential, combining native tools with custom code to achieve a level of motion and interactivity that would stand out even to design‑savvy audiences.",
        "Treat performance as a first‑class constraint, ensuring that 3D, imagery, and animation do not degrade responsiveness.",
        "Deliver a structure the Experience.Lab team can update, extend, and iterate on after launch.",
      ],
    },
    {
      type: "p",
      text: "Success was evaluated through internal feedback, Framer community response, and engagement signals. The site was subsequently submitted to Framer's Community Awards in the “Best Animations” category, and early analytics showed average session times above three minutes, indicating that visitors were not only landing, but also exploring the experience in depth.",
    },
    { type: "h2", text: "Approach & Process" },
    { type: "h3", text: "Translating the Creative Direction into a Framer System" },
    {
      type: "p",
      text: "The core creative idea was defined early on by the team: Experience.Lab should feel layered, energetic, and slightly surreal, but framed with the clarity and restraint needed for a professional, boutique studio.",
    },
    {
      type: "p",
      text: "My first step was to translate the creative direction, focusing on visual impact, and translating it into a system that Framer could handle reliably:",
    },
    {
      type: "ul",
      items: [
        "Break the narrative into scroll‑linked sections that flow naturally without feeling like a long, single‑purpose landing page.",
        "Define motion “bands” for key sections, where motion is dense and expressive vs. where it needs to prioritise clarity and readability.",
        "Componentise large sections that required more complex interactions or animations.",
      ],
    },
    {
      type: "p",
      text: "This system-first thinking ensured that as new ideas emerged, they could be slotted into existing patterns rather than becoming one‑off exceptions that risked instability or costly tinkering further down the line.",
    },
    {
      type: "image",
      src: "/images/projects/explab-framer.png",
      alt: "The responsive Experience.Lab build inside Framer",
      width: 1200,
      height: 800,
    },
    { type: "h3", text: "Extending Framer with Custom Code Components" },
    {
      type: "p",
      text: "Many of the desired interactions were achievable with Framer's built‑in tools. However, several requirements pushed beyond what could be comfortably managed with existing tooling:",
    },
    {
      type: "ul",
      items: [
        "A custom 3D model viewer for the Experience.Lab lion mascot.",
        "Fine‑grained control of scroll‑bound animation timelines.",
        "More advanced state handling to keep interactions responsive regardless of scroll speed and device.",
      ],
    },
    {
      type: "p",
      text: "To address this, I implemented custom React‑based code components inside Framer.",
    },
    {
      type: "p",
      text: "The 3D model viewer was built with [Three.js](https://threejs.org/) and integrated as a Framer code component, allowing tighter control over loading, scene composition, and interaction than a generic embed. I used [Claude Code](https://claude.com/code) as an AI assistant during development, particularly for faster iteration on Three.js boilerplate, state handling, and custom component animations. This combination allowed rapid experimentation while maintaining code quality and performance.",
    },
    {
      type: "p",
      text: "For scroll‑linked motion, I combined Framer's timeline tools with custom logic that tracked the user's scroll position and synchronised multiple animation sequences. This required careful planning of ranges, easing, and transitions so that the experience felt smooth, natural, and not jittery.",
    },
    {
      type: "image",
      src: "/images/projects/explab-timeline.png",
      alt: "An example of a scroll-tied animation timeline",
      width: 1200,
      height: 675,
    },
    { type: "h3", text: "Dark Mode as “Neon Tokyo”" },
    {
      type: "p",
      text: "Dark mode was treated as a central storytelling device rather than a basic accessibility feature. The design language for dark mode was built around three ideas:",
    },
    {
      type: "ul",
      items: [
        "“Tokyo at night”: neon accents, deep blacks, and controlled glows rather than flat dark surfaces.",
        "Playfulness: subtle moments that reward exploration, such as the sleeping mask on the 3D lion that appears only in dark mode.",
        "Continuity: even as the mood shifts, typography, layout, and hierarchy remain consistent to preserve usability.",
      ],
    },
    {
      type: "p",
      text: "Early prototypes used a [Spline](https://spline.design) embed for the 3D hero. While the visual quality was strong, this approach loaded and rendered the entire scene at runtime, heavily impacting performance. Scroll and animation responsiveness degraded significantly, especially on less powerful devices.",
    },
    {
      type: "p",
      text: "This led to a pivotal decision: move away from a Spline embed and implement a custom Three.js viewer instead. This change gave full control over what was rendered, when it was loaded, and how it responded to theme changes and interactions, all while staying inside the Framer environment.",
    },
    {
      type: "image",
      src: "/images/projects/explab-team-s.png",
      alt: "The team section in dark mode",
      width: 1200,
      height: 675,
    },
    { type: "h3", text: "Asset & Performance Optimisation" },
    {
      type: "p",
      text: "Given the level of animation and the presence of 3D content, performance was treated as a core design constraint from the beginning.",
    },
    { type: "p", text: "For 3D:" },
    {
      type: "ul",
      items: [
        "The Three.js viewer was kept deliberately simple: just the model, without heavy scene lighting, reflections, or unnecessary geometry.",
        "Lighting was simulated using matcap textures applied directly to the model, delivering a stylised, “lit” appearance without real-time lighting calculations.",
        "Model assets were optimised and cleaned to minimise file size and runtime cost.",
      ],
    },
    { type: "p", text: "For imagery and video:" },
    {
      type: "ul",
      items: [
        "Assets were aggressively compressed using tools such as [Clop](https://lowtechguys.com/clop/), tuning export settings to reduce size without visible degradation.",
        "Different compression strategies were used for accompanying imagery, key art, and videos to balance fidelity and page weight.",
      ],
    },
    {
      type: "p",
      text: "This combination of 3D simplification and asset compression ensured that complex timeline animations, scroll‑tracking, and dark mode transitions all remained responsive. The result is an experience that feels dense and expressive but doesn't feel heavy to interact with.",
    },
    { type: "h2", text: "Key Design & Engineering Decisions" },
    {
      type: "p",
      text: "Several decisions defined the character and robustness of the final site:",
    },
    {
      type: "ul",
      items: [
        "A bespoke Framer build, rather than modifying an existing template, to support a continuous, narrative scroll and complex motion while keeping the codebase understandable.",
        "A custom Three.js model viewer in place of a Spline embed, enabling significantly better runtime performance and tighter integration with theme and interaction states.",
        "A scroll‑tied motion system that uses carefully planned ranges and sequencing, so motion feels orchestrated rather than chaotic.",
        "Dark mode treated as a narrative layer, with unique visuals and interactions, instead of a simple global palette swap.",
        "Asset optimisation built into the design process, ensuring images, video, and 3D assets are performance-aware and play nicely with Framer's existing system.",
      ],
    },
    {
      type: "video",
      src: "https://res.cloudinary.com/gswu205/video/upload/v1771502521/explab-work_utkv6f.mp4",
      background: PINK,
    },
    { type: "h2", text: "Outcomes & Impact" },
    {
      type: "p",
      text: "Experience.Lab launched in January 2026 as this arm of Publicis Groupe Japan's primary experience practice showcase.",
    },
    { type: "p", text: "Notable outcomes:" },
    {
      type: "ul",
      items: [
        "Internal stakeholders responded positively to the way the site captures the unique style and character of the team while still feeling precise and professional.",
        "The site has been shared within the Framer community as an example of a fully bespoke, interaction-rich build and submitted to Framer's Community Awards in the “Best Animations” category.",
        "Early analytics show average session durations above three minutes, indicating that visitors spend time exploring the experience rather than bouncing quickly.",
      ],
    },
    {
      type: "image",
      src: "/images/projects/explab-awards.png",
      alt: "Experience.Lab awards recognition",
      width: 1200,
      height: 675,
    },
    { type: "h2", text: "Learnings & Reflection" },
    {
      type: "p",
      text: "This project reinforced several principles for building high‑impact, motion‑heavy brand sites:",
    },
    {
      type: "ul",
      items: [
        "Motion systems need to be designed as systems, not as isolated flourishes. Planning how motion behaves across the entire scroll made it easier to keep the experience cohesive and performant.",
        "3D should be treated as a first‑class citizen in the performance budget. The move from a Spline embed to a focused Three.js viewer, combined with matcap‑based lighting, was a key factor in achieving the desired visual impact without compromising responsiveness.",
        "AI‑assisted implementation can noticeably improve iteration speed when working with complex integrations. Using Claude Code as a coding assistant allowed faster exploration of complex animations and 3D embedding approaches and reduced friction in building Framer code components.",
        "Maintainability is part of craft. The best brand experiences are not only impressive on launch day, they're easy for teams to keep current as their work and story evolve.",
      ],
    },
    {
      type: "p",
      text: "Experience.Lab is a prime example of how design, motion, and engineering can be combined inside Framer to create expressive yet practical interfaces for real teams.",
    },
  ],
};
