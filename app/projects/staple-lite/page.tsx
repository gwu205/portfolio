"use client";

import { CaseStudyMeta } from "@/app/components/article/CaseStudyMeta";
import { Footer } from "@/app/components/common/Footer";
import { LightboxImage as Image } from "@/app/components/common/LightboxImage";

const themes = [
  "Mobile App",
  "Product Design",
  "Design System",
  "FinTech",
];

export default function Page() {
  return (
    <>
      <CaseStudyMeta
        articleTitle="Staple Lite"
        heroImageSrc="/images/projects/staple-lite-hero.png"
        heroImageAlt="Staple Lite app"
        clientName="Staple"
        year="2023"
        role="Product Designer"
        stack={["Figma", "React", "CSS"]}
        themes={themes}
        h1Title="No-Fuss Corporate Spend for Small Business"
        timeline="8 weeks"
        introductionText={`Staple Lite is a new branded product under the Staple corporate payments brand, built to reach a market the flagship product was never designed for. Where Staple serves enterprise B2B customers with a full expense-management suite, Staple Lite targets small businesses and consumer-facing teams in hospitality and retail - at a lower, more accessible price point.\n\nThe goal was to offer the ease and convenience of Staple without the complicated features or the steep learning curve. Staple Lite is mobile-first - built for owners and employees managing spend on the go - with a companion admin web app that gives org owners room for the heavier management tasks. Keep what matters - money and team management, distributable payment cards for a whole team, and clean integration with the tools a business already uses - and strip away the administrative overhead a smaller operator neither needs nor wants.`}
      />
      <main className="article">
        <div className="content">
          <h2>The Problem</h2>
          <p>
            Staple's flagship product was built for enterprise finance teams: rich
            in approvals, reporting, and role-based controls. That depth is exactly
            what a small business does not need. For a café, a retail floor, or a
            small hospitality group, the enterprise product is overkill - too much
            setup, too much cost, too much process for the way they actually work.
          </p>
          <p>
            Yet the underlying need is real, and it cuts two ways:
          </p>
          <ul>
            <li>
              The owner wants to give employees spending flexibility without
              sacrificing financial security - and wants it to fit the accounting
              software they already run, not replace it.
            </li>
            <li>
              The employee wants to use pre-approved company funds directly, instead
              of fronting personal money and chasing reimbursement afterward.
            </li>
          </ul>
          <p>
            The opportunity: take the core value of Staple's corporate spend workflow
            and repackage it as a straightforward, paperless alternative to
            traditional corporate cards and reimbursement - at a price and complexity
            that fits a smaller team.
          </p>
          <Image
            src="/images/projects/staple-lite-flow.png"
            height={1200}
            width={1800}
            alt="Staple Lite flowmap"
            className="image"
          />
          <h2>My Role</h2>
          <p>
            I led the overall creative vision for Staple Lite - defining what a
            second product under the Staple brand should be, and how it should differ
            from the flagship without breaking from it.
          </p>
          <ul>
            <li>
              Setting the creative direction for a distinct sub-brand that reads as
              accessible and consumer-friendly while staying recognisably Staple.
            </li>
            <li>
              Defining the product scope - deciding which features carried over,
              which were cut, and how the pared-back set should hang together.
            </li>
            <li>
              Designing the core experience across money management, team management,
              and team-wide card distribution - mobile-first for everyday use, with
              a companion admin web app for the more complex owner tasks.
            </li>
            <li>
              Extending the design system so Staple Lite could ship quickly on
              Staple's existing foundation while carrying its own identity.
            </li>
          </ul>
          <h2>Challenges</h2>
          <p>
            The hard part was subtraction, not addition.
          </p>
          <ul>
            <li>
              <b>Deciding what to leave out.</b> The enterprise product's power lives
              in its depth. Staple Lite's value lives in its simplicity. Every feature
              had to earn its place, and the instinct to carry familiar tools along
              had to be resisted.
            </li>
            <li>
              <b>Two users, one lightweight product.</b> The owner needs oversight,
              budgets, and clean data export; the employee needs to pay with
              pre-approved funds and move on. Both had to be served without adding
              back the complexity Staple Lite exists to remove.
            </li>
            <li>
              <b>Splitting the experience across two surfaces.</b> Everyday spending
              and team management had to feel effortless on mobile, while heavier
              administrative work belonged on a larger screen. Deciding what lived
              where - without fragmenting the product - was central to keeping Staple
              Lite simple.
            </li>
            <li>
              <b>A sub-brand that belongs but stands apart.</b> Staple Lite needed to
              feel lighter and more approachable for a different audience - without
              diluting the trust the Staple name carries - and ideally act as an
              on-ramp that could upsell users to the full Staple app later.
            </li>
            <li>
              <b>Fitting into an existing accounting framework.</b> Small businesses
              already have a way of doing their books. Staple Lite had to supplement
              that process with seamless imports and exports, not force a migration.
            </li>
          </ul>
          <Image
            src="/images/projects/staple-lite-card.png"
            height={1200}
            width={1800}
            alt="Staple Lite card"
            className="image"
          />
          <h2>The Process</h2>
          <h3>Defining the barebones product</h3>
          <p>
            I started from the core jobs to be done - let an owner distribute employee
            budgets safely, and let an employee spend pre-approved funds without
            paperwork - and worked backwards, cutting anything that served enterprise
            oversight rather than everyday operation.
          </p>
          <h3>Designing mobile-first, for two roles</h3>
          <p>
            I designed Staple Lite mobile-first, so an employee could pay with
            pre-approved funds on the go and an owner could handle day-to-day team
            and money management from their phone. The more complex tasks - deeper
            oversight, budgets, and configuration - moved to a companion admin web app,
            giving owners a larger canvas without weighing down the mobile experience
            everyone shares.
          </p>
          <h3>Making Staple Lite fit an existing workflow</h3>
          <p>
            Because the target user already has an accounting process, I designed
            around seamless data import and export - positioning Staple Lite as a
            supplement to their current framework rather than a replacement - and as
            a natural stepping stone toward the full Staple product.
          </p>
          <h3>Building a consumer-facing identity on an enterprise foundation</h3>
          <p>
            Working from Staple's existing design system, I extended it into a lighter
            visual language suited to a consumer audience - keeping structural
            consistency for speed of build, while giving Staple Lite a distinct, more
            accessible feel.
          </p>
          <Image
            src="/images/projects/staple-lite-manage.png"
            height={1200}
            width={1800}
            alt="Staple Lite manage"
            className="image"
          />
          <h2>The Solution</h2>
          <ul>
            <li>
              A mobile-first product with a companion admin web app - effortless
              everyday spending and management on the phone, with the heavier owner
              tools on a larger screen.
            </li>
            <li>
              A focused feature set - money management, team management, and
              team-wide card distribution - with the enterprise administrative layer
              removed.
            </li>
            <li>
              A paperless alternative to corporate cards and reimbursement, letting
              employees spend pre-approved funds directly and freeing owners from
              manual expense processing.
            </li>
            <li>
              Seamless accounting integration through easy import/export, supplementing
              a business's existing framework instead of replacing it.
            </li>
            <li>
              An accessible price point that opens corporate-grade spend management to
              SMEs previously priced out.
            </li>
            <li>
              A distinct but connected sub-brand that showcases the best of Staple
              Card and creates a natural path to upsell users into the full Staple app.
            </li>
          </ul>
          <Image
            src="/images/projects/staple-lite-onboard.png"
            height={1200}
            width={1800}
            alt="Staple Lite onboard"
            className="image"
          />
          <h2>Outcome</h2>
          <p>
            Staple Lite extends the Staple brand into a new market - small businesses
            and consumer-facing teams in hospitality and retail - delivering the core
            Staple spending workflow as a no-fuss, paperless product, and opening a
            route for those users to grow into the full platform.
          </p>
          <h2>Key Takeaways</h2>
          <ul>
            <li>
              <b>Simplicity is a design decision, not a smaller version of complexity.</b>{" "}
              The value of Staple Lite came from what it left out, and holding that
              line was the hardest and most important part of the work.
            </li>
            <li>
              <b>Match the surface to the task.</b> Putting everyday spending on mobile
              and complex administration on the web let each role work in the right
              place - and kept the mobile experience as light as the product promised.
            </li>
            <li>
              <b>Meeting users where they already are wins adoption.</b> Fitting into
              an existing accounting process, rather than demanding a switch, lowered
              the barrier to trying Staple Lite.
            </li>
          </ul>
        </div>
      </main>
      <Footer type="article" />
    </>
  );
}
