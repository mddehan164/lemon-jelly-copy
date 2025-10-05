import { useState } from "react";
import Card from "../components/Card";
import Splitter from "../components/Splitter";
import { services } from "../data/services";
export default function Services() {
  const [active, setActive] = useState(1);
  return (
    <div
      style={{ backgroundColor: "rgb(254,255,230)" }}
      id="services"
      className="w-full min-h-screen pt-32 md:px-16 px-10 py-28 xl:px-32 2xl:px-44"
    >
      <h1 className="text-center text-6xl font-semibold">
        <Splitter text="Things we're really good at" cls={"serviceTit"} />
      </h1>
      <h4 className="text-center mt-8 text-xl text-gray-500">
        Pick your flavor — we'll shake up the strategy and serve it fresh.
      </h4>
      <div className="mt-28 grid grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service) => (
          <Card
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            Icon={service.Icon}
            active={active}
            setActive={setActive}
          />
        ))}
      </div>
    </div>
  );
}
