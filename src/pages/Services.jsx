import Splitter from "../components/Splitter";
export default function Services() {
  return (
    <div
      style={{ backgroundColor: "rgb(254,255,220)" }}
      id="services"
      className="w-full h-screen pt-32"
    >
      <h1 className="text-center text-6xl font-semibold">
        <Splitter text="Things we're really good at" cls={"serviceTit"} />
      </h1>
      <h4 className="text-center mt-8 text-xl text-gray-500">
        Pick your flavor — we’ll shake up the strategy and serve it fresh.
      </h4>
    </div>
  );
}
