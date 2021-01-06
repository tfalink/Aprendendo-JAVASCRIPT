function bhaskara(ax2, bx, c) {
    const resultado = []
    let delta = Math.pow(bx, 2) - (4 * ax2 * c)
    if (delta > 0) {
        resultado.push((-bx + Math.sqrt(delta))/2*ax2)
        resultado.push((-bx - Math.sqrt(delta))/2*ax2)
        return resultado
    } else {
        return 'Delta é negativo'
    }
}

console.log(bhaskara(3, -5, 12))
console.log(bhaskara(5, -3, -6))