"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { useApp } from "../context/AppContext"
import { formatPrice } from "../lib/utils"

export default function ProductModal() {
	const { modal, openModal, selectedSize, setSelectedSize, addToCart } = useApp()
	const returnFocusRef = useRef<HTMLElement | null>(null)
	const firstFocusRef = useRef<HTMLButtonElement>(null)

	// Guardar foco anterior y hacer autofocus al primer elemento
	useEffect(() => {
		returnFocusRef.current = document.activeElement as HTMLElement
		firstFocusRef.current?.focus()
		return () => {
			returnFocusRef.current?.focus()
		}
	}, [])

	// Escape + scroll lock + focus trap
	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") {
				openModal(null)
				return
			}

			if (e.key === "Tab") {
				const dialog = document.querySelector('[role="dialog"]')
				if (!dialog) return
				const focusable = dialog.querySelectorAll<HTMLElement>(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
				)
				const first = focusable[0]
				const last = focusable[focusable.length - 1]
				if (e.shiftKey) {
					if (document.activeElement === first) {
						e.preventDefault()
						last.focus()
					}
				} else {
					if (document.activeElement === last) {
						e.preventDefault()
						first.focus()
					}
				}
			}
		}

		document.addEventListener("keydown", handleKeyDown)
		document.body.style.overflow = "hidden"
		return () => {
			document.removeEventListener("keydown", handleKeyDown)
			document.body.style.overflow = ""
		}
	}, [openModal])

    if (!modal) return null

	return (
		<div
			onClick={() => openModal(null)}
			className="fixed inset-0 z-9998 bg-black/60 flex items-center justify-center p-4"
		>
			<div
				role="dialog"
				aria-modal="true"
				aria-label={`Detalles de ${modal.name}`}
				onClick={e => e.stopPropagation()}
				className="bg-blancoPrint border-[3px] border-negroPrint rounded-[20px] shadow-[8px_8px_0_var(--negroPrint)] max-w-lg w-full overflow-hidden max-h-[90vh] overflow-y-auto"
			>
				<div className="relative w-full aspect-4/3">
					<Image
						src={modal.img}
						alt={`Camisa ${modal.name}`}
						fill
						sizes="(max-width: 768px) 100vw, 512px"
						className="object-cover"
					/>
				</div>

				<div className="p-6 flex flex-col gap-3">
					<span className="font-['AmberlySans'] font-bold text-[0.7rem] uppercase tracking-[0.12em] text-moradoPrint">
						{modal.category}
					</span>

					<h3 className="font-['SuperKindly'] text-[2rem] text-negroPrint leading-none">
						{modal.name}
					</h3>
					<p className="font-['AmberlySans'] text-[0.9rem] text-[#555] leading-relaxed">
						{modal.desc}
					</p>

					{/* Selector de talla */}
					<div className="flex gap-2 flex-wrap">
						{["XS", "S", "M", "L", "XL", "XXL"].map((size, idx) => (
							<button
								key={size}
								ref={idx === 0 ? firstFocusRef : undefined}
								onClick={() => setSelectedSize(size)}
								className={`font-['AmberlySans'] font-bold text-[0.8rem] w-10 h-10 border-2 border-negroPrint rounded-full transition-all duration-150
									${selectedSize === size
										? "bg-negroPrint text-blancoPrint"
										: "bg-transparent text-negroPrint hover:bg-[#eee]"
									}`}
							>
								{size}
							</button>
						))}
					</div>

					<span className="font-['SuperKindly'] text-[2rem] text-verdePrint">
						{formatPrice(modal.price)}
					</span>

					<div className="flex gap-3 mt-2">
						<button
							onClick={addToCart}
							className="flex-1 font-['AmberlySans'] font-bold text-[0.9rem] uppercase tracking-[0.05em] py-3 bg-negroPrint text-blancoPrint rounded-full shadow-[4px_4px_0_var(--verdePrint)] hover:bg-verdePrint hover:shadow-[4px_4px_0_var(--negroPrint)] transition-all duration-150"
						>
							+ Agregar al carrito
						</button>
						<button
							onClick={() => openModal(null)}
							className="font-['AmberlySans'] font-bold text-[0.9rem] uppercase px-6 py-3 border-2 border-negroPrint rounded-full bg-[#eee] text-negroPrint hover:bg-negroPrint hover:text-blancoPrint transition-all duration-150"
						>
							Cerrar
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
