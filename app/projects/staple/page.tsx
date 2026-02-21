"use client";

import { CaseStudyMeta } from "@/app/components/article/CaseStudyMeta";
import { Footer } from "@/app/components/common/Footer";
import Image from "next/image";

const themes = [
  "UI/UX design",
  "Frontend development",
  "Design system",
  "SaaS design",
  "FinTech",
];

export default function Page() {
  return (
    <>
      <CaseStudyMeta
        articleTitle="Corporate Payments"
        heroImageSrc="/images/projects/s-expenses.jpg"
        heroImageAlt="Staple Card"
        clientName="Staple"
        year="2022"
        role="Product Designer & Frontend Developer"
        stack={["Figma", "React", "CSS"]}
        themes={themes}
        h1Title="Designing a Cashless Corporate Payments Future"
        timeline="6 months"
        introductionText={`Staple is a corporate payments solution that empowers employees to handle payments, record receipts, and request reimbursements with ease. Paired with physical and virtual cards, the platform streamlines expense management and offers accountants a unified view of all company finances.\n\nBy digitising workflows, Staple tackles Japan's traditional paper-based systems, delivering a modern solution to an outdated process.`}
      />
      <main className="article">
        <div className="content">
          <h2>The Problem</h2>
          <p>
            In Japan, corporate expense management faces significant challenges:
          </p>
          <ol>
            <li>
              <b>Paper-Driven Systems:</b>
              <br />
              Many companies rely on paper receipts and records, making expense
              management prone to errors, loss, and even fraud. Strict legal
              reporting requirements exacerbate these inefficiencies, leaving
              businesses hesitant to transition to digital workflows.
            </li>
            <li>
              <b>Access to Corporate Cards:</b>
              <br />
              Corporate cards are often inaccessible to smaller companies or
              startups without significant capital. This lack of access
              complicates expense management, especially for mandatory
              reimbursements like commuting costs.
            </li>
            <li>
              <b>Complex Workflows:</b>
              <br />
              From managing expenses to uploading receipts, reviewing payments,
              and integrating with accounting tools, expense management involves
              numerous specialized tasks that vary by user role (e.g. employee
              vs. administrator).
            </li>
          </ol>
          <h2>My Role</h2>
          <p>I joined the team during a phase of rapid growth, tasked with:</p>
          <ul>
            <li>
              <b>Redesigning the User Experience:</b>&nbsp;Ensuring the platform
              was user-friendly, accessible, and scalable for future features.
            </li>
            <li>
              <b>Enhancing the Visual Identity:</b>&nbsp;Modernizing the Staple
              Card design, product website, and visual assets.
            </li>
            <li>
              <b>Improving Information Architecture:</b>&nbsp;Simplifying the
              complex structure to accommodate various user roles and use cases.
            </li>
            <li>
              <b>Building a Design System:</b>&nbsp;Developing a cohesive design
              system and custom CSS framework for scalable frontend development.
            </li>
          </ul>
          <Image
            src="/images/projects/staplecard-transactions.png"
            height={900}
            width={1440}
            alt="Staple Card Transactions"
            className="image"
          />
          <h2>Challenges</h2>
          <p>
            The project’s complexity lay in its breadth of functionality and
            diverse user base:
          </p>
          <ul>
            <li>
              <b>Specialised Features:</b> Staple supports tasks such as
              creating expenses, uploading receipts, reviewing payments,
              integrating with accounting software, managing user roles,
              approving expenses, and exporting financial data.
            </li>
            <li>
              <b>Role-Based Use Cases:</b> Employees need an intuitive way to
              manage payments, while administrators require robust tools for
              oversight, approvals, and reporting. Balancing these needs was a
              key challenge.
            </li>
          </ul>
          <h2>The Process</h2>
          <p className="subheading">Collaborating with Engineers</p>
          <p>
            I worked closely with engineers to design and implement an intuitive
            user interface that aligned with technical and business requirements
            while improving the overall user experience.
          </p>
          <Image
            src="/images/projects/s-workflows.png"
            height={900}
            width={1440}
            alt="Staple Policies"
            className="image"
          />
          <p className="subheading">Restructuring Information Architecture</p>
          <p>To enhance usability:</p>
          <ul>
            <li>
              I restructured the platform’s information architecture, ensuring
              clear pathways for both employees and administrators.
            </li>
            <li>
              Features were grouped logically based on user workflows, reducing
              friction and enabling users to complete tasks with minimal effort.
            </li>
          </ul>
          <Image
            src="/images/projects/staplecard-add.png"
            height={900}
            width={1440}
            alt="Add Staple Card"
            className="image"
          />
          <p className="subheading">Developing a Design System</p>
          <p>To streamline design and development:</p>
          <ul>
            <li>
              I created a design system with reusable components and detailed
              documentation, ensuring consistency across the platform.
            </li>
            <li>
              Inspired by{" "}
              <a
                href="https://bradfrost.com/blog/post/atomic-web-design/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Atomic Design principles
              </a>{" "}
              and{" "}
              <a
                href="https://frontstuff.io/generate-all-your-utility-classes-with-sass-maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                this article by Sarah Dayan
              </a>
              , I adapted the concept into a custom CSS framework, allowing the
              team to build and scale pages quickly and efficiently.
            </li>
          </ul>
          <Image
            src="/images/projects/s-expenses.jpg"
            height={1200}
            width={1800}
            alt="Staple Expenses View"
            className="image"
          />
          <h2>The Solution</h2>
          <p>The final design successfully addressed the challenges:</p>
          <ol>
            <li>
              <b>Streamlined Expense Management:</b>
              <ul>
                <li>
                  Employees could quickly create expenses, upload receipts, and
                  manage payments through an intuitive interface.
                </li>
                <li>
                  Administrators benefited from tools to oversee workflows, set
                  approval processes, and generate reports with ease.
                </li>
              </ul>
            </li>
            <li>
              <b>Unified Design System:</b>
              <ul>
                <li>
                  The design system provided a cohesive and scalable foundation
                  for future feature development, cutting down frontend
                  implementation time by 100%.
                </li>
              </ul>
            </li>
            <li>
              <b>Improved Brand Presence:</b>
              <ul>
                <li>
                  The renewed Staple Card design and updated product website
                  strengthened the brand’s visual identity and market presence.
                </li>
              </ul>
            </li>
            <li>
              <b>Simplified Financial Oversight:</b>
              <ul>
                <li>
                  The platform eased the management burden on financial staff,
                  empowering employees to handle payments independently while
                  maintaining compliance.
                </li>
              </ul>
            </li>
          </ol>
          <h2>Outcome</h2>
          <p>
            Through thoughtful design and collaboration, our team was able to
            achieve our goal of creating a cashless corporate payments solution
            tailored to Japan’s unique business environment. The revamped
            platform streamlined expense management for businesses of all sizes,
            ensuring scalability, accessibility, and a user-friendly experience
            for employees and administrators alike.
          </p>
          <Image
            src="/images/projects/s-addexpense.png"
            height={900}
            width={1440}
            alt="Add Expense"
            className="image"
          />
          <Image
            src="/images/projects/s-account.png"
            height={900}
            width={1440}
            alt="Account Management"
            className="image"
          />
          <Image
            src="/images/projects/s-exports.png"
            height={900}
            width={1440}
            alt="Export View"
            className="image"
          />
          <Image
            src="/images/projects/s-receipts.png"
            height={900}
            width={1440}
            alt="Manage Receipts"
            className="image"
          />
        </div>
      </main>
      <Footer type="article" />
    </>
  );
}
