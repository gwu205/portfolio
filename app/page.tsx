"use client";

import { Footer } from "./components/common/Footer";
import { Experience } from "./components/page/home/Experience";
import { Hero } from "./components/page/home/Hero";
import { Skills } from "./components/page/home/Skills";
import { Ticker } from "./components/page/home/Ticker";
import { Works } from "./components/page/home/Works";

export default function Page() {
  const year = new Date().getFullYear();
  const yearsSince2017 = year - 2017;
  return (
    <>
      <Hero />
      <main id="work" className="w-full relative z-10 bg-white">
        <Works />
      </main>
      <section className="bg-[#2A1F33] py-4">
        <Ticker />
      </section>
      <section className="bg-[#2A1F33]">
        <div className="flex justify-center items-start mx-auto max-w-5xl p-8 gap-8">
          <Skills />
        </div>
      </section>
      <section className="bg-[#2A1F33] pt-12 pb-40 md:rounded-br-[128px] md:rounded-bl-[128px]">
        <Experience yearsSince2017={yearsSince2017} />
      </section>
      <Footer year={year} />
    </>
  );
}
