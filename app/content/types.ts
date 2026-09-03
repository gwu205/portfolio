/** Inline markup subset: **bold**  *italic*  [label](https://example.com) */
export type RichText = string;

export type ListItem = RichText | { text: RichText; items: RichText[] };

export type Block =
  | { type: "h2"; text: RichText }
  | { type: "h3"; text: RichText }
  | { type: "h4"; text: RichText }
  | { type: "p"; text: RichText; variant?: "subheading" }
  | { type: "ul"; items: ListItem[] }
  | { type: "ol"; items: ListItem[] }
  | {
      type: "image";
      src: string;
      alt: string;
      width: number;
      height: number;
    }
  | { type: "video"; src: string; background?: string; audio?: boolean }
  | { type: "embed"; src: string; title: string }
  | { type: "aside"; lead: RichText; highlight: RichText };

export interface CaseStudy {
  card: {
    title: string;
    /** Overrides meta.clientName. */
    client?: string;
    skills: string[];
    imgSrc?: string;
    videoSrc?: string;
  };
  meta: {
    articleTitle: string;
    heroImageSrc: string;
    heroImageAlt: string;
    clientName: string;
    year: string;
    role: string;
    stack: string[];
    themes: string[];
    h1Title: string;
    timeline: string;
    link?: string;
    introduction: string[];
  };
  seo: {
    title: string;
    description: string;
  };
  blocks: Block[];
}
