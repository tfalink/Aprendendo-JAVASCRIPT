function intervalo(vetorNum) {
    let inside = 0
    let outside = 0

    for (let i = 0; i < vetorNum.length; i++) {
        if (vetorNum[i] >= 10 && vetorNum[i] <= 20) {
            inside++
        } else {
            outside++
        }
    }

    console.log(`Dentro do intervalo: ${inside}; Fora do intervalo: ${outside}`)
}

let vetor = []
for (let i = 5; i <= 25; i++) {
    vetor.push(i)
}

console.log(vetor)
intervalo(vetor)