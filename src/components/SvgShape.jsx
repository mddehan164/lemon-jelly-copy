import { SquareArrowUpRight } from "lucide-react";

export default function SvgShape({
  effect = false,
  Icon = SquareArrowUpRight,
  link,
  cls,
}) {
  return (
    <a href={link} className={`${cls} cursor-pointer  `}>
      <svg
        viewBox="0 0 200 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-28 h-auto cursor-pointer group relative"
      >
        <defs>
          <linearGradient id="gradient3" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#FFEE0D" />
            <stop offset="60%" stopColor="#fff" />
            <stop offset="100%" stopColor="#FFEE0D" />
          </linearGradient>
        </defs>
        <path
          d="M140,5 L140,38 L157,55 L195,55 L195,22 L178,5 Z"
          fill="url(#gradient3)"
          className={`${
            effect ? "group-hover:fill-[#000]" : "fill-[#000]"
          } transition-colors duration-700`}
        />
        <Icon
          size={30}
          x={155}
          y={15}
          className={`${
            effect ? "group-hover:stroke-[#FFEE0D]" : "stroke-[#FFEE0D]"
          } transition-colors duration-700`}
        />
      </svg>
    </a>
  );
}
