import Image from "next/image";
import { Footer } from "../components/common/Footer";
import { ParallaxCircles } from "../components/common/ParallaxCircles";
import { Hero } from "../components/page/about/Hero";
import { Stack } from "../components/page/about/Stack";

export default function Page() {
  return (
    <>
      <Hero />
      <main className="w-full relative z-10 bg-white p-8 max-md:py-24 md:p-24">
        <div className="z-10 relative w-full max-w-3xl mx-auto p-12 bg-[#F7F4F8] rounded-[32px]">
          <Image
            src="/images/avatar.jpeg"
            alt="Geoffrey Wu"
            width={64}
            height={64}
            className="rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-white"
          />
          <p className="text-[#4E3960] mb-4">
            I design digital products that are clear to use, maintainable for
            teams, and grounded in real business goals. With a background in
            product design, UI/motion, and front-end engineering, I move
            comfortably between Figma, code, and conversations with stakeholders
            to keep design and implementation aligned.
          </p>
          <p className="text-[#4E3960]">
            Most of my work sits at the intersection of brand/marketing, B2B
            SaaS, and design systems, helping teams turn complex requirements
            into simple, intentional experiences. I studied digital media
            design, have spent time in both Australia and Japan, working mostly
            with startups and small teams. With a firm grasp on both local
            Western/Asian markets, I'm able to navigate the nuances of each and
            excel in environments where messy problem spaces need to become
            clear, shippable products.
          </p>
        </div>
        <div className="relative z-10 mt-12 max-w-3xl mx-auto flex flex-col gap-4">
          <h1 className="text-4xl font-semibold text-[#4E3960] flex items-center gap-8">
            Design Philosophy
            <svg
              width="120"
              height="8"
              viewBox="0 0 120 8"
              className="flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="squiggleGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#4E3960" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#4E3960" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,4 Q10,2 20,4 T40,4 T60,4 T80,4 T100,4 T120,4"
                stroke="url(#squiggleGradient)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </h1>
          <h2 className="text-2xl font-semibold text-[#4E3960] mt-16">
            <sup>01&ensp;—&emsp;</sup>Systems first.
          </h2>
          <p className="text-[#4E3960]">
            A good interface is more than a single screen - it’s a system of
            components, patterns, and rules that teams can understand and build
            on. I focus on making design decisions reusable, consistent, and
            easy to extend, so products stay coherent as they grow.
          </p>
          <h2 className="text-2xl font-semibold text-[#4E3960] mt-16">
            <sup>02&ensp;—&emsp;</sup>Clarity over cleverness.
          </h2>
          <p className="text-[#4E3960]">
            Whether it’s dense tables, forms, or dashboards, I prioritise
            readability, hierarchy, and considered interactions that support
            comprehension. Every element on the screen should have a clear
            purpose, and every interaction should be predictable. I focus on
            reducing cognitive load and making the user’s journey obvious and
            effortless.
          </p>
          <h2 className="text-2xl font-semibold text-[#4E3960] mt-16">
            <sup>03&ensp;—&emsp;</sup>Design and engineering as one loop.
          </h2>
          <p className="text-[#4E3960]">
            Great products come from diverse perspectives and open
            communication. I foster collaboration by documenting decisions,
            facilitating workshops, and creating shared vocabularies that help
            everyone move faster. I treat engineers as partners - I prototype in
            code when it adds value, share constraints early, and use shared
            language (tokens, variants, props) to avoid handoff friction.
          </p>
          <h2 className="text-2xl font-semibold text-[#4E3960] mt-16">
            <sup>04&ensp;—&emsp;</sup>Continuous learning.
          </h2>
          <p className="text-[#4E3960]">
            I’m always learning - from users, from data, and from the people I
            work with. I believe in iterating based on real feedback, not
            assumptions. Whether it’s A/B testing, analytics, or user research,
            I use data to guide decisions and refine the experience over time.
          </p>
          <h2 className="text-2xl font-semibold text-[#4E3960] mt-16">
            <sup>05&ensp;—&emsp;</sup>Local context, global standards.
          </h2>
          <p className="text-[#4E3960]">
            Having worked on bilingual products in Japan, I try to balance local
            expectations (language, layout, cultural nuance) with global
            usability and accessibility best practices.
          </p>
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
        className="bg-[#2A1F33] py-20 md:py-40 md:rounded-br-[128px] md:rounded-bl-[128px]"
      >
        <div className="max-w-5xl px-8 mx-auto flex gap-10 max-md:flex-wrap">
          <div className="min-md:flex-1 w-full">
            <h2 className="md:text-[10vw] text-6xl font-bold text-[#1B0E26] tracking-tighter">
              Stack
            </h2>
          </div>
          <Stack />
        </div>
      </section>
      <Footer year={new Date().getFullYear()} />
    </>
  );
}
