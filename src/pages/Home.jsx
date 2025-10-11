import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SvgBtn from "../components/SvgBtn";
import Splitter from "../components/Splitter";
import lemon from "../assets/lemon.webp";
import bg from "../assets/home-bg.gif";

export default function Home() {
  const text1 = Array.from("LEMON".toUpperCase());
  useGSAP(() => {
    gsap.from(".ch", {
      x: 100,
      delay: 1,
      opacity: 0,
      duration: 0.15,
      stagger: 0.15,
    });
    gsap.from(".ch2", {
      x: 100,
      delay: 1,
      opacity: 0,
      duration: 0.15,
      stagger: 0.15,
    });
    gsap.from(".ch3", {
      x: 100,
      delay: 1,
      opacity: 0,
      duration: 0.15,
      stagger: 0.15,
    });
    gsap.from(".ch4", {
      x: 100,
      delay: 1,
      opacity: 0,
      duration: 0.15,
      stagger: 0.15,
    });
    gsap.from(".ch5", {
      x: 100,
      delay: 1.9,
      opacity: 0,
      duration: 0.2,
      stagger: 0.1,
    });
    gsap.from(".chImg", {
      x: -1000,
      rotate: -1200,
      // opacity: 0,
      duration: 1,
      ease: "bounce.Out",
    });
    gsap.from(".subTitle, .btn1", {
      y: 1000,
      opacity: 0,
      delay: 3,
      duration: 0.8,
    });
  });

  return (
    <div
      id="home"
      className="w-full min-h-screen pt-28 lg:pt-44 relative overflow-hidden text-white p-16"
    >
      <div className="">
        <h1 className="text-center text-[2.8rem] lg:text-8xl uppercase qb text-jelly scale-y-115">
          {text1.map((ch, idx) => {
            // check if character is "O" (or maybe also 'o', depending on case)
            if (ch === "O") {
              return (
                <img
                  key={idx}
                  src={lemon}
                  alt="lemon"
                  className="inline-block w-[2.3rem] lg:w-[4.8rem] -mt-2 lg:-mt-5 object-fill lg:scale-y-[0.9] chImg"
                  loading="lazy"
                />
              );
            } else {
              // normal character
              return (
                <span className="ch inline-block" key={idx}>
                  {ch}
                </span>
              );
            }
          })}{" "}
          <Splitter text={"JELLY"} cls={"ch2"} />{" "}
          <Splitter text={"MEDIA"} cls={"ch3"} />
        </h1>

        <h1 className="text-center text-[2.5rem] lg:text-8xl uppercase qb mt-5 lg:mt-14 scale-y-115">
          <Splitter text={"THINK."} cls={"ch4"} />{" "}
          <Splitter text={"CREATE."} cls={"ch5"} />
        </h1>
        <h1 className="text-center text-[2.5rem] lg:text-8xl uppercase qb mt-2 lg:mt-10 scale-y-115">
          <Splitter text={"INSPIRE"} cls={"ch5"} />
        </h1>
        <p className="text-center text-sm lg:text-lg mt-10 lg:mt-20 font-medium subTitle">
          Lemon Jelly is an <strong>independent brand-building</strong> creative
          agency. We live on the story side of marketing
        </p>
        <div className="w-full flex justify-center mt-5 lg:mt-10 btn1">
          <SvgBtn title="Contact Us" link={"#contact-us"} />
        </div>
      </div>

      <img
        src={bg}
        alt="bg-hero"
        className="w-full object-cover h-full absolute top-0 left-0 -z-10"
        loading="lazy"
      />
    </div>
  );
}
