// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

const empresa = {
    departamentos: [
      {
        nome: "Gerencia",
        funcionarios: ["Marco", "Pedro", "Claudio"]
      },
      {
        nome: "Vendas",
        funcionarios: ["Pablo", "Bruno", "Tiago"]
      },
      {
        nome: "RH",
        funcionarios: ["Jorge", "Luiza", "Kaio"]
      },
      {
        nome: "Suporte",
        funcionarios: ["Ronaldo", "Augusto", "Roberta"]
      }
    ]
  };
  
  for (let index in empresa.departamentos) {
    const departamento = empresa.departamentos[index];
    console.log(`Departamento: ${departamento.nome}`);
    
    for (let funcionario of departamento.funcionarios) {
      console.log(`- ${funcionario}`);
    }
    
  }