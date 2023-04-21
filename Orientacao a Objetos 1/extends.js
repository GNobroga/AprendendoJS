`
    Reaproveitamento código com o extends
`;

class A {

    constructor(nome){
        this.nome = "Gabriel";
    }
}

class B extends A{

    constructor(nome, idade){
       this.idade = 21;
       super(nome);
    }
}