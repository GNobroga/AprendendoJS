`

    Objetos

`;

let obj: object = {} // Objeto genérico.


let aluno: {nome: string, aprovado: true}; // Tipando objetos

aluno = { // Nesse caso é obrigatório declarar todas as propriedades da tipagem, a ordem não importa.
    nome: "Gabriel",
    aprovado: true
}

let aluno2: {nome: string, aprovado?: true}; // Deixando a propriedade opcional aprovado?:

aluno2 = {
    nome: "Gabriel"
}
