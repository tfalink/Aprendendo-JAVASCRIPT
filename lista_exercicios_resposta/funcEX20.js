function countNotas(dinheiro) {
    let cedulas = [100, 50, 10, 5, 1]
    let count = [0, 0, 0, 0, 0]
    let aux = dinheiro
    for (i in cedulas) {
        while (cedulas[i] <= aux) {
            aux -= cedulas[i]
            count[i]++
        }
    }
    for (i in count) {
        if(count[i] > 0) {
            console.log(`${count[i]} nota(s) de R$ ${cedulas[i]}`)
        }
    }
}

countNotas(199)