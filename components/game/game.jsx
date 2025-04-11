import { GameInfo } from "./game-info";
import { GameCell } from "./game-cell";
import { useGameState } from "./use-game-state";
import { ButtonReset } from "./button-reset";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    handleCellClick,
    handleResetClick,
    getWinnerCell,
  } = useGameState();

  return (
    <div className="font-sans flex flex-col items-center w-40 mx-auto my-40 p-5 border border-black border-solid">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid custom-grid mb-2">
        {cells.map((symbol, i) => {
          return (
            <GameCell
              key={i}
              symbol={symbol}
              isWinner={getWinnerCell(i)}
              onClick={() => handleCellClick(i)}
            />
          );
        })}
      </div>
      <ButtonReset onClick={handleResetClick} />
    </div>
  );
}
