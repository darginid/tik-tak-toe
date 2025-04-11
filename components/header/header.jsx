import Image from "next/image";
import { Profile } from "../profile";
import { ArrowBottom } from "../header/icons/arrow-bottom";

import logo from "../header/logo.svg";

export function Header() {
  return (
    <header className="flex bg-white h-24 shadow-lg px-8 items-center">
      <Image className="cursor-pointer" src={logo} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="w-44 px-5 py-2 bg-teal-600 text-white rounded-lg cursor-pointer hover:bg-teal-500 transition-colors text-2xl leading-tight">
        Играть
      </button>
      <button className="flex items-center gap-2 ml-auto text-teal-600 hover:text-teal-500 transition-colors">
        <Profile />
        <ArrowBottom />
      </button>
    </header>
  );
}
