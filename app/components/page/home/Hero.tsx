import { siFramer, siGithub } from "simple-icons/icons";
import { AnimatedTitle } from "../../common/AnimatedTitle";
import { BlurCircle } from "../../common/BlurCircle";
import { Header } from "../../common/Header";

const Icon = ({ icon, size = 24 }: { icon: any; size?: number }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
};

export const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#eeeeee] to-black min-h-[800px] flex items-center justify-center overflow-hidden">
      <Header />
      <div className="md:p-8 p-4 w-full max-w-5xl">
        <AnimatedTitle className="mb-16" />
      </div>
      <div className="flex absolute bottom-4 right-4 z-10">
        <a
          href="https://www.linkedin.com/in/geoffrey-wu/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 opacity-50 hover:opacity-100 transition-opacity duration-300 text-white"
        >
          <Icon
            icon={{
              title: "LinkedIn",
              hex: "ffffff",
              path: "M18 13.36v4.43h-2.57v-4.14c0-1.04-.37-1.75-1.3-1.75-.72 0-1.14.48-1.32.94-.07.17-.09.4-.09.63v4.32h-2.57s.03-7 0-7.73h2.57v1.1l-.02.02h.02v-.03c.34-.53.95-1.28 2.32-1.28 1.69 0 2.96 1.11 2.96 3.49ZM7.46 6.33C6.58 6.33 6 6.9 6 7.66 6 8.41 6.56 9 7.42 9h.02c.9 0 1.45-.6 1.45-1.34-.01-.76-.55-1.33-1.43-1.33Zm-1.3 11.46h2.57v-7.73H6.15v7.73Z M12 21.6a9.6 9.6 0 1 0 0-19.2 9.6 9.6 0 0 0 0 19.2Zm0 2.4a12 12 0 1 1 0-24 12 12 0 0 1 0 24Z",
            }}
            size={24}
          />
        </a>
        <a
          href="https://github.com/gwu205"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 opacity-50 hover:opacity-100 transition-opacity duration-300 text-white"
        >
          <Icon icon={siGithub} size={24} />
        </a>
        <a
          href="https://www.framer.com/@wuxdesign/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 opacity-50 hover:opacity-100 transition-opacity duration-300 text-white"
        >
          <Icon icon={siFramer} size={24} />
        </a>
        <a
          href="mailto:geoffrey.wu205@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 opacity-50 hover:opacity-100 transition-opacity duration-300 text-white"
        >
          <Icon
            icon={{
              title: "Email",
              hex: "ffffff",
              path: "M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z",
            }}
            size={24}
          />
        </a>
      </div>
      <div className="h-full w-full overflow-hidden absolute top-0 left-0">
        <BlurCircle
          baseColor="#9336a8ff"
          highlightColor="#000000ff"
          size="80vw"
          className="bottom-0 min-md:bottom-[60%] left-[-20%]"
          blendMode="hard-light"
          zi={3}
          duration="5.5s"
          delay="-1.2s"
          opacity={0.8}
        />
        <BlurCircle
          baseColor="#c44c4cff"
          highlightColor="#49ebcdff"
          size="80vw"
          className="bottom-0 min-md:bottom-[40%] right-[-10%]"
          blendMode="hard-light"
          duration="5.3s"
          delay="-0.8s"
          opacity={0.5}
        />
        <BlurCircle
          baseColor="#0beed4ff"
          highlightColor="#000000ff"
          size="70vw"
          className="top-0 min-md:top-[-70%] right-[0%]"
          blendMode="hard-light"
          duration="5s"
          delay="-2.4s"
          opacity={0.9}
        />
        <BlurCircle
          baseColor="#6155c2ff"
          highlightColor="#0c9ad2ff"
          size="60vw"
          className="top-0 min-md:top-[-20%] left-[-20%]"
          blendMode="hard-light"
          zi={1}
          duration="6.4s"
          delay="-3s"
          opacity={0.5}
        />
      </div>
    </section>
  );
};
