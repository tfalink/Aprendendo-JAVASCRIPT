function calcBasica(a, operacao, b) {
    switch(operacao) {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '*':
            return a * b
            break
        case '/':
            return a / b
            break
        default:
            return 'Operação inválida!'
    }
}

console.log(calcBasica(50, '+', 60))
console.log(calcBasica(50, '-', 60))
console.log(calcBasica(50, '*', 60))
console.log(calcBasica(50, '/', 60))
console.log(calcBasica(50, '%', 60))