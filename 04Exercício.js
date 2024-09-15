// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

// Criar um array de objetos representando pessoas
const pessoas = [
    { nome: "Matheus", idade: 28, cidade: "Porto Alegre" },
    { nome: "Pedro", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Roberta", idade: 22, cidade: "Belo Horizonte" },
    { nome: "Joao", idade: 40, cidade: "Salvador" }
  ];
  
  // Usar for of para iterar sobre o array e exibir as informações de cada pessoa
  for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
  }