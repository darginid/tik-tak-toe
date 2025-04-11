import Image from "next/image"
import logo from "../header/logo.svg"
import avatar from "../header/avatar.png"

export function Header() {
  return (
    <header className="flex bg-white h-24 shadow-lg px-8 items-center">
      <Image className="cursor-pointer" src={logo} alt='logo' />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <button className="w-44 px-5 py-2 bg-teal-600 text-white rounded-lg cursor-pointer hover:bg-teal-500 transition-colors text-2xl leading-tight">Играть</button>
      <button className="flex ml-auto items-center gap-2 text-start text-teal-600 hover:text-teal-500 transition-colors">
        <Image 
          src={avatar}
          width={48} 
          height={48} 
          alt="avatar"
          unoptimized 
        />
        <div>
          <p className="text-lg leading-tight">Salikhovfr</p>
          <p className="text-slate-400 text-xs leading-tight">Рейтинг: 1230</p>
        </div>
        <svg 
          width="18"
          height="18" 
          viewBox="0 0 18 18" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.18753 6.75003C6.04368 6.75003 5.89968 6.69505 5.78985 6.58522L0.164848 0.960222C-0.0549492 0.740426 -0.0549492 0.384504 0.164848 0.164848C0.384645 -0.0548086 0.740566 -0.0549492 0.960222 0.164848L6.18753 5.39216L11.4148 0.164848C11.6346 -0.0549492 11.9906 -0.0549492 12.2102 0.164848C12.4299 0.384645 12.43 0.740566 12.2102 0.960222L6.58522 6.58522C6.47539 6.69505 6.33139 6.75003 6.18753 6.75003Z" fill="#0D9488"/>
        </svg>
      </button>
    </header>
  )
}