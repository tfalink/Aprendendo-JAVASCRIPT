// Função em JS é First-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function func() { }

// Armazenar uma função numa variável
const func2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, func, func2]
console.log(array[0](2, 3))

// Armazenar em um atributo de um objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function() { console.log('Executando... ') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)