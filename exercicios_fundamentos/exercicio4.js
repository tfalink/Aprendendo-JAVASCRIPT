const nomeDoMes = function(mes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    if (mes >= 1 && mes <= 12) {
        return `${meses[mes - 1]}`
    }
}

console.log(nomeDoMes(1))
console.log(nomeDoMes(4))