import SvgShape from "./SvgShape";

export default function JellyBtn({
  id = 0,
  name,
  link,
  activeId,
  setActiveId,
  cls,
}) {
  const isActive = id === activeId;

  const handleClick = () => {
    setActiveId(id);
  };

  return (
    <a
      href={link}
      className={`jelly ${
        isActive ? "animate" : ""
      } items-center justify-center ${cls} text-center`}
      onClick={handleClick}
    >
      <button>{name}</button>
    </a>
  );
}
