function despesasTotais(array) {
    let resultado = 0
    for(let i = 0; i < array.length; i++) {
        let objeto = array[i]
        resultado += objeto.preco
    }
    return resultado
}

console.log(despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
])) // retornará 239.99
console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
])) // retornará 34599.89