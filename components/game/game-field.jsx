import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";

const cells = new Array(19 * 19).fill(null);

export function GameField({ className }) {
  return (
    <section
      className={clsx(
        className,
        "rounded-2xl bg-white  shadow-md px-8 pt-5 pb-7",
      )}
    >
      <div className="flex items-center gap-3">
        <div className="mr-auto">
          <h2 className="flex items-center gap-1 text-xl font-semibold leading-tight text-slate-900">
            Ход: <ZeroIcon className="w-5 h-5" />
          </h2>

          <div className="text-orange-600 gap-1">
            <h3 className="flex items-center gap-1 text-xs leading-tight text-slate-400">
              Следующий: <CrossIcon />
            </h3>
          </div>
        </div>

        <UiButton size="md" variant="primary">
          Ничья
        </UiButton>
        <UiButton size="md" variant="outline">
          Сдаться
        </UiButton>
      </div>

      <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3">
        {cells.map((_, i) => (
          <button
            key={i}
            className="flex items-center justify-center border border-slate-200 -ml-px -mt-px"
          >
            <ZeroIcon className="w-5 h-5" />
          </button>
        ))}
      </div>
    </section>
  );
}
