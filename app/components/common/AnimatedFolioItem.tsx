"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import FolioItem from "./FolioItem";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedFolioItemProps {
  title: string;
  client: string;
  skills: string[];
  img_src?: string;
  video_src?: string;
  link: string;
  index: number;
  className?: string;
}

export const AnimatedFolioItem = ({
  title,
  client,
  skills,
  img_src,
  video_src,
  link,
  index,
  className = "",
}: AnimatedFolioItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!itemRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        itemRef.current,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={itemRef}
      data-index={index}
      className={className}
      style={{ opacity: 0, transform: "translateY(32px)" }}
    >
      <FolioItem
        title={title}
        client={client}
        skills={skills}
        img_src={img_src}
        video_src={video_src}
        link={link}
      />
    </div>
  );
};
