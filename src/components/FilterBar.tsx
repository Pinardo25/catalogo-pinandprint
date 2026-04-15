"use client"

import { filters } from "../data/products"
type Props = {
    active: string
    setActive: (f: string) => void
}

export default function FilterBar({ active, setActive }: Props) {
	return (
		<div className="bg-amarilloPrint border-t-[3px] border-b-[3px] border-negroPrint px-8 py-[1.2rem] flex items-center justify-center gap-3 flex-wrap sticky top-17.5 z-90">
			<span className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-widest text-negroPrint mr-2">
				Filtrar:
			</span>
			{filters.map(({ label, filter }) => (
				<button
					key={filter}
					onClick={() => setActive(filter)}
					className={`
						font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.05em] px-[1.2rem]
						py-[0.45rem] border-[2.5px] border-negroPrint rounded-full cursor-pointer
						transition-[background,color,transform] duration-150
						${active === filter
							? "bg-negroPrint text-amarilloPrint scale-105"
							: "bg-transparent text-negroPrint hover:bg-negroPrint hover:text-amarilloPrint hover:scale-105"
						}
					`}
				>
						{label}
				</button>
			))}
		</div>
	)
}
