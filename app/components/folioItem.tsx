import Image from "@/node_modules/next/image";

type ItemProps = {
  title: string;
  client: string;
  description: string;
  link: string;
  img_src: string;
};

const ArrowRightCircle = ({ size = 24, color = "currentColor" }) => (
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
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8l4 4-4 4M8 12h7" />
  </svg>
);

const FolioItem: React.FC<ItemProps> = ({
  title,
  client,
  description,
  link,
  img_src,
}) => {
  return (
    <div className="group py-3">
      <a href={link} className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-3 text-slate-600">
          <ArrowRightCircle />
          <h2 className="text-2xl text-left transition-all duration-700 font-medium group-hover:font-bold group-hover:tracking-[-0.02em]">
            {title} <span className="opacity-50">for {client}</span>
          </h2>
        </div>
        <p className="w-full text-left text-slate-500">{description}</p>
        <div className="overflow-hidden mt-5">
          <Image
            src={img_src}
            alt={title}
            width={1200}
            height={800}
            className="grayscale group-hover:scale-[1.03] group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
      </a>
    </div>
  );
};

export default FolioItem;
