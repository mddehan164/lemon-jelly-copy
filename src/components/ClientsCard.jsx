export default function ClientsCard({ data }) {
  return (
    <div className="w-xs bg-zinc-900 p-5 rounded-xl">
      <div className="flex justify-between w-full items-center mt-3 h-[28%]">
        <div className="w-[28%] aspect-square rounded-full overflow-clip border-2">
          <img
            src={data?.image}
            alt={data?.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[68%] ">
          <h1 className="text-2xl sign">{data?.name}</h1>
          <p className="text-xs mt-2">{data?.position}</p>
        </div>
      </div>
      <p className="text-2xl mt-10 leading-8 h-[70%] overflow-auto">
        {data?.quote}
      </p>
    </div>
  );
}
