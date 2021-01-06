function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Lápis', 1.90))
console.log(criarProduto('iPad', 1199.49))