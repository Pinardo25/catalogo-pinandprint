export default function Banner() {
	return (
		<div id="personalizar" className="banner bg-moradoPrint border-t-[3px] border-b-[3px] border-negroPrint py-10 md:py-16 px-4 sm:px-8 text-center relative overflow-hidden">
			<div className="relative z-1 max-w-175 mx-auto">
				<h2 className="font-['SuperKindly'] text-[clamp(2rem,6vw,4rem)] text-blancoPrint [webkit-text-stroke:1.5px_var(--negroPrint)] mb-4 leading-none">
					¿Listo para tu camisa?
				</h2>

				<p className="font-['AmberlySans'] text-[1rem] text-blancoPrint opacity-90 mb-8 leading-[1.6]">
					Diseña la tuya o elige una de nuestra colección. Envíos a todo el país.
				</p>

				<div className="flex gap-4 justify-center flex-wrap">
					<a
						href="#catalogo"
						className="font-['AmberlySans'] font-bold text-[1rem] px-[2.2rem] py-[0.85rem] rounded-full border-[3px] border-negroPrint cursor-pointer inline-flex items-center gap-2 shadow-[4px_4px_0_var(--negroPrint)] transition-[transform,box-shadow] duration-150 uppercase tracking-[0.05em] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--negroPrint)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0_var(--negroPrint)] bg-amarilloPrint text-negroPrint"
					>
						VER CATÁLOGO →
					</a>
					<a
						href="https://wa.me/573000000000"
						target="_blank"
						rel="noopener noreferrer"
						className="font-['AmberlySans'] font-bold text-[1rem] px-[2.2rem] py-[0.85rem] rounded-full border-[3px] cursor-pointer inline-flex items-center gap-2 transition-[transform,box-shadow] duration-150 uppercase tracking-[0.05em] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 bg-transparent text-blancoPrint border-blancoPrint shadow-[4px_4px_0_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0_rgba(255,255,255,0.3)]"
					>
						HABLAR POR WHATSAPP 💬
					</a>
				</div>
			</div>
		</div>
	)
}
