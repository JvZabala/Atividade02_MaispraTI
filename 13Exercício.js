// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

const carrinho = {
    itens: [
      { nome: "Queijo Fatiado", quantidade: 2, precoUnitario: 12 },
      { nome: "Presunto", quantidade: 4, precoUnitario: 14.75 },
      { nome: "Manteiga", quantidade: 2, precoUnitario: 8 },
      { nome: "Cacho de Banana", quantidade: 3, precoUnitario: 7.50 }
    ],
    
    calculoTotal: function() {
      let total = 0
      
      this.itens.forEach(item => {
        total += item.quantidade * item.precoUnitario
      })
      
      return total.toFixed(2)
    }
  }
  
  console.log(`O valor total do carrinho é R$ ${carrinho.calculoTotal()}`)