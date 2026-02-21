"use client";

import { useWindowSize } from "../../../hooks/useWindowSize";
import { AnimatedTitle } from "../../common/AnimatedTitle";
import { BlurCircle } from "../../common/BlurCircle";
import { Header } from "../../common/Header";

export const Hero = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  return (
    <section className="animate-in fade-in duration-1000 relative bg-gradient-to-b from-[#eeeeee] to-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-[120px] pointer-events-none" />
      <Header />
      <div className="md:p-8 p-4 w-full max-w-5xl">
        <AnimatedTitle
          className="mb-16"
          titleLines={
            isDesktop
              ? [
                  "Product designer focused on",
                  "systems, clarity, and ",
                  "end‑to‑end execution",
                ]
              : ["Designing", "systems", "with clarity", "and execution"]
          }
        />
      </div>
      <div className="h-full w-full overflow-hidden absolute top-0 left-0">
        <BlurCircle
          baseColor="#9336a8ff"
          highlightColor="#000000ff"
          size="80vw"
          className="bottom-0 min-md:bottom-[60%] left-[-20%]"
          blendMode="difference"
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
          blendMode="difference"
          duration="5.3s"
          delay="-0.8s"
          opacity={0.5}
        />
        <BlurCircle
          baseColor="#0beed4ff"
          highlightColor="#000000ff"
          size="70vw"
          className="top-0 min-md:top-[-70%] right-[0%]"
          blendMode="difference"
          duration="5s"
          delay="-2.4s"
          opacity={0.9}
        />
        <BlurCircle
          baseColor="#6155c2ff"
          highlightColor="#0c9ad2ff"
          size="60vw"
          className="top-0 min-md:top-[-20%] left-[-20%]"
          blendMode="difference"
          zi={1}
          duration="6.4s"
          delay="-3s"
          opacity={0.5}
        />
      </div>
    </section>
  );
};
