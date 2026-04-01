"use client"

import { useApp } from "../context/AppContext"

export default function Toast() {
	const { toast } = useApp()
	if (!toast) return null

	return (
		<div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-9999 bg-verdePrint text-blancoPrint font-['AmberlySans'] font-bold text-[0.9rem] px-6 py-3 rounded-full border-2 border-amarilloPrint shadow-[4px_4px_0_var(--amarilloPrint)] animate-fadeUp whitespace-nowrap">
			{toast}
		</div>
	)
}
