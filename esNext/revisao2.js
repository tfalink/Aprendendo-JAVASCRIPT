// Arrow function
const soma = (a, b) => a + b
console.log(soma(2, 3))

const dobro = a => a * 2
console.log(dobro(2))

// Arrow function (this)
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// Parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Teste')
log('Sou mais forte!')
log(undefined)
log(null)

// Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(1, 2, 3, 4, 5))