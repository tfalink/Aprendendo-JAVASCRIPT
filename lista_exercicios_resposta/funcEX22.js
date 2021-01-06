function anuidade(mes, valor) {
    if (mes <= 0 || mes > 12) {
        return 'Mês inválido'
    }

    let tempo = mes - 1
    let juros = Math.pow((1 + 0.05), tempo)
    let resultado = valor * juros
    return resultado.toFixed(2)
}

console.log(`Teste: ${anuidade(4, 100)}`)
