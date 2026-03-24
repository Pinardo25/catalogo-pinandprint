"use client"

import { useState } from "react"

// ---- DATA ----
const products = [
    {
        id: 1, name: "Pinardo Original", category: "grafico",
        tag: "new", tagLabel: "Nuevo",
        price: 65000, originalPrice: null,
        desc: "La camisa oficial de la mascota. Pinardo en todo su esplendor con diseño exclusivo de alta calidad.",
        colors: ["#a772f2", "#eaacf2", "#1a1a1a"],
        img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80"
    },
    {
        id: 2, name: "Blob Retro", category: "retro",
        tag: "hot", tagLabel: "🔥 Más vendido",
        price: 58000, originalPrice: 72000,
        desc: "Estética retro-pop con formas orgánicas en la paleta de colores Pin & Print. Vibe 70s.",
        colors: ["#f2d95c", "#f24c3d", "#29733c"],
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"
    },
    {
        id: 3, name: "Minimal Verde", category: "minimalista",
        tag: null, tagLabel: null,
        price: 52000, originalPrice: null,
        desc: "Líneas simples, máximo impacto. Bordado minimalista en tono verde bosque.",
        colors: ["#29733c", "#fafaf5"],
        img: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&q=80"
    },
    {
        id: 4, name: "Galaxia Lila", category: "grafico",
        tag: "limited", tagLabel: "⭐ Limitada",
        price: 78000, originalPrice: null,
        desc: "Ilustración de galaxia con puntos estelares en tonos lilas, morados y blancos. Solo 30 unidades.",
        colors: ["#a772f2", "#eaacf2", "#1a1a1a"],
        img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=600&q=80"
    },
    {
        id: 5, name: "Acid Yellow", category: "retro",
        tag: "hot", tagLabel: "🔥 Popular",
        price: 60000, originalPrice: null,
        desc: "Camisa oversize con estampado tipográfico en amarillo ácido. Perfecta para el verano.",
        colors: ["#f2d95c", "#1a1a1a"],
        img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80"
    },
    {
        id: 6, name: "Tú la diseñas", category: "personalizado",
        tag: "new", tagLabel: "Custom",
        price: 75000, originalPrice: null,
        desc: "Camisa 100% personalizada. Envíanos tu diseño y nosotros lo llevamos al estampado.",
        colors: ["#eaacf2", "#f2d95c", "#a772f2", "#29733c"],
        img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80"
    },
    {
        id: 7, name: "Monster Club", category: "grafico",
        tag: "limited", tagLabel: "⭐ Limitada",
        price: 82000, originalPrice: 95000,
        desc: "Colección inspirada en Pinardo y sus amigos monstruo. Ilustraciones hechas a mano.",
        colors: ["#a772f2", "#f24c3d", "#1a1a1a"],
        img: "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=600&q=80"
    },
    {
        id: 8, name: "Geo Rojo", category: "minimalista",
        tag: null, tagLabel: null,
        price: 55000, originalPrice: 65000,
        desc: "Formas geométricas abstractas en rojo coral. Diseño clean con mucho carácter.",
        colors: ["#f24c3d", "#fafaf5"],
        img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80"
    },
    {
        id: 9, name: "Type Chaos", category: "retro",
        tag: "new", tagLabel: "Nuevo",
        price: 62000, originalPrice: null,
        desc: "Tipografía experimental combinando SuperKindly con textos aleatorios. Cada camisa diferente.",
        colors: ["#f2d95c", "#29733c", "#1a1a1a"],
        img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80"
    },
    {
        id: 10, name: "Lavanda Soft", category: "minimalista",
        tag: null, tagLabel: null,
        price: 50000, originalPrice: null,
        desc: "El tono lila pastel de la marca en camisa oversize suave. Básico premium de temporada.",
        colors: ["#eaacf2", "#a772f2"],
        img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80"
    },
    {
        id: 11, name: "Sticker Bomb", category: "grafico",
        tag: "hot", tagLabel: "🔥 Trending",
        price: 70000, originalPrice: null,
        desc: "Todo el universo Pin & Print en una sola camisa. Stickers, personajes y logos por toda la tela.",
        colors: ["#f2d95c", "#a772f2", "#f24c3d", "#29733c"],
        img: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&q=80"
    },
    {
        id: 12, name: "Noche Verde", category: "edicion",
        tag: "limited", tagLabel: "⭐ Ed. Especial",
        price: 88000, originalPrice: null,
        desc: "Camisa negra con estampado fosforescente verde. Brilla en la oscuridad. Solo 20 unidades.",
        colors: ["#1a1a1a", "#29733c"],
        img: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600&q=80"
    }
]

