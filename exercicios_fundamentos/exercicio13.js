function filtrarNumeros(array) {
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        let aux = array[i]
        if (typeof aux === 'number') {
            newArray.push(aux)
        }
    }
    return newArray
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20]
console.log(filtrarNumeros(["a", "c"])) // retornará []