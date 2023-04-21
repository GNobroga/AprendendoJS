`
    Prototype - Protótipo

    Tudo no JavaScript herda de Object

    Se um método ou propriedade não está no prototype do objeto específico será
    buscado nas que estão acima da hierarquia. Caso não exista será exibido uma mensagem
    erro.

    Criar métodos no prototype da função faz com que se economize espaço de memória.
    Visto que um prototype é um objeto único que é consultado pelas instâncias da
    classe criada.
`;

function Animal(tipo){
    this.tipo = tipo;
}

Animal.prototype // Acessando o objeto prototype pelo nome da função.

const animal = new Animal();

animal.__proto__ // Acessando o objeto prototype pelo objeto.


Animal.prototype.latir = function(){ // Criar um método no prototype do objeto.
    console.log(this.tipo)
}