const badgeClasses: Record<string, string> = {
    new: "bg-[var(--verdePrint)]  text-[var(--blancoPrint)]",
    hot: "bg-[var(--naranjaPrint)]    text-[var(--blancoPrint)]",
    limited: "bg-[var(--moradoPrint)] text-[var(--blancoPrint)]",
    sale: "bg-[var(--amarilloPrint)] text-[var(--negroPrint)]",
}

const filters = [
    { label: "Todos", filter: "all" },
    { label: "Gráfico", filter: "grafico" },
    { label: "Minimalista", filter: "minimalista" },
    { label: "Retro", filter: "retro" },
    { label: "Personalizado", filter: "personalizado" },
    { label: "Edición Limitada", filter: "edicion" },
]

function formatPrice(p: number) {
    return "$" + p.toLocaleString("es-CO")
}

export default function Catalogo() {

    const [active, setActive] = useState("all")
    const [liked, setLiked] = useState<Record<number, boolean>>({})
    const [cartCount, setCartCount] = useState(0)
    const [toast, setToast] = useState("")
    const [modal, setModal] = useState<typeof products[0] | null>(null)
    const [selectedSize, setSelectedSize] = useState("")

    const filtered = active === "all"
        ? products
        : products.filter(p => p.category === active)

    function showToast(msg: string) {
        setToast(msg)
        setTimeout(() => setToast(""), 2800)
    }

    function toggleLike(id: number) {
        setLiked(prev => ({ ...prev, [id]: !prev[id] }))
        showToast(liked[id] ? "💔 Quitado de favoritos" : "💜 ¡Agregado a favoritos!")
    }

    function quickAdd() {
        setCartCount(c => c + 1)
        showToast("🛒 ¡Agregado al carrito!")
    }

    function addToCart() {
        setCartCount(c => c + 1)
        setModal(null)
        showToast("🛒 ¡Agregado al carrito!")
    }

    return (
        <div className="relative">

            {/* Toast */}
            {toast && (
                <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] bg-[var(--verdePrint)] text-[var(--blancoPrint)] font-['AmberlySans'] font-bold text-[0.9rem] px-6 py-3 rounded-full border-2 border-[var(--amarilloPrint)] shadow-[4px_4px_0_var(--amarilloPrint)] animate-fadeUp whitespace-nowrap">
                    {toast}
                </div>
            )}

            {/* Sección catálogo */}
            <main>
                <section className="py-20 px-8 max-w-[1400px] mx-auto relative z-[1]" aria-label="Catálogo de camisas">

                    {/* Header */}
                    <div className="flex items-baseline justify-between mb-12 flex-wrap gap-4">
                        <h2 className="font-['SuperKindly'] text-[clamp(2rem,5vw,3.5rem)] text-[var(--negroPrint)] leading-none">
                            Nuestro catálogo<span className="text-[var(--negroPrint)]">.</span>
                        </h2>
                        <span className="font-['AmberlySans'] text-[0.9rem] text-[var(--negroPrint)] opacity-60 font-bold">
                            {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
                        </span>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-8" role="list">
                        {filtered.map((p, i) => (
                            <article
                                key={p.id}
                                role="listitem"
                                onClick={() => { setModal(p); setSelectedSize("") }}
                                style={{ animationDelay: `${i * 0.07}s` }}
                                aria-label={`${p.name} - ${formatPrice(p.price)}`}
                                className="bg-[var(--white)] border-[3px] border-[var(--negroPrint)] rounded-[20px] overflow-hidden shadow-[6px_6px_0_var(--negroPrint)] transition-[transform,box-shadow] duration-200 flex flex-col cursor-pointer animate-fadeUp hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--negroPrint)] group"
                            >

                                {/* Imagen */}
                                <div className="relative overflow-hidden bg-[var(--cream)] aspect-[1/1.1]">
                                    <img
                                        src={p.img}
                                        alt={`Camisa ${p.name} - Pin & Print`}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-[1.06]"
                                    />

                                    {/* Badge */}
                                    {p.tag && (
                                        <span className={`absolute top-3 left-3 font-['AmberlySans'] font-bold text-[0.7rem] uppercase tracking-[0.08em] px-[0.8rem] py-[0.3rem] rounded-full border-2 border-[var(--negroPrint)] shadow-[2px_2px_0_var(--negroPrint)] ${badgeClasses[p.tag]}`}>
                                            {p.tagLabel}
                                        </span>
                                    )}

                                    {/* Colores */}
                                    <div className="absolute bottom-3 left-3 flex gap-[5px]" aria-label="Colores disponibles">
                                        {p.colors.map(c => (
                                            <span
                                                key={c}
                                                style={{ background: c }}
                                                title={c}
                                                className="w-[18px] h-[18px] rounded-full border-2 border-[var(--negroPrint)] shadow-[1px_1px_0_var(--negroPrint)] transition-transform duration-150 hover:scale-[1.3]"
                                            />
                                        ))}
                                    </div>

                                    {/* Wishlist */}
                                    <button
                                        onClick={e => { e.stopPropagation(); toggleLike(p.id) }}
                                        aria-label={liked[p.id] ? "Quitar de favoritos" : "Agregar a favoritos"}
                                        className={`absolute top-3 right-3 w-9 h-9 border-2 border-[var(--negroPrint)] rounded-full flex items-center justify-center cursor-pointer shadow-[2px_2px_0_var(--negroPrint)] transition-[background,transform] duration-200 text-[1rem] hover:scale-[1.15]
                      ${liked[p.id] ? "bg-[var(--naranjaPrint)]" : "bg-[var(--blancoPrint)] hover:bg-[var(--lilaPrint)]"}`}
                                    >
                                        {liked[p.id] ? "❤️" : "🤍"}
                                    </button>
                                </div>

                                {/* Body */}
                                <div className="px-[1.4rem] py-[1.2rem] flex-1 flex flex-col gap-[0.4rem]">
                                    <span className="font-['AmberlySans'] font-bold text-[0.7rem] uppercase tracking-[0.12em] text-[var(--moradoPrint)]">
                                        {p.category}
                                    </span>
                                    <h3 className="font-['AmberlySans'] font-bold text-[1.05rem] text-[var(--negroPrint)] leading-[1.3]">
                                        {p.name}
                                    </h3>
                                    <p className="font-['AmberlySans'] text-[0.82rem] text-[#555] leading-[1.5] flex-1">
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
                                        <span className="font-['SuperKindly'] text-[1.4rem] text-[var(--verdePrint)] tracking-[0.02em]">
                                            {formatPrice(p.price)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={e => { e.stopPropagation(); quickAdd() }}
                                        className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.05em] px-[1.2rem] py-[0.6rem] bg-[var(--negroPrint)] text-[var(--blancoPrint)] rounded-full cursor-pointer shadow-[3px_3px_0_var(--verdePrint)] transition-[transform,box-shadow,background] duration-150 hover:bg-[var(--verdePrint)] hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[4px_4px_0_var(--negroPrint)]">
                                        + Carrito
                                    </button>
                                </div>

                            </article>
                        ))}
                    </div>

                </section>
            </main>

            {/* Modal */}
            {modal && (
                <div
                    onClick={() => setModal(null)}
                    className="fixed inset-0 z-[9998] bg-black/60 flex items-center justify-center p-4"
                >
                    <div
                        onClick={e => e.stopPropagation()}
                        className="bg-[var(--blancoPrint)] border-[3px] border-[var(--negroPrint)] rounded-[20px] shadow-[8px_8px_0_var(--negroPrint)] max-w-lg w-full overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        <img
                            src={modal.img}
                            alt={`Camisa ${modal.name}`}
                            className="w-full aspect-video object-cover"
                        />
                        <div className="p-6 flex flex-col gap-3">

                            <span className="font-['AmberlySans'] font-bold text-[0.7rem] uppercase tracking-[0.12em] text-[var(--moradoPrint)]">
                                {modal.category}
                            </span>
                            <h3 className="font-['SuperKindly'] text-[2rem] text-[var(--negroPrint)] leading-none">
                                {modal.name}
                            </h3>
                            <p className="font-['AmberlySans'] text-[0.9rem] text-[#555] leading-relaxed">
                                {modal.desc}
                            </p>

                            {/* Selector de talla */}
                            <div className="flex gap-2 flex-wrap">
                                {["XS", "S", "M", "L", "XL", "XXL"].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`font-['AmberlySans'] font-bold text-[0.8rem] w-10 h-10 border-2 border-[var(--negroPrint)] rounded-full transition-all duration-150
                      ${selectedSize === size
                                                ? "bg-[var(--negroPrint)] text-[var(--blancoPrint)]"
                                                : "bg-transparent text-[var(--negroPrint)] hover:bg-[#eee]"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>

                            <span className="font-['SuperKindly'] text-[2rem] text-[var(--verdePrint)]">
                                {formatPrice(modal.price)}
                            </span>

                                {/* card grande */}
                            <div className="flex gap-3 mt-2">
                                <button
                                    onClick={addToCart}
                                    className="flex-1 font-['AmberlySans'] font-bold text-[0.9rem] uppercase tracking-[0.05em] py-3 bg-[var(--negroPrint)] text-[var(--blancoPrint)] rounded-full shadow-[4px_4px_0_var(--verdePrint)] hover:bg-[var(--verdePrint)] hover:shadow-[4px_4px_0_var(--negroPrint)] transition-all duration-150"
                                >
                                    + Agregar al carrito
                                </button>
                                <button
                                    onClick={() => setModal(null)}
                                    className="font-['AmberlySans'] font-bold text-[0.9rem] uppercase px-6 py-3 border-[2px] border-[var(--negroPrint)] rounded-full hover:bg-[#eee] transition-all duration-150"
                                >
                                    Cerrar
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}