function triangulo(a, b, c) {
    if (a == b && a == c && b == c) {
        console.log('Triangulo equilatero!')
    } else if (a != b && a != c && b != c) {
        console.log('Triangulo escaleno!')
    } else {
        console.log('Triangulo isóceles!')
    }
}

triangulo(58, 58, 79)