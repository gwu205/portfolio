import ArticleTemplate from "@/app/components/ArticleTemplate";
import Image from "@/node_modules/next/image";

export default function Page() {
  return (
    <ArticleTemplate>
      <h1 className="article-headline">
        Renewing the corporate brand for a cashless future
      </h1>
      <div className="text-slate-400 flex flex-row gap-x-10 gap-y-0 flex-wrap">
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Discipline:</span>Branding
        </h2>
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Medium:</span>Website
        </h2>
        <h2 className="flex flex-col font-bold bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text">
          <span className="font-light text-xs">Tools:</span>Figma, Webflow
        </h2>
      </div>
      <Image
        src="/images/projects/crowdcast.jpg"
        height={1200}
        width={1800}
        alt="Crowdcast website"
        className="w-full h-auto"
      />
      <p className="italic">
        Crowd Cast develops financial solutions for small-to-medium enterprises
        and aims to bring their internal accounting infrastructure paperless and
        up-to-date with the modern age in Japan.
      </p>
      <Image
        src="/images/projects/cc_old_logo.jpg"
        height={1200}
        width={1800}
        alt="Crowdcast logo"
        className="w-full h-auto"
      />
      <Image
        src="/images/projects/cc_old_site.jpg"
        height={1200}
        width={1800}
        alt="Crowdcast site"
        className="w-full h-auto"
      />
      <p className="text-sm text-center italic">
        Logo and website before redesign
      </p>
      <h3 className="section-heading">Rebuilding the logo and visual assets</h3>
      <p>
        When I joined this early-stage startup, the company had minimal design
        direction and very few existing visual assets. As the business grew,
        there was a clear need for a more stable, scalable visual identity.
        Recognising this, I took the initiative to develop an updated brand
        image and a comprehensive set of visual assets that could evolve with
        the company’s needs.
      </p>
      <p>
        I started with the original logo as a foundation and rebuilt it using a
        geometric grid system to enhance consistency and legibility across
        various sizes and applications. The refined logo retains the spirit of
        the original design but is more adaptable for both digital and print
        media. The brand mark itself was inspired by the concept of unity,
        aligning with the company's motto: <i>"Power to the Crowds"</i>. By
        softening sharp angles and refining the asymmetrical shape, I improved
        the logo’s visual impact, making it both modern and more representative
        of the company’s core values.
      </p>
      <Image
        src="/images/projects/cc_logo.jpg"
        height={1080}
        width={1920}
        alt="New logo"
        className="w-full h-auto"
      />
      <Image
        src="/images/projects/cc_brand.jpg"
        height={1080}
        width={1920}
        alt="Visual assets"
        className="w-full h-auto"
      />
      <p className="text-sm text-center italic">
        Renewal of visual assets and documentation
      </p>
      <h3 className="section-heading">Refreshing the website</h3>
      <p>
        The corporate website needed a refresh to better reflect the company’s
        growing professionalism and its personable, people-first culture. I
        wanted the website to not only communicate the company’s story but also
        build trust with visitors, whether they were potential clients,
        partners, or employees.
      </p>
      <p>
        I began by researching competitors and similar companies in the industry
        to understand best practices and how to position the company uniquely
        within its market. The landing page was designed to place both the
        products and the people at the forefront, showcasing the team’s passion
        and expertise. By integrating more engaging imagery, clear messaging,
        and user-centered navigation, I aimed to make the site both visually
        appealing and intuitive to navigate, while also ensuring it conveyed the
        company’s mission and values effectively.
      </p>
      <Image
        src="/images/projects/cc_website.png"
        height={3219}
        width={2048}
        alt="Iterations"
        className="w-full h-auto"
      />
    </ArticleTemplate>
  );
}
