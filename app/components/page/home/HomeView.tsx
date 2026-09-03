"use client";

import { Footer } from "../../common/Footer";
import { StickyNav } from "../../common/StickyNav";
import { About } from "./About";
import { Hero } from "./Hero";
import { Works } from "./Works";

export function HomeView() {
  return (
    <>
      <Hero />
      <main
        id="work"
        data-nav-surface="light"
        className="w-full relative z-10 bg-[#DAD6DB]"
      >
        <Works />
      </main>
      <section
        id="about"
        data-nav-surface="light"
        className="w-full relative z-10 bg-[#DAD6DB]"
      >
        <About />
      </section>
      <Footer />
      <StickyNav />
    </>
  );
}
