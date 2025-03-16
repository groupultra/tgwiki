"use client";
import { useState } from "react";
import SidebarItem from "./SlidebarItem";

function NavComponent({ data, lng }: { data: any; lng: string }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className="w-64 bg-grey-100 h-screen p-4">
      <nav>
        <ul key={"nav"}>
          {data.map((item, index) => (
            <SidebarItem
              key={item.key}
              icon={item.icon}
              title={item.title}
              childrenItem={item.children}
              isActive={selectedIndex === index}
              hasSubmenu={item.children.length > 0}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default NavComponent;
