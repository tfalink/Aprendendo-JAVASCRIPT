function planoDeSaude(idade) {
    if(idade < 10 && idade > 0) {
        console.log('R$ 80')
    } else if(idade < 30) {
        console.log('R$ 50')
    } else if(idade < 60) {
        console.log('R$ 95')
    } else if(idade < 0){
        console.log('Idade inválida')
    } else {
        console.log('R$ 130')
    }
}

planoDeSaude(9)
planoDeSaude(21)
planoDeSaude(53)
planoDeSaude(88)
planoDeSaude(-1)