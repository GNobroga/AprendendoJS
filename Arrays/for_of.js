`
    O for of funciona apenas com objetos iteraveis que implementem o
    iterable[Symbol.iterator]
`;


const Pessoa = {
    nome: "Gabriel",
    idade: 22,
    [Symbol.iterator]: function *(){
        yield this.nome;
        yield this.idade;
    }
}

for(let informacao of Pessoa){
    console.log(informacao);
}


