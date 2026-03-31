
export default function Footer() {
    return (
        <footer className="bg-[var(--verdePrint)] border-t-[3px] border-[var(--negroPrint)] pt-12 px-8 pb-8 text-[var(--blancoPrint)]">

            {/* .footer-inner */}
            <div className="max-w-[1200px] mx-auto grid grid-cols-[2fr_1fr_1fr_1.5fr] gap-12">

                {/* Columna marca */}
                <div>
                    <a href="#" className="flex items-center gap-3 no-underline " aria-label="Pin & Print - Inicio">

                        <p className="font-['SuperKindly'] text-[var(--amarilloPrint)] [-webkit-text-stroke:1px_var(--negroPrint)] text-[1.6rem] tracking-[1px] leading-none">Pin
                            <span className="text-blancoPrint hover:text-[var(--naranjaPrint)] ">&amp;
                            </span>
                            Print
                        </p>
                    </a>
                    {/* .footer-tagline */}
                    <p className="font-['AmberlySans'] text-[0.9rem] opacity-85 leading-[1.6] mb-6">
                        Camisas únicas hechas a tu mood. Diseño, calidad y personalización en un solo lugar.
                    </p>
                    {/* .footer-social */}
                    <div className="flex gap-3">
                        {[
                            { icon: "📸", href: "#" },
                            { icon: "🎵", href: "#" },
                            { icon: "💬", href: "#" },
                        ].map(({ icon, href }) => (
                            <a
                                key={icon}
                                href={href}
                                className="w-10 h-10 border-2 border-white/40 rounded-full flex items-center justify-center text-[1rem] text-[var(--blancoPrint)] no-underline transition-[background,border-color,color] duration-200 hover:bg-[var(--amarilloPrint)] hover:border-[var(--amarilloPrint)] hover:text-[var(--negroPrint)]"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Columna enlaces */}
                <div>
                    <h4 className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.12em] text-[var(--amarilloPrint)] mb-4">
                        Catálogo
                    </h4>
                    <ul className="list-none">
                        {["Gráfico", "Minimalista", "Retro", "Personalizado", "Edición Limitada"].map(item => (
                            <li key={item} className="mb-2">
                                <a href="#" className="text-white/70 no-underline font-['AmberlySans'] text-[0.88rem] transition-colors duration-200 hover:text-[var(--amarilloPrint)]">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Columna info */}
                <div>
                    <h4 className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.12em] text-[var(--amarilloPrint)] mb-4">
                        Info
                    </h4>
                    <ul className="list-none">
                        {["Sobre nosotros", "Cómo funciona", "Envíos", "Devoluciones", "Contacto"].map(item => (
                            <li key={item} className="mb-2">
                                <a href="#" className="text-white/70 no-underline font-['AmberlySans'] text-[0.88rem] transition-colors duration-200 hover:text-[var(--amarilloPrint)]">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Columna newsletter */}
                <div>
                    <h4 className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.12em] text-[var(--amarilloPrint)] mb-4">
                        Newsletter
                    </h4>
                    <div className="footer-newsletter">
                        <input
                            type="email"
                            placeholder="tu@correo.com"
                            className="footer-input w-full px-4 py-[0.7rem] border-2 border-white/30 rounded-[8px] bg-white/10 text-[var(--blancoPrint)] font-['AmberlySans'] text-[0.85rem] mb-3 transition-[border-color] duration-200"
                        />
                        <button className="w-full font-['AmberlySans'] font-bold text-[0.85rem] uppercase tracking-[0.05em] py-[0.7rem] bg-[var(--amarilloPrint)] text-[var(--negroPrint)] border-2 border-[var(--negroPrint)] rounded-[8px] cursor-pointer shadow-[3px_3px_0_var(--negroPrint)] transition-[transform,box-shadow] duration-150 hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_var(--negroPrint)]">
                            Suscribirme ✦
                        </button>
                    </div>
                </div>

            </div>

            {/* .footer-bottom */}
            <div className="max-w-[1200px] mx-auto mt-8 pt-6 border-t border-white/20 flex items-center justify-between flex-wrap gap-4">
                <p className="font-['AmberlySans'] text-[0.8rem] text-white/60">
                    © 2025 Pin & Print — Todos los derechos reservados.
                </p>
                <p className="font-['AmberlySans'] text-[0.8rem] text-white/60">
                    Hecho con 💜 en Medellín Colombia.
                </p>
            </div>

        </footer >
    )
}


