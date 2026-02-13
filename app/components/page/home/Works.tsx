"use client";

import Image from "@/node_modules/next/image";
import { CopyIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FolioItem from "../../common/FolioItem";

const CircleSvg = ({
  width = "1086",
  height = "1086",
}: {
  width?: string;
  height?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 1086 1086"
  >
    <circle cx="542.5" cy="542.5" r="542" stroke="#00F" />
  </svg>
);

export const Works = () => {
  const [copied, setCopied] = useState(false);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
          );
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "-50px 0px -50px 0px",
      },
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("hello@wuxdesign.dev");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };
  return (
    <>
      <div className="max-w-5xl mx-auto px-8 py-16 md:py-32 flex md:flex-row flex-col-reverse gap-8 relative">
        <div className="md:w-1/2 w-full flex flex-col gap-8 md:-mt-[30%] z-10">
          <div
            ref={(el) => {
              itemRefs.current[0] = el;
            }}
            data-index="0"
            className={`transition-all duration-700 ease-out ${
              visibleItems.has(0)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <FolioItem
              title="Invoice Builder"
              client="FreelanceOS"
              skills={["UI Design", "UX Research", "Web SaaS"]}
              img_src="/images/projects/invoices.jpg"
              link="/projects/invoice-builder"
            />
          </div>
          <div
            ref={(el) => {
              itemRefs.current[1] = el;
            }}
            data-index="1"
            className={`transition-all duration-700 ease-out delay-100 ${
              visibleItems.has(1)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <FolioItem
              title="Platform Navigation"
              client="Sollective"
              skills={["UI Design", "B2C", "Branding"]}
              img_src="/images/projects/navigation.jpg"
              link="/projects/platform-navigation"
            />
          </div>
          <div
            ref={(el) => {
              itemRefs.current[2] = el;
            }}
            data-index="2"
            className={`transition-all duration-700 ease-out delay-200 ${
              visibleItems.has(2)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <FolioItem
              title="Product Website"
              client="Sollective"
              skills={["Web Design", "Framer", "Motion Design", "Branding"]}
              video_src="https://res.cloudinary.com/gswu205/video/upload/v1770948413/sollectivejp-reel_zdbmbj.mp4"
              link="/projects/site-redesign"
            />
          </div>
          <div
            ref={(el) => {
              itemRefs.current[3] = el;
            }}
            data-index="3"
            className={`transition-all duration-700 ease-out delay-300 ${
              visibleItems.has(3)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <FolioItem
              title="Web App Redesign"
              client="Staple"
              skills={["Frontend Dev", "UI/UX Design", "B2B SaaS"]}
              img_src="/images/projects/staplecard.jpg"
              link="/projects/staple"
            />
          </div>
          <div
            ref={(el) => {
              itemRefs.current[4] = el;
            }}
            data-index="4"
            className={`transition-all duration-700 ease-out delay-400 ${
              visibleItems.has(4)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <FolioItem
              title="Corporate Brand"
              client="Crowd Cast"
              skills={["Branding", "Visual Design"]}
              img_src="/images/projects/crowdcast.jpg"
              link="/projects/crowdcast"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full md:sticky top-10 md:h-screen z-10">
          <div className="flex flex-col gap-8">
            <div className="bg-[#4E3960] tracking-tight p-10 rounded-[32px] flex items-center gap-6">
              <div className="relative">
                <Image
                  src="/images/avatar.jpeg"
                  alt="Geoffrey Wu"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-5 h-5 bg-[#8BFC87] rounded-full border-4 border-[#4E3960]">
                  <div
                    className="absolute inset-0 bg-[#8BFC87] rounded-full animate-ping"
                    style={{ animationDuration: "4s" }}
                  ></div>
                </div>
              </div>
              <div>
                <h3 className="text-[#F7F4F8] text-2xl font-medium">
                  Geoffrey Wu
                </h3>
                <h4 className="text-[#F7F4F8] text-lg font-light">
                  Product Designer + Design Engineer
                </h4>
              </div>
            </div>
            <div className="p-10 rounded-[32px] bg-[#F7F4F8]">
              <h3 className="tracking-tight text-[#4E3960] md:text-[40px] text-3xl tracking-[-0.02em] leading-[1.2] font-semibold">
                Design built on clarity, refined with motion, and powered by
                code to bring products to life.
              </h3>
            </div>
            <div className="p-10 rounded-[32px] bg-[#69636E] flex flex-col gap-8 items-center justify-center">
              <div className="hover:scale-110 transition-transform duration-300">
                <Image
                  src="/images/openforwork.svg"
                  alt="Open for work"
                  width={82}
                  height={82}
                  className="animate-spin"
                  style={{ animationDuration: "20s" }}
                />
              </div>
              <h6 className="tracking-tight text-[#F7F4F8] text-2xl tracking-[-0.02em] leading-[1.2]">
                Say{" "}
                <button
                  onClick={copyEmail}
                  className="relative group cursor-pointer"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F7F4F8] to-[#F7F4F8] group-hover:from-[#EFFFDF] group-hover:to-[#F1CEFF] transition-all duration-300 font-semibold">
                    hello@wuxdesign.dev
                  </span>
                  <CopyIcon className="group-hover:scale-125 inline ml-2 w-4 h-4 transition-transform duration-300" />
                  {copied && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                      Copied!
                    </span>
                  )}
                </button>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        ref={parallaxRef}
      >
        <div
          className="absolute top-[15%] z-0 right-[-30%]"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        >
          <CircleSvg />
        </div>
        <div
          className="absolute bottom-[15%] z-0 left-[-25%]"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <CircleSvg />
        </div>
      </div>
    </>
  );
};
