// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const Carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },
    condutor: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorSeguro: function() {
        //...
    } 
}

console.log(Carro)
Carro.proprietario.endereco.numero = 1000
Carro['proprietario']['endereco']['logradouro'] = 'Av. Philomeno Costa'
console.log(Carro)

delete Carro.condutor
console.log(Carro)
delete Carro.proprietario.endereco
console.log(Carro)
delete Carro.calcularValorSeguro
console.log(Carro)