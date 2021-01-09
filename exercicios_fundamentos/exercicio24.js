function contarCaractere(char, string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        let valor = string.charAt(i)
        if (valor == char) {
            count++
        }
    }
    return count
}

console.log(contarCaractere("r", "A sorte favorece os audazes")) // retornará 2
console.log(contarCaractere("c", "Conhece-te a ti mesmo")) // retornará 1