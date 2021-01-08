function receberPrimeiroEUltimoElemento(array) {
    const resultado = []
    if (array.length > 0) {
        resultado.push(array[0], array[array.length-1])
        return resultado
    }
}

console.log(receberPrimeiroEUltimoElemento([7,14,"olá"])) // retornará [7, "olá"]
console.log(receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])) // retornará [-100, 16]