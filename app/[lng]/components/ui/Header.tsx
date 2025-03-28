"use client";
import { ChevronDown, Languages } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { languages, languagesText } from "../../../i18n/settings";
import { cn } from "../../../lib/utils";

export const Header = ({
  navData,
  path = "",
  className = "",
}: {
  navData: any;
  path?: string;
  className?: string;
}) => {
  const [bg, setBg] = useState(true);
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", () => {
        setBg(window.scrollY < 1000);
      });
    }
  }, []);
  return (
    <header
      className={cn(
        "navbar backdrop-blur justify-between fixed top-0 shadow-xs z-10 text-black",
        className
      )}
      style={{
        backgroundColor: bg ? "transparent" : "#fff",
      }}
    >
      <div className="navbar-start w-auto z-10">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box mt-3 w-90 p-2 shadow bg-base-100"
            style={{ zIndex: 99, position: "absolute" }}
          >
            {navData.map((item: any, index: number) => (
              <li key={index}>
                <Link
                  className="text-xl hover:bg-transparent hover:border-0 hover:shadow-none px-4 flex items-center gap-2"
                  href={item.link}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link
          className="text-xl hover:bg-transparent hover:border-0 hover:shadow-none px-4 flex items-center gap-2"
          href={"/"}
        >
          <Image src="/favicon.png" width={36} height={36} alt="wikitg,logo" />
          WikiTG
        </Link>
      </div>
      <div className="hidden lg:flex lg:pl-4 shrink-0">
        <ul className="menu menu-horizontal px-1">
          {navData.map((item: any, index: number) => (
            <li key={index}>
              <Link
                className="text-base hover:bg-transparent hover:border-0 hover:shadow-none px-4 flex items-center gap-2"
                href={item.link}
              >
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end mr-4 gap-3">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost rounded-field"
          >
            <Languages />
            <ChevronDown size={18} />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content bg-base-200 rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
          >
            {languages.map((val, index) => {
              return (
                <li
                  key={index}
                  className="rounded-sm items-center text-base cursor-pointer"
                >
                  <Link
                    href={`/${val}/${path}`}
                    className="flex-row w-full flex"
                  >
                    <span className="text-gray-600 inline text-[12px] hover:bg-transparent active:bg-transparent">
                      {val.substring(0, 2).toLocaleUpperCase()}
                    </span>

                    {languagesText[index]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <ThemeController /> */}
      </div>
    </header>
  );
};
