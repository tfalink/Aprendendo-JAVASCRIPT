function receberSomenteOsParesDeIndicesPares(array) {
    const newArray = []
    for (let i = 0; i < array.length; i += 2) {
        let valor = array[i]
        if (valor % 2 == 0) {
            newArray.push(valor)
        }
    }
    return newArray
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]