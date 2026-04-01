"use client"

import { useState } from "react"
import { products } from "../data/products"
import { useApp } from "../context/AppContext"
import FilterBar from "./FilterBar"
import ProductCard from "./ProductCard"
import ProductModal from "./ProductModal"
import Toast from "./Toast"

export default function Catalogo() {
	const [active, setActive] = useState("all")
	const { modal } = useApp()

	const filtered = active === "all"
		? products
		: products.filter(p => p.category === active)

	return (
		<div className="relative" id="catalogo">
			<Toast />
			<FilterBar active={active} setActive={setActive} />
			<main>
				<section className="py-20 px-8 max-w-350 mx-auto relative z-1" aria-label="Catálogo de camisas">
					<div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
						<h2 className="font-['SuperKindly'] text-[clamp(2rem,5vw,3.5rem)] text-negroPrint leading-none">
								Nuestro catálogo<span className="text-negroPrint">.</span>
						</h2>
						<span className="font-['AmberlySans'] text-[0.9rem] text-negroPrint opacity-60 font-bold">
								{filtered.length} producto{filtered.length !== 1 ? "s" : ""}
						</span>
					</div>

					{filtered.length === 0 ? (
						<div className="flex flex-col items-center justify-center py-20 gap-4">
							<span className="text-[3rem]">🔍</span>
							<p className="font-['AmberlySans'] font-bold text-[1rem] text-negroPrint opacity-60">
									No hay productos en esta categoría por ahora.
							</p>
						</div>
					) : (
						<div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8" role="list">
							{filtered.map((p, i) => (
								<ProductCard key={p.id} product={p} index={i} />
							))}
						</div>
					)}

					</section>
				</main>

			{modal && <ProductModal />}
		</div>
	)
}
