function estaEntre(minimo, maximo, numero, inclusivo) {
    if (inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(estaEntre(10, 100, 20)) // retornará true
console.log(estaEntre(16, 100, 160)) // retornará false
console.log(estaEntre(3, 150, 3)) // retornará false
console.log(estaEntre(3, 150, 3, true))