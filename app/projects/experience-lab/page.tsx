import { CaseStudyMeta } from "@/app/components/article/CaseStudyMeta";
import { Footer } from "@/app/components/common/Footer";
import Image from "next/image";

const themes = [
  "Creative technology",
  "3D integration",
  "motion systems",
  "performance optimisation",
  "brand storytelling",
];

export default function Page() {
  return (
    <>
      <CaseStudyMeta
        articleTitle="Experience.Lab"
        heroImageSrc="/images/projects/explab-hero.png"
        heroImageAlt="Experience.Lab"
        clientName="Publicis Groupe Japan"
        year="2026"
        role="External Product Designer & Framer Expert"
        stack={[
          "Framer",
          "React (Framer code components)",
          "Three.js",
          "Claude Code",
        ]}
        themes={themes}
        h1Title="Brand Website for Experience.Lab"
        timeline="5 weeks"
        link="https://experiencelab.publicisgroupe.jp"
        introductionText={`Experience.Lab is Publicis Groupe Japan’s bespoke experience practice — a studio focused on CX strategy, design systems, and creative technology across Japan and APAC. The brief was to create a flagship brand site that could act as a live portfolio: a single, seamless experience that showcases the team’s capabilities in strategy, design, and creative tech.\n\nThe result is a fully custom Framer build where layered motion, scroll‑tied interaction, and a bespoke 3D hero combine into an experience that feels distinctly “Tokyo at night” while remaining performant and maintainable for the internal team.\n\nThe project launched in January 2026 and now serves as Experience.Lab’s primary brand showcase. The site was highlighted within the Framer community and submitted to the “Best Animations” category in Framer’s Community Awards, with average session times exceeding three minutes - a strong signal of engagement for a portfolio-style site.`}
      />
      <main className="article">
        <div className="content">
          <div className="video-container bg-[#FF016C]">
            <video
              src="https://res.cloudinary.com/gswu205/video/upload/v1771494232/explab-load_noirfg.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full max-w-2xl mx-auto border-r border-l border-black"
            />
          </div>
          <h2>Role & Team</h2>
          <p>
            I joined as an external Product Designer and Framer expert. My role
            was to take an ambitious motion and 3D-heavy concept and turn it
            into a robust, performant implementation in Framer.
          </p>
          <p>The project was delivered in close collaboration with:</p>
          <ul>
            <li>
              A Creative Director, who led the overarching creative vision and
              narrative.
            </li>
            <li>
              An Art Director, who set the visual direction and core brand
              assets.
            </li>
            <li>
              An Experience Designer, who contributed design direction and
              produced the 3D assets.
            </li>
          </ul>
          <p>
            Within this team, I was responsible for the Framer architecture,
            motion system, and all custom code integrations, acting as the
            bridge between visual concept and technical execution. This project
            was completed over a period of 5 weeks from initial concept to
            deployment.
          </p>
          <h2>Context & Problem</h2>
          <p>
            Experience.Lab needed a site that did more than list services and
            logos. It had to:
          </p>
          <ul>
            <li>
              Convey the studio’s identity as a high-end, creative-technology
              practice in Tokyo.
            </li>
            <li>
              Demonstrate motion, interaction, and 3D capability at a level that
              matched the team’s client work.
            </li>
            <li>
              Feel editorial and crafted, not like an off‑the‑shelf template.
            </li>
            <li>
              Be maintainable by the internal team and compatible with Framer as
              a core tool.
            </li>
          </ul>
          <p>
            The most significant challenge was navigating the tension between
            ambition and constraints. The desired experience involved:
          </p>
          <ul>
            <li>Continuous, scroll‑tied storytelling.</li>
            <li>Complex timeline animations.</li>
            <li>A prominent 3D hero element.</li>
            <li>
              A “Tokyo at night” dark mode that was more than a cosmetic theme.
            </li>
          </ul>
          <p>
            All of these elements had to run smoothly across a range of devices
            and connection speeds, without compromising on visual quality.
          </p>
          <div className="video-container bg-[#FF016C]">
            <video
              src="https://res.cloudinary.com/gswu205/video/upload/v1771486074/explab-hero_kowlg8.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full max-w-2xl mx-auto border-r border-l border-black"
            />
          </div>
          <h2>Goals & Success Criteria</h2>
          <p>From the outset, the project was anchored to a few clear goals:</p>
          <ul>
            <li>
              Build a brand site that feels like a cohesive, cinematic
              experience rather than a simple brand introduction.
            </li>

            <li>
              Use Framer to its full potential, combining native tools with
              custom code to achieve a level of motion and interactivity that
              would stand out even to design‑savvy audiences.
            </li>

            <li>
              Treat performance as a first‑class constraint, ensuring that 3D,
              imagery, and animation do not degrade responsiveness.
            </li>

            <li>
              Deliver a structure the Experience.Lab team can update, extend,
              and iterate on after launch.
            </li>
          </ul>
          <p>
            Success was evaluated through internal feedback, Framer community
            response, and engagement signals. The site was subsequently
            submitted to Framer’s Community Awards in the “Best Animations”
            category, and early analytics showed average session times above
            three minutes, indicating that visitors were not only landing, but
            also exploring the experience in depth.
          </p>
          <h2>Approach & Process</h2>
          <h3>Translating the Creative Direction into a Framer System</h3>
          <p>
            The core creative idea was defined early on by the team:
            Experience.Lab should feel layered, energetic, and slightly surreal,
            but framed with the clarity and restraint needed for a professional,
            boutique studio.
          </p>
          <p>
            My first step was to translate the creative direction, focusing on
            visual impact, and translating it into a system that Framer could
            handle reliably:
          </p>
          <ul>
            <li>
              Break the narrative into scroll‑linked sections that flow
              naturally without feeling like a long, single‑purpose landing
              page.
            </li>

            <li>
              Define motion “bands” for key sections, where motion is dense and
              expressive vs. where it needs to prioritise clarity and
              readability.
            </li>

            <li>
              Componentise large sections that required more complex
              interactions or animations.
            </li>
          </ul>
          <p>
            This system-first thinking ensured that as new ideas emerged, they
            could be slotted into existing patterns rather than becoming one‑off
            exceptions that risked instability or costly tinkering further down
            the line.
          </p>
          <Image
            src="/images/projects/explab-framer.png"
            alt="Experience.Lab Responsive Framer Build"
            width={1200}
            height={800}
            className="image"
          />
          <h3>Extending Framer with Custom Code Components</h3>
          <p>
            Many of the desired interactions were achievable with Framer’s
            built‑in tools. However, several requirements pushed beyond what
            could be comfortably managed with existing tooling:
          </p>
          <ul>
            <li>
              A custom 3D model viewer for the Experience.Lab lion mascot.
            </li>
            <li>Fine‑grained control of scroll‑bound animation timelines.</li>
            <li>
              More advanced state handling to keep interactions responsive
              regardless of scroll speed and device.
            </li>
          </ul>
          <p>
            To address this, I implemented custom React‑based code components
            inside Framer.
          </p>
          <p>
            The 3D model viewer was built with{" "}
            <a
              href="https://threejs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Three.js
            </a>{" "}
            and integrated as a Framer code component, allowing tighter control
            over loading, scene composition, and interaction than a generic
            embed. I used{" "}
            <a
              href="https://claude.com/code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claude Code
            </a>{" "}
            as an AI assistant during development, particularly for faster
            iteration on Three.js boilerplate, state handling, and custom
            component animations. This combination allowed rapid experimentation
            while maintaining code quality and performance.
          </p>
          <p>
            For scroll‑linked motion, I combined Framer’s timeline tools with
            custom logic that tracked the user’s scroll position and
            synchronised multiple animation sequences. This required careful
            planning of ranges, easing, and transitions so that the experience
            felt smooth, natural, and not jittery.
          </p>
          <Image
            src="/images/projects/explab-timeline.png"
            alt="Timeline example"
            width={1200}
            height={675}
            className="image"
          />
          <h3>Dark Mode as “Neon Tokyo”</h3>
          <p>
            Dark mode was treated as a central storytelling device rather than a
            basic accessibility feature. The design language for dark mode was
            built around three ideas:
          </p>
          <ul>
            <li>
              “Tokyo at night”: neon accents, deep blacks, and controlled glows
              rather than flat dark surfaces.
            </li>
            <li>
              Playfulness: subtle moments that reward exploration, such as the
              sleeping mask on the 3D lion that appears only in dark mode.
            </li>
            <li>
              Continuity: even as the mood shifts, typography, layout, and
              hierarchy remain consistent to preserve usability.
            </li>
          </ul>
          <p>
            Early prototypes used a{" "}
            <a
              href="https://spline.design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spline
            </a>{" "}
            embed for the 3D hero. While the visual quality was strong, this
            approach loaded and rendered the entire scene at runtime, heavily
            impacting performance. Scroll and animation responsiveness degraded
            significantly, especially on less powerful devices.
          </p>
          <p>
            This led to a pivotal decision: move away from a Spline embed and
            implement a custom Three.js viewer instead. This change gave full
            control over what was rendered, when it was loaded, and how it
            responded to theme changes and interactions, all while staying
            inside the Framer environment.
          </p>
          <Image
            src="/images/projects/explab-team-s.png"
            alt="Team section Dark mode"
            width={1200}
            height={675}
            className="image"
          />
          <h3>Asset & Performance Optimisation</h3>
          <p>
            Given the level of animation and the presence of 3D content,
            performance was treated as a core design constraint from the
            beginning.
          </p>
          <p>For 3D:</p>
          <ul>
            <li>
              The Three.js viewer was kept deliberately simple: just the model,
              without heavy scene lighting, reflections, or unnecessary
              geometry.
            </li>
            <li>
              Lighting was simulated using matcap textures applied directly to
              the model, delivering a stylised, “lit” appearance without
              real-time lighting calculations.
            </li>
            <li>
              Model assets were optimised and cleaned to minimise file size and
              runtime cost.
            </li>
          </ul>
          <p>For imagery and video:</p>
          <ul>
            <li>
              Assets were aggressively compressed using tools such as{" "}
              <a
                href="https://lowtechguys.com/clop/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clop
              </a>
              , tuning export settings to reduce size without visible
              degradation.
            </li>
            <li>
              Different compression strategies were used for accompanying
              imagery, key art, and videos to balance fidelity and page weight.
            </li>
          </ul>
          <p>
            This combination of 3D simplification and asset compression ensured
            that complex timeline animations, scroll‑tracking, and dark mode
            transitions all remained responsive. The result is an experience
            that feels dense and expressive but doesn't feel heavy to interact
            with.
          </p>
          <h2>Key Design & Engineering Decisions</h2>
          <p>
            Several decisions defined the character and robustness of the final
            site:
          </p>
          <ul>
            <li>
              A bespoke Framer build, rather than modifying an existing
              template, to support a continuous, narrative scroll and complex
              motion while keeping the codebase understandable.
            </li>
            <li>
              A custom Three.js model viewer in place of a Spline embed,
              enabling significantly better runtime performance and tighter
              integration with theme and interaction states.
            </li>
            <li>
              A scroll‑tied motion system that uses carefully planned ranges and
              sequencing, so motion feels orchestrated rather than chaotic.
            </li>
            <li>
              Dark mode treated as a narrative layer, with unique visuals and
              interactions, instead of a simple global palette swap.
            </li>
            <li>
              Asset optimisation built into the design process, ensuring images,
              video, and 3D assets are performance-aware and play nicely with
              Framer's existing system.”
            </li>
          </ul>
          <div className="video-container bg-[#FF016C]">
            <video
              src="https://res.cloudinary.com/gswu205/video/upload/v1771502521/explab-work_utkv6f.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover w-full max-w-2xl mx-auto border-r border-l border-black"
            />
          </div>
          <h2>Outcomes & Impact</h2>
          <p>
            Experience.Lab launched in January 2026 as this arm of Publicis
            Groupe Japan’s primary experience practice showcase.
          </p>
          <p>Notable outcomes:</p>
          <ul>
            <li>
              Internal stakeholders responded positively to the way the site
              captures the unique style and character of the team while still
              feeling precise and professional.
            </li>
            <li>
              The site has been shared within the Framer community as an example
              of a fully bespoke, interaction-rich build and submitted to
              Framer’s Community Awards in the “Best Animations” category.
            </li>
            <li>
              Early analytics show average session durations above three
              minutes, indicating that visitors spend time exploring the
              experience rather than bouncing quickly.
            </li>
          </ul>
          <Image
            src="/images/projects/explab-awards.png"
            alt="Experience.Lab awards recognition"
            width={1200}
            height={675}
            className="image"
          />
          <h2>Learnings & Reflection</h2>
          <p>
            This project reinforced several principles for building high‑impact,
            motion‑heavy brand sites:
          </p>
          <ul>
            <li>
              Motion systems need to be designed as systems, not as isolated
              flourishes. Planning how motion behaves across the entire scroll
              made it easier to keep the experience cohesive and performant.
            </li>
            <li>
              3D should be treated as a first‑class citizen in the performance
              budget. The move from a Spline embed to a focused Three.js viewer,
              combined with matcap‑based lighting, was a key factor in achieving
              the desired visual impact without compromising responsiveness.
            </li>
            <li>
              AI‑assisted implementation can noticeably improve iteration speed
              when working with complex integrations. Using Claude Code as a
              coding assistant allowed faster exploration of complex animations
              and 3D embedding approaches and reduced friction in building
              Framer code components.
            </li>
            <li>
              Maintainability is part of craft. The best brand experiences are
              not only impressive on launch day, they're easy for teams to keep
              current as their work and story evolve.
            </li>
          </ul>
          <p>
            Experience.Lab is a prime example of how design, motion, and
            engineering can be combined inside Framer to create expressive yet
            practical interfaces for real teams.
          </p>
        </div>
      </main>
      <Footer type="article" />
    </>
  );
}
