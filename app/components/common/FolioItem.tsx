import Image from "@/node_modules/next/image";

type ItemProps = {
  title: string;
  client: string;
  skills: string[];
  link: string;
  img_src?: string;
  video_src?: string;
};

const FolioItem: React.FC<ItemProps> = ({
  title,
  client,
  skills,
  link,
  img_src,
  video_src,
}) => {
  return (
    <div className="group rounded-3xl overflow-hidden">
      <a href={link} className="relative flex flex-col gap-2">
        <div className="opacity-0 group-hover:opacity-100 bg-black/80 backdrop-blur-sm text-center absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center p-6 transition-opacity duration-700 z-10">
          <h2 className="text-5xl tracking-tight leading-[1.15] transition-all duration-700 font-medium font-semibold text-white">
            {title} <span className="text-gray-500">for {client}</span>
          </h2>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-white/20 text-white text-sm px-3 py-1 rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        {video_src ? (
          <video
            src={video_src}
            autoPlay
            muted
            loop
            playsInline
            className="aspect-square object-cover w-full group-hover:scale-[1.15] transition-scale duration-700"
          />
        ) : (
          <Image
            src={img_src || ""}
            alt={title}
            width={1200}
            height={1200}
            className="aspect-square object-cover object-left group-hover:scale-[1.15] transition-scale duration-700"
          />
        )}
      </a>
    </div>
  );
};

export default FolioItem;
