import { GameSymbol } from "./game-symbol";

export function GameInfo({ isDraw, winnerSymbol, currentStep }) {
  if (isDraw) {
    return <div className="flex items-center gap-1 mb-2">Ничья</div>;
  }
  if (winnerSymbol) {
    return (
      <div className="flex items-center gap-1 mb-2">
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1 mb-2">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
