function concatenar(...args) {
    let resultado = []

    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }

    return resultado
}

let vetorInteiro = [1, 2, 4, 10]
let vetorString = ['Luiz', 'TESTE', 'LUUUL', 'Demo']
let vetorDouble = [1.2, 3.1, 6.2, 9.5]

console.log(concatenar(vetorInteiro, vetorString))
console.log(concatenar(vetorString, vetorDouble))
console.log(concatenar(vetorDouble, vetorInteiro))
