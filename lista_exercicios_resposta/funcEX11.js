function bissexto(ano) {
    if (ano <= 0) {
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

let ano = 2006
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`${ano}: ${bissexto(ano++)}`)
console.log(`0: ${bissexto(0)}`)