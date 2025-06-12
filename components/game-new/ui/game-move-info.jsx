import { GameSymbol } from "./game-symbol";

export function GameMoveInfo({ currentMove, nextMove }) {
  return (
    <>
      <h2 className="flex items-center gap-1 text-xl font-semibold leading-tight text-slate-900">
        Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
      </h2>
      <div className="text-orange-600 gap-1">
        <h3 className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Следующий: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </h3>
      </div>
    </>
  );
}
