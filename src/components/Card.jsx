import SvgShape from "./SvgShape";
export default function Card({
  title,
  description,
  Icon,
  active,
  setActive,
  id,
}) {
  const isActive = active === id;
  return (
    <div
      className={`${
        isActive ? "bg-[#FFE000]" : "bg-[rgb(255,255,235)]"
      } md:h-84 h-60 flex flex-col justify-end gap-2 p-5 relative rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer`}
      onClick={() => setActive(id)}
    >
      <h1 className="text-lg sm:text-xl md:4xl xl:text-5xl font-semibold w-[70%]">
        {title || "title"}
      </h1>
      <p className="text-xs sm:text-base md:text-lg  text-gray-500">
        {description || "des"}
      </p>
      <div className="absolute -top-1.5 sm:-top-5 md:-top-8 right-4 md-32 md:w-60">
        <SvgShape Icon={Icon} stroke={true} effect={true} />
      </div>
    </div>
  );
}
