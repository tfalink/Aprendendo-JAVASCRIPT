function somarNumeros(array) {
    const resultado = array.reduce(function(soma, valor) {
        return soma + valor
    })
    return resultado
}

console.log(somarNumeros([10, 10, 10])) // retornará 30
console.log(somarNumeros([15, 15, 15, 15])) // retornará 60