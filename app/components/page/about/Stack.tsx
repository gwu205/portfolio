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
  return (
    <div className="flex-1 flex flex-col gap-5">
      <h6 className="u-stack-label">
        <span>Design</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <div className="flex flex-wrap gap-4">
        <Icon icon={siFigma} color="#000000" />
        <Icon icon={siFramer} color="#000000" />
      </div>
      <h6 className="u-stack-label">
        <span>Development</span>
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
        <span>Workflow</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <div className="flex flex-wrap gap-2">
        <span className="badge">Design Tokens</span>
        <span className="badge">Component Libraries</span>
        <span className="badge">Design Documentation</span>
        <span className="badge">Git-based Collaboration</span>
        <span className="badge">UX Copywriting</span>
        <span className="badge">Accessibility</span>
        <span className="badge">AI Photo/Video</span>
      </div>
      <h6 className="u-stack-label">
        <span>Delivery</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <div className="flex flex-wrap gap-2">
        <span className="badge">Design Specs</span>
        <span className="badge">Interactive Prototypes</span>
        <span className="badge">Production Code</span>
        <span className="badge">Performance Metrics</span>
        <span className="badge">User Testing</span>
        <span className="badge">Product Showcases</span>
      </div>
      <h6 className="u-stack-label">
        <span>Qualifications</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <div className="flex flex-wrap gap-2">
        <span className="px-4 py-3 rounded-md bg-[#D7C9E3] text-[#2A1F33] hover:bg-[#C6B8D2] hover:shadow-lg transition-all cursor-default">
          Framer Expert
        </span>
        <span className="px-4 py-3 rounded-md bg-[#D7C9E3] text-[#2A1F33] hover:bg-[#C6B8D2] hover:shadow-lg transition-all cursor-default">
          日本語能力試験 (JLPT) N2
        </span>
      </div>
      <h6 className="u-stack-label">
        <span>Portfolio</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <p className="text-white">
        Built with Next.js, TypeScript, and Tailwind CSS.
      </p>
    </div>
  );
};
