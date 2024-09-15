// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

// Criando o array de objetos de vendas
const vendas = [
    { produto: "Meias", quantidade: 7, valor: 29.99 },
    { produto: "Moletom", quantidade: 3, valor: 89.99 },
    { produto: "Sapato", quantidade: 2, valor: 149.99 },
    { produto: "Luvas", quantidade: 4, valor: 19.99 }
  ];
  
  // Inicializando a variável para armazenar o valor total
  let valorTotal = 0;
  
  // Usando forEach para calcular o valor total de vendas
  vendas.forEach(item => {
    valorTotal += item.quantidade * item.valor;
  });
  
  console.log(`O valor total das vendas é: R$ ${valorTotal.toFixed(2)}`);