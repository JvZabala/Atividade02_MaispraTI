// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

// Criando o objeto livro
let livro = {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    anoPublicacao: 1605,
    genero: "Romance"
};

// Verificando se a propriedade 'editora' existe usando for in
let temEditora = false;
for (let propriedade in livro) {
    if (propriedade === 'editora') {
        temEditora = true;
        break;
    }
}

// Se 'editora' não existir, adiciona ao objeto
if (!temEditora) {
    livro.editora = "Editora Fictícia";
}

console.log(livro);