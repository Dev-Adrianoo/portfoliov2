
import Link from "next/link"

export function Header(){
  return(
    <header className="flex flex-row justify-around items-center h-16 list-none navbar">
      <div>
        <Link href="/" 
        className="relative after:content-[''] after:absolute after:left-0 after:w-0 after:h-[2px] after:bg-[#8094ed] after:transition-all after:duration-400 hover:after:w-full after:bottom-[-6px] text-3xl hover:text-[#8094ed] "><span className="text-[#8094ed]">Dev </span>| Adriano</Link>
      </div>
      <nav className="flex flex-row items-center gap-7 pr-3 text-xl">
        <ul className="flex flex-row items-center gap-7 pr-3 text-xl">
        <li>
            <Link href="#About"
             className="relative after:content-[''] after:absolute after:left-0 after:w-0 after:h-[2px] after:bg-[#8094ed] after:transition-all after:duration-400 hover:after:w-full after:bottom-[-6px] hover:text-[#8094ed] text-xl">Projetos
            </Link>
          </li>
        <li>
          <Link href="/contatos" 
          className="relative after:content-[''] after:absolute after:left-0 after:w-0 after:h-[2px] after:bg-[#8094ed] after:transition-all after:duration-400 hover:after:w-full after:bottom-[-6px] hover:text-[#8094ed]">Entre em contato
          </Link>
          </li>
          <li>
            <Link href="#About"
            className="relative after:content-[''] after:absolute after:left-0 after:w-0 after:h-[2px] after:bg-[#8094ed] after:transition-all after:duration-400 hover:after:w-full after:bottom-[-6px] hover:text-[#8094ed]">
                Sobre Mim
            </Link>
          </li>
            </ul>
      </nav>
    </header>
  )
}