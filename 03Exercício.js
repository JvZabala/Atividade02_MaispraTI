// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

function filtrarPropriedades(produto, valorMinimo) {
    const resultado = {};
    
    for (let propriedade in produto) {
      if (typeof produto[propriedade] === 'number' && produto[propriedade] > valorMinimo) {
        resultado[propriedade] = produto[propriedade];
      }
    }
    
    return resultado;
  }
  
  
  const produto = {
    nome: "Smartphone",
    preco: 1500,
    estoque: 500,
    desconto: 10,
    peso: 2.2
  };
  
  const produtoFiltrado = filtrarPropriedades(produto, 100);
  console.log(produtoFiltrado);