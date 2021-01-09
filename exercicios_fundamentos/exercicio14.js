function objetoParaArray(objeto) {
    const newArray = []
    for (let chave in objeto) {
        newArray.push([chave, objeto[chave]])
    }
    return newArray
}

console.log(objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
})) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
})) // irá retornar [["codigo", 11111], ["preco", 12000]]