function pares() {
    for (let i = 2; i <= 100; i += 2) {
        console.log(i)
    }
}

function pares1() {
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}

pares()
pares1()