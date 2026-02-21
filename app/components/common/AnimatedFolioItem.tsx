"use client";

import { useEffect, useRef } from "react";
import FolioItem from "./FolioItem";

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
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      },
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={itemRef}
      data-index={index}
      className={`transition-all duration-700 ease-out opacity-0 translate-y-8 ${className}`}
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
