function jurosSimples(capital, taxa, tempo) {
    let juros = 1 + taxa * tempo
    let montante = capital * juros
    console.log(`Juros: R$ ${juros} Montante: R$ ${montante}`)
}

function jurosCompostos(capital, taxa, tempo) {
    let juros = Math.pow((1 + taxa), tempo)
    let montante = capital * juros
    console.log(`Juros: R$ ${juros} Montante: R$ ${montante}`)
}

jurosSimples(20000, 0.25, 6)
jurosCompostos(20000, 0.25, 6)