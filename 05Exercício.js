// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

// Array de objetos alunos
const alunos = [
    { nome: "Joao", nota1: 9.5, nota2: 10.0 },
    { nome: "Roberta", nota1: 9.0, nota2: 8.5 },
    { nome: "Pedro", nota1: 7.0, nota2: 8.0 },
    { nome: "Dorival", nota1: 5.5, nota2: 4.5 }
  ];
  
  // Usando for of para calcular e exibir a média de cada aluno
  for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome}: Média = ${media.toFixed(2)}`);
  }