// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

// Criando o array de produtos
const produtos = [
    { nome: "Camiseta Polo", preco: 60, desconto: 0 },
    { nome: "Calça Jeans", preco: 80, desconto: 0 },
    { nome: "Tênis", preco: 220, desconto: 0 },
    { nome: "Chapéu", preco: 40, desconto: 0 }
  ];
  
  // Aplicando desconto 10% e exibindo o novo valor
  produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.1;
    const novoPreco = produto.preco - produto.desconto;
    console.log(`${produto.nome}: R$ ${novoPreco.toFixed(2)} (desconto de R$ ${produto.desconto.toFixed(2)})`);
  });