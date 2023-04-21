`
    Herança com prototype
`;

function Animal(tipo){
    if(tipo) this.tipo = tipo;
}

Animal.prototype.obterTipo = function(){
    return this.tipo;
}

Animal.prototype.tipo = "desconhecido";


function Cachorro(nome, tipo){
    this.nome = nome;
    Animal.apply(this, [tipo]); // Mudando o contexto do this para ser Cachorro.
}


Cachorro.prototype = Animal; // Vinculando o  prototype da superclasse na subclasse.
Cachorro.prototype.construtor = Cachorro; // Ao vincular o prototype o constructor muda, então temos que reatribuí-lo.

const c = new Cachorro("Gabriel", "Cavalo");

