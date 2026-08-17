import { Fragment, ReactNode } from "react";
import { RichText as RichTextString } from "@/app/content/types";

const TOKEN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

export function renderRichText(text: RichTextString): ReactNode {
  const parts = text.split(TOKEN).filter((part) => part !== "");

  return parts.map((part, index) => {
    const key = `${index}-${part.slice(0, 8)}`;

    if (part.startsWith("**") && part.endsWith("**")) {
      return <b key={key}>{part.slice(2, -2)}</b>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <i key={key}>{part.slice(1, -1)}</i>;
    }

    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    if (link) {
      const [, label, href] = link;
      const isExternal = href.startsWith("http");
      return (
        <a
          key={key}
          href={href}
          {...(isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {label}
        </a>
      );
    }

    return <Fragment key={key}>{part}</Fragment>;
  });
}

export function RichText({ text }: { text: RichTextString }) {
  return <>{renderRichText(text)}</>;
}
