"use client"

import { useState } from "react"
import { useApp } from "../context/AppContext"

const navLinks = [
    { label: "Catálogo", href: "#catalogo" },
    { label: "Personalizar", href: "#personalizar" },
    { label: "Nosotros", href: "#nosotros" },
]

const linkClass =
    "font-['AmberlySans'] font-bold text-[0.85rem] text-blancoPrint no-underline px-4 py-[0.4rem] rounded-full border-2 border-transparent uppercase tracking-[0.05em] transition-[background,color,border-color] duration-200 hover:bg-amarilloPrint hover:text-negroPrint hover:border-negroPrint"

export default function Navbar() {
    const { cartCount } = useApp()
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <header className="sticky top-0 z-100 bg-verdePrint px-6 sm:px-8 flex items-center justify-between h-17.5 shadow-[0_4px_0_var(--negroPrint)]">

                {/* Logo */}
                <a href="#" className="flex items-center gap-3 no-underline" aria-label="Pin & Print - Inicio">
                    <span className="text-2xl font-['SuperKindly'] text-amarilloPrint">
                        Pin<span className="text-blancoPrint hover:text-naranjaPrint">&amp;</span>Print
                    </span>
                </a>

                {/* Nav — desktop */}
                <nav className="hidden md:flex items-center gap-2" aria-label="Navegación principal">
                    {navLinks.map(({ label, href }) => (
                        <a key={href} className={linkClass} href={href}>{label}</a>
                    ))}
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

                {/* Mobile: carrito + hamburguesa */}
                <div className="flex items-center gap-3 md:hidden">
                    <a
                        href="#catalogo"
                        className="font-['AmberlySans'] font-bold text-[0.85rem] text-blancoPrint no-underline px-3 py-[0.4rem] rounded-full border-[3px] border-negroPrint bg-naranjaPrint uppercase inline-flex items-center gap-2 shadow-[3px_3px_0_var(--negroPrint)]"
                    >
                        🛒
                        <span className="font-['AmberlySans'] font-bold text-[0.65rem] px-[0.5rem] py-[0.1rem] rounded-full border-2 bg-amarilloPrint text-negroPrint border-negroPrint">
                            {cartCount}
                        </span>
                    </a>
                    <button
                        onClick={() => setMenuOpen(o => !o)}
                        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-menu"
                        className="w-10 h-10 flex items-center justify-center text-blancoPrint border-2 border-white/40 rounded-full text-[1.3rem] hover:bg-white/10 transition-colors duration-150"
                    >
                        {menuOpen ? "✕" : "☰"}
                    </button>
                </div>

            </header>

            {/* Menú móvil desplegable */}
            {menuOpen && (
                <nav
                    id="mobile-menu"
                    aria-label="Menú móvil"
                    className="fixed top-17.5 inset-x-0 z-99 bg-verdePrint border-b-[3px] border-negroPrint px-6 py-5 flex flex-col gap-1 shadow-[0_6px_0_var(--negroPrint)] md:hidden"
                >
                    {navLinks.map(({ label, href }) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="font-['AmberlySans'] font-bold text-[1rem] text-blancoPrint no-underline py-3 border-b border-white/20 uppercase tracking-[0.05em] transition-colors duration-150 hover:text-amarilloPrint"
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href="#catalogo"
                        onClick={() => setMenuOpen(false)}
                        className="mt-3 font-['AmberlySans'] font-bold text-[0.9rem] text-negroPrint no-underline px-6 py-3 rounded-full border-[3px] border-negroPrint bg-naranjaPrint uppercase tracking-[0.05em] inline-flex items-center justify-center gap-2 shadow-[4px_4px_0_var(--negroPrint)]"
                    >
                        Pedir ahora 🛒
                        <span className="font-['AmberlySans'] font-bold text-[0.65rem] px-[0.6rem] py-[0.15rem] rounded-full border-2 bg-amarilloPrint text-negroPrint border-negroPrint">
                            {cartCount}
                        </span>
                    </a>
                </nav>
            )}
        </>
    )
}
