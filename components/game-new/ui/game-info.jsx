import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export function GameInfo({ playersCount, isRatingGame, timeMode }) {
  return (
    <div className="flex items-center gap-3 text-slate-400 text-xs">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1 leading-tight">
        <UserIcon /> {playersCount}
      </div>
      <div className="flex items-center gap-1 leading-tight">
        <HistoryIcon />
        {timeMode}
      </div>
    </div>
  );
}
