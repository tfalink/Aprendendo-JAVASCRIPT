function mediaPonderada(codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1, nota2, nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3) / 10
    console.log(`Cod. aluno: ${codAluno}, Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal} : ${mediaFinal < 5 ? 'Reprovado' : 'Aprovado'}`)
}

mediaPonderada(1234, 8.7, 4.2, 9.1)
