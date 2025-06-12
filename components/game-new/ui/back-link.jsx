import Link from "next/link";
import { ArrowLeft } from "./icons/arrow-left";

export function BackLink() {
  return (
    <Link
      className="flex items-center gap-2 text-teal-600 leading-tight -mb-0.5"
      href={"#"}
    >
      <ArrowLeft />
      На главную
    </Link>
  );
}
