"use client";
import Link from "next/link";
import { useMemo } from "react";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbItem {
  key: string;
  title: string;
  path?: string;
}

interface BreadcrumbsProps {
  data: Array<{
    children?: BreadcrumbItem[];
  }>;
  paramsKey: string;
}

export default function Breadcrumbs({ data, paramsKey }: BreadcrumbsProps) {
  const breadcrumbItems = useMemo(() => {
    const result: BreadcrumbItem[] = [];
    data.forEach((val) => {
      if (val.children) {
        val.children.forEach((item) => {
          if (item.key === paramsKey) {
            result.push(item);
          }
        });
      }
    });
    return result;
  }, [data, paramsKey]);

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        {breadcrumbItems.map((item, index) => (
          <li
            key={item.key}
            className={index === breadcrumbItems.length - 1 ? styles.active : ""}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
} 