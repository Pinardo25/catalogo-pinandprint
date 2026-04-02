export type Product = {
	id: number
	name: string
	category: string
	tag: string | null
	tagLabel: string | null
	price: number
	originalPrice: number | null
	desc: string
	colors: string[]
	img: string
}

export const products: Product[] = [
	{
		id: 1, name: "Pinardo Original", category: "anime",
		tag: "new", tagLabel: "Nuevo",
		price: 65000, originalPrice: null,
		desc: "La camisa oficial de la mascota. Pinardo en todo su esplendor con diseño exclusivo de alta calidad.",
		colors: ["#a772f2", "#eaacf2", "#1a1a1a"],
		img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80"
	},
	{
		id: 2, name: "Blob Retro", category: "gamers",
		tag: "hot", tagLabel: "🔥 Más vendido",
		price: 58000, originalPrice: 72000,
		desc: "Estética retro-pop con formas orgánicas en la paleta de colores Pin & Print. Vibe 70s.",
		colors: ["#f2d95c", "#f24c3d", "#29733c"],
		img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"
	},
	{
		id: 3, name: "Minimal Verde", category: "bandas",
		tag: null, tagLabel: null,
		price: 52000, originalPrice: null,
		desc: "Líneas simples, máximo impacto. Bordado minimalista en tono verde bosque.",
		colors: ["#29733c", "#fafaf5"],
		img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&q=80"
	},
	{
		id: 4, name: "Galaxia Lila", category: "peliculas y series",
		tag: "limited", tagLabel: "⭐ Limitada",
		price: 78000, originalPrice: null,
		desc: "Ilustración de galaxia con puntos estelares en tonos lilas, morados y blancos. Solo 30 unidades.",
		colors: ["#a772f2", "#eaacf2", "#1a1a1a"],
		img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80"
	},
	{
		id: 5, name: "Acid Yellow", category: "otros",
		tag: "hot", tagLabel: "🔥 Popular",
		price: 60000, originalPrice: null,
		desc: "Camisa oversize con estampado tipográfico en amarillo ácido. Perfecta para el verano.",
		colors: ["#f2d95c", "#1a1a1a"],
		img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80"
	},
	{
		id: 6, name: "Tú la diseñas", category: "anime",
		tag: "new", tagLabel: "Custom",
		price: 75000, originalPrice: null,
		desc: "Camisa 100% personalizada. Envíanos tu diseño y nosotros lo llevamos al estampado.",
		colors: ["#eaacf2", "#f2d95c", "#a772f2", "#29733c"],
		img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80"
	},
	{
		id: 7, name: "Monster Club", category: "bandas",
		tag: "limited", tagLabel: "⭐ Limitada",
		price: 82000, originalPrice: 95000,
		desc: "Colección inspirada en Pinardo y sus amigos monstruo. Ilustraciones hechas a mano.",
		colors: ["#a772f2", "#f24c3d", "#1a1a1a"],
		img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80"
	},
	{
		id: 8, name: "Geo Rojo", category: "series y peliculas",
		tag: null, tagLabel: null,
		price: 55000, originalPrice: 65000,
		desc: "Formas geométricas abstractas en rojo coral. Diseño clean con mucho carácter.",
		colors: ["#f24c3d", "#fafaf5"],
		img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80"
	},
	{
		id: 9, name: "Type Chaos", category: "otros",
		tag: "new", tagLabel: "Nuevo",
		price: 62000, originalPrice: null,
		desc: "Tipografía experimental combinando SuperKindly con textos aleatorios. Cada camisa diferente.",
		colors: ["#f2d95c", "#29733c", "#1a1a1a"],
		img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80"
	},
	{
		id: 10, name: "Lavanda Soft", category: "anime",
		tag: null, tagLabel: null,
		price: 50000, originalPrice: null,
		desc: "El tono lila pastel de la marca en camisa oversize suave. Básico premium de temporada.",
		colors: ["#eaacf2", "#a772f2"],
		img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80"
	},
	{
		id: 11, name: "Sticker Bomb", category: "gamers",
		tag: "hot", tagLabel: "🔥 Trending",
		price: 70000, originalPrice: null,
		desc: "Todo el universo Pin & Print en una sola camisa. Stickers, personajes y logos por toda la tela.",
		colors: ["#f2d95c", "#a772f2", "#f24c3d", "#29733c"],
		img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80"
	},
	{
		id: 12, name: "Noche Verde", category: "series y peliculas",
		tag: "limited", tagLabel: "⭐ Ed. Especial",
		price: 88000, originalPrice: null,
		desc: "Camisa negra con estampado fosforescente verde. Brilla en la oscuridad. Solo 20 unidades.",
		colors: ["#1a1a1a", "#29733c"],
		img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&q=80"
	},
]

export const badgeClasses: Record<string, string> = {
	new: "bg-[var(--verdePrint)] text-[var(--blancoPrint)]",
	hot: "bg-[var(--naranjaPrint)] text-[var(--blancoPrint)]",
	limited: "bg-[var(--moradoPrint)] text-[var(--blancoPrint)]",
}

export const filters = [
	{ label: "Todos", filter: "all" },
	{ label: "Anime", filter: "anime" },
	{ label: "Gamers", filter: "gamers" },
	{ label: "Series y Peliculas", filter: "series y peliculas" },
	{ label: "Bandas", filter: "bandas" },
	{ label: "Otros", filter: "otros" },
]

export const colorNames: Record<string, string> = {
	"#a772f2": "Morado",
	"#eaacf2": "Lila",
	"#1a1a1a": "Negro",
	"#f2d95c": "Amarillo",
	"#f24c3d": "Naranja",
	"#29733c": "Verde",
	"#fafaf5": "Crema",
}
