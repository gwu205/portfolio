import Image from "@/node_modules/next/image";
import FolioItem from "./components/folio-item";

const LiIcon = ({ size = 14, color = "#000000" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
  >
    <path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zM8.951 9.404H6.165V17.5H8.95V9.404zm6.841-.192c-1.324 0-1.993.629-2.385 1.156l-.127.181V9.403h-2.786l.01.484c.006.636.007 1.748.005 2.93l-.015 4.683h2.786v-4.522c0-.242.018-.484.092-.657.202-.483.66-.984 1.43-.984.955 0 1.367.666 1.408 1.662l.003.168V17.5H19v-4.643c0-2.487-1.375-3.645-3.208-3.645zM7.576 5.5C6.623 5.5 6 6.105 6 6.899c0 .73.536 1.325 1.378 1.392l.18.006c.971 0 1.577-.621 1.577-1.398C9.116 6.105 8.53 5.5 7.576 5.5z" />
  </svg>
);

const ExternalLink = ({ size = 18, color = "currentColor" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="square"
    strokeLinejoin="round"
    className="inline ml-[1ch] mb-1"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
    </g>
  </svg>
);

export default function Page() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="w-full flex items-start justify-center relative overflow-hidden dark:bg-slate-900">
        <section className="overflow-y-auto snap-mandatory snap-y text-center text-gray-900 px-8 relative z-10 max-w-4xl flex flex-col gap-24">
          <div className="min-h-screen flex flex-col justify-center gap-6 sm:gap-10">
            <Image
              src="/images/wuxdlogo.png"
              height={80}
              width={80}
              alt="Logo"
              className="mx-auto sm:-ml-2 animate-in fade-in slide-in-from-top-10 duration-1000 ease-out w-14 h-14 sm:w-24 sm:h-24"
            />
            <h1 className="text-center sm:text-left animate-in fade-in zoom-in-105 ease-out duration-1000 mb-0 sm:mb-2 tracking-tight text-2xl sm:text-6xl font-normal leading-tight text-left font-sans bg-gradient-to-b from-slate-900 dark:from-slate-100 to-slate-400 dark:to-slate-400 text-transparent bg-clip-text pb-3 cursor-default">
              <span className="font-medium">Geoffrey Wu</span>
              &nbsp;is a&nbsp;
              <br />
              <span className="hover:font-extrabold ease-out transition-all">
                product designer
              </span>
              ,&nbsp;
              <br />
              <span className="hover:font-extrabold ease-out transition-all">
                user experience strategist
              </span>
              <br />
              and&nbsp;
              <span className="hover:font-extrabold ease-out transition-all break-all">
                systems innovator
              </span>
              .
            </h1>

            <p className="text-center sm:text-left animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out text-lg md:text-2xl text-gray-800 mb-8 text-left text-slate-600 dark:text-slate-400">
              I'm based in{" "}
              <span className="text-red-500 p-1 bg-red-50 rounded-lg font-light hover:bg-red-100">
                Tokyo
              </span>{" "}
              and currently a&nbsp;
              <span className="text-sky-600 p-1 bg-sky-50 rounded-lg font-light hover:bg-sky-100">
                Product Designer
              </span>
              &nbsp;at&nbsp;
              <a
                href="https://www.sollective.jp"
                target="_blank"
                className="group text-violet-600 pointer hover:text-violet-800 hover:underline dark:text-purple-400 hover:pl-2 transition-all ease-out"
                rel="noopener noreferrer"
              >
                Sollective&nbsp;
                <span className="opacity-100 sm:opacity-0 group-hover:opacity-100 ml-0 sm:-ml-3 group-hover:ml-0 transition-all ease-out">
                  ↗
                </span>
              </a>
            </p>
            <div className="sm:hidden block animate-bounce">↓</div>
          </div>
          <div className="flex flex-col gap-7">
            <h3 className="w-full h-auto text-left font-light text-xs uppercase tracking-widest relative after:content-[''] after:bg-slate-300 after:w-full after:h-px after:absolute after:-top-3 after:left-0">
              What I do
            </h3>
            <div className="flex flex-col md:flex-row items-center">
              <Image
                src="/images/avatar.png"
                height={100}
                width={100}
                alt="Geoffrey Wu"
                className="md:mr-2"
              />
              <div className="flex flex-col md:flex-row items-center">
                <svg
                  className="md:-rotate-90 -mb-[2px] md:-mr-[4px] z-[1]"
                  width="25"
                  height="22"
                  viewBox="0 0 25 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white"
                    d="M12.5 1L24.1913 21.25H0.808657L12.5 1Z"
                  />
                  <path className="stroke-slate-300" d="M24 21L12.5 1L1 21" />
                </svg>
                <p className="w-full relative max-w-xl text-left h-auto text-lg leading-relaxed font-light bg-white p-4 border border-slate-300 rounded-lg">
                  As a full stack designer with&nbsp;
                  {new Date().getFullYear() - 2017}+ years of experience, I
                  specialise in shaping product vision, streamlining design
                  operations, and building products from 0 to 1 to deliver
                  tangible business impact.
                </p>
              </div>
            </div>
            <div className="flex flex-row flex-wrap justify-center md:justify-start gap-[10px] w-full">
              <p className="border border-current inline-block bg-fuchsia-50 py-2 px-3 rounded-lg font-bold text-fuchsia-700 hover:scale-105 transition-transform select-none">
                🎨 &nbsp;Web / UI Design
              </p>
              <p className="border border-current inline-block bg-indigo-50 py-2 px-3 rounded-lg font-bold text-indigo-700 hover:scale-105 transition-transform select-none">
                🧑🏻‍💻 &nbsp;Software Development
              </p>
              <p className="border border-current inline-block bg-sky-50 py-2 px-3 rounded-lg font-bold text-sky-700 hover:scale-105 transition-transform select-none">
                💎 &nbsp;User Experience
              </p>
              <a
                href="https://www.linkedin.com/in/geoffrey-wu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center w-fit gap-2 py-2 pr-3 pl-2 text-slate-500 border rounded-lg transition-all ease-in-out duration-300 bg-slate-50 border-current hover:bg-slate-50 hover:text-slate-800 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="bg-white text-sky-700 rounded-full p-1">
                  <LiIcon color="currentColor" />
                </div>
                <span className="text-md">
                  View my CV / Resume
                  <ExternalLink />
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-7 items-start pb-24">
            <h3 className="w-full h-auto text-left font-light text-xs uppercase tracking-widest relative after:content-[''] after:bg-slate-300 after:w-full after:h-px after:absolute after:-top-3 after:left-0">
              Selected Works
            </h3>
            <FolioItem
              title="Invoice Builder"
              client="FreelanceOS"
              description="Designing an invoice creation tool made for freelance workers in Japan"
              img_src="/images/projects/invoices.jpg"
              link="/projects/invoice-builder"
            />
            <FolioItem
              title="Platform Navigation"
              client="Sollective"
              description="Adapting platform navigation to a rapidly changing platform"
              img_src="/images/projects/navigation.jpg"
              link="/projects/platform-navigation"
            />
            <FolioItem
              title="Product Website"
              client="Sollective"
              description="Landing page design for an all-in-one freelancer community"
              img_src="/images/projects/sollective.jpg"
              link="/projects/site-redesign"
            />
            <FolioItem
              title="Web App Redesign"
              client="Staple"
              description="Frontend overhaul for a corporate payments web application"
              img_src="/images/projects/staplecard.jpg"
              link="/projects/staple"
            />
            <FolioItem
              title="Corporate Brand"
              client="Crowd Cast"
              description="Refresh of the corporate brand for a FinTech startup"
              img_src="/images/projects/crowdcast.jpg"
              link="/projects/crowdcast"
            />
          </div>
        </section>
      </div>
      <footer className="p-3 w-full">
        <p className="text-center text-xs text-slate-400">
          © Copyright Geoffrey Wu {year}&emsp;•&emsp;Interested in working
          together? Say{" "}
          <a
            className="underline hover:text-slate-600"
            href="mailto:hello@wuxdesign.dev"
          >
            hello@wuxdesign.dev
          </a>
        </p>
      </footer>
    </>
  );
}
