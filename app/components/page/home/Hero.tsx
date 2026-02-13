import { Framer, Github, LinkedinIcon, Mail } from "lucide-react";
import { AnimatedTitle } from "../../common/AnimatedTitle";
import { BlurCircle } from "../../common/BlurCircle";
import { Header } from "../../common/Header";

export const Hero = () => {
  return (
    <>
      <Header />
      <div className="md:p-8 p-4 w-full max-w-5xl">
        <AnimatedTitle className="mb-16" />
      </div>
      <div className="flex absolute bottom-4 right-4 z-10">
        <a
          href="https://www.linkedin.com/in/geoffrey-wu/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <LinkedinIcon strokeWidth={1.5} className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://github.com/gwu205"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <Github strokeWidth={1.5} className="w-6 h-6 text-white" />
        </a>
        <a
          href="https://www.framer.com/@wuxdesign/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <Framer strokeWidth={1.5} className="w-6 h-6 text-white" />
        </a>
        <a
          href="mailto:geoffrey.wu205@gmail.com"
          className="p-4 opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          <Mail strokeWidth={1.5} className="w-6 h-6 text-white" />
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
    </>
  );
};
