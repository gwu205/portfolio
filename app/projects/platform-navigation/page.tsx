import Image from "@/node_modules/next/image";
import ArticleTemplate from "@/app/components/article-template";

export default function Page() {
  return (
    <ArticleTemplate>
      <h1 className="article-headline">
        Adapting Site Navigation to a Rapidly Changing Platform
      </h1>
      <div className="text-slate-400 flex flex-row gap-x-10 gap-y-0 flex-wrap">
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Discipline:</span>Product Design
        </h2>
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Medium:</span>SaaS Web App
        </h2>
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Tools:</span>Figma, Slack
          (Testing)
        </h2>
      </div>
      <Image
        src="/images/projects/navigation.jpg"
        height={1200}
        width={1800}
        alt="Platform navigations"
        className="w-full h-auto"
      />
      <p className="italic">
        Sollective is a vetted freelancer matching platform in Japan, connecting
        highly skilled freelancers with companies looking to expand their
        business operations. In addition to matching, Sollective aims to support
        the future of freelance work in Japan through community events and
        made-for-freelance workflow tools.
      </p>
      <h3 className="section-heading">The Problem</h3>
      <p>
        At launch, Sollective focused solely on freelancer-to-business matching.
        However, its scope has since expanded to include freelancer productivity
        tools and business administration features.
      </p>
      <p>
        As the platform’s offerings grew, so did its audience, attracting not
        only job seekers but also users searching for productivity solutions.
        This expansion presented a critical challenge:
      </p>
      <ul>
        <li>
          How could the platform’s <b>information architecture</b> and{" "}
          <b>feature prioritisation</b> evolve to showcase its new capabilities?
        </li>
        <li>
          How could we ensure users recognized Sollective as a{" "}
          <b>matching service</b>, a <b>productivity suite</b>, and a{" "}
          <b>community hub</b>?
        </li>
      </ul>
      <p>
        The existing navigation struggled with feature discoverability and
        scalability, leading to difficulties for freelancers and recruiters in
        navigating between tools like job postings, contracts, and messaging.
      </p>
      <Image
        src="/images/projects/old_nav.jpg"
        height={1080}
        width={1920}
        alt="Old Navigation"
        className="w-full h-auto"
      />
      <p className="text-sm text-center italic">
        Platform navigation before redesign
      </p>
      <p>
        The core issue of the existing navigation was in the discoverability of
        features and scalability. This had the impact of freelancers and
        recruiters struggling to find tools and navigate between job postings,
        contracts, and messaging.
      </p>
      <h3 className="section-heading">The Solution</h3>
      <p className="subheading">Separation of concerns</p>
      <p>
        The redesign aimed to improve user engagement by creating a unified,
        intuitive structure that clearly communicated the platform's core
        offerings:
      </p>
      <ol>
        <li>Matching Services</li>
        <li>Productivity Tools</li>
        <li>Community Access</li>
      </ol>
      <p>We prioritized addressing common user pain points:</p>
      <ul>
        <li>Lack of clarity on where to access productivity tools.</li>
        <li>Uncertainty about what to do after signing up.</li>
        <li>Limited awareness of the community and how to participate.</li>
      </ul>
      <p className="py-7 md:py-20 px-5 md:px-12 font-medium md:font-light text-lg md:text-4xl/snug text-slate-400 bg-white">
        How might we{" "}
        <span className="text-purple-400">
          effectively inform users of everything that the product offers while
          easing them into the user experience?
        </span>
      </p>
      <h3 className="section-heading">Design Approach</h3>
      <p className="subheading">Defining a cohesive user experience</p>
      <p>
        To develop a navigation system that felt intuitive, we conducted a
        competitive analysis of similar platforms. We noted that successful
        solutions presented features in approachable, contextual ways while
        minimising cognitive load for first-time users.
      </p>
      <p className="subheading">Key Insight: Context Switching</p>
      <p>
        Inspired by platforms like Slack, which uses a context switcher and
        app-like icon affordance, we explored ways to separate and streamline
        user flows. This approach allows users to focus on a single task or
        feature without distraction, reducing overwhelm and enhancing usability.
      </p>
      <Image
        src="/images/projects/slack-switcher.png"
        height={1080}
        width={1920}
        alt="Slack"
        className="w-full h-auto"
      />
      <p className="text-sm text-center italic">Slack's context switcher</p>
      <h3 className="section-heading">Iterations and Testing</h3>
      <p className="subheading">Design iterations</p>
      <p>
        Given the far-reaching impact of navigation design, we undertook
        multiple iterations, testing variations with both our internal team and
        external users:
      </p>
      <Image
        src="/images/projects/nav_iterations_1.png"
        height={1516}
        width={2860}
        alt="Iterations"
        className="w-full h-auto"
      />
      <p className="text-sm text-center italic">
        We went to the drawing board...
      </p>
      <Image
        src="/images/projects/nav_iteration_2.jpg"
        height={982}
        width={1440}
        alt="Iterations"
        className="w-full h-auto"
      />
      <p className="text-sm text-center italic">And iterated...</p>
      <Image
        src="/images/projects/nav_iteration_3.jpg"
        height={982}
        width={1440}
        alt="Iterations"
        className="w-full h-auto"
      />
      <p className="text-sm text-center italic">And iterated.</p>
      <ul>
        <li>
          Iteration 1: A slide-out menu that locks the interface when activated.
        </li>
        <li>
          Iteration 2: A dropdown menu appearing above the main UI context.
        </li>
      </ul>
      <p>
        Users favored a full-height menu, finding it approachable and easy to
        navigate. Some expressed interest in a fixed side menu, but we
        determined this wasn’t ideal for Sollective’s highly focused user flows.
      </p>
      <p className="subheading">Final Design</p>
      <p>
        We adopted a hybrid navigation system featuring a top navigation bar
        complemented by a collapsible main menu. This structure balances clarity
        and accessibility while reducing cognitive load.
      </p>
      <Image
        src="/images/projects/navigation_dark.jpg"
        height={1200}
        width={1800}
        alt="Navigation on profile page"
        className="w-full h-auto"
      />
      <Image
        src="/images/projects/navigation_light.jpg"
        height={1200}
        width={1800}
        alt="Navigation on dashboard page"
        className="w-full h-auto"
      />
      <h3 className="section-heading">Conclusion</h3>
      <p>The redesigned navigation system achieved its goals by:</p>
      <ul>
        <li>Clarifying the platform's diverse offerings.</li>
        <li>Reducing friction for first-time users.</li>
        <li>Creating a scalable architecture for future growth.</li>
      </ul>
      <p>
        Through thoughtful design and iteration, Sollective now provides a
        cohesive user experience that empowers freelancers and companies to
        connect and thrive.
      </p>
      <p>
        This project underscored the importance of grounding design decisions in
        user feedback and competitive insights. While every platform has unique
        needs, designing for scalability and clarity ensures a foundation for
        long-term success.
      </p>
    </ArticleTemplate>
  );
}
