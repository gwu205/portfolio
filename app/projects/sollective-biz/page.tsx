"use client";

import { CaseStudyMeta } from "@/app/components/article/CaseStudyMeta";
import { Footer } from "@/app/components/common/Footer";
import { LightboxImage as Image } from "@/app/components/common/LightboxImage";

const themes = [
  "Brand Development",
  "Ad Campaign",
  "AI Production",
  "Website Design",
];

export default function Page() {
  return (
    <>
      <CaseStudyMeta
        articleTitle="Sollective Biz"
        heroImageSrc="/images/projects/biz-hero.png"
        heroImageAlt="Sollective Biz campaign"
        clientName="Sollective"
        year="2026"
        role="Product Designer"
        stack={["Framer", "Weavy", "After Effects"]}
        themes={themes}
        h1Title="Building Enterprise B2B in a High-Trust Market"
        timeline="6 weeks"
        link="https://sollective.biz"
        introductionText={`Sollective Biz is the B2B/enterprise service of Sollective, placing vetted professional talent with companies across Japan. Where the consumer platform connects freelancers to work, Biz sells trust to C-level executives - in a category dominated by long-established HR and talent-services players.\n\nThis campaign set out to earn brand awareness for a newer name in a market that defaults to incumbents. It spanned three deliverables - a 25-second taxi ad, a set of shorter social cuts, and a full redesign of the enterprise landing page - and drew on both film production and product design. This case study covers both halves, and the AI-native workflow that made the film possible.`}
      />
      <main className="article">
        <div className="content">
          <h2>The Problem</h2>
          <p>
            Enterprise talent services in Japan are a trust business, and trust
            favours the incumbents. HR buyers default to the established names,
            which makes brand awareness for a newer entrant genuinely hard to win.
          </p>
          <p>
            The campaign faced two connected challenges:
          </p>
          <ul>
            <li>
              The market is skeptical of new names. C-level executives choosing a
              talent partner reach for reputation first. A newer service has to
              communicate reliability before it can communicate features.
            </li>
            <li>
              The message had to work across very different surfaces. A single
              idea needed to carry a 25-second taxi screen, sub-10-second social
              cuts, and a text-heavy enterprise landing page - each with different
              attention spans and expectations.
            </li>
          </ul>
          <p>
            The overarching challenge: give Sollective Biz a brand presence
            credible enough to sit alongside the incumbents, and a message sharp
            enough to land in seconds.
          </p>
          <h2>The Idea</h2>
          <p>
            The concept started from a single insight. Every company right now is
            asking what AI can replace. We flipped the question: the one thing it
            can't replace is the human touch - the peace of mind of knowing a real
            professional has your back.
          </p>
          <p>
            Tools keep evolving. The judgment of the people who know how to use
            those tools for real business impact does not. That became the spine
            of the campaign, and it earned Sollective Biz a rare position - a talent
            company that acknowledges AI head-on instead of pretending it isn't
            reshaping the market.
          </p>
          <Image
            src="/images/projects/biz-casting.png"
            height={1200}
            width={1800}
            alt="Character casting"
            className="image"
          />
          <h2>Concepting</h2>
          <p>
            Defining the story before committing to production
          </p>
          <p>
            We started wide - 10 to 15 concepts, each worked up as a storyboard - 
            then narrowed to three we believed would land hardest with an executive
            audience.
          </p>
          <p>
            A real production constraint shaped that funnel. AI video generation has
            limits: it struggles to render text accurately, and it loses visual
            consistency the moment a scene holds more than two or three subjects.
            Rather than fight those limits, we designed around them, selecting
            concepts that played to what the pipeline could deliver reliably.
          </p>
          <p>
            We took two concepts into production and released one: two coworkers
            working out a problem in the office. Minimal setup, two clear characters,
            and the scenario closest to our audience's daily reality.
          </p>
          <Image
            src="/images/projects/biz-story.png"
            height={1200}
            width={1800}
            alt="Story development"
            className="image"
          />
          <h2>Ad Production</h2>
          <p>
            An AI-generated, hand-finished workflow
          </p>
          <p>
            The ad is AI-generated but hand-finished - a new kind of production
            pipeline. The work spanned concept development, character casting, and
            video production in Weavy: generating scenes, pulling camera stills, and
            converting those into advertisement-ready shots.
          </p>
          <p>
            The generated output was a starting point, not the finish. The craft
            lived in the finishing layer:
          </p>
          <ul>
            <li>
              Manual editing and VFX compositing to bring shots up to a polished,
              broadcast standard.
            </li>
            <li>
              Voiceover generation tuned to match each character's tone and cadence.
            </li>
          </ul>
          <p>
            The result was a broadcast-quality ad produced through an AI-native
            pipeline - a very different muscle from traditional product work, and
            the part of the project that showed how far a small team can push modern
            tooling.
          </p>
          <Image
            src="/images/projects/biz-illustration.png"
            height={1200}
            width={1800}
            alt="Custom illustration style"
            className="image"
          />
          <h2>LP Redesign</h2>
          <p>
            Designing for credibility, not just clarity
          </p>
          <p>
            The second half of the project was a full redesign of the
            enterprise-facing landing page, built in Framer. The old design lacked
            a strong identity, so we treated the redesign as a chance to define a
            more robust brand system for Sollective's business communications - 
            building on the assets from the taxi ad and adding a custom illustration
            style.
          </p>
          <p>
            The core design challenge was trust. The page is inherently text- and
            process-heavy, explaining how the enterprise service works, and that
            content had to feel digestible and, above all, credible. In a market where
            buyers default to the incumbents, the page has to communicate reliability
            before it communicates features.
          </p>
          <video
            src="https://res.cloudinary.com/gswu205/video/upload/v1783390279/biz-lp_texkl1.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full max-w-2xl mt-8"
          />
          <h2>Campaign Reach</h2>
          <p>
            The campaign went live in June across taxi screens, YouTube, and social,
            with the redesigned landing page shipping alongside it.
          </p>
          <ul>
            <li>
              742,000+ views on the ad across placements.
            </li>
            <li>
              Four cuts produced - 25, 15, 10, and 5 seconds - so the message could
              flex across every placement.
            </li>
            <li>
              A proper brand system now runs the enterprise site, replacing a visual
              patchwork.
            </li>
          </ul>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TFTCI-WN6Po?start=1"
              title="Sollective Biz Campaign"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
          <h2>Key Takeaways</h2>
          <ul>
            <li>
              <b>Positioning can turn a threat into an asset.</b> Naming AI directly,
              then arguing for the human judgment behind it, gave a newer brand a
              confident, distinctive stance in a conservative market.
            </li>
            <li>
              <b>Constraints shape better concepts.</b> Designing around the limits
              of AI video - rather than against them - produced a sharper, more
              focused ad than a wider net would have.
            </li>
            <li>
              <b>AI accelerates production; craft still finishes it.</b> The
              generated footage was a foundation. Editing, compositing, and voice
              work were where the quality came from.
            </li>
            <li>
              <b>Range is the through-line.</b> Brand, film, and an AI-native pipeline
              in one project - a different discipline from product UI work, unified
              by the same goal of building trust.
            </li>
          </ul>
        </div>
      </main>
      <Footer type="article" />
    </>
  );
}
