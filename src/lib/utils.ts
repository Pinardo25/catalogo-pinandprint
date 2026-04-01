export function formatPrice(p: number): string {
    return "$" + p.toLocaleString("es-CO")
}
