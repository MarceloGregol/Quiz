export function embaralhar(elementos: any[]): any [] {
    return elementos
    .map(valor => ({ valor, aleatorio: Math.random() }))
    .sort((objt1, obj2) => objt1.aleatorio - obj2.aleatorio)
    .map(obj => obj.valor)
}