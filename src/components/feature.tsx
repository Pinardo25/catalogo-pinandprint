const features = [
	{
		icon: "🎨",
		title: "Diseño único",
		text: "Cada camisa es una obra de arte hecha especialmente para ti.",
	},
	{
		icon: "🚚",
		title: "Envíos a todo el país",
		text: "Llevamos tu pedido hasta la puerta de tu casa.",
	},
	{
		icon: "✨",
		title: "Calidad premium",
		text: "Materiales de alta calidad que duran y se sienten bien.",
	},
	{
		icon: "💜",
		title: "Hecho con amor",
		text: "Cada pedido lo tratamos como si fuera para nosotros mismos.",
	},
]

export default function Feature() {
	return (
		<section id="nosotros" className="py-20 px-8 bg-negroPrint border-t-[3px] border-amarilloPrint">
			<div className="max-w-300 mx-auto grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 text-center">
				{features.map(({ icon, title, text }) => (
					<div
						key={title}
						className="px-6 py-8 border-2 border-white/10 rounded-[20px] bg-white/4 transition-[background,transform] duration-300 hover:bg-white/8 hover:-translate-y-1"
					>
						<span className="text-[2.5rem] mb-4 block">{icon}</span>
						<h3 className="font-['SuperKindly'] text-[1.3rem] text-amarilloPrint mb-2">
							{title}
						</h3>
						<p className="font-['AmberlySans'] text-[0.85rem] text-white/60 leading-[1.6]">
							{text}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}
