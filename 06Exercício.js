// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

const funcionarios = [
    { nome: "Claudete", cargo: "Cozinheira", salario: 1800 },
    { nome: "Carlinhos", cargo: "Segurança", salario: 1800 },
    { nome: "Pedro", cargo: "Designer", salario: 4500 },
    { nome: "Joao", cargo: "Analista de Dados", salario: 6000 },
    { nome: "José Matheus", cargo: "Estagiário", salario: 2000 }
  ];
  
  const salarioMinimo = 4000
  
  console.log(`Funcionários com salário maior que R$ ${salarioMinimo}:`)
  
  for (const funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
      console.log(`- ${funcionario.nome} (${funcionario.cargo}): R$ ${funcionario.salario}`)
    }
  }