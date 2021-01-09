function funcaoDaSorte(numero) {
    const sorteio = Math.floor(Math.random() * (10 - 1) + 1)
    if (sorteio == numero) {
        return `Parabéns! O número sorteado foi o ${sorteio}`
    } else {
        return `Que pena! O número sorteado foi o ${sorteio}`
    }
}

console.log(funcaoDaSorte(10)) // retornará "Parabéns! O número sorteado foi o 10"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 3"
console.log(funcaoDaSorte(5)) // retornará "Que pena! O número sorteado foi o 1"