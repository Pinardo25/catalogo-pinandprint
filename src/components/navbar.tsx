export default function Navbar() {
  return (
    <header className="sticky top-0 z-[100] bg-[var(--verdePrint)] px-8 flex items-center justify-between h-[70px] shadow-[0_4px_0_var(--negroPrint)]">

      {/* se le aplican estilos directamente al codigo fuente con taildwind y luego se llama el css en global*/}

      {/* LOGO PIN AND PRINT */}
      <a href="#" className="flex items-center gap-3 no-underline " aria-label="Pin & Print - Inicio">

        <span className="text-2xl font-['SuperKindly'] text-amarilloPrint">Pin
          <span className="text-blancoPrint hover:text-[var(--naranjaPrint)] ">&amp;
          </span>Print
        </span>
      </a>

      {/* NAVBAR */}
      <nav className="text-[1.6rem] tracking-[1px] leading-none flex items-center gap-2" aria-label="Navegación principal ">

        <a className="font-['AmberlySans'] font-bold text-[0.85rem] text-[var(--blancoPrint)] no-underline px-4 py-[0.4rem] rounded-full border-2 border-transparent uppercase tracking-[0.05em] transition-[background,color,border-color] duration-200 hover:bg-[var(--amarilloPrint)] hover:text-[var(--black)] hover:border-[var(--black)]" href="#catalogo">Catálogo</a>

        <a className="font-['AmberlySans'] font-bold text-[0.85rem] text-[var(--blancoPrint)] no-underline px-4 py-[0.4rem] rounded-full border-2 border-transparent uppercase tracking-[0.05em] transition-[background,color,border-color] duration-200 hover:bg-[var(--amarilloPrint)] hover:text-[var(--black)] hover:border-[var(--black)]" href="#personalizar">Personalizar</a>

        <a className="font-['AmberlySans'] font-bold text-[0.85rem] text-[var(--blancoPrint)] no-underline px-4 py-[0.4rem] rounded-full border-2 border-transparent uppercase tracking-[0.05em] transition-[background,color,border-color] duration-200 hover:bg-[var(--amarilloPrint)] hover:text-[var(--black)] hover:border-[var(--black)]" href="#nosotros">Nosotros</a>

        <a href="#pedido" className="nav-cta btn font-['AmberlySans'] font-bold text-[0.85rem] no-underline px-4 py-[0.4rem] rounded-full border-3 border-negroPrint bg-naranjaPrint uppercase tracking-[0.05em] transition-[background-0.1s,border-color] duration-200 hover:bg-[var(--amarilloPrint)] hover:text-[var(--negroPrint)] hover:border-[var(--negroPrint)]
        text-[var(--blancoPrint)] 
        font-['AmberlySans'] font-bold text-[1rem] px-[2.2rem] py-[0.85rem] rounded-full border-3 border-[var(--negroPrint)] no-underline cursor-pointer inline-flex items-center gap-2 shadow-[4px_4px_0_var(--negroPrint)] transition-[transform,box-shadow] duration-150 uppercase tracking-[0.05em] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_var(--negroPrint)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_var(--negroPrint)]">Pedir ahora 🛒

          <span className="cart-count font-['AmberlySans'] font-bold text-[0.60rem] no-underline px-4 py-[0.4rem] rounded-full border-2 uppercase tracking-[0.1em] duration-200 transition-[background,color,border-color] bg-[var(--naranjaPrint)] text-[var(--negroPrint)] border-[var(--negroPrint)] hover:bg-[var(--naranjaPrint)] hover:text-[var(--negroPrint)]" id="cartCount">0</span>
        </a>
      </nav>
    </header>


  );
}
