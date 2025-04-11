import Link from "next/link";
import { ArrowLeft } from "./icons/arrow-left";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/history-icon";

export function GameTitle() {
  return (
    <section className="pl-2">
      <Link
        className="flex items-center gap-2 text-teal-600 leading-tight -mb-0.5"
        href={"#"}
      >
        <ArrowLeft />
        На главную
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-slate-400 text-xs">
        <StarIcon />
        <div className="flex items-center gap-1 leading-tight">
          <UserIcon />2
        </div>
        <div className="flex items-center gap-1 leading-tight">
          <HistoryIcon />1 мин на ход
        </div>
      </div>
    </section>
  );
}
