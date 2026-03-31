export default function Feature() {

    return (
    
    <section className="py-20 px-8 bg-[var(--negroPrint)] border-t-[3px] border-[var(--amarilloPrint)]">

        {/* .features-grid */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 text-center">

            {/* .feature-card */}
            <div className="px-6 py-8 border-2 border-white/10 rounded-[20px] bg-white/[0.04] transition-[background,transform] duration-300 hover:bg-white/[0.08] hover:-translate-y-1">
                {/* .feature-icon */}
                <span className="text-[2.5rem] mb-4 block">🎨</span>
                {/* .feature-title */}
                <h3 className="font-['SuperKindly'] text-[1.3rem] text-[var(--amarilloPrint)] mb-2">
                    Diseño único
                </h3>
                {/* .feature-text */}
                <p className="font-['AmberlySans'] text-[0.85rem] text-white/60 leading-[1.6]">
                    Cada camisa es una obra de arte hecha especialmente para ti.
                </p>
            </div>

            <div className="px-6 py-8 border-2 border-white/10 rounded-[20px] bg-white/[0.04] transition-[background,transform] duration-300 hover:bg-white/[0.08] hover:-translate-y-1">
                <span className="text-[2.5rem] mb-4 block">🚚</span>
                <h3 className="font-['SuperKindly'] text-[1.3rem] text-[var(--amarilloPrint)] mb-2">
                    Envíos a todo el país
                </h3>
                <p className="font-['AmberlySans'] text-[0.85rem] text-white/60 leading-[1.6]">
                    Llevamos tu pedido hasta la puerta de tu casa.
                </p>
            </div>

            <div className="px-6 py-8 border-2 border-white/10 rounded-[20px] bg-white/[0.04] transition-[background,transform] duration-300 hover:bg-white/[0.08] hover:-translate-y-1">
                <span className="text-[2.5rem] mb-4 block">✨</span>
                <h3 className="font-['SuperKindly'] text-[1.3rem] text-[var(--amarilloPrint)] mb-2">
                    Calidad premium
                </h3>
                <p className="font-['AmberlySans'] text-[0.85rem] text-white/60 leading-[1.6]">
                    Materiales de alta calidad que duran y se sienten bien.
                </p>
            </div>

            <div className="px-6 py-8 border-2 border-white/10 rounded-[20px] bg-white/[0.04] transition-[background,transform] duration-300 hover:bg-white/[0.08] hover:-translate-y-1">
                <span className="text-[2.5rem] mb-4 block">💜</span>
                <h3 className="font-['SuperKindly'] text-[1.3rem] text-[var(--amarilloPrint)] mb-2">
                    Hecho con amor
                </h3>
                <p className="font-['AmberlySans'] text-[0.85rem] text-white/60 leading-[1.6]">
                    Cada pedido lo tratamos como si fuera para nosotros mismos.
                </p>
            </div>

        </div>
    </section>
    );
}