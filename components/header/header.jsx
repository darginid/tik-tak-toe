import Image from "next/image";
import { Profile } from "../profile";
import { ArrowBottom } from "../header/icons/arrow-bottom";
import { UiButton } from "../uikit/ui-button";

import logo from "../header/logo.svg";

export function Header() {
  return (
    <header className="flex bg-white h-24 shadow-lg px-8 items-center">
      <Image className="cursor-pointer" src={logo} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className="w-44" size="lg" variant="primary">
        Играть
      </UiButton>
      <button className="flex items-center gap-2 ml-auto text-teal-600 hover:text-teal-500 transition-colors">
        <Profile className="hover:text-teal-500 transition-colors" />
        <ArrowBottom />
      </button>
    </header>
  );
}
