const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

const json = e => JSON.parse(e)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(json).map(apenasPreco)
console.log(resultado)