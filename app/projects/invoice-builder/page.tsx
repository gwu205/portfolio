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
            unfamiliar with local tax and invoicing laws. Existing solutions
            tend to be built for accountants and back-office staff, making them
            overpowered, jargon-heavy, and intimidating for solo freelancers.
          </p>
          <h2>Problem</h2>
          <p>Freelancers struggled to:</p>
          <ul>
            <li>Understand what legally needed to appear on an invoice.</li>
            <li>
              Navigate complex interfaces designed for finance professionals.
            </li>
            <li>
              Confidently create compliant invoices under new Japanese tax
              regulations.
            </li>
          </ul>
          <p>
            This became more acute with the introduction of the{" "}
            <a
              href="https://www.nta.go.jp/taxes/shiraberu/zeimokubetsu/shohi/keigenzeiritsu/invoice_about.htm"
              target="_blank"
              rel="nofollow noreferrer"
              className="link"
            >
              Qualified Invoice System
            </a>{" "}
            and existing requirements such as tax withholding rules for certain
            types of work. The team needed a tool that felt accessible to
            non-experts while still meeting legal standards in Japan.
          </p>
          <h2>Goals</h2>
          <p>The project focused on three primary goals:</p>
          <ul>
            <li>
              Make invoice creation approachable for freelancers with limited
              accounting knowledge.
            </li>
            <li>
              Ensure generated invoices comply with Japanese regulations (e.g.
              Qualified Invoice System, tax withholding).
            </li>
            <li>
              Reduce friction and errors compared with existing workflows
              (spreadsheets, manual templates, generic accounting tools).
            </li>
          </ul>
          <p>
            These challenges demanded a solution that was both accessible and
            compliant with Japan’s legal standards.
          </p>
          <h2>The Solution</h2>
          <p className="subheading">Taking an opinionated design approach</p>
          <p>
            We chose to focus on the primary audience: freelancers in Japan with
            limited financial knowledge. Rather than attempting to cater to all
            market segments, we designed a streamlined and guided user
            experience.
          </p>
          <Image
            src="/images/projects/freee.avif"
            height={1504}
            width={2157}
            alt="freee UI"
            className="image"
          />
          <p className="subheading">Comparative Insights: Freee</p>
          <p>
            We analyzed market leaders like <i>freee</i>, whose products cater
            to back-office professionals. While robust, their interfaces were
            overwhelming for first-time users, a point frequently mentioned
            during user interviews. Freelancers found it difficult to understand
            legal documentation requirements due to cluttered layouts and
            excessive menu options.
          </p>
          <p>
            Our goal was the opposite:{" "}
            <b>create a simple, guided, and intuitive experience</b>.
          </p>
          <p className="subheading">Pre-Creation Flow for Japanese Users</p>
          <aside className="max-w-3xl bg-[#F7F4F8] rounded-lg my-8 py-7 md:py-20 px-5 md:px-12 font-medium md:font-light text-lg md:text-4xl/snug text-slate-400">
            How might we{" "}
            <span className="text-purple-400">
              ensure that our users are well-informed and aware of all the
              information they are required to include according to the new tax
              law?
            </span>
          </aside>
          <p>
            To address the complexity of invoice requirements, we implemented a
            pre-creation flow. This guided users through key steps to collect
            essential information, such as:
          </p>
          <ul>
            <li>Scope of work.</li>
            <li>Registration status with the Qualified Invoice System.</li>
            <li>Client details and payment dates.</li>
          </ul>
          <p>
            Leveraging existing user data from Sollective’s platform, we reduced
            cognitive load by pre-selecting options where possible, ensuring
            clarity without sacrificing functionality.
          </p>
          <Image
            src="/images/projects/invoices-create.png"
            height={883}
            width={1213}
            alt="invoice create"
            className="image"
          />
          <p className="subheading">Streamlining Administrative Tasks</p>
          <p>
            During interviews, freelancers shared that they often relied on
            spreadsheets (Excel, Google Sheets) for invoice creation. Their
            reasons included:
          </p>
          <ul>
            <li>Familiarity with spreadsheet interfaces.</li>
            <li>Confidence in established workflows.</li>
            <li>Lack of awareness of more advanced tools.</li>
          </ul>
          <p>
            We aligned the tool’s design with these expectations while
            introducing improvements:
          </p>
          <ol>
            <li>Clear workflows to reduce errors.</li>
            <li>Pre-filled fields to minimize manual input.</li>
            <li>Guided steps to simplify complex tasks.</li>
          </ol>
          <h3>Designing the Interface</h3>
          <p className="subheading">Balancing User and Recipient Needs</p>
          <p>The tool had to serve two distinct audiences:</p>
          <ol>
            <li>Freelancers creating invoices.</li>
            <li>Accountants/back-office staff receiving them.</li>
          </ol>
          <p>To achieve this, we implemented:</p>
          <ul>
            <li>
              <b>Separate contexts for editing and viewing/exporting.</b>
              <ul>
                <li>Editing modes focused on intuitive input methods.</li>
                <li>Export views ensured compliance and professionalism.</li>
              </ul>
            </li>
            <li>
              <b>Familiar design elements</b> aligned with tools freelancers
              already used.
            </li>
          </ul>
          <Image
            src="/images/projects/invoices-edit.jpg"
            height={1200}
            width={1800}
            alt="invoice edit"
            className="image"
          />
          <h2>Conclusion</h2>
          <p>
            Freelancers praised the tool for its simplicity and clarity, noting
            it was more approachable than traditional accounting software. The
            design struck a balance between educational value and functional
            ease, empowering users to spend less time on administrative tasks
            and more on meaningful work.
          </p>
          <p>
            Through iterative testing and refinement, the invoice builder became
            a practical, legally compliant, and user-friendly solution tailored
            to the unique needs of freelancers in Japan.
          </p>
        </div>
      </main>
      <Footer type="article" />
    </>
  );
}
