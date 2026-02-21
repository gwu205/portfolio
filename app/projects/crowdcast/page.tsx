"use client";

import { CaseStudyMeta } from "@/app/components/article/CaseStudyMeta";
import { Footer } from "@/app/components/common/Footer";
import Image from "next/image";

const themes = [
  "Branding",
  "Visual identity",
  "Logo design",
  "Web design",
  "Webflow development",
];

export default function Page() {
  return (
    <>
      <CaseStudyMeta
        articleTitle="Brand Renewal"
        heroImageSrc="/images/projects/crowdcast.jpg"
        heroImageAlt="Crowdcast website"
        clientName="Crowd Cast"
        year="2022"
        role="Product Designer"
        stack={["Figma", "Webflow"]}
        themes={themes}
        h1Title="Renewing the Corporate Brand for a Cashless Future"
        timeline="6 weeks"
        introductionText={`Crowd Cast develops financial solutions for small-to-medium enterprises and aims to bring their internal accounting infrastructure paperless and up-to-date with the modern age in Japan.\n\nWhen I joined this early-stage startup, the company had minimal design direction and very few existing visual assets. As the business grew, there was a clear need for a more stable, scalable visual identity.`}
      />
      <main className="article">
        <div className="content">
          <h2>Rebuilding the Logo and Visual Assets</h2>
          <p>
            When I joined this early-stage startup, the company had minimal
            design direction and very few existing visual assets. As the
            business grew, there was a clear need for a more stable, scalable
            visual identity. Recognising this, I took the initiative to develop
            an updated brand image and a comprehensive set of visual assets that
            could evolve with the company's needs.
          </p>
          <p>
            I started with the original logo as a foundation and rebuilt it
            using a geometric grid system to enhance consistency and legibility
            across various sizes and applications. The refined logo retains the
            spirit of the original design but is more adaptable for both digital
            and print media. The brand mark itself was inspired by the concept
            of unity, aligning with the company's motto:{" "}
            <i>"Power to the Crowds"</i>. By softening sharp angles and refining
            the asymmetrical shape, I improved the logo's visual impact, making
            it both modern and more representative of the company's core values.
          </p>
          <Image
            src="/images/projects/cc_logo.jpg"
            height={1080}
            width={1920}
            alt="New logo"
            className="image"
          />
          <Image
            src="/images/projects/cc_brand.jpg"
            height={1080}
            width={1920}
            alt="Visual assets"
            className="image"
          />
          <h2>Refreshing the Website</h2>
          <p>
            The corporate website needed a refresh to better reflect the
            company's growing professionalism and its personable, people-first
            culture. I wanted the website to not only communicate the company's
            story but also build trust with visitors, whether they were
            potential clients, partners, or employees.
          </p>
          <p>
            I began by researching competitors and similar companies in the
            industry to understand best practices and how to position the
            company uniquely within its market. The landing page was designed to
            place both the products and the people at the forefront, showcasing
            the team's passion and expertise. By integrating more engaging
            imagery, clear messaging, and user-centered navigation, I aimed to
            make the site both visually appealing and intuitive to navigate,
            while also ensuring it conveyed the company's mission and values
            effectively.
          </p>
          <Image
            src="/images/projects/cc_website.png"
            height={3219}
            width={2048}
            alt="Website"
            className="image"
          />
        </div>
      </main>
      <Footer type="article" />
    </>
  );
}
