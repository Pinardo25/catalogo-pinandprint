export function Marquee() {
	return (
		<div className="bg-naranjaPrint border-t-[3px] border-b-[3px] border-negroPrint overflow-hidden py-[0.8rem]">
			<div className="flex gap-0 animate-marque w-max">
				{[...Array(2)].map((_, i) => (
					<div key={i} className="flex items-center">
						{["CAMISAS ÚNICAS", "ESTAMPADOS", "HECHO A TU MOOD", "ENVÍOS A TODO EL PAÍS", "PERSONALIZA LA TUYA"].map((text) => (
							<span
								key={text}
								className="font-['AmberlySans'] text-[1.1rem] text-blancoPrint whitespace-nowrap px-8 flex items-center gap-4 after:content-['✦'] after:text-amarilloPrint"
							>
								{text}
							</span>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
