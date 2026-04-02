"use client"

import { createContext, useContext, useState, useRef, useCallback, type ReactNode } from "react"
import type { Product } from "../data/products"

type AppContextType = {
	cartCount: number
	liked: Record<number, boolean>
	toggleLike: (id: number) => void
	toast: string
	showToast: (msg: string) => void
	modal: Product | null
	openModal: (p: Product | null) => void
	selectedSize: string
	setSelectedSize: (s: string) => void
	addToCart: () => void
	quickAdd: () => void
}

const AppContext = createContext<AppContextType | null>(null)

export function useApp() {
	const ctx = useContext(AppContext)
	if (!ctx) throw new Error("useApp must be used within AppProvider")
	return ctx
}

export function AppProvider({ children }: { children: ReactNode }) {
	const [cartCount, setCartCount] = useState(0)
	const [liked, setLiked] = useState<Record<number, boolean>>({})
	const [toast, setToast] = useState("")
	const [modal, setModal] = useState<Product | null>(null)
	const [selectedSize, setSelectedSize] = useState("")
	const toastRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const showToast = useCallback((msg: string) => {
		if (toastRef.current) clearTimeout(toastRef.current)
		setToast(msg)
		toastRef.current = setTimeout(() => setToast(""), 2800)
	}, [])

	// Read current liked value before updating so toast reflects the change
	function toggleLike(id: number) {
		showToast(liked[id] ? "💔 Quitado de favoritos" : "💜 ¡Agregado a favoritos!")
		setLiked(prev => ({ ...prev, [id]: !prev[id] }))
	}

	const openModal = useCallback((p: Product | null) => {
		setModal(p)
		setSelectedSize("")
	}, [])

	const addToCart = useCallback(() => {
		if (!selectedSize) {
			showToast("⚠️ Selecciona una talla primero")
			return
		}
		setCartCount(c => c + 1)
		setModal(null)
		showToast("🛒 ¡Agregado al carrito!")
	}, [selectedSize, showToast])

	const quickAdd = useCallback(() => {
		setCartCount(c => c + 1)
		showToast("🛒 ¡Agregado al carrito!")
	}, [showToast])

	return (
		<AppContext.Provider
			value={{
				cartCount, liked, toggleLike,
				toast, showToast,
				modal, openModal,
				selectedSize, setSelectedSize,
				addToCart, quickAdd,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}
