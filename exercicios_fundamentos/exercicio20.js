function areaDoTriangulo(base, altura) {
    const area = (base * altura) / 2
    return area.toFixed(2)
}

console.log(areaDoTriangulo(10, 15)) // retornará 75.00
console.log(areaDoTriangulo(7, 9)) // retornará 31.50
console.log(areaDoTriangulo(9.25, 13.1)) // retornará 60.59