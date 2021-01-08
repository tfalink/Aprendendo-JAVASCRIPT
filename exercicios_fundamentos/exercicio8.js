function multiplicar(a, b) {
    if (a >= 0 && b >= 0) {
        let result = 0
        for (let i = 0; i < b; i++) {
            result += a
        }
        return result
    }
}

const a = multiplicar(5, 5) // retornará 25
const b = multiplicar(18, 11) // retornará 0

console.log(a, b)