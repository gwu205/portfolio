"use client";

import { getCurrentYear } from "@/app/utils/dateHelpers";
import { Footer } from "../../common/Footer";
import { Experience } from "./Experience";
import { Hero } from "./Hero";
import { Skills } from "./Skills";
import { Ticker } from "./Ticker";
import { Works } from "./Works";

export function HomeView() {
  const year = getCurrentYear();
  const yearsSince2017 = year - 2017;

  return (
    <>
      <Hero />
      <main id="work" className="w-full relative z-10 bg-white">
        <Works />
      </main>
      <section className="content-auto bg-[#2A1F33] py-4">
        <Ticker />
      </section>
      <section className="content-auto bg-[#2A1F33]">
        <div className="flex justify-center items-start mx-auto max-w-5xl p-8 gap-8">
          <Skills />
        </div>
      </section>
      <section className="content-auto bg-[#2A1F33] pt-12 pb-40 md:rounded-br-[128px] md:rounded-bl-[128px]">
        <Experience yearsSince2017={yearsSince2017} />
      </section>
      <Footer />
    </>
  );
}
