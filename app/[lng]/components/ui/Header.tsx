import Image from "next/image";
import Link from "next/link";
import ThemeController from "./ThemeController";
export const Header = ({ navData }: { navData: any }) => (
  <header className="navbar backdrop-blur justify-between sticky top-0 shadow-xs z-10">
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
          className="menu menu-sm dropdown-content rounded-box mt-3 w-100 p-2 shadow bg-base-100"
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
          {/* <li>
            <a>Item 1</a>
          </li> 
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li> */}
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
        {/* <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li> */}
      </ul>
    </div>
    <div className="navbar-end mr-4">
      <ThemeController />
    </div>
  </header>
);
