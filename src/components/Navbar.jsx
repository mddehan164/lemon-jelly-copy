import { useState } from "react";
import JellyBtn from "./JellyBtn";
import SvgBtn from "./SvgBtn";

const items = [
  { name: "Home", link: "#home", id: 1 },
  { name: "Services", link: "#services", id: 2 },
  { name: "Our Works", link: "#our-works", id: 3 },
  { name: "Contact Us", link: "#contact-us", id: 4 },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState(1);
  return (
    <nav className="w-full h-20 flex items-center justify-between px-24 bg-[rgba(245,244,244,0.03)] backdrop-blur-md fixed top-8 z-50">
      <div className="logo w-[10%]">
        <img src="src/assets/logo.webp" alt="logo" loading="lazy" />
      </div>
      <div className="items w-[60%] bg-zinc-900 flex justify-around items-center h-[3.1rem] rounded-[1.8rem] relative">
        {items.map((item) => (
          <JellyBtn
            key={item.id}
            id={item.id}
            name={item.name}
            link={item.link}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
      <div className="btn w-[20%]">
        <SvgBtn title="Get in Touch" effect={true} link={"#contact-us"} />
      </div>
    </nav>
  );
}
