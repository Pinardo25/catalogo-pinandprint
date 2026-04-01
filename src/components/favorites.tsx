"use client"

import { useApp } from "../context/AppContext"
import { products } from "../data/products"
import ProductCard from "./ProductCard"

export default function Favorites() {
	const { liked } = useApp()
	const favoriteProducts = products.filter(p => liked[p.id])

	if (favoriteProducts.length === 0) return null

	return (
		<section className="py-20 px-8 max-w-350 mx-auto">
			<div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
				<h2 className="font-['SuperKindly'] text-[clamp(2rem,5vw,3.5rem)] text-negroPrint leading-none">
					Tus favoritos<span className="text-naranjaPrint">.</span>
				</h2>
				<span className="font-['AmberlySans'] text-[0.9rem] text-negroPrint opacity-60 font-bold">
					{favoriteProducts.length} guardado{favoriteProducts.length !== 1 ? "s" : ""}
				</span>
			</div>
			<div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8" role="list">
				{favoriteProducts.map((p, i) => (
					<ProductCard key={p.id} product={p} index={i} />
				))}
			</div>
		</section>
	)
}
