import { useGameState } from "./use-game-state";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export function GameField({ className }) {
  const { cells, currentMove, handleCellClick, nextMove } = useGameState();

  const actions = (
    <>
      <UiButton size="md" variant="primary">
        Ничья
      </UiButton>
      <UiButton size="md" variant="outline">
        Сдаться
      </UiButton>
    </>
  );

  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGridLayout className={className}>
        {cells.map((symbol, i) => (
          <GameCell key={i} onClick={() => handleCellClick(i)}>
            {symbol && <GameSymbol className="w-5 h-5" symbol={symbol} />}
          </GameCell>
        ))}
      </GameGridLayout>
    </GameFieldLayout>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center border border-slate-200 -ml-px -mt-px"
    >
      {children}
    </button>
  );
}

function GameFieldLayout({ className, children }) {
  return (
    <section
      className={clsx(
        className,
        "rounded-2xl bg-white  shadow-md px-8 pt-5 pb-7",
      )}
    >
      {children}
    </section>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex items-center gap-3">
      <div className="mr-auto">
        <h2 className="flex items-center gap-1 text-xl font-semibold leading-tight text-slate-900">
          Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </h2>
        <div className="text-orange-600 gap-1">
          <h3 className="flex items-center gap-1 text-xs leading-tight text-slate-400">
            Следующий: <GameSymbol symbol={nextMove} className="w-3 h-3" />
          </h3>
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGridLayout({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
      {children}
    </div>
  );
}
