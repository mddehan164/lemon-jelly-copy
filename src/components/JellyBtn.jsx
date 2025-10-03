export default function JellyBtn({ id, name, link, activeId, setActiveId }) {
  const isActive = id === activeId;

  const handleClick = () => {
    setActiveId(id);
  };

  return (
    <button
      className={`jelly ${isActive ? "animate" : ""}`}
      onClick={handleClick}
    >
      <a href={link}>{name}</a>
    </button>
  );
}
