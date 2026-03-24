export default function Hero() {
  return (

    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[var(--negroPrint)]">

      {/* Blobs de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* blob-1 — morado arriba izquierda */}
        <div className="absolute w-[500px] h-[500px] bg-[var(--moradoPrint)] rounded-full blur-[80px] opacity-50 top-[-100px] left-[-100px] animate-blobFloat [animation-delay:0s]" />

        {/* blob-2 — verde abajo derecha */}
        <div className="absolute w-[400px] h-[400px] bg-[var(--verdePrint)] rounded-full blur-[80px] opacity-50 bottom-[-80px] right-[-80px] animate-blobFloat [animation-delay:-3s]" />

        {/* blob-3 — rojo centrado (wrapper centra, hijo anima) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[300px] h-[300px] bg-[var(--naranjaPrint)] rounded-full blur-[80px] opacity-50 animate-blobFloat [animation-delay:-5s]" />
        </div>
      </div>


      {/* .hero-content */}
      <div className="relative z-[1] text-center p-8">

        {/* .hero-eyebrow */}
        <span className="inline-block font-['AmberlySans'] font-bold text-[0.8rem] tracking-[0.25em] uppercase text-[var(--amarilloPrint)] border-2 border-[var(--amarilloPrint)] px-4 py-[0.3rem] rounded-full mb-6 animate-fadeUp">
          ✦ CATÁLOGO 2026 ✦
        </span>

        {/* .hero-title */}
        <h1 className="font-['SuperKindly'] text-[clamp(2.5rem,10vw,8rem)] text-[var(--blancoPrint)] leading-[0.95] mb-2 animate-fadeUp [animation-delay:0.1s]">
          CAMISAS{" "}
          <span className="text-[var(--amarilloPrint)]">ÚNICAS</span>{" "}
          <span className="text-[var(--lilaPrint)]">PARA TI.</span>
        </h1>

        {/* .hero-sub */}
        <p className="font-['SuperKindly'] text-[clamp(1rem,3vw,1.8rem)] text-[var(--lilaPrint)] tracking-[0.05em] mb-10 animate-fadeUp [animation-delay:0.2s]">
          HECHO A TU MOOD.
        </p>

        {/* .hero-actions */}
        <div className="flex gap-4 justify-center flex-wrap animate-fadeUp [animation-delay:0.3s]">

          {/* .btn-primary */}
          <button className="font-['AmberlySans'] font-bold text-[1rem] px-[2.2rem] py-[0.85rem] rounded-full border-[3px] border-[var(--negroPrint)] cursor-pointer inline-flex items-center gap-2 shadow-[4px_4px_0_var(--negroPrint)] transition-[transform,box-shadow] duration-150 uppercase tracking-[0.05em] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_var(--negroPrint)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--negroPrint)] bg-[var(--amarilloPrint)] text-[var(--negroPrint)]">
            VER CATÁLOGO →
          </button>

          {/* .btn-secondary */}
          <button className="font-['AmberlySans'] font-bold text-[1rem] px-[2.2rem] py-[0.85rem] rounded-full border-[3px] cursor-pointer inline-flex items-center gap-2 transition-[transform,box-shadow] duration-150 uppercase tracking-[0.05em] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] bg-transparent text-[var(--blancoPrint)] border-[var(--blancoPrint)] shadow-[4px_4px_0_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0_rgba(255,255,255,0.3)]">
            PERSONALIZAR LA MÍA
          </button>

        </div>
      </div>

      {/* .hero-mascot */}
      <div className="absolute right-[5%] bottom-0 w-[clamp(160px,18vw,280px)] z-[2] animate-mascotFloat">
        <img src="/Pinardo svg.svg" alt="Mascota" className="w-40 h-auto" />
      </div>

    </section >
  );
}