"use client";
import markdownit from "markdown-it";
import { useRef } from "react";
import "./markdown.css";
const md = markdownit();
export default function MarkdownView({ content }: { content: string }) {
  const mkDiv = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={mkDiv}
      className="overflow-y-auto markdown-body"
      dangerouslySetInnerHTML={{ __html: md.render(content) }}
    ></div>
  );
}
