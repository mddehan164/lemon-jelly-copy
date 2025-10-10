import { SquareArrowUpRight } from "lucide-react";

export default function SvgBtn({ title = "Get in Touch", effect = false }) {
  return (
    <div className="inline-block w-32 lg:w-48">
      {/* wrapper to control max width */}
      <svg
        viewBox="0 0 200 60"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto cursor-pointer group relative"
      >
        <path
          d="M0,0 H180 L200,20 L200,60 H20 L0,40 Z"
          stroke="#FFEE0D"
          fill="#000"
          strokeWidth="3"
          className={`${
            effect ? "group-hover:fill-[#FFEE0D]" : "fill-[#FFEE0D]"
          } transition-all duration-700`}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#FFEE0D" />
            <stop offset="60%" stopColor="#fff" />
            <stop offset="100%" stopColor="#FFEE0D" />
          </linearGradient>
        </defs>
        <path
          d="M140,5 L140,38 L157,55 L195,55 L195,22 L178,5 Z"
          fill="url(#gradient1)"
          className={`${
            effect ? "group-hover:fill-[#000]" : "fill-[#000]"
          } transition-colors duration-700`}
        />
        <SquareArrowUpRight
          size={30}
          x={155}
          y={15}
          className={`${
            effect ? "group-hover:stroke-[#FFEE0D]" : "stroke-[#FFEE0D]"
          } transition-colors duration-700`}
        />
        <text
          x="38%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontWeight="bold"
          fill="#FFEE0D"
          fontSize="16"
          className={`${effect ? "group-hover:fill-[#000]" : "fill-[#000]"}`}
        >
          {title}
        </text>
      </svg>
    </div>
  );
}
