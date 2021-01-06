function diaUtil(data) {
    switch(data) {
        case 1:
            return 'É um fim de semana!'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'É um dia útil!'
        case 7:
            return 'É um fim de semana!'
        default:
            return 'É uma data inválida!'
    }
}

let teste = 1
console.log(diaUtil(teste++))
console.log(diaUtil(teste++))
console.log(diaUtil(teste++))
console.log(diaUtil(teste++))
console.log(diaUtil(teste++))
console.log(diaUtil(teste++))
console.log(diaUtil(teste++))
console.log(diaUtil(teste++))
console.log(diaUtil(0))