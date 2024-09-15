// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

// Array de objetos de estoque
let estoque = [
    { produto: "Regata", quantidade: 20, minimo: 10 },
    { produto: "Bermuda", quantidade: 8, minimo: 15 },
    { produto: "Chinelo", quantidade: 5, minimo: 8 },
    { produto: "Pulseira", quantidade: 12, minimo: 5 },
    { produto: "Meias", quantidade: 3, minimo: 10 }
];

// Função para atualizar o estoque
function atualizarEstoque(item) {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
        console.log(`${item.produto}: Quantidade atualizada para ${item.quantidade}`);
    }
}

// Usando forEach para atualizar o estoque
estoque.forEach(atualizarEstoque);

console.log("Estoque atualizado:");
estoque.forEach(item => console.log(`${item.produto}: ${item.quantidade}`));