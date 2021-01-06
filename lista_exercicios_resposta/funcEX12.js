function fatorial(numero) {
    let resultado = 1
    while (numero >= 1) {
        resultado *= numero
        numero--
    }
    return resultado
}

function fatorialRecursivo(numero) {
    if(numero == 0) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log(fatorial(10))
console.log(fatorialRecursivo(10))