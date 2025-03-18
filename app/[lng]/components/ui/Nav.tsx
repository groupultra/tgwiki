"use client";
import Link from "next/link";
import { useState } from "react";

function NavComponent({
  data,
  lng,
  paramsKey,
}: {
  data: any;
  lng: string;
  paramsKey: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="w-64 bg-grey-100 h-screen">
      <nav>
        <ul className="">
          {data.map((item: any, index: number) => (
            <li className={`mb-2`} key={item.key || index}>
              <p className={`flex items-center p-2 hover:bg-gray-20`}>
                {item.icon}
                <span className="ml-2">{item.title}</span>
                {item.children && item.children.length > 0 && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </p>
              {item.children && item.children.length > 0 && (
                <ul key="childrenUl" className="ml-3">
                  {item.children.map((child: any) => (
                    <li key={child.key}>
                      <Link
                        href={`/${lng}/docs/${child.key}`}
                        className="flex items-center p-2 hover:bg-gray-200"
                      >
                        <span className="ml-2">{child.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavComponent;
