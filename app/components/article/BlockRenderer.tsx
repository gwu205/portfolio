"use client";

import { LightboxImage } from "@/app/components/common/LightboxImage";
import { Block, ListItem } from "@/app/content/types";
import { RichText } from "./RichText";

function ListItems({ items }: { items: ListItem[] }) {
  return (
    <>
      {items.map((item, index) => {
        if (typeof item === "string") {
          return (
            <li key={index}>
              <RichText text={item} />
            </li>
          );
        }
        return (
          <li key={index}>
            <RichText text={item.text} />
            <ul>
              {item.items.map((nested, nestedIndex) => (
                <li key={nestedIndex}>
                  <RichText text={nested} />
                </li>
              ))}
            </ul>
          </li>
        );
      })}
    </>
  );
}

function BlockItem({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2>
          <RichText text={block.text} />
        </h2>
      );
    case "h3":
      return (
        <h3>
          <RichText text={block.text} />
        </h3>
      );
    case "h4":
      return (
        <h4>
          <RichText text={block.text} />
        </h4>
      );
    case "p":
      return (
        <p className={block.variant === "subheading" ? "subheading" : undefined}>
          <RichText text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul>
          <ListItems items={block.items} />
        </ul>
      );
    case "ol":
      return (
        <ol>
          <ListItems items={block.items} />
        </ol>
      );
    case "image":
      return (
        <LightboxImage
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          className="image"
        />
      );
    case "video":
      return (
        <div
          className="video-container"
          style={
            block.background ? { backgroundColor: block.background } : undefined
          }
        >
          <video
            src={block.src}
            autoPlay={block.audio ? false : true}
            muted
            loop
            playsInline={block.audio ? false : true}
            controls={block.audio ? true : false}
            className={`object-cover w-full max-w-2xl mx-auto ${
              block.background ? "border-r border-l border-black" : ""
            }`}
          />
        </div>
      );
    case "embed":
      return (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={block.src}
            title={block.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      );
    case "aside":
      return (
        <aside className="max-w-3xl bg-[#F7F4F8] rounded-lg my-8 py-7 md:py-20 px-5 md:px-12 font-medium md:font-light text-lg md:text-4xl/snug text-slate-400">
          <RichText text={block.lead} />{" "}
          <span className="text-purple-400">
            <RichText text={block.highlight} />
          </span>
        </aside>
      );
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) => (
        <BlockItem key={index} block={block} />
      ))}
    </>
  );
}
