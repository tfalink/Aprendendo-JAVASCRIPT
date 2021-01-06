function pontuacao(lista) {
    let vetor = lista.split(', ')
    let quebrasRecorde = 0
    let piorJogo = 1
    let maiorPontuacao = vetor[0]
    let menorPontuacao = vetor[0]
    
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maiorPontuacao) {
            maiorPontuacao = vetor[i]
            quebrasRecorde++
        } else if (vetor[i] < menorPontuacao) {
            menorPontuacao = vetor[i]
            piorJogo = i + 1
        }
    }

    return [quebrasRecorde, piorJogo]
}

console.log(pontuacao('30, 40, 20, 4, 51, 25, 42, 38, 56, 0'))
