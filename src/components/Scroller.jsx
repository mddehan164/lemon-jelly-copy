import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Scroller({
  children,
  direction = "left",
  speed = 100,
  gap = 24,
}) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    if (!contentRef.current) return;

    const content = contentRef.current;
    const contentWidth = content.scrollWidth / 2;

    let animation;

    if (direction === "left") {
      gsap.set(content, { x: 0 });
      animation = gsap.to(content, {
        x: "-100%",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    } else if (direction === "right") {
      gsap.set(content, { x: -contentWidth });
      animation = gsap.to(content, {
        x: "100%",
        duration: 10,
        repeat: -1,
        ease: "none",
      });
    }

    return () => {
      animation?.kill();
    };
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden"
      style={{
        height: "auto",
      }}
    >
      <div
        ref={contentRef}
        className={"flex gap-5"}
        style={{ gap: `${gap}px` }}
      >
        {/* First set of children */}
        {children}
        {/* Duplicate set for seamless loop */}
        {/* {children} */}
      </div>
    </div>
  );
}
