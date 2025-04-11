import clsx from "clsx";
import avatar from "../header/avatar.png";
import Image from "next/image";

export function Profile({ className }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image src={avatar} width={48} height={48} alt="avatar" unoptimized />
      <div>
        <p className="text-lg leading-tight">Salikhovfr</p>
        <p className="text-slate-400 text-xs leading-tight">Рейтинг: 1230</p>
      </div>
    </div>
  );
}
