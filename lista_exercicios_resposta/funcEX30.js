function maiorMenor(vetNum) {
    let maior = vetNum[0]
    let menor = vetNum[0]

    for (let i = 1; i < vetNum.length; i++) {
        if (vetNum[i] < menor) {
            menor = vetNum[i]
        }
        if (vetNum[i] > maior) {
            maior = vetNum[i]
        }
    }
    
    console.log(`Maior valor do array: ${maior}; Menor valor do array: ${menor}`)
}

let vetor = [15, 65, 11, 9 , 7, 50, 112, -44]
maiorMenor(vetor)
maiorMenor()