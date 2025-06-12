export function GameLayout({
  backLink,
  title,
  gameInfo,
  playersList,
  gameMoveInfo,
  actions,
  gameCells,
}) {
  return (
    <div className="pb-10">
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
      <section
        className={"mt-6 rounded-2xl bg-white  shadow-md px-8 pt-5 pb-7"}
      >
        <div className="flex items-center gap-3">
          <div className="mr-auto">{gameMoveInfo}</div>
          {actions}
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
          {gameCells}
        </div>
      </section>
    </div>
  );
}
