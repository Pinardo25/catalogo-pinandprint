"use client"

import Image from "next/image"
import { useApp } from "../context/AppContext"
import { badgeClasses, colorNames } from "../data/products"
import { formatPrice } from "../lib/utils"
import type { Product } from "../data/products"

type Props = {
	product: Product
	index: number
}

export default function ProductCard({ product: p, index: i }: Props) {
	const { liked, toggleLike, quickAdd, openModal } = useApp()

	return (
		<article
			role="listitem"
			onClick={() => openModal(p)}
			style={{ animationDelay: `${i * 0.07}s` }}
			aria-label={`${p.name} - ${formatPrice(p.price)}`}
			className="bg-blancoPrint border-[3px] border-negroPrint rounded-[20px] overflow-hidden shadow-[6px_6px_0_var(--negroPrint)] transition-[transform,box-shadow] duration-200 flex flex-col cursor-pointer animate-fadeUp hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--negroPrint)] group"
		>
			{/* Imagen */}
			<div className="relative overflow-hidden bg-(--cream) aspect-[1/1.1]">
				<Image
					src={p.img}
					alt={`Camisa ${p.name} - Pin & Print`}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1400px) 33vw, 450px"
					className="object-cover transition-transform duration-400 ease-in-out group-hover:scale-[1.06]"
				/>

				{/* Badge */}
				{p.tag && (
					<span className={`absolute top-3 left-3 font-['AmberlySans'] font-bold text-[0.7rem] uppercase tracking-[0.08em] px-[0.8rem] py-[0.3rem] rounded-full border-2 border-negroPrint shadow-[2px_2px_0_var(--negroPrint)] ${badgeClasses[p.tag]}`}>
						{p.tagLabel}
					</span>
				)}

				{/* Colores */}
				<div className="absolute bottom-3 left-3 flex gap-1.25" aria-label="Colores disponibles">
					{p.colors.map(c => (
						<span
							key={c}
							style={{ background: c }}
							title={colorNames[c] ?? c}
							className="w-4.5 h-4.5 rounded-full border-2 border-negroPrint shadow-[1px_1px_0_var(--negroPrint)] transition-transform duration-150 hover:scale-[1.3]"
						/>
					))}
				</div>

				{/* Wishlist */}
				<button
					onClick={e => { e.stopPropagation(); toggleLike(p.id) }}
					aria-label={liked[p.id] ? "Quitar de favoritos" : "Agregar a favoritos"}
					className={`
						absolute top-3 right-3 w-9 h-9 border-2 border-negroPrint rounded-full flex items-center
						justify-center cursor-pointer shadow-[2px_2px_0_var(--negroPrint)]
						transition-[background,transform] duration-200 text-[1rem] hover:scale-[1.15]
						${liked[p.id] ? "bg-naranjaPrint" : "bg-blancoPrint hover:bg-lilaPrint"}
					`}
				>
					{liked[p.id] ? "❤️" : "🤍"}
				</button>
			</div>

			{/* Body */}
			<div className="px-[1.4rem] py-[1.2rem] flex-1 flex flex-col gap-[0.4rem]">
				<span className="font-['AmberlySans'] font-bold text-[0.7rem] uppercase tracking-[0.12em] text-moradoPrint">
					{p.category}
				</span>
				<h3 className="font-['AmberlySans'] font-bold text-[1.05rem] text-negroPrint leading-[1.3]">
					{p.name}
				</h3>
				<p className="font-['AmberlySans'] text-[0.82rem] text-[#555] leading-normal flex-1">
					{p.desc}
				</p>
			</div>

			{/* Footer */}
			<div className="flex items-center justify-between px-[1.4rem] pb-[1.4rem] pt-4 border-t-2 border-[#eee]">
				<div className="flex flex-col">
					{p.originalPrice && (
						<span className="text-[0.75rem] text-[#999] line-through font-['AmberlySans']">
							{formatPrice(p.originalPrice)}
						</span>
					)}
					<span className="font-['SuperKindly'] text-[1.4rem] text-verdePrint tracking-[0.02em]">
						{formatPrice(p.price)}
					</span>
				</div>
					<button
						onClick={e => { e.stopPropagation(); quickAdd() }}
						className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.05em] px-[1.2rem] py-[0.6rem] bg-negroPrint text-blancoPrint rounded-full cursor-pointer shadow-[3px_3px_0_var(--verdePrint)] transition-[transform,box-shadow,background] duration-150 hover:bg-[var(--verdePrint)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_var(--negroPrint)]"
					>
						+ Carrito
					</button>
			</div>
		</article>
	)
}
