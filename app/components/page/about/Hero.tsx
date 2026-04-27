"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { AnimatedTitle } from "../../common/AnimatedTitle";
import { Header } from "../../common/Header";

export const Hero = () => {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
      );
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center overflow-hidden"
      style={{ opacity: 0 }}
    >
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
      <div className="h-full w-full overflow-hidden absolute top-0 left-0 -z-10">
        <MeshGradient
          width={"100%"}
          height={"100%"}
          colors={["#a72439ff", "#545452ff", "#b5c441ff", "#495d3cff"]}
          distortion={0.8}
          swirl={1}
          grainMixer={0}
          grainOverlay={0}
          speed={0.5}
        />
      </div>
    </section>
  );
};
