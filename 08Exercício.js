// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

// Array de objetos de filmes
const filmes = [
    { titulo: "Pulp Fiction", diretor: "Quentin Tarantino", anoLancamento: 1994 },
    { titulo: "Shrek", diretor: "Andrew Adamson · Vicky Jenson", anoLancamento: 2001 },
    { titulo: "Cidade de Deus", diretor: "Fernando Meirelles", anoLancamento: 2002 },
    { titulo: "As Aventuras de Sharkboy e Lavagirl", diretor: "Robert Rodriguez", anoLancamento: 2005 },
    { titulo: "Interestelar", diretor: "Christopher Nolan", anoLancamento: 2014 }
  ];
  
  // Novo array para armazenar apenas os títulos
  const titulosFilmes = [];
  
  // Usando forEach para extrair os títulos
  filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
  });
  
  console.log(titulosFilmes);