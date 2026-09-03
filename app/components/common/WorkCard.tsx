"use client";

import { useHoverCapable } from "@/app/hooks/useHoverCapable";
import { useLocale } from "@/app/i18n/LocaleProvider";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CardTicker } from "./CardTicker";
import { CursorFollower } from "./CursorFollower";

interface WorkCardProps {
  title: string;
  client: string;
  img_src?: string;
  video_src?: string;
  link: string;
  index: number;
}

// Alignment and ticker direction alternate on index parity. Hover is tracked
// on the whole row, not the image, so the gap beside it is hoverable too.
export function WorkCard({
  title,
  client,
  img_src,
  video_src,
  link,
  index,
}: WorkCardProps) {
  const { dict } = useLocale();
  const [isHovered, setIsHovered] = useState(false);
  const hoverCapable = useHoverCapable();
  const rowRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isActive = isHovered || !hoverCapable;
  const alignRight = index % 2 === 1;
  const alignClassName = `group-hover:scale-125 transition-transform duration-500 ease-out relative block w-[52%] sm:w-[38%] md:w-[30%] ${
    alignRight ? "ml-auto" : "mr-auto"
  }`;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isActive) {
      // A fast hover in/out rejects with AbortError; expected.
      video.play().catch(() => {});
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive]);

  const heading = dict.folio.cardHeading(title, client);
  const ariaLabel = heading.map((segment) => segment.text).join("");
  const mediaClassName = `aspect-square w-full object-cover transition-all duration-700 group-hover:scale-[1.08] ${
    isActive ? "grayscale-0" : "grayscale"
  }`;

  return (
    <div
      ref={rowRef}
      className="group relative w-full py-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={link} aria-label={ariaLabel} className={alignClassName}>
        <div className="overflow-hidden">
          {video_src ? (
            <video
              ref={videoRef}
              src={video_src}
              muted
              loop
              playsInline
              preload="auto"
              className={mediaClassName}
            />
          ) : (
            <Image
              src={img_src || ""}
              alt={dict.folio.cardImageAlt(title, client)}
              width={1200}
              height={1200}
              className={mediaClassName}
            />
          )}
        </div>
      </a>
      <CardTicker
        text={title}
        reverse={alignRight}
        className="pointer-events-none absolute bottom-6 left-1/2 w-screen -translate-x-1/2"
      />
      <CursorFollower text={client} targetRef={rowRef} />
    </div>
  );
}
