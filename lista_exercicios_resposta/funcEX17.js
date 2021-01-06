function aumento(plano, salario) {
    switch(plano) {
        case 'A':
            console.log(`Novo salário: R$ ${salario * 1.1}`)
            break
        case 'B':
            console.log(`Novo salário: R$ ${salario * 1.15}`)
            break
        case 'C':
            console.log(`Novo salário: R$ ${salario * 1.2}`)
            break
        default:
            console.log(`Plano inválido`)
    }
}

aumento('A', 2200)
aumento('B', 3600)
aumento('C', 5000)
aumento('E', 1000)