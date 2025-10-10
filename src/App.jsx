import { CircleX } from "lucide-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import OurWorks from "./pages/OurWorks";
import Partners from "./pages/Partners";
import Clients from "./pages/Clients";

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

  const { contextSafe } = useGSAP();
  const toggleMenu = contextSafe(() => {
    setOpen(!open);
    if (!open) {
      // Opening menu
      gsap.set(".overlay", { display: "block" });
      gsap.to(".overlay", { opacity: 1, duration: 0.1 });
      gsap.fromTo(".mobileNav", { x: "100%" }, { x: 0, duration: 0.1 });
    } else {
      // Closing menu
      gsap.to(".overlay", {
        opacity: 0,
        duration: 0.1,
        onComplete: () => gsap.set(".overlay", { display: "none" }),
      });
      gsap.to(".mobileNav", {
        x: "100%",
        duration: 0.1,
      });
    }
  });

  return (
    <div className="w-full h-screen relative overflow-x-hidden">
      {/* Overlay */}
      <div
        className="overlay fixed inset-0 z-40 hidden opacity-0 lg:hidden"
        onClick={toggleMenu}
      ></div>

      {/* Mobile Navigation */}
      <div className="mobileNav fixed top-0 right-0 w-full h-full z-50 lg:hidden translate-x-full">
        <div className="flex flex-col h-full text-lg font-semibold bg-white shadow-xl">
          <div className="flex items-center justify-between p-6 border-b">
            <img src="src/assets/logo.webp" alt="logo" className="w-24" />
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              onClick={toggleMenu}
            >
              <CircleX className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col py-8">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.link}
                onClick={toggleMenu}
                className="py-4 px-6 text-center text-zinc-700 hover:bg-gray-50 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <>
        <Navbar click={toggleMenu} />
        <Home />
        <Services />
        <OurWorks />
        <Partners />
        <Clients />
      </>
    </div>
  );
}
