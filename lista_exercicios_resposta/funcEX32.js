function mediaAritmetica(vetNum) {
    let soma = 0

    for (let i = 0; i < vetNum.length; i++) {
        soma += vetNum[i]
    }

    return soma / vetNum.length
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`Media aritmética do vetor: ${mediaAritmetica(vetor)}`)