function paresImpares(vetor) {
    let pares = 0
    let impares = 0
    
    for (let i in vetor) {
        if (vetor[i] % 2 == 0) {
            pares++
        } else {
            impares++
        }
    }

    console.log(`Pares: ${pares}; Impares: ${impares}`)
}

paresImpares([3, 5, 1, 8, 40, 31, 60, 44])
paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])