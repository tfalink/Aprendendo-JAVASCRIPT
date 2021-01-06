function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // Método público
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // Método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }

    let frear = function () {
        if (velocidadeAtual - delta >= 0) {
            velocidadeAtual -= delta
        } else {
            velocidadeAtual = 0
        }
    }

    this.frearTeste = function () {
        frear()
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())
uno.frear()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar() 
console.log(ferrari.getVelocidadeAtual())