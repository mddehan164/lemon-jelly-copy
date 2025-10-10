import { useState } from "react";
import JellyBtn from "./JellyBtn";
import SvgBtn from "./SvgBtn";
import { Menu } from "lucide-react";
import SvgShape from "./SvgShape";

const items = [
  { name: "Home", link: "#home", id: 1 },
  { name: "Services", link: "#services", id: 2 },
  { name: "Our Works", link: "#our-works", id: 3 },
  { name: "Contact Us", link: "#contact-us", id: 4 },
];

export default function Navbar({ click }) {
  const [activeId, setActiveId] = useState(1);
  return (
    <nav className="w-full h-14 lg:h-20 flex items-center justify-center lg:justify-between px-5 lg:px-24 fixed top-4 lg:top-8 z-40">
      <div className="logo w-[10%] hidden lg:block ">
        <img src="src/assets/logo.webp" alt="logo" loading="lazy" />
      </div>
      <div className="w-full lg:w-[60%] 2xl:w-[40%] bg-[rgba(34,31,31,0.9)]  flex justify-between px-10 lg:px-0 lg:justify-around items-center h-[3.1rem] rounded-[1.8rem] relative">
        <div className="logo w-[18%] sm:w-[20%] md:w-[15%] lg:hidden ">
          <img src="src/assets/logo.webp" alt="logo" loading="lazy" />
        </div>

        {items.map((item) => (
          <JellyBtn
            key={item.id}
            id={item.id}
            name={item.name}
            link={item.link}
            activeId={activeId}
            setActiveId={setActiveId}
            cls={"hidden lg:flex"}
          />
        ))}

        <div className="lg:hidden w-44 h-10 flex justify-between items-center gap-3">
          <a href="#contact-us">
            <SvgShape effect={true} />
          </a>
          <JellyBtn
            name={<Menu size={18} onClick={click} className="cursor-pointer" />}
            id={1}
            activeId={activeId}
            setActiveId={setActiveId}
            cls={"flex w-10 h-10 "}
          />
        </div>
      </div>
      <a href="#home" className="btn hidden lg:flex items-center justify-end ">
        <SvgBtn title="Get in Touch" effect={true} />
      </a>
    </nav>
  );
}
