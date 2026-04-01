"use client"

import { useApp } from "../context/AppContext"

export default function Navbar() {
	const { cartCount } = useApp()

	return (
		<header className="sticky top-0 z-100 bg-verdePrint px-8 flex items-center justify-between h-17.5 shadow-[0_4px_0_var(--negroPrint)]">

			{/* LOGO PIN AND PRINT */}
			<a href="#" className="flex items-center gap-3 no-underline" aria-label="Pin & Print - Inicio">
				<span className="text-2xl font-['SuperKindly'] text-amarilloPrint">Pin
					<span className="text-blancoPrint hover:text-naranjaPrint">&amp;</span>Print
				</span>
			</a>

			{/* NAVBAR */}
			<nav className="flex items-center gap-2" aria-label="Navegación principal">
				<a
					className="font-['AmberlySans'] font-bold text-[0.85rem] text-blancoPrint no-underline px-4 py-[0.4rem] rounded-full border-2 border-transparent uppercase tracking-[0.05em] transition-[background,color,border-color] duration-200 hover:bg-amarilloPrint hover:text-negroPrint hover:border-negroPrint"
					href="#catalogo"
				>
					Catálogo
				</a>

				<a
					className="font-['AmberlySans'] font-bold text-[0.85rem] text-blancoPrint no-underline px-4 py-[0.4rem] rounded-full border-2 border-transparent uppercase tracking-[0.05em] transition-[background,color,border-color] duration-200 hover:bg-amarilloPrint hover:text-negroPrint hover:border-negroPrint"
					href="#personalizar"
				>
					Personalizar
				</a>

				<a
					className="font-['AmberlySans'] font-bold text-[0.85rem] text-blancoPrint no-underline px-4 py-[0.4rem] rounded-full border-2 border-transparent uppercase tracking-[0.05em] transition-[background,color,border-color] duration-200 hover:bg-amarilloPrint hover:text-negroPrint hover:border-negroPrint"
					href="#nosotros"
				>
					Nosotros
				</a>

				<a
					href="#catalogo"
					className="font-['AmberlySans'] font-bold text-[0.85rem] text-blancoPrint no-underline px-[1.4rem] py-2 rounded-full border-[3px] border-negroPrint bg-naranjaPrint uppercase tracking-[0.05em] cursor-pointer inline-flex items-center gap-2 shadow-[4px_4px_0_var(--negroPrint)] transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--negroPrint)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_var(--negroPrint)]"
				>
					Pedir ahora 🛒
					<span className="font-['AmberlySans'] font-bold text-[0.65rem] px-[0.6rem] py-[0.15rem] rounded-full border-2 bg-amarilloPrint text-negroPrint border-negroPrint">
							{cartCount}
					</span>
				</a>
			</nav>
		</header>
	)
}
