// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

const transacoes = [
    { tipo: 'entrada', valor: 1200 },
    { tipo: 'saida', valor: 800 },
    { tipo: 'entrada', valor: 500 },
    { tipo: 'saida', valor: 200 },
    { tipo: 'entrada', valor: 900 },
    { tipo: 'saida', valor: 1000 },
  ];
  
  let saldo = 0;
  
  transacoes.forEach(transacao => {
    if (transacao.tipo === 'entrada') {
      saldo += transacao.valor;
    } else if (transacao.tipo === 'saida') 
      saldo -= transacao.valor;
    }
  )
  
  if(saldo > 0){
  console.log('Saldo final(Superavit):', saldo)
  } else{
  console.log('Saldo final(Deficit):', saldo)
  }