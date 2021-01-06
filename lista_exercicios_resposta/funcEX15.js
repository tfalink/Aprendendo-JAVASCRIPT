function concessionaria(opcao) {
    switch(opcao) {
        case 'Hatch':
            return 'Compra efetuada com sucesso!'
            break
        case 'Sedan':
        case 'Motocicleta':
        case 'Caminhonete':
            return 'Tem certeza que não prefere este modelo?'
            break
        default:
            return 'Não trabalhamos com esse tipo de automóvel aqui'
    }
}

console.log(concessionaria("Hatch"))
console.log(concessionaria("Sedan"))
console.log(concessionaria("Motocicleta"))
console.log(concessionaria("Caminhonete"))
console.log(concessionaria("Onibus"))