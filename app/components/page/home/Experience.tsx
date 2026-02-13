"use client";

interface ExperienceProps {
  yearsSince2017: number;
}

export const Experience = ({ yearsSince2017 }: ExperienceProps) => {
  return (
    <div className="max-w-5xl px-8 mx-auto flex flex-col gap-10 font-light">
      <h2 className="w-full text-sm font-extrabold text-white uppercase tracking-[0.15rem] flex items-center">
        <span>Experience</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h2>
      <p className="text-white">
        A multidisciplinary designer - born and raised in{" "}
        <i>Melbourne, Australia</i>, now based in <i>Tokyo</i>. Over the past{" "}
        {yearsSince2017}+ years, I've worked with startups and growing teams to
        design and ship digital products. Experienced in SaaS and B2B workflows,
        I've excelled at the forefront of design production and operations for
        agile product development teams.
      </p>
      <h6 className="pl-[8%] w-full text-sm font-extrabold text-white uppercase tracking-[0.15rem] flex items-center">
        <span>Present</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <p className="pl-[8%] text-white">UX Designer — Sollective (HR Tech)</p>
      <h6 className="pl-[16%] w-full text-sm font-extrabold text-white uppercase tracking-[0.15rem] flex items-center">
        <span>2020</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <p className="pl-[16%] text-white">
        Senior UX Designer — Crowd Cast (FinTech)
      </p>
      <h6 className="pl-[24%] w-full text-sm font-extrabold text-white uppercase tracking-[0.15rem] flex items-center">
        <span>2017</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <p className="pl-[24%] text-white">
        Graphic Designer & Front-End Developer — Wisenet Information Systems
        (EdTech)
      </p>
      <h6 className="pl-[32%] w-full text-sm font-extrabold text-white uppercase tracking-[0.15rem] flex items-center">
        <span>2015</span>
        <span className="ml-4 flex-1 h-px bg-white"></span>
      </h6>
      <p className="ml-[32%] text-white">
        Bachelor of Design (Digital Media) — RMIT University
      </p>
    </div>
  );
};
