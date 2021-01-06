let vetor = [1, 2, 3, 4, 5]
function vetMult (vetor, mult) {
    let resultado = []

    for(let i = 0; i < vetor.length; i++){
        resultado.push(vetor[i] * mult)
    }

    return resultado
}

function vetMult5 (vetor, mult) {
    let resultado = []

    for(let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
            resultado.push(vetor[i] * mult)
        } else {
            resultado.push(vetor[i])
        }
    }

    return resultado
}

console.log(vetMult(vetor, 3))
console.log(vetMult5(vetor, 3))