export default function ClippedImg() {
  return (
    <div className=" relative overflow-hidden bg-amber-300">
      <svg className="absolute w-20 h-20 bg-amber-700">
        <defs>
          <clipPath
            id="myClip"
            // clipPathUnits="objectBoundingBox"
            // transform="scale(0.005, 0.005)"
          >
            <path d="M140,5 L140,38 L157,55 L195,55 L195,22 L178,5 Z" />
          </clipPath>
        </defs>
      </svg>

      <img
        src="/src/assets/image-card/project-1.webp"
        className="w-full h-full object-cover clipped-img"
        style={{ clipPath: "url(#myClip)" }}
        alt="clipped image"
      />
    </div>
  );
}
