"use client";

import { Header } from "@/app/components/common/Header";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyMetaProps {
  articleTitle?: string;
  heroImageSrc: string;
  heroImageAlt: string;
  clientName: string;
  year: string;
  role: string;
  stack: string[];
  themes: string[];
  h1Title: string;
  introductionText: string;
  timeline: string;
  link?: string;
}

export const CaseStudyMeta = ({
  articleTitle,
  heroImageSrc,
  heroImageAlt,
  clientName,
  year,
  role,
  stack,
  themes,
  h1Title,
  introductionText,
  timeline,
  link,
}: CaseStudyMetaProps) => {
  return (
    <>
      <section className="animate-in fade-in duration-1000 relative flex flex-col items-center justify-center overflow-hidden sm:min-h-[300px] h-[200px] sm:h-[50vh]">
        <Header type="article" articleTitle={articleTitle} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/0 z-10">
          <div className="h-full w-full"></div>
        </div>
        <img
          src={heroImageSrc}
          alt={heroImageAlt}
          className="absolute top-1/2 left-0 w-full h-full object-cover -translate-y-1/2"
        />
      </section>
      <section className="relative bg-white p-5 sm:p-10">
        <div className="flex max-lg:flex-col max-w-6xl mx-auto">
          <div className="meta max-sm:[&>*]:w-full max-lg:[&>*]:w-1/2 flex flex-col max-lg:flex-row max-lg:gap-y-2 lg:gap-3 w-full lg:w-[330px] max-lg:flex-wrap max-lg:items-start shrink-0 h-fit p-12 lg:-mt-[25vh] bg-[#F7F4F8] rounded-[32px] z-10">
            <h4 className="u-stack-label text-[#4E3960]">Client</h4>
            <p>{clientName}</p>
            <h4 className="u-stack-label mt-6 sm:max-lg:mt-0 text-[#4E3960]">
              Year
            </h4>
            <p>{year}</p>
            <h4 className="u-stack-label mt-6 sm:max-lg:mt-0 text-[#4E3960]">
              Role
            </h4>
            <p>{role}</p>
            <h4 className="u-stack-label mt-6 sm:max-lg:mt-0 text-[#4E3960]">
              Stack
            </h4>
            <p>{stack.join(", ")}</p>
            <h4 className="u-stack-label mt-6 mb-2 sm:max-lg:mt-0 text-[#4E3960]">
              Themes
            </h4>
            <div className="flex flex-wrap gap-2">
              {themes.map((theme) => (
                <span
                  key={theme}
                  className="px-3 py-1 border border-[#4E3960] capitalize text-[#4E3960] rounded-full text-sm font-semibold"
                >
                  {theme}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full px-0 pt-16 lg:px-16 lg:pb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              {h1Title}
            </h1>
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className="u-stack-label text-[#4E3960] opacity-50">
                Timeline:&nbsp;<span>{timeline}</span>
              </p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-2 items-center text-purple-600 hover:text-purple-700 text-sm"
                >
                  {link.replace(/^https:\/\//, "")}
                  <div className="w-4 h-4 relative overflow-hidden">
                    <ArrowUpRight className="w-4 h-4 text-purple-600 absolute top-0 left-0 group-hover:translate-x-4 group-hover:-translate-y-4 transition-all duration-200 ease-in" />
                    <ArrowUpRight className="absolute transition-all duration-200 ease-in -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 w-4 h-4 text-purple-600 top-0 left-0" />
                  </div>
                </a>
              )}
            </div>
            <div>
              {introductionText.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  <i>{paragraph}</i>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
