"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import styles from "./DocNavigation.module.css";

interface DocNavigationProps {
  data: Array<{
    children?: Array<{
      key: string;
      title: string;
    }>;
  }>;
  currentKey: string;
  lng: string;
}

export default function DocNavigation({ data, currentKey, lng }: DocNavigationProps) {
  // 将所有文档项展平为一个数组
  const allDocs = useMemo(() => {
    const docs: Array<{ key: string; title: string }> = [];
    data.forEach((section) => {
      if (section.children) {
        docs.push(...section.children);
      }
    });
    return docs;
  }, [data]);

  // 找到当前文档的索引
  const currentIndex = useMemo(() => {
    return allDocs.findIndex((doc) => doc.key === currentKey);
  }, [allDocs, currentKey]);

  // 获取上一篇和下一篇文档
  const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return (
    <div className={styles.navigation}>
      {prevDoc ? (
        <Link href={`/docs/${prevDoc.key}?lng=${lng}`} className={styles.navLink}>
          <ChevronLeft size={16} />
          <span>{prevDoc.title}</span>
        </Link>
      ) : (
        <div className={styles.navLinkDisabled}>
          <ChevronLeft size={16} />
          <span>上一篇</span>
        </div>
      )}
      
      {nextDoc ? (
        <Link href={`/docs/${nextDoc.key}?lng=${lng}`} className={styles.navLink}>
          <span>{nextDoc.title}</span>
          <ChevronRight size={16} />
        </Link>
      ) : (
        <div className={styles.navLinkDisabled}>
          <span>下一篇</span>
          <ChevronRight size={16} />
        </div>
      )}
    </div>
  );
} 