function negativos(vetNum) {
    let qtdNegativos = 0

    for (let i = 0; i < vetNum.length; i++) {
        if (vetNum[i] < 0) {
            qtdNegativos++
        }
    }

    return qtdNegativos
}

let vetor = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5]
console.log(negativos(vetor))