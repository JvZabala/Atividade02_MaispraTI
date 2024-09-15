// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

// Criando o objeto carro
let carro =  Array()

carro['marca'] = 'Honda',
carro['modelo'] = 'Civic',
carro['ano'] = 2023,
carro['cor'] = 'Prata'


for (let propriedade in carro) 
    console.log(`${propriedade}: ${carro[propriedade]}`);
