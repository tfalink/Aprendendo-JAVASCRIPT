function Compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarDe50 = trabalho1 && trabalho2
    // const comprarTvDe32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTvDe32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return { comprarSorvete, comprarDe50, comprarTvDe32, manterSaudavel }
}

console.log(Compras(true, true))
console.log(Compras(true, false))
console.log(Compras(false, true))
console.log(Compras(false, false))