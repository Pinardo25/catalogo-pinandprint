import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-negroPrint">

      {/* Blobs de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-125 h-125 bg-moradoPrint rounded-full blur-[80px] opacity-50 -top-25 -left-25 animate-blobFloat [animation-delay:0s]" />
        <div className="absolute w-100 h-100 bg-verdePrint rounded-full blur-[80px] opacity-50 -bottom-20 -right-20 animate-blobFloat [animation-delay:-3s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-75 h-75 bg-naranjaPrint rounded-full blur-[80px] opacity-50 animate-blobFloat [animation-delay:-5s]" />
        </div>
      </div>

      {/* Contenido */}
      <div className="relative z-1 text-center p-8">

        <span className="inline-block font-['AmberlySans'] font-bold text-[0.8rem] tracking-[0.25em] uppercase text-amarilloPrint border-2 border-amarilloPrint px-4 py-[0.3rem] rounded-full mb-6 animate-fadeUp">
          ✦ CATÁLOGO 2026 ✦
        </span>

        <h1 className="font-['SuperKindly'] text-[clamp(2.5rem,10vw,8rem)] text-blancoPrint leading-[0.95] mb-2 animate-fadeUp [animation-delay:0.1s]">
          CAMISAS{" "}
          <span className="text-amarilloPrint">ÚNICAS</span>{" "}
          <span className="text-lilaPrint">PARA TI.</span>
        </h1>

        <p className="font-['SuperKindly'] text-[clamp(1rem,3vw,1.8rem)] text-lilaPrint tracking-[0.05em] mb-10 animate-fadeUp [animation-delay:0.2s]">
          HECHO A TU MOOD.
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-fadeUp [animation-delay:0.3s]">
          <a
            href="#catalogo"
            className="font-['AmberlySans'] font-bold text-[1rem] px-[2.2rem] py-[0.85rem] rounded-full border-[3px] border-negroPrint cursor-pointer inline-flex items-center gap-2 shadow-[4px_4px_0_var(--negroPrint)] transition-[transform,box-shadow] duration-150 uppercase tracking-[0.05em] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--negroPrint)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_var(--negroPrint)] bg-amarilloPrint text-negroPrint"
          >
            VER CATÁLOGO →
          </a>
          <a
            href="#personalizar"
            className="font-['AmberlySans'] font-bold text-[1rem] px-[2.2rem] py-[0.85rem] rounded-full border-[3px] cursor-pointer inline-flex items-center gap-2 transition-[transform,box-shadow] duration-150 uppercase tracking-[0.05em] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 bg-transparent text-blancoPrint border-blancoPrint shadow-[4px_4px_0_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0_rgba(255,255,255,0.3)]"
          >
            PERSONALIZAR LA MÍA
          </a>
        </div>
      </div>

      {/* Mascota */}
      <div className="absolute right-[5%] bottom-0 w-[clamp(160px,18vw,280px)] z-2 animate-mascotFloat">
        <Image src="/pinardo.svg" alt="Pinardo, mascota de Pin & Print" width={280} height={280} className="w-full h-auto" />
      </div>

    </section>
  )
}
