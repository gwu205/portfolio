import Image from "@/node_modules/next/image";
import FolioItem from "./components/folioItem";

const ReadIcon = ({ size = 14, color = "#000000" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.4673 3.06641L6.29148 1.26953C5.96504 1.21209 5.62915 1.28664 5.35768 1.47681C5.0862 1.66697 4.90137 1.95717 4.84382 2.28359L2.5196 15.4867C2.49117 15.6485 2.4949 15.8142 2.53056 15.9745C2.56622 16.1348 2.63313 16.2866 2.72745 16.421C2.82176 16.5554 2.94165 16.67 3.08025 16.7581C3.21886 16.8462 3.37346 16.9061 3.53523 16.9344L13.711 18.7313C13.8728 18.7598 14.0387 18.7562 14.1991 18.7205C14.3595 18.6849 14.5113 18.6181 14.6458 18.5237C14.7803 18.4294 14.8949 18.3095 14.9831 18.1708C15.0712 18.0321 15.1311 17.8775 15.1594 17.7156L17.4837 4.5125C17.5406 4.18596 17.4655 3.85017 17.2749 3.57898C17.0843 3.3078 16.7938 3.12342 16.4673 3.06641ZM13.9266 17.5L3.75007 15.7031L6.07429 2.5L16.2501 4.29688L13.9266 17.5ZM6.97976 4.56406C7.00871 4.40092 7.10126 4.25594 7.23706 4.16101C7.37287 4.06608 7.54081 4.02896 7.70398 4.05781L14.1884 5.20234C14.3425 5.22934 14.4808 5.31315 14.5761 5.43723C14.6715 5.5613 14.7168 5.71661 14.7031 5.87247C14.6895 6.02833 14.6179 6.1734 14.5025 6.27903C14.387 6.38466 14.2362 6.44316 14.0798 6.44297C14.0431 6.44292 14.0065 6.43978 13.9704 6.43359L7.48601 5.28828C7.32286 5.25933 7.17789 5.16678 7.08296 5.03098C6.98802 4.89517 6.9509 4.72723 6.97976 4.56406ZM6.54695 7.02656C6.56119 6.94571 6.59122 6.86846 6.63533 6.79921C6.67944 6.72997 6.73676 6.6701 6.80401 6.62301C6.87127 6.57593 6.94714 6.54255 7.02729 6.5248C7.10745 6.50704 7.19032 6.50525 7.27116 6.51953L13.7555 7.66484C13.9107 7.6908 14.0504 7.77434 14.1467 7.89878C14.243 8.02321 14.2888 8.1794 14.275 8.33614C14.2612 8.49288 14.1888 8.63864 14.0722 8.74432C13.9557 8.85001 13.8035 8.90783 13.6462 8.90625C13.6092 8.90632 13.5723 8.90292 13.536 8.89609L7.05163 7.75156C6.88861 7.72226 6.74389 7.62944 6.64926 7.4935C6.55463 7.35756 6.51783 7.18962 6.54695 7.02656ZM6.11335 9.48828C6.14285 9.32557 6.23562 9.18117 6.37137 9.08672C6.50711 8.99227 6.67475 8.95547 6.83757 8.98438L10.0782 9.55391C10.2322 9.58089 10.3706 9.66465 10.4659 9.78864C10.5612 9.91263 10.6065 10.0678 10.593 10.2236C10.5795 10.3794 10.508 10.5245 10.3927 10.6302C10.2775 10.7359 10.1268 10.7945 9.97038 10.7945C9.93373 10.7945 9.89713 10.7914 9.86101 10.7852L6.61882 10.2125C6.45582 10.1834 6.31104 10.0907 6.21627 9.95496C6.1215 9.81917 6.08448 9.65133 6.11335 9.48828Z"
      fill={color}
    />
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
          <div className="min-h-screen flex flex-col justify-center gap-10">
            <h1 className="animate-in fade-in zoom-in-105 ease-out duration-1000 mb-4 tracking-tight text-5xl sm:text-7xl font-normal leading-tight text-left font-sans bg-gradient-to-b from-slate-900 dark:from-slate-100 to-slate-500 dark:to-slate-400 text-transparent bg-clip-text">
              <span className="font-normal bg-gradient-to-r from-indigo-500 dark:from-pink-300 to-blue-500 dark:to-purple-400 inline-block text-transparent bg-clip-text -mb-1 pb-1">
                Geoffrey
              </span>{" "}
              is a product designer, user experience strategist and systems
              innovator.
            </h1>

            <p className="animate-in fade-in slide-in-from-bottom-10 duration-1000 ease-out text-lg md:text-2xl text-gray-800 mb-8 text-left text-slate-600 dark:text-slate-400">
              I'm based in Tokyo and currently a Product Designer @{" "}
              <a
                href="https://www.sollective.jp"
                target="_blank"
                className="text-violet-600 pointer hover:text-violet-800 hover:underline dark:text-purple-400"
                rel="noopener noreferrer"
              >
                Sollective
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-7 items-start">
            <h3 className="w-full h-auto text-left font-light text-xs uppercase tracking-widest relative after:content-[''] after:bg-slate-300 after:w-full after:h-px after:absolute after:-top-3 after:left-0">
              What I do
            </h3>
            <div className="flex flex-col md:flex-row items-start gap-3">
              <Image
                src="/images/avatar.jpeg"
                height={80}
                width={80}
                alt="Geoffrey Wu"
                className="rounded-full mr-2"
              />
              <p className="w-full max-w-xl text-left h-auto text-lg leading-relaxed font-light">
                As a full stack designer with 7+ years of experience, I
                specialise in shaping product vision, streamlining design
                operations, and building products from 0 to 1 to deliver
                tangible business impact.
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-[10px] w-full">
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
                href="https://read.cv/geoffreywu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center w-fit gap-3 py-2 pr-3 pl-2 text-slate-500 border rounded-lg transition-all ease-in-out duration-300 bg-slate-50 border-current hover:bg-slate-50 hover:text-slate-800 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="bg-white border rounded-full p-1">
                  <ReadIcon />
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
            href="mailto:hello@geoffreywu.digital"
          >
            hello@geoffreywu.digital
          </a>
        </p>
      </footer>
    </>
  );
}
