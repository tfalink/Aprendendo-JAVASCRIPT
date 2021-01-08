const maiorOuIgual = function(a, b) {
    if (typeof a == typeof b) {
        return a >= b
    }
    return false
}

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, "0")) // retornará false
console.log(maiorOuIgual(5, 1)) // retornará