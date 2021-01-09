function buscarPalavrasSemelhantes(busca, palavras) {
    const resultado = []
    for (let palavra of palavras) {
        if (palavra.includes(busca)) {
            resultado.push(palavra)
        }
    }

    return resultado
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])) // retornará []