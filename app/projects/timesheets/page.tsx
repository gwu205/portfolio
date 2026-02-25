"use client";

import { CaseStudyMeta } from "@/app/components/article/CaseStudyMeta";
import { Footer } from "@/app/components/common/Footer";
import Image from "next/image";

const themes = ["B2B workflows", "internal tools", "reporting", "prototyping"];

export default function Page() {
  return (
    <>
      <CaseStudyMeta
        articleTitle="Timesheets"
        heroImageSrc="/images/projects/timesheets-hero.png"
        heroImageAlt="Timesheets"
        clientName="Sollective"
        year="2025"
        role="Lead Product Designer"
        stack={["Figma", "Figma Make", "TypeScript / React"]}
        themes={themes}
        h1Title="Simplifying B2B Complexity in Timesheet Reporting"
        timeline="8 weeks"
        introductionText={`Sollective is a vetted freelancer matching platform in Japan, connecting highly skilled freelancers with companies looking to expand their business operations. FreelanceOS is Sollective’s toolkit for freelancers to manage their engagements, including timesheets, invoicing, and reporting.\n\nIn 2024, the team launched a Timesheets feature aimed primarily at freelancers: a way for individuals to log time across multiple projects and export their records as needed. As Sollective’s operations scaled, the internal team began using Timesheets as a core reporting tool between freelancers and client back offices. The original design, optimised for freelancer self‑management, no longer fit the emerging workflows and created friction for both freelancers and internal staff.\n\nIn 2025, the Timesheets experience was redesigned to support this new reality: a monthly reporting tool that works equally well for freelancers and the Sollective back office, while remaining familiar, clear, and efficient.`}
      />
      <main className="article">
        <div className="content">
          <Image
            src="/images/projects/timesheets-original.png"
            alt="Timesheets"
            width={1200}
            height={600}
            className="image"
          />
          <h2>Context & Problem</h2>

          <p>
            The original Timesheets feature was designed with a clear target
            user in mind: freelancers acting as their own business
            administrators. The interface supported:
          </p>

          <ul>
            <li>Weekly time logging.</li>
            <li>Multiple projects side by side.</li>
            <li>
              Flexible exports that freelancers could file or send as needed.
            </li>
          </ul>

          <p>
            As adoption grew and our internal processes started to utilise this
            tool, a different use case emerged:
          </p>

          <ul>
            <li>Freelancers were logging hours monthly rather than weekly.</li>
            <li>
              The Sollective team used Timesheets as their primary reporting
              source to client back‑office staff.
            </li>
            <li>
              The end goal shifted from general record‑keeping to structured
              reporting and approval.
            </li>
          </ul>

          <p>This mismatch led to several issues:</p>

          <ul>
            <li>
              The multi‑project, weekly input interface was cumbersome for
              freelancers who only needed to submit one monthly timesheet per
              engagement.
            </li>
            <li>
              Freelancers had to log time in Timesheets, export a PDF, and email
              it to back-office contacts, introducing manual steps and room for
              error.
            </li>
            <li>
              Analytics-focused elements from the original design were
              underused; many users were not migrating their entire workflow
              into FreelanceOS and preferred to pick specific tools for specific
              needs.
            </li>
            <li>
              The Sollective team had additional requirements, such as expense
              tracking, approvals, and verification, that were not supported in
              the initial design.
            </li>
            <li>
              In short, the tool was designed for a freelancer-first,
              analytics-oriented workflow, but had become central to a
              freelancer-back office reporting flow instead.
            </li>
          </ul>
          <Image
            src="/images/projects/timesheets-flow.png"
            alt="Timesheets"
            width={1200}
            height={600}
            className="image"
          />
          <h2>Goals</h2>

          <p>
            We decided to repurpose the timesheets infrastructure to better
            support our internal processes. This iteration focused on aligning
            the product with the actual workflows of our users:
          </p>

          <ul>
            <li>
              Reorient Timesheets toward monthly reporting and approval, rather
              than multi‑project weekly logging.
            </li>

            <li>
              Streamline input so freelancers can complete and submit timesheets
              with minimal friction.
            </li>

            <li>
              Build in capabilities needed by the internal Sollective team and
              client back offices (expenses, approvals, verification).
            </li>

            <li>
              Preserve familiarity by leaning into spreadsheet‑like
              interactions, while removing unnecessary analytics and complexity.
            </li>

            <li>
              Use AI‑assisted rapid prototyping to gather feedback quickly from
              founders, engineers, and operations.
            </li>
          </ul>
          <h2>Constraints</h2>

          <p>Key constraints included:</p>

          <ul>
            <li>
              A live production feature already in use by freelancers and
              internal staff; changes needed to improve the experience without
              breaking existing workflows.
            </li>

            <li>
              A small, cross‑functional team (co‑founder + front‑end + back‑end)
              responsible for both operations and delivery.
            </li>

            <li>
              The need to stay within the existing technical stack while
              minimising engineering overhead. Reuse existing components and
              patterns where possible.
            </li>

            <li>
              Operational requirements from the internal team that had to be met
              for the redesign to be considered successful.
            </li>
          </ul>
          <h2>Research & Insights</h2>

          <h3>Reviewing the Existing Interface</h3>

          <p>
            The first step was a structured review of the existing Timesheets
            UI:
          </p>

          <ul>
            <li>
              Identified which elements were genuinely used vs. which were
              legacy or aspirational (e.g., analytics widgets and broader
              workflow features).
            </li>

            <li>
              Confirmed that users were not moving entire admin workflows into
              FreelanceOS; instead, they were selectively adopting specific
              tools, including Timesheets.
            </li>

            <li>
              Observed that the layout assumed frequent, multi‑project, weekly
              input - a pattern that didn't match the majority of freelancer
              behaviour.
            </li>
          </ul>
          <h3>Talking to Users</h3>

          <p>
            Interviews with freelancers and internal stakeholders surfaced
            several key insights:
          </p>

          <ul>
            <li>
              Freelancers were most familiar with Excel or spreadsheet
              interfaces in the context of time logging.
            </li>

            <li>
              The weekly, multi‑project input structure made navigation and data
              entry more complex than necessary for simple monthly reporting.
            </li>

            <li>Internal operations required more than just time totals:</li>
            <ul>
              <li>A monthly reporting model.</li>
              <li>
                Approve/reject functionality directly within the interface.
              </li>
              <li>
                Verification features to ensure reported hours matched internal
                records.
              </li>
              <li>
                Space for detailed notes, so freelancers could record what they
                worked on day by day.
              </li>
            </ul>
          </ul>

          <p>
            These findings reframed Timesheets from a flexible,
            analytics‑adjacent tool into a structured workflow product: one that
            must guide users through a predictable monthly reporting process.
          </p>
          <Image
            src="/images/projects/timesheets-iteration.png"
            alt="Timesheets"
            width={1200}
            height={600}
            className="image"
          />
          <Image
            src="/images/projects/timesheets-early.png"
            alt="Timesheets"
            width={1200}
            height={600}
            className="image"
          />
          <h2>Design Approach</h2>

          <h3>Refocusing on Monthly Reporting</h3>

          <p>
            The redesigned experience shifted from weekly, multi‑project input
            to a monthly, engagement‑focused model:
          </p>

          <ul>
            <li>
              A single timesheet per engagement per month, aligned with how
              freelancers and back‑office staff actually collaborate.
            </li>

            <li>
              Simplified navigation that prioritises the current or most
              relevant month.
            </li>

            <li>
              Clear flows from “log hours” to “submit for approval” to
              “approved/rejected,” rather than open‑ended logging.
            </li>
          </ul>

          <p>
            Initially, a month list in a left‑side navigation panel allowed
            quick switching between months. Feedback from the team highlighted
            that this introduced unnecessary interface weight. A more focused
            solution was adopted:
          </p>

          <ul>
            <li>A simple month dropdown picker to change the active period.</li>
            <li>
              A default focus on the current reporting month, reducing
              navigation and decision-making for freelancers.
            </li>
          </ul>

          <p>
            This supported the core behavioural goal: make timely monthly
            submission as easy and low‑friction as possible.
          </p>

          <Image
            src="/images/projects/timesheets-state.png"
            alt="Timesheets"
            width={1200}
            height={600}
            className="image"
          />

          <h3>Aligning with Spreadsheet Mental Models</h3>

          <p>
            Given the strong association between time reporting and
            spreadsheets, the interface deliberately leaned into that mental
            model:
          </p>

          <ul>
            <li>
              Tabular layout with rows representing days and columns for hours,
              expenses, and notes.
            </li>

            <li>
              Inline editing that feels familiar to users accustomed to Excel or
              Google Sheets.
            </li>

            <li>
              Clear totals and summaries that help both freelancers and the
              internal team verify correctness at a glance.
            </li>
          </ul>

          <p>
            To validate interaction patterns and edge cases, a spreadsheet-like
            prototype was built using Figma Make. This allowed simulation of
            input behaviour, navigation patterns, and state changes without
            committing engineering time prematurely.
          </p>

          <Image
            src="/images/projects/timesheets-make.png"
            alt="Timesheets"
            width={1200}
            height={600}
            className="image"
          />

          <h3>Integrating Operational Requirements</h3>

          <p>
            The redesign baked internal and client-facing needs directly into
            the UI:
          </p>

          <ul>
            <li>
              <b>Expenses:</b> A dedicated area within the timesheet for
              expenses, preventing the need for parallel emails or separate
              spreadsheets.
            </li>

            <li>
              <b>Approval Workflow:</b> Interface support for approve/reject
              states so back‑office teams can handle timesheets in one place.
            </li>

            <li>
              <b>Verification:</b> Fields and views designed to make it easy to
              compare freelancer‑reported hours with internal records.
            </li>

            <li>
              <b>Detailed Notes:</b> Per‑record notes so freelancers can
              describe what they worked on each day, improving transparency and
              reducing back‑and‑forth questions.
            </li>
          </ul>

          <p>
            These requirements guided both the information architecture and the
            visual hierarchy, ensuring that the most critical actions (logging,
            reviewing, approving) were always visible and straightforward.
          </p>

          <Image
            src="/images/projects/timesheets-ui.png"
            alt="Timesheets"
            width={1200}
            height={600}
            className="image"
          />

          <h2>Collaboration & AI‑Assisted Prototyping</h2>

          <p>
            The project relied on tight collaboration between product,
            engineering, and operations. Utilising AI tools like Figma Make
            allowed team members to provide early and actionable feedback.
            Stakeholders could interact with realistic behaviour early, rather
            than reacting to static mockups. The team could also quickly
            converge on a solution that balanced usability, technical
            feasibility, and operational requirements:
          </p>

          <ul>
            <li>
              Co‑founder: validated the approach against business objectives and
              freelancer experience.
            </li>

            <li>
              Front‑end and Back‑end Engineers: assessed technical feasibility
              and helped to define the scope of what could be delivered within
              constraints.
            </li>

            <li>
              Internal Back‑office Team: provided practical requirements and
              evaluated whether the new interface would genuinely reduce manual
              work.
            </li>
          </ul>

          <Image
            src="/images/projects/timesheets-components.png"
            alt="Timesheets Components"
            width={1200}
            height={600}
            className="image"
          />

          <h2>Final Experience</h2>

          <p>The final Timesheets design delivered:</p>

          <ul>
            <li>
              A streamlined, monthly‑oriented input interface aligned with how
              freelancers and back‑office teams actually work.
            </li>

            <li>
              A spreadsheet‑like interaction model that feels familiar, while
              still being tailored to the specific timesheet use case.
            </li>

            <li>
              Integrated support for expenses, approvals, verification, and
              detailed notes within a single, coherent view.
            </li>

            <li>
              Reduced visual noise through the removal of underused analytics
              and features that did not directly contribute to reporting.
            </li>
          </ul>

          <p>
            The result is an interface that serves both primary audiences -
            freelancers and internal staff - without forcing either group into
            cumbersome workarounds.
          </p>

          <Image
            src="/images/projects/timesheets-hero.png"
            alt="Timesheets Final"
            width={1200}
            height={600}
            className="image"
          />

          <h2>Outcomes & Impact</h2>

          <p>
            The redesigned Timesheets produced tangible improvements for both
            freelancers and the Sollective team:
          </p>

          <ul>
            <li>
              <b>Improved usability:</b> Freelancers and back‑office staff
              praised the new interface for its clarity and ease of use,
              particularly the more focused monthly flow.
            </li>

            <li>
              <b>Operational efficiency:</b> Integration with the internal
              reporting system eliminated manual export and email steps,
              significantly reducing time spent on repetitive reporting tasks.
            </li>

            <li>
              <b>Reduced effort for freelancers:</b> The reporting process
              shifted from a chore that could take hours each month to a
              streamlined workflow that typically took at most 30 minutes per
              freelancer per month.
            </li>

            <li>
              <b>Alignment with real-world workflows:</b> By removing
              unnecessary analytics and focusing the product on reporting,
              Timesheets became a better fit for how the platform’s most engaged
              users actually worked.
            </li>
          </ul>

          <h2>Learnings & Reflection</h2>

          <p>
            The Timesheets redesign reinforced several principles for tooling in
            operationally complex environments:
          </p>

          <ul>
            <li>
              Products often expand beyond their original target user; redesigns
              must start with real usage, not the original intent.
            </li>

            <li>
              Aligning with existing mental models (like spreadsheets) can
              dramatically lower friction, especially in tasks like time
              reporting.
            </li>

            <li>
              Internal operational requirements (approvals, verification,
              expenses) are as important as the freelancer’s individual
              experience when a tool sits between multiple parties.
            </li>

            <li>
              AI‑assisted prototyping can speed up exploration and allow teams
              to converge on interaction patterns that work across design,
              engineering, and operations.
            </li>
          </ul>

          <p>
            This project now serves as a reference point for future workflow
            tools within FreelanceOS, demonstrating how a feature can evolve
            from a single‑persona utility into a multi‑stakeholder product
            without sacrificing clarity or ease of use.
          </p>
        </div>
      </main>
      <Footer type="article" />
    </>
  );
}
