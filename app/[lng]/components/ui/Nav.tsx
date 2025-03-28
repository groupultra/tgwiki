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
  // 使用对象来跟踪每个项目的折叠状态
  const [collapsedStates, setCollapsedStates] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleCollapse = (index: number) => {
    setCollapsedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-60 bg-grey-100 h-screen border-r border-gray-200 overflow-auto text-black">
      <nav className="pt-3">
        <ul className="">
          {data.map((item: any, index: number) => (
            <li className={`mb-2`} key={item.key || index}>
              <p
                className={`flex items-center p-2 hover:bg-gray-20 justify-between cursor-pointer`}
              >
                <div className="flex items-center min-w-0 flex-1">
                  {item.icon}
                  <span className="ml-2 truncate">{item.title}</span>
                </div>
                {item.children && item.children.length > 0 && (
                  <span
                    onClick={() => toggleCollapse(index)}
                    className="flex-shrink-0 transition-transform duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-5 w-5 transform transition-transform duration-200 ${
                        collapsedStates[index] ? "rotate-180" : ""
                      }`}
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
                  </span>
                )}
              </p>
              {item.children && item.children.length > 0 && (
                <ul
                  key="childrenUl"
                  className={`ml-3 overflow-hidden transition-all duration-200 ${
                    collapsedStates[index] ? "max-h-0" : "max-h-[500px]"
                  }`}
                >
                  {item.children.map((child: any) => (
                    <li key={child.key}>
                      <Link
                        href={`/${lng}/docs/${child.key}`}
                        className="flex items-center p-2 hover:bg-gray-200"
                      >
                        <span className="ml-2 truncate">{child.title}</span>
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
