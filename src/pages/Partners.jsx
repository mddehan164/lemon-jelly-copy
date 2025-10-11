import Scroller from "../components/Scroller";
import Splitter from "../components/Splitter";
import { partnerImages } from "../data/partners";

export default function Partners() {
  const firstHalf = partnerImages.slice(0, 5);
  const secondHalf = partnerImages.slice(5, 10);
  return (
    <div
      id="partners"
      className="w-full min-h-[100vh] lg:min-h-[75vh] pt-36 md:px-16 px-10 py-10 xl:px-32 2xl:px-44 relative"
    >
      <h1 className="text-center text-6xl font-semibold">
        <Splitter text="Partnered with greatness" cls={"left-split"} />
      </h1>
      <div className="w-full mt-20 space-y-2 lg:space-y-5 absolute left-0">
        <Scroller direction="left">
          {firstHalf.map((image, idx) => (
            <img
              key={idx}
              src={image.image}
              alt={image.name}
              loading="lazy"
              className="px-5 py-3 lg:px-10 lg:py-8 rounded-lg bg-[#F1F3D4] h-auto w-36 lg:w-64"
            />
          ))}
        </Scroller>
        <Scroller direction="right">
          {secondHalf.map((image, idx) => (
            <img
              key={idx}
              src={image.image}
              alt={image.name}
              loading="lazy"
              className="px-5 py-3 lg:px-10 lg:py-8 rounded-lg bg-[#F1F3D4] h-auto w-36 lg:w-64"
            />
          ))}
        </Scroller>
      </div>
    </div>
  );
}
