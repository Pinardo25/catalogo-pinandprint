"use client";
import  {useState}  from "react";

export function Filtro() {
const [active, setActive] = useState("all");
    const filters = [
        { label: "Todos", filter: "todos" },
        { label: "Series - Peliculas", filter: "series y peliculas" },
        { label: "Anime - Gamers", filter: "anime y gamers" },
        { label: "Marcas", filter: "marcas" },
        { label: "Personalizados", filter: "personalizados" },
        { label: "Bandas", filter: "bandas" },
    ];
    return (
    <div className="bg-[var(--amarilloPrint)] border-t-[3px] border-b-[3px] border-[var(--negroPrint)] px-8 py-[1.2rem] flex items-center justify-center gap-3 flex-wrap sticky top-[70px] z-[90]">
        <span className="font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.1em] text-[var(--negroPrint)] mr-2">
            Filtrar:
        </span>

        {filters.map(({ label, filter }) => (
            <button
                key={filter}
                data-filter={filter}
                onClick={() => setActive(filter)}
                className={`font-['AmberlySans'] font-bold text-[0.8rem] uppercase tracking-[0.05em] px-[1.2rem] py-[0.45rem] border-[2.5px] border-[var(--negroPrint)] rounded-full cursor-pointer transition-[background,color,transform] duration-150
        ${active === filter
                        ? "bg-[var(--negroPrint)] text-[var(--amarilloPrint)] scale-105"
                        : "bg-transparent text-[var(--negroPrint)] hover:bg-[var(--negroPrint)] hover:text-[var(--amarilloPrint)] hover:scale-105"
                    }`}
            >
                {label}
            </button>
        ))}
    </div>
    );
}