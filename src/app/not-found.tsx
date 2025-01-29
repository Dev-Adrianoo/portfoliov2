import Link from "next/link"

export default function NotFound(){
  return(
    <main className="flex flex-col justify-center h-screen items-center"
    style={{height: "calc(100vh - 4rem)"}}>
      <h1  className="text-8xl" >404</h1>
      <p className="text-2xl">Página não encontrada</p>
      <Link href="/" className=" text-purple-400 underline text-1xl">Ir para Página Principal</Link>
    </main>
  )
}