function lanchonete(cod, qtd) {
    switch(cod) {
        case 100:
            console.log(`Cachorro Quente: R$ ${3 * qtd}`)
            break
        case 200:
            console.log(`Hambúrger Simples: R$ ${4 * qtd}`)
            break
        case 300:
            console.log(`Cheeseburguer: R$ ${5.5 * qtd}`)
            break
        case 400:
            console.log(`Bauru: R$ ${7.5 * qtd}`)
            break
        case 500:
            console.log(`Refrigerante: R$ ${3.5 * qtd}`)
            break
        case 600:
            console.log(`Suco: R$ ${2.8 * qtd}`)
            break
        default:
            console.log('Produto inválido')
    }
}

lanchonete(100, 2)
lanchonete(200, 3)
lanchonete(300, 1)
lanchonete(400, 5)
lanchonete(500, 3)
lanchonete(600, 8)
lanchonete(700, 1)