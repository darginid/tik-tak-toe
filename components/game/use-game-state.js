import { useState } from "react";
import { SYMBOL_O, SYMBOL_X } from "./constants";

const computeWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return [a, b, c];
    }
  }
};

export function useGameState() {
  const [cells, setCells] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [currentStep, setCurrentStep] = useState(SYMBOL_X);
  const [winnerSequence, setWinnerSequence] = useState();

  const winnerSymbol = winnerSequence ? cells[winnerSequence[0]] : null;
  const isDraw = !winnerSequence && cells.filter((value) => value).length === 9;
  const getWinnerCell = (i) => winnerSequence?.includes(i);

  const handleCellClick = (i) => {
    if (cells[i] || winnerSequence) return;

    const cellsCopy = [...cells];
    cellsCopy[i] = currentStep;
    const winner = computeWinner(cellsCopy);

    setCells(cellsCopy);
    setCurrentStep(currentStep === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
    setWinnerSequence(winner);
  };

  const handleResetClick = () => {
    setCells(Array(9).fill(null));
    setCurrentStep(SYMBOL_X);
    setWinnerSequence(undefined);
  };

  return {
    cells,
    currentStep,
    winnerSymbol,
    isDraw,
    handleCellClick,
    handleResetClick,
    getWinnerCell,
  };
}
