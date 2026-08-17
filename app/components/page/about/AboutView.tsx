"use client";

import { useLocale } from "@/app/i18n/LocaleProvider";
import Image from "next/image";
import { Footer } from "../../common/Footer";
import { ParallaxCircles } from "../../common/ParallaxCircles";
import { Hero } from "./Hero";
import { Stack } from "./Stack";

export function AboutView() {
  const { dict } = useLocale();
  const about = dict.about;

  return (
    <>
      <Hero />
      <main className="w-full relative z-10 bg-white p-8 max-md:py-24 md:p-24">
        <div className="z-10 relative w-full max-w-3xl mx-auto p-12 bg-[#F7F4F8] rounded-[32px]">
          <Image
            src="/images/avatar.jpeg"
            alt={dict.footer.avatarAlt}
            width={64}
            height={64}
            className="rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white"
          />
          <p className="text-[#4E3960] mb-4">{about.bioParagraph1}</p>
          <p className="text-[#4E3960]">{about.bioParagraph2}</p>
        </div>
        <div className="content-auto relative z-10 mt-12 max-w-3xl mx-auto flex flex-col gap-4">
          <h1 className="text-4xl sm:text-7xl mt-4 font-semibold text-[#4E3960] flex items-center gap-8">
            {about.philosophyHeading1}
            <br />
            {about.philosophyHeading2}
          </h1>
          {about.principles.map((principle, index) => (
            <div key={principle.title} className="contents">
              <h2 className="text-2xl font-semibold text-[#4E3960] mt-16">
                <sup>
                  {String(index + 1).padStart(2, "0")}&ensp;—&emsp;
                </sup>
                {principle.title}
              </h2>
              <p className="text-[#4E3960]">{principle.body}</p>
            </div>
          ))}
        </div>
        <ParallaxCircles
          circles={[
            {
              position: "top",
              side: "left",
              offset: "-20%",
              speed: 0.1,
              zIndex: 0,
              color: "#efe4f1",
            },
            {
              position: "bottom",
              side: "right",
              offset: "-15%",
              speed: 0.5,
              zIndex: 0,
              color: "#efe4f1",
            },
          ]}
        />
      </main>
      <section
        id="stack"
        className="content-auto bg-[#2A1F33] py-20 md:py-40 md:rounded-br-[128px] md:rounded-bl-[128px]"
      >
        <div className="max-w-5xl px-8 mx-auto flex gap-10 max-md:flex-wrap">
          <div className="min-md:flex-1 w-full">
            <h2 className="md:text-[10vw] text-6xl font-bold text-[#1B0E26] tracking-tighter">
              {about.stackHeading}
            </h2>
          </div>
          <Stack />
        </div>
      </section>
      <Footer />
    </>
  );
}
