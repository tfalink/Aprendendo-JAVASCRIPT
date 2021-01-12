function segundoMaior(array) {
    const maior = Math.max(...array)
    const aux = array.filter( segundoMaior => segundoMaior != maior)
    return Math.max(...aux)
}

console.log(segundoMaior([12, 16, 1, 7])) // retornará 12