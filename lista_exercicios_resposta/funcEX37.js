function progAritmetica(n, a1, r) {
    let resultado = []
    resultado.push(a1)
    for(let i = 1; i < n; i++) {
        resultado.push(resultado[i-1] + r)
    }

    return resultado
}

console.log(progAritmetica(5, 1, 1))