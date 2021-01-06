function checkFruta(fruta) {
    switch(fruta) {
        case 'Macã':
            console.log('Não vendemos essa fruta aqui')
            break
        case 'Kiwi':
            console.log('Estamos com escassez de kiwis')
            break
        case 'Melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
            console.log('Opção errada')
    }
}

checkFruta('Maçã')
checkFruta('Melancia')
checkFruta('Kiwi')
checkFruta('Laranja')