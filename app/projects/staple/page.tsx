import ArticleTemplate from "@/app/components/ArticleTemplate";
import Image from "@/node_modules/next/image";

export default function Page() {
  return (
    <ArticleTemplate>
      <h1 className="article-headline">
        Designing a Cashless Corporate Payments Future
      </h1>
      <div className="text-slate-400 flex flex-row gap-x-10 gap-y-0 flex-wrap">
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Discipline:</span>Product Design,
          Frontend
        </h2>
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Medium:</span>SaaS Web App
        </h2>
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Tools:</span>Figma, React/CSS
        </h2>
      </div>
      <Image
        src="/images/projects/staplecard.jpg"
        height={1600}
        width={2784}
        alt="Staple Card"
        className="w-full h-auto"
      />
      <p className="italic">
        <b>Staple</b> is a corporate payments solution that empowers employees
        to handle payments, record receipts, and request reimbursements with
        ease. Paired with physical and virtual cards, the platform streamlines
        expense management (経費精算) and offers accountants a unified view of
        all company finances.
      </p>
      <p className="italic">
        By digitising workflows, Staple tackles Japan’s traditional paper-based
        systems, delivering a modern solution to an outdated process.
      </p>
      <h3 className="section-heading">The Problem</h3>
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
          startups without significant capital. This lack of access complicates
          expense management, especially for mandatory reimbursements like
          commuting costs.
        </li>
        <li>
          <b>Complex Workflows:</b>
          <br />
          From managing expenses to uploading receipts, reviewing payments, and
          integrating with accounting tools, expense management involves
          numerous specialized tasks that vary by user role (e.g. employee vs.
          administrator).
        </li>
      </ol>
      <h3 className="section-heading">My Role</h3>
      <p>I joined the team during a phase of rapid growth, tasked with:</p>
      <ul>
        <li>
          <b>Redesigning the User Experience:</b>&nbsp;Ensuring the platform was
          user-friendly, accessible, and scalable for future features.
        </li>
        <li>
          <b>Enhancing the Visual Identity:</b>&nbsp;Modernizing the Staple Card
          design, product website, and visual assets.
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
      />
      <p className="text-sm text-center italic">
        Staple Card Transactions – Admin Dashboard
      </p>
      <h3 className="section-heading">Challenges</h3>
      <p>
        The project’s complexity lay in its breadth of functionality and diverse
        user base:
      </p>
      <ul>
        <li>
          <b>Specialised Features:</b> Staple supports tasks such as creating
          expenses, uploading receipts, reviewing payments, integrating with
          accounting software, managing user roles, approving expenses, and
          exporting financial data.
        </li>
        <li>
          <b>Role-Based Use Cases:</b> Employees need an intuitive way to manage
          payments, while administrators require robust tools for oversight,
          approvals, and reporting. Balancing these needs was a key challenge.
        </li>
      </ul>
      <h3 className="section-heading">The Process</h3>
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
      />
      <p className="text-sm text-center italic">
        Staple – Enterprise Workflows
      </p>
      <p className="subheading">Restructuring Information Architecture</p>
      <p>To enhance usability:</p>
      <ul>
        <li>
          I restructured the platform’s information architecture, ensuring clear
          pathways for both employees and administrators.
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
      />
      <p className="text-sm text-center italic">Staple – Card Activation</p>
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
          , I adapted the concept into a custom CSS framework, allowing the team
          to build and scale pages quickly and efficiently.
        </li>
      </ul>
      <Image
        src="/images/projects/s-expenses.jpg"
        height={1200}
        width={1800}
        alt="Staple Expenses View"
      />
      <h3 className="section-heading">The Solution</h3>
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
              The design system provided a cohesive and scalable foundation for
              future feature development, cutting down frontend implementation
              time by 100%.
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
      <h3 className="section-heading">Outcome</h3>
      <p>
        Through thoughtful design and collaboration, our team was able to
        achieve our goal of creating a cashless corporate payments solution
        tailored to Japan’s unique business environment. The revamped platform
        streamlined expense management for businesses of all sizes, ensuring
        scalability, accessibility, and a user-friendly experience for employees
        and administrators alike.
      </p>
      <Image
        src="/images/projects/s-addexpense.png"
        height={900}
        width={1440}
        alt="Add Expense"
      />
      <Image
        src="/images/projects/s-account.png"
        height={900}
        width={1440}
        alt="Account Management"
      />
      <Image
        src="/images/projects/s-exports.png"
        height={900}
        width={1440}
        alt="Export View"
      />
      <Image
        src="/images/projects/s-receipts.png"
        height={900}
        width={1440}
        alt="Manage Receipts"
      />
    </ArticleTemplate>
  );
}
