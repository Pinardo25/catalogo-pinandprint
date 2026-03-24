export default function Banner() {
    return (

        <div className="banner bg-[var(--moradoPrint)] border-t-[3px] border-b-[3px] border-[var(--negroPrint)] py-16 px-8 text-center relative overflow-hidden">
            {/* .banner */}
            <div className="banner bg-[var(--moradoPrint)] border-t-[3px] border-b-[3px] border-[var(--negroPrint)] py-16 px-8 text-center relative overflow-hidden">

                {/* .banner-inner */}
                <div className="relative z-[1] max-w-[700px] mx-auto">

                    {/* .banner-title */}
                    <h2 className="font-['SuperKindly'] text-[clamp(2rem,6vw,4rem)] text-[var(--blancoPrint)] [webkit-text-stroke:1.5px_var(--negroPrint)] mb-4 leading-none">
                        ¿Listo para tu camisa?
                    </h2>

                    {/* .banner-text */}
                    <p className="font-['AmberlySans'] text-[1rem] text-[var(--blancoPrint)] opacity-90 mb-8 leading-[1.6]">
                        Diseña la tuya o elige una de nuestra colección. Envíos a todo el país.
                    </p>

                    {/* Botones aquí */}

                </div>
            </div>
        </div>
            );
}