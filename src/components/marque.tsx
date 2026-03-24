export function Marque() {
    return (

<div className="bg-[var(--naranjaPrint)] border-t-[3px] border-b-[3px] border-[var(--negroPrint)] overflow-hidden py-[0.8rem]">

    {/* .marquee-track */}
    <div className="flex gap-0 animate-marque w-max">

        {/* .marquee-item — repite el contenido DOS veces para que sea infinito */}
        {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center">
                {["CAMISAS ÚNICAS", "ESTAMPADOS", "HECHO A TU MOOD", "ENVÍOS A TODO EL PAÍS", "PERSONALIZA LA TUYA"].map((text) => (
                    <span
                        key={text}
                        className="font-['SuperKindly'] text-[1.1rem] text-[var(--blancoPrint)] whitespace-nowrap px-8 flex items-center gap-4 after:content-['✦'] after:text-[var(--amarilloPrint)]"
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