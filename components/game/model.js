import { MOVE_ORDER } from "./constants";

export function getNextMove(currentMove, playersCount, playersTimeOver) {
  const sliceMoveOrder = MOVE_ORDER.slice(0, playersCount).filter(
    (symbol) => !playersTimeOver.includes(symbol),
  );

  const nextMoveIndex = sliceMoveOrder.indexOf(currentMove) + 1;
  return sliceMoveOrder[nextMoveIndex] ?? sliceMoveOrder[0];
}

export function computeWinner(cells, sequenceSize = 5, fieldSize = 19) {
  // Направления для проверки:
  // 1. Горизонталь (вправо)
  // 2. Вертикаль (вниз)
  // 3. Диагональ \ (вниз вправо)
  // 4. Диагональ / (вверх вправо)
  const directions = [
    { dx: 1, dy: 0 }, // горизонталь
    { dx: 0, dy: 1 }, // вертикаль
    { dx: 1, dy: 1 }, // диагональ \
    { dx: -1, dy: 1 }, // диагональ / (обратите внимание: dx = -1, dy = 1)
  ];

  // Проходим по всем клеткам поля
  for (let i = 0; i < cells.length; i++) {
    // Если клетка пуста - пропускаем
    if (!cells[i]) continue;

    // Символ в текущей клетке (X или O)
    const symbol = cells[i];

    // Получаем координаты x,y из линейного индекса
    const x = i % fieldSize;
    const y = Math.floor(i / fieldSize);

    // Проверяем каждое направление от текущей клетки
    for (const { dx, dy } of directions) {
      // Создаем массив для хранения индексов потенциальной победной комбинации
      const winningCells = [i];

      // Проверяем следующие клетки в выбранном направлении
      for (let step = 1; step < sequenceSize; step++) {
        // Вычисляем новые координаты
        const newX = x + dx * step;
        const newY = y + dy * step;

        // Если вышли за пределы поля, прерываем проверку
        if (newX < 0 || newX >= fieldSize || newY < 0 || newY >= fieldSize) {
          break;
        }

        // Преобразуем координаты в индекс массива
        const currentIndex = newY * fieldSize + newX;

        // Если клетка содержит тот же символ - добавляем в победную комбинацию
        if (cells[currentIndex] === symbol) {
          winningCells.push(currentIndex);
        } else {
          // Если символ другой - прерываем проверку
          break;
        }
      }

      // Если нашли достаточно символов в ряд - это победа
      if (winningCells.length >= sequenceSize) {
        return winningCells;
      }
    }
  }

  // Если мы здесь - значит победной комбинации нет
  return null;
}
