function checarNota(nota) {
    let notaCorrigida = arrendondar(nota)
    if (notaCorrigida >= 40) {
        console.log(`Aluno aprovado com nota ${notaCorrigida}`)
    } else {
        console.log(`Aluno reprovado com nota ${notaCorrigida}`)
    }
}

function arrendondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

checarNota(100)
checarNota(30)
checarNota(38)
checarNota(51)