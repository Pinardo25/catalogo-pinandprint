"use client"

import { useState, type FormEvent } from "react"

const socialLinks = [
	{ icon: "📸", href: "https://www.instagram.com/pinandprint.co", label: "Instagram" },
	{ icon: "🎵", href: "https://www.tiktok.com/@pinandprint", label: "TikTok" },
	{ icon: "💬", href: "https://wa.me/3136458875", label: "WhatsApp" },
]

export default function Footer() {
	const [email, setEmail] = useState("")
	const [subscribed, setSubscribed] = useState(false)

	function handleSubscribe(e: FormEvent) {
		e.preventDefault()
		if (!email.includes("@")) return
		setSubscribed(true)
		setEmail("")
	}

	return (
		<footer className="bg-verdePrint border-t-[3px] border-negroPrint pt-12 px-8 pb-8 text-blancoPrint">
			<div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-8 lg:gap-12">

				{/* Columna marca */}
				<div>
					<a href="#" className="flex items-center gap-3 no-underline" aria-label="Pin & Print - Inicio">
						<p className="font-['SuperKindly'] text-amarilloPrint [-webkit-text-stroke:1px_var(--negroPrint)] text-[1.6rem] tracking-[1px] leading-none">
							Pin<span className="text-blancoPrint hover:text-naranjaPrint">&amp;</span>Print
						</p>
					</a>

					<p className="font-['AmberlySans'] text-[0.9rem] opacity-85 leading-[1.6] mb-6 mt-2">
						Camisas únicas hechas a tu mood. Diseño, calidad y personalización en un solo lugar.
					</p>

					<div className="flex gap-3">
						{socialLinks.map(({ icon, href, label }) => (
							<a
								key={label}
								href={href}
								aria-label={label}
								className="w-10 h-10 border-2 border-white/40 rounded-full flex items-center justify-center text-[1rem] text-blancoPrint no-underline transition-[background,border-color,color] duration-200 hover:bg-amarilloPrint hover:border-amarilloPrint hover:text-negroPrint"
							>
								{icon}
							</a>
						))}
					</div>
				</div>

				{/* Columna enlaces */}
				<div>
					<h4 className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.12em] text-amarilloPrint mb-4">
						Catálogo
					</h4>
					<ul className="list-none">
						{["Gráfico", "Minimalista", "Retro", "Personalizado", "Edición Limitada"].map(item => (
							<li key={item} className="mb-2">
								<a href="#catalogo" className="text-white/70 no-underline font-['AmberlySans'] text-[0.88rem] transition-colors duration-200 hover:text-amarilloPrint">
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Columna info */}
				<div>
					<h4 className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.12em] text-amarilloPrint mb-4">
						Info
					</h4>
					<ul className="list-none">
						{["Sobre nosotros", "Cómo funciona", "Envíos", "Devoluciones", "Contacto"].map(item => (
							<li key={item} className="mb-2">
								<a href="#" className="text-white/70 no-underline font-['AmberlySans'] text-[0.88rem] transition-colors duration-200 hover:text-amarilloPrint">
									{item}
								</a>
							</li>
						))}
					</ul>
				</div>

				{/* Columna newsletter */}
				<div>
					<h4 className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.12em] text-amarilloPrint mb-4">
						Newsletter
					</h4>
					{subscribed ? (
						<p className="font-['AmberlySans'] font-bold text-[0.9rem] text-amarilloPrint">
							✦ ¡Gracias por suscribirte!
						</p>
					) : (
						<form onSubmit={handleSubscribe}>
							<label htmlFor="newsletter-email" className="sr-only">
								Tu correo electrónico
							</label>
							<input
								id="newsletter-email"
								type="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								placeholder="tu@correo.com"
								required
								className="w-full px-4 py-[0.7rem] border-2 border-white/30 rounded-lg bg-white/10 text-blancoPrint font-['AmberlySans'] text-[0.85rem] mb-3 transition-[border-color] duration-200 outline-none focus:border-amarilloPrint"
							/>
							<button
								type="submit"
								className="w-full font-['AmberlySans'] font-bold text-[0.85rem] uppercase tracking-[0.05em] py-[0.7rem] bg-amarilloPrint text-negroPrint border-2 border-negroPrint rounded-lg cursor-pointer shadow-[3px_3px_0_var(--negroPrint)] transition-[transform,box-shadow] duration-150 hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_var(--negroPrint)]"
							>
								Suscribirme ✦
							</button>
						</form>
					)}
				</div>

				</div>

				{/* Footer bottom */}
				<div className="max-w-300 mx-auto mt-8 pt-6 border-t border-white/20 flex items-center justify-between flex-wrap gap-4">
					<p className="font-['AmberlySans'] text-[0.8rem] text-white/60">
						© {new Date().getFullYear()} Pin & Print — Todos los derechos reservados.
					</p>
					<p className="font-['AmberlySans'] text-[0.8rem] text-white/60">
						Hecho con 💜 en Medellín Colombia.
					</p>
				</div>

		</footer>
	)
}
