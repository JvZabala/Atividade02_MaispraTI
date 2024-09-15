// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

// Array de pedidos com múltiplos produtos por cliente
const pedidos = [
    { cliente: 'Joao', produtos: [
        { nome: 'Notebook', quantidade: 1 },
        { nome: 'Monitor', quantidade: 2 },
        { nome: 'Mouse pad', quantidade: 3 }
    ]},
    { cliente: 'Antônia', produtos: [
        { nome: 'Smartphone', quantidade: 2 },
        { nome: 'Carregador', quantidade: 1 },
    ]},
    { cliente: 'Pedro', produtos: [
        { nome: 'Teclado Mecânico', quantidade: 1 },
        { nome: 'Mouse Gamer', quantidade: 1 },
    ]},
    { cliente: 'Roberta', produtos: [
        { nome: 'Tablet', quantidade: 1 },
        { nome: 'Capa para Tablet', quantidade: 1 }
    ]}
];

const totalPorCliente = {};

// Usando forEach para agrupar a quantidade total de produtos por cliente
pedidos.forEach(pedido => {
    if (!totalPorCliente[pedido.cliente]) {
        totalPorCliente[pedido.cliente] = 0;
    }
    
    pedido.produtos.forEach(produto => {
        totalPorCliente[pedido.cliente] += produto.quantidade;
    });
});

console.log('Total de produtos por cliente:');
console.log(totalPorCliente);
