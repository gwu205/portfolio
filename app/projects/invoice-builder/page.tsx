"use client";

import { CaseStudyMeta } from "@/app/components/article/CaseStudyMeta";
import { Footer } from "@/app/components/common/Footer";
import Image from "next/image";

const themes = [
  "Financial tooling",
  "UX research",
  "Form design",
  "Compliance",
  "User interviews",
];

export default function Page() {
  return (
    <>
      <CaseStudyMeta
        articleTitle="Freelancer Invoices"
        heroImageSrc="/images/projects/invoices.jpg"
        heroImageAlt="Invoice builder"
        clientName="Sollective"
        year="2023"
        role="Product Designer"
        stack={["Figma", "Google Meets"]}
        link="https://www.sollective.jp/invoices/about"
        themes={themes}
        h1Title="Designing an Invoice Builder for Freelance Work in Japan"
        timeline="12 weeks"
        introductionText={`Sollective is a vetted freelancer matching platform in Japan, connecting highly skilled freelancers with companies looking to expand their business operations. Beyond matching, the platform aims to support the future of freelance work through community events and workflow tools tailored to independent professionals.\n\nTo support this vision, the team set out to design an invoice builder specifically for freelancers in Japan - a tool that simplifies invoice creation, respects local accounting standards, and feels approachable for users without a finance background.`}
      />
      <main className="article">
        <div className="content">
          <h2>Context</h2>
          <p>
            Many freelancers in Japan lack formal financial training and are
            unfamiliar with local tax and invoicing laws. Existing solutions are
            typically optimized for accountants and back-office staff:
            feature-dense, jargon-heavy, and intimidating for solo freelancers
            handling their own operations.
          </p>
          <p>
            The introduction of the{" "}
            <a
              href="https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice_about.htm"
              target="_blank"
              rel="nofollow noreferrer"
              className="link"
            >
              Qualified Invoice System
            </a>{" "}
            (インボイス制度), combined with existing tax withholding rules for
            certain work categories, raised the stakes. Freelancers now needed
            to produce invoices that were both legally compliant and easily
            understood, without support from an in-house finance team.
          </p>
          <p>
            Sollective saw an opportunity to embed an accessible invoicing
            experience directly into its platform, reducing friction at a
            critical point in the freelancer–client relationship.
          </p>
          <h2>Problem</h2>
          <p>Because of the new law, freelancers struggled to:</p>

          <ul>
            <li>
              Understand what legally needed to appear on an invoice under the
              new{" "}
              <a
                href="https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice_about.htm"
                target="_blank"
                rel="nofollow noreferrer"
                className="link"
              >
                Qualified Invoice System
              </a>{" "}
              (インボイス制度).
            </li>
            <li>
              Navigate complex interfaces designed for finance professionals
              rather than non-experts.
            </li>
            <li>
              Confidently produce compliant invoices without relying on ad hoc
              spreadsheets or templates.
            </li>
          </ul>

          <p>
            As regulations evolved, so did anxiety and ambiguity. The team
            required an experience that translated legal and accounting
            requirements into a guided, approachable flow, while still meeting
            strict compliance standards in Japan.
          </p>
          <h2>Goals</h2>
          <p>The project focused on three primary goals:</p>

          <ul>
            <li>
              Make invoice creation approachable for freelancers with limited
              accounting knowledge.
            </li>

            <li>
              Ensure generated invoices comply with Japanese regulations (e.g.,
              Qualified Invoice System, tax withholding).
            </li>

            <li>
              Reduce friction and errors compared with existing workflows
              (spreadsheets, manual templates, generic accounting tools).
            </li>
          </ul>

          <p>
            Success meant freelancers could move from uncertainty and manual
            workarounds to a confident, repeatable invoicing workflow inside
            Sollective.
          </p>
          <h2>Approach</h2>
          <h3>Taking An Opinionated Product Direction</h3>
          <p>
            The experience was deliberately optimized for Sollective’s core
            audience: freelancers in Japan with limited financial expertise.
            Rather than attempting to serve every market segment, the product
            took an opinionated stance:
          </p>
          <ul>
            <li>Prioritize clarity over configurability.</li>
            <li>Surface only what is necessary at each step.</li>
            <li>
              Embed regulatory requirements into the workflow, not the user’s
              memory.
            </li>
          </ul>
          <Image
            src="/images/projects/freee.avif"
            height={1504}
            width={2157}
            alt="freee UI"
            className="image"
          />
          <p>
            Research on existing solutions, including market leaders such as
            freee, highlighted a gap. While robust, these tools were designed
            for back-office professionals. Interview participants consistently
            described them as “overwhelming” and “hard to understand,”
            especially when trying to decode legal documentation requirements
            buried in dense navigation and terminology.
          </p>
          <p>
            The design response was intentionally the opposite: create a simple,
            guided, and intuitive experience that encoded complexity behind the
            scenes.
          </p>
          <h2>Key Design Decisions</h2>
          <h3>Pre-Creation Flow For Regulatory Confidence</h3>
          <aside className="max-w-3xl bg-[#F7F4F8] rounded-lg my-8 py-7 md:py-20 px-5 md:px-12 font-medium md:font-light text-lg md:text-4xl/snug text-slate-400">
            How might we{" "}
            <span className="text-purple-400">
              ensure that our users are well-informed and aware of all the
              information they are required to include according to the new tax
              law?
            </span>
          </aside>
          <p>
            To address the complexity of new invoice requirements, the
            experience introduced a pre-creation flow that:
          </p>
          <ul>
            <li>
              Collected key information upfront (scope of work, registration
              status under the Qualified Invoice System, client details, payment
              terms).
            </li>
            <li>
              Clarified which fields were legally required versus optional,
              reducing second-guessing later in the process.
            </li>
            <li>
              Used concise, plain-language explanations in Japanese and English
              where appropriate, aligned with Sollective’s bilingual audience.
            </li>
          </ul>
          <p>
            Where possible, the flow leveraged existing platform data to
            pre-select or pre-fill information, lowering cognitive load and
            reducing opportunities for error without removing transparency.
          </p>
          <Image
            src="/images/projects/invoices-create.png"
            height={883}
            width={1213}
            alt="invoice create"
            className="image"
          />
          <h3>
            Streamlining Administrative Tasks Around Familiar Mental Models
          </h3>
          <p>
            User interviews revealed that many freelancers continued to rely on
            Excel or Google Sheets, citing:
          </p>
          <ul>
            <li>Familiarity with spreadsheet-style editing.</li>
            <li>Trust in workflows they had refined over years.</li>
            <li>Lack of awareness or confidence in more advanced tools.</li>
          </ul>
          <p>
            The interface aligned with these expectations while introducing
            guardrails:
          </p>
          <ul>
            <li>
              Clear, linear workflows made it difficult to “skip” critical
              steps.
            </li>
            <li>
              Pre-filled fields and sensible defaults minimized repetitive
              typing.
            </li>
            <li>
              Contextual explanations and helper text surfaced only when needed,
              avoiding the clutter of traditional accounting dashboards.
            </li>
          </ul>
          <p>
            The result preserved the reassurance of a familiar pattern while
            quietly enforcing structure and compliance behind the scenes.
          </p>

          <h3>Balancing Freelancer And Recipient Needs</h3>
          <p className="subheading">Balancing User and Recipient Needs</p>
          <p>The invoice builder needed to serve two distinct audiences:</p>
          <ul>
            <li>Freelancers creating and editing invoices.</li>
            <li>
              Accountants and back-office staff reviewing, processing, and
              archiving them.
            </li>
          </ul>

          <p>To support both, the interface differentiated between:</p>

          <h4>Editing context:</h4>

          <ul>
            <li>Optimized for clarity and ease of input.</li>
            <li>Used form patterns and microcopy tuned for non-experts.</li>
            <li>
              Grouped fields into logical sections aligned with a freelancer’s
              mental model (work details, client information, tax and payment
              conditions).
            </li>
          </ul>

          <h4>Viewing/export context:</h4>

          <ul>
            <li>Optimized for legibility, compliance, and professionalism.</li>
            <li>
              Structured layouts ensured that all legally required fields
              appeared predictably.
            </li>
            <li>
              Generated outputs aligned with expectations of Japanese finance
              teams, reducing back-and-forth questions.
            </li>
          </ul>

          <p>
            By separating these contexts, the tool could be forgiving and
            supportive during creation while remaining precise and formal in its
            final output.
          </p>
          <Image
            src="/images/projects/invoices.jpg"
            height={1200}
            width={1800}
            alt="invoice hero"
            className="image"
          />
          <Image
            src="/images/projects/invoices-edit.jpg"
            height={1200}
            width={1800}
            alt="invoice edit"
            className="image"
          />
          <h2>Outcome</h2>
          <p>
            Freelancers described the new invoice builder as more approachable
            and less intimidating than traditional accounting software.
            Qualitative feedback highlighted:
          </p>
          <ul>
            <li>
              Greater confidence that invoices met Japanese legal requirements.
            </li>
            <li>
              Reduced reliance on ad hoc spreadsheets and manual templates.
            </li>
            <li>
              Less time spent revisiting old invoices to “copy and tweak”
              previous formats.
            </li>
          </ul>
          <p>
            For Sollective, the tool reinforced the platform’s position not only
            as a matching service but as infrastructure for sustainable
            freelance work in Japan. The invoice builder translated complex
            regulatory changes into a clear, guided experience tailored to the
            realities of solo freelancers, while still respecting the needs of
            the finance teams receiving those invoices.
          </p>
        </div>
      </main>
      <Footer type="article" />
    </>
  );
}
