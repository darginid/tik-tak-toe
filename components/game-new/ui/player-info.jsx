import clsx from "clsx";
import Image from "next/image";
import { GameSymbol } from "./game-symbol";

export function PlayerInfo({
  name,
  rating,
  avatar,
  symbol,
  isTimerRunning,
  seconds,
}) {
  const getTimerRunning = () => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-600" : "text-slate-900";
    }
    return "text-slate-400";
  };

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(Math.floor(seconds % 60)).padStart(2, "0");

  const isDanger = seconds < 10;

  return (
    <div className="flex items-center gap-3 even:flex-row-reverse">
      <div className="relative">
        <div
          className={"flex items-center gap-3 text-start text-teal-600 w-44"}
        >
          <Image src={avatar} width={48} height={48} alt="avatar" unoptimized />
          <div className="overflow-hidden">
            <p className="text-lg leading-tight truncate">{name}</p>
            <p className="text-slate-400 text-xs leading-tight">
              Рейтинг: {rating}
            </p>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 flex items-center justify-center">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div className="h-6 w-px bg-slate-200" />
      <div
        className={clsx("text-lg font-semibold w-[60px]", getTimerRunning())}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
