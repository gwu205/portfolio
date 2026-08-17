"use client";

import { CaseStudyMeta } from "@/app/components/article/CaseStudyMeta";
import { Footer } from "@/app/components/common/Footer";
import { CaseStudy } from "@/app/content/types";
import { BlockRenderer } from "./BlockRenderer";

export function CaseStudyView({ content }: { content: CaseStudy }) {
  return (
    <>
      <CaseStudyMeta {...content.meta} />
      <main className="article">
        <div className="content">
          <BlockRenderer blocks={content.blocks} />
        </div>
      </main>
      <Footer type="article" />
    </>
  );
}
