/*function calcularMedia(array) {
    let resultado = 0
    for (let valor of array) {
        resultado += valor
    }
    return resultado / array.length
}*/

function calcularMedia(array) {
    let resultado = array.reduce((soma, valor) => soma + valor)
    return resultado / array.length
}

console.log(calcularMedia([0, 10])) // retornará 5
console.log(calcularMedia([1, 2, 3, 4, 5, 6])) // retornará 3