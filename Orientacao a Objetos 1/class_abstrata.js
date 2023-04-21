`

    Classe abstrata

`;


class Animal {

    constructor(){

        if(this.constructor == Animal){
            throw new Error("Essa classe nao deve ser instanciada");
        }
        
    }
}


class Cachorro extends Animal {

    constructor(){
        super(); // O super deve ser sempre a primeira linha
        this.nome = "Gabriel";
        
    }
}

const c = new Cachorro();


