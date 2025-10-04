import { CircleX } from "lucide-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function App() {
  const [open, setOpen] = useState(false);
  const items = [
    { name: "Our Works", link: "#our-works", id: 3 },
    { name: "Home", link: "#home", id: 1 },
    { name: "Services", link: "#services", id: 2 },
    { name: "Contact Us", link: "#contact-us", id: 4 },
  ];

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      // ধরো তোমার Tailwind config অনুযায়ী lg breakpoint = 1024px
      const lgBreakpoint = 1024;
      if (width >= lgBreakpoint && open) {
        setOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    // প্রথমে একবার চেক করে নাও
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]);

  const handleClick = () => {
    // setOpen(!open);
    rot();
    // alert("hi");
  };
  const { contextSafe } = useGSAP();
  const rot = contextSafe(() => {
    if (!open) {
      gsap.from(".mobileNav", {
        x: 1200,
        duration: 0.8,
        delay: 0.5,
      });
    }
    // else {
    //   gsap.from(".mobileNav", {
    //     x: 1200,
    //     duration: 0.8,
    //     delay: 0.5,
    //   });
    // }
    setOpen(!open);
  });

  return (
    <div className="w-full h-screen relative overflow-x-hidden">
      <div className="bg-white w-full h-full absolute z-50 lg:hidden mobileNav">
        <div className="flex flex-col mt items-center h-screen  text-lg font-semibold relative  bg-amber-200">
          <div
            className="absolute top-5 right-5 cursor-pointer"
            // onClick={() => setOpen(!open)}
            onClick={rot}
          >
            <CircleX />
          </div>
          <hr className="mt-15 mb-10  w-full opacity-20" />
          {items.map((item) => (
            <a
              key={item.id}
              href={item.link}
              onClick={() => setOpen(false)}
              className="w-[70%] text-center text-zinc-700 border-b-1 border-gray-300 py-5"
            >
              {item.name}
            </a>
          ))}
          {/* <div onClick={rot} className=" bg-white px-5">
              Hi
            </div> */}
        </div>
      </div>

      {!open && (
        <>
          <Navbar click={rot} />
          <Home />
          <Services />
        </>
      )}
    </div>
  );
}
