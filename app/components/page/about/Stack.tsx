"use client";

import { useLocale } from "@/app/i18n/LocaleProvider";
import {
  siCss,
  siCursor,
  siFigma,
  siFramer,
  siGithub,
  siHtml5,
  siJavascript,
  siLinear,
  siNextdotjs,
  siReact,
  siStorybook,
  siTailwindcss,
  siTypescript,
} from "simple-icons/icons";
import Icon from "../../common/Icon";

export const Stack = () => {
  const { dict } = useLocale();
  const about = dict.about;

  return (
    <div className="min-md:flex-1 w-full flex flex-col gap-5">
      <h6 className="u-stack-label">
        <span>{about.stackSections.design}</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <div className="flex flex-wrap gap-4">
        <Icon icon={siFigma} color="#000000" />
        <Icon icon={siFramer} color="#000000" />
      </div>
      <h6 className="u-stack-label">
        <span>{about.stackSections.development}</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <div className="flex flex-wrap gap-4">
        <Icon icon={siLinear} />
        <Icon icon={siGithub} />
        <Icon icon={siHtml5} />
        <Icon icon={siCss} />
        <Icon icon={siJavascript} />
        <Icon icon={siTypescript} />
        <Icon icon={siReact} />
        <Icon icon={siNextdotjs} />
        <Icon icon={siTailwindcss} />
        <Icon icon={siStorybook} />
        <Icon icon={siCursor} />
      </div>
      <h6 className="u-stack-label">
        <span>{about.stackSections.workflow}</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <div className="flex flex-wrap gap-2">
        {about.workflowBadges.map((badge) => (
          <span key={badge} className="badge">
            {badge}
          </span>
        ))}
      </div>
      <h6 className="u-stack-label">
        <span>{about.stackSections.delivery}</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <div className="flex flex-wrap gap-2">
        {about.deliveryBadges.map((badge) => (
          <span key={badge} className="badge">
            {badge}
          </span>
        ))}
      </div>
      <h6 className="u-stack-label">
        <span>{about.stackSections.qualifications}</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <div className="flex flex-wrap gap-2">
        {about.qualifications.map((qualification) => (
          <span
            key={qualification}
            className="px-4 py-3 rounded-md bg-[#D7C9E3] text-[#2A1F33] hover:bg-[#C6B8D2] hover:shadow-lg transition-all cursor-default"
          >
            {qualification}
          </span>
        ))}
      </div>
      <h6 className="u-stack-label">
        <span>{about.stackSections.portfolio}</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <p className="text-white">
        {about.portfolioBuiltWith}{" "}
        <a
          href="https://nextjs.org/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://www.typescriptlang.org/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>
        ,{" "}
        <a
          href="https://greensock.com/gsap/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GSAP
        </a>
        {about.portfolioBuiltWithConjunction}
        <a
          href="https://tailwindcss.com/"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwind CSS
        </a>
        {about.portfolioBuiltWithSuffix}
      </p>
    </div>
  );
};
