`   

    Herança:
        extends
        proctected - Permite o acesso em subclasses e protege fora dela.

    É possível utilizar mais de um modificador de acesso em uma classe:

        protected readonly valor: number 
`;


class Animal {

    protected nome: string;

    constructor(nome: string){
        this.nome = nome;
    }
}

class Gato extends Animal {

    constructor(nome: string){
        super(nome);
    }
}