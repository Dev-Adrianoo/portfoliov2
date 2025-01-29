import Image from "next/image"


export function About(){
  return(
    <section id="About" className="h-screen flex flex-row justify-center items-center bg-[#222532] text-white " style={{zIndex: 2}}>
      <section className="flex flex-col justify-center items-center h-screen md:w-3/6 text-2xl p-4">
       <div className="Avatar">
            <div className="w-60 rounded">
              <Image
              src="/image/Adriano-500.png"
              alt="Foto"
              height={150} 
              width={150}
              className="border rounded"/>
            </div>
       </div>
      </section>
      <section className="flex flex-col justify-center items-center h-screen md:w-3/6 text-2xl p-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit voluptatem fuga voluptas neque laboriosam. Quasi optio possimus natus esse laboriosam repudiandae nostrum iste, officiis voluptate, dolorem quam a repellendus pariatur!
      </section>
    </section>
  )
}