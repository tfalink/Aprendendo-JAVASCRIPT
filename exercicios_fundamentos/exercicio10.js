function simboloMais(qtd) {
    let resultado = ""
    for (let i = 1; i <= qtd; i++) {
        resultado += "+"
    }
    return resultado
}

console.log(simboloMais(2)) // retornará "++"
console.log(simboloMais(4)) // retornará "++++"
