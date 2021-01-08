const repetir = function(palavra, rep) {
    const newArray = []
    for (let i = 1; i <= rep; i++){
        newArray.push(palavra)
    }
    return newArray
}

console.log(repetir("código", 2)) // retornará ["código", "código"]
console.log(repetir(7, 3))
console.log(repetir("birosquinha", 8))