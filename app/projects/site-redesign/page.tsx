import Image from "@/node_modules/next/image";
import ArticleTemplate from "@/app/components/article-template";

export default function Page() {
  return (
    <ArticleTemplate>
      <h1 className="article-headline">
        The All-In-One Freelancer Platform in Japan
      </h1>
      <div className="text-slate-400 flex flex-row gap-x-10 gap-y-0 flex-wrap">
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Discipline:</span>Web Design
        </h2>
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Medium:</span>Website (Desktop,
          Mobile)
        </h2>
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Tools:</span>Framer
        </h2>
      </div>
      <Image
        src="/images/projects/sollective.jpg"
        height={1200}
        width={1800}
        alt="New LP"
        className="w-full h-auto"
      />
      <p className="italic">
        Sollective is a vetted freelancer matching platform in Japan, connecting
        highly skilled freelancers with companies seeking to expand their
        operations. Beyond matching services, Sollective fosters the future of
        freelance work in Japan through community events and purpose-built
        workflow tools.
      </p>
      <p className="italic">
        As the platform evolved to offer more than just job matching, the need
        arose for the website to reflect its expanded mission: to serve as “The
        All-In-One Freelancer Platform.” This case study outlines how we
        reimagined the website to better communicate its offerings, enhance user
        engagement, and support business growth.
      </p>
      <h3 className="section-heading">The Problem</h3>
      <p>As Sollective grew, so did the breadth of its offerings, spanning:</p>
      <ul>
        <li>Freelancer Matching Services</li>
        <li>Workflow Tools</li>
        <li>A Thriving User Community</li>
      </ul>
      <p>However, the existing website fell short in several critical areas:</p>
      <ol>
        <li>
          <b>Messaging Clarity:</b> The platform's expanded value proposition
          was unclear, making it difficult for first-time visitors to grasp the
          breadth of services offered.
        </li>
        <li>
          <b>User Engagement:</b> The landing page lacked the narrative flow to
          keep users engaged, leading to high bounce rates.
        </li>
        <li>
          <b>Outdated Visuals:</b> The design no longer reflected the company’s
          dynamic and growing identity.
        </li>
        <li>
          <b>Target Audience Focus:</b> The mixed messaging confused freelancers
          and business users, diluting the impact for both groups.
        </li>
      </ol>
      <p>
        The overarching challenge was to align the website’s design and
        messaging with Sollective’s brand mission:{" "}
        <b>"Prove the value of freelance."</b> This meant showcasing the
        platform as a hub for professional growth, collaboration, and
        efficiency.
      </p>
      <Image
        src="/images/projects/sol-oldhome.jpg"
        height={1200}
        width={1800}
        alt="Old LP"
        className="w-full h-auto"
      />
      <p className="text-sm italic text-center">
        The previous iteration of the website
      </p>
      <h3 className="section-heading">The Approach</h3>
      <p className="subheading">Structuring the narrative</p>
      <p>We started by focusing on storytelling. The landing page needed to:</p>
      <ul>
        <li>Be approachable and welcoming to first-time visitors.</li>
        <li>
          Clearly articulate the platform’s value to freelancers, answering key
          questions upfront:{" "}
          <ul>
            <li>
              <b>What is Sollective?</b>
            </li>
            <li>
              <b>Why should I join?</b>
            </li>
            <li>
              <b>How does it benefit me?</b>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        To streamline communication, we separated freelancer-focused messaging
        from business-oriented content, moving the latter to a dedicated B2B
        site. This allowed us to craft a targeted narrative tailored
        specifically to freelancers.
      </p>
      <p className="subheading">Redesigning the Page Flow</p>
      <p>We restructured the landing page into distinct sections:</p>
      <ol>
        <li>
          <b>Showcasing Freelancers:</b> Highlighting success stories to create
          relatability and inspire trust.
        </li>
        <li>
          <b>Projects and Matching:</b> Demonstrating how the platform connects
          users to meaningful opportunities.
        </li>
        <li>
          <b>Core Features and Benefits:</b> Breaking down functionality with an
          emphasis on usability and efficiency.
        </li>
        <li>
          <b>Case Studies and Reassurances:</b> Sharing testimonials and proof
          points to build credibility.
        </li>
        <li>
          <b>Workflow Tools:</b> Introducing the tools that streamline freelance
          work.
        </li>
        <li>
          <b>Community and Ecosystem:</b> Highlighting the value of
          collaboration and off-platform initiatives.
        </li>
      </ol>
      <p>
        This logical progression ensured a seamless flow, guiding users from
        discovery to action.
      </p>
      <p className="subheading">Leveraging Framer for Rapid Development</p>
      <p>We used Framer to build the site, enabling:</p>
      <ul>
        <li>
          <b>Fast Iteration:</b> Rapid prototyping and deployment to keep pace
          with business needs.
        </li>
        <li>
          <b>Custom Functionality:</b> Tailoring components for unique
          interactions and animations.
        </li>
        <li>
          <b>Engaging Visuals:</b> Playful animations and ready-made assets
          created a sense of curiosity, encouraging exploration.
        </li>
      </ul>
      <Image
        src="/images/projects/sol-match.png"
        height={1200}
        width={1800}
        alt="Matching"
        className="w-full h-auto"
      />
      <h3 className="section-heading">The Solution</h3>
      <p>The redesigned landing page effectively addressed the challenges:</p>
      <ul>
        <li>
          <b>Clear Messaging:</b> Users immediately understand Sollective’s
          offerings and benefits.
        </li>
        <li>
          <b>Engaging Design:</b> A refreshed visual identity aligns with the
          brand’s dynamic growth and mission.
        </li>
        <li>
          <b>Focused Targeting:</b> Freelancer-centric messaging resonates with
          the primary audience.
        </li>
        <li>
          <b>Optimised Flow:</b> Logical content structure keeps users engaged
          and guides them to sign-up.
        </li>
      </ul>
      <Image
        src="/images/projects/sol-tools.png"
        height={1200}
        width={1800}
        alt="Matching"
        className="w-full h-auto"
      />
      <h3 className="section-heading">The Results</h3>
      <p>The redesign delivered measurable improvements:</p>
      <ul>
        <li>
          <b>50% Increase in Average Engagement Time:</b> Users spent more time
          exploring the platform.
        </li>
        <li>
          <b>Improved Clarity:</b> Feedback from usability testing showed users
          better understood the platform’s value.
        </li>
        <li>
          <b>Higher Conversion Rates:</b> A more cohesive narrative and design
          boosted sign-up rates.
        </li>
      </ul>
      <Image
        src="/images/projects/sol-community.png"
        height={1200}
        width={1800}
        alt="Matching"
        className="w-full h-auto"
      />
      <h3 className="section-heading">Key Takeaways</h3>
      <ul>
        <li>
          <b>Storytelling Matters:</b> Structuring the page as a narrative
          helped retain user attention.
        </li>
        <li>
          <b>User-Centric Design:</b> Separating freelancer and business content
          improved focus and impact.
        </li>
        <li>
          <b>Scalable Tools:</b> Using Framer allowed for rapid, scalable design
          solutions that could evolve with the platform.
        </li>
      </ul>
    </ArticleTemplate>
  );
}
