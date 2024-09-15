// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

// Array de objetos clientes
const clientes = [
    { nome: "Joao", idade: 24, cidade: "Porto Alegre" },
    { nome: "Roberta", idade: 28, cidade: "Rio de Janeiro" },
    { nome: "Roger", idade: 42, cidade: "Belo Horizonte" },
    { nome: "Luiza", idade: 31, cidade: "Salvador" },
    { nome: "Pedro", idade: 25, cidade: "Curitiba" }
  ];
  
  // Variável para contar clientes com mais de 30 anos
  let clientesAcimaDe30 = 0;
  
  // Usando forEach para contar clientes com mais de 30 anos
  clientes.forEach(cliente => {
    if (cliente.idade > 30) {
      clientesAcimaDe30++;
    }
  });
  
  console.log(`Número de clientes com mais de 30 anos: ${clientesAcimaDe30}`);