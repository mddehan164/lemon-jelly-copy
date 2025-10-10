import { MoveRight } from "lucide-react";
import ImageCard from "../components/ImageCard";
import Splitter from "../components/Splitter";
import { cardInfo } from "../data/ourWorks";

export default function OurWorks() {
  return (
    <div
      id="our-works"
      className="w-full min-h-screen pt-32 md:px-16 px-10 py-28 xl:px-24 2xl:px-44 bg-black text-white"
    >
      <h1 className="text-center text-6xl font-semibold text-jelly">
        <Splitter text="Our Works" cls={"left-split"} />
      </h1>
      <h4 className="text-center mt-8 text-xl lg:text-2xl text-gray-300 scale-x-110">
        showcasing our creative expertise and successful projects
      </h4>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-5 md:gap-7 lg:gap-10 items-stretch auto-rows-fr mt-28">
        {cardInfo.map((info, idx) => (
          <ImageCard key={idx} data={info} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <button className="text-center mt-16 font-semibold text-xl lg:text-3xl scale-x-110 text-hover-jelly cursor-pointer">
          <span className="flex items-center gap-2">
            See all
            <MoveRight />
          </span>
        </button>
      </div>
    </div>
  );
}
