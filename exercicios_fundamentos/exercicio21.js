function menorNumero(numeros) {
    let menor = numeros[0]
    for (let valor of numeros) {
        if (valor < menor) {
            menor = valor
        }
    }
    return menor
}

console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15