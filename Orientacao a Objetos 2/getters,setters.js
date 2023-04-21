`
    Criando getters e setters

`;

class Calcular {

    constructor(){
        this.x = 10;
        this.y = 20;
    }

    get x(){ // Criando um getter
        return this.x;
    }

    set x(novo){ // Criando um setter
        this.x = novo;
    }
}