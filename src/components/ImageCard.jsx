import SvgShape from "./SvgShape";

export default function ImageCard({ data }) {
  return (
    <a
      className={`bg-white ${
        data.cls || "col-span-1 2xl:col-span-2"
      } h-[35vw] rounded-lg relative group overflow-hidden bg-gradient-to-t from-black to-transparent`}
      href="#"
    >
      <img
        src={data.image}
        alt="card"
        className="w-full h-full object-cover absolute top-0 z-[1] group-hover:scale-110 transition-all duration-500 group-hover:blur-[2px]"
        loading="lazy"
      />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-3 z-[3] w-full lg:space-y-1 lg:py-5">
        <h4 className="text-sm md:text-lg lg:text-4xl font-semibold pl-5 lg:pl-7">
          {data.title}
        </h4>
        <p className="text-xs md:text-sm lg:text-lg pl-5 lg:pl-7">{data.des}</p>
      </div>

      <div className="absolute z-[5] -bottom-full right-0 lg:right-10 group-hover:bottom-0 transition-all duration-500">
        <SvgShape />
      </div>
    </a>
  );
}
