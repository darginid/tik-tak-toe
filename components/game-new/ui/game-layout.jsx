export function GameLayout({ backLink, title, gameInfo, playersList }) {
  return (
    <div>
      <section className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </section>
      <section
        className={
          "mt-4 grid grid-cols-2 gap-3 rounded-2xl bg-white shadow-md px-8 py-4"
        }
      >
        {playersList}
      </section>
    </div>
  );
}
