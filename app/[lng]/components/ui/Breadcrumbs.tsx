"use client";
import Link from "next/link";
import { useMemo } from "react";
export default function Breadcrubs({
  data,
  paramsKey,
}: {
  data: any;
  paramsKey: string;
}) {
  const liData = useMemo(() => {
    const result: any = [];
    data.map((val: any) => {
      if (val.children) {
        val.children.map((val2: any) => {
          if (val2.key === paramsKey) {
            result.push(val2);
          }
        });
      }
    });
    return result;
  }, [data, paramsKey]);
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href={`/`}>Home</Link>
        </li>
        {liData.map((val: any, index: any) => (
          <li
            key={val?.key}
            className={`${index === liData.length - 1 ? "text-blue-600" : ""}`}
          >
            {val?.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
