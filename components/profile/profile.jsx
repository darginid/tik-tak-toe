import clsx from "clsx";
import avatarSrc from "../header/avatar.png";
import Image from "next/image";

export function Profile({ className, name, rating, avatar = avatarSrc }) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center gap-3 text-start text-teal-600",
      )}
    >
      <Image src={avatar} width={48} height={48} alt="avatar" unoptimized />
      <div className="overflow-hidden">
        <p className="text-lg leading-tight truncate">{name}</p>
        <p className="text-slate-400 text-xs leading-tight">
          Рейтинг: {rating}
        </p>
      </div>
    </div>
  );
}
