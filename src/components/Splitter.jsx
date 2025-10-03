export default function Splitter({ text = "text", cls = text }) {
  const letters = Array.from(text?.toString());
  return (
    <>
      {letters.map((ch, idx) => {
        if (ch === " ") {
          return (
            <span key={idx} className={`inline-block ${cls}`}>
              &nbsp;
            </span>
          );
        } else {
          return (
            <span key={idx} className={`inline-block ${cls}`}>
              {ch}
            </span>
          );
        }
      })}
    </>
  );
}
