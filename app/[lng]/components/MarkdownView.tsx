"use client";
import markdownit from "markdown-it";
import { useRef } from "react";
const md = markdownit();
export default function MarkdownView({ content }: { content: string }) {
  const mkDiv = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={mkDiv}
      className="overflow-y-auto"
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    ></div>
  );
}
