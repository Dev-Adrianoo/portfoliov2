"use client"

import Link from "next/link"
import ParticlesComponent from "./particles"

export function HomePage(){
  return(
    <div className="h-screen relative isolate">

    <section className="absolute overflow-hidden inset-0">
    <ParticlesComponent id="particles"/>
    </section>

    <main className='flex flex-row relative justify-center items-center overflow-hidden min-h-screen p-4 z-10'
    style={{height: "calc(100vh - 4rem)"}}>

      <div className='flex flex-col items-center justify-center w-full md:w-6/12 h-screen' style={{zIndex: 1}}> 
        <h1 className='text-4xl'>Prazer, Sou <strong>Adriano Souza</strong></h1>
        <p className='text-2xl leading-10 pb-2'><span className="text-[#8094ed] animate-blink">Desenvolvedor Full Stack</span></p>
          <Link href="/contatos"
            className="border-2 z-0 p-4 rounded font-bold hover:bg-[#8094ed] hover:text-white transition-all duration-500">
            Fale Comigo
            </Link>
      </div>
    </main>
    </div>
  )
}