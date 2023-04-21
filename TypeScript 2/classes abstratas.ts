`
    Classes abstratas:

        abstract class Nome {}

    É um classe para reaproveitamento de código, para forçar uma herança.
`;

abstract class Animal {

    constructor(protected readonly nome: string){

    }


}

class Cachorro extends Animal {

    constructor(nome: string){
        super(nome);
    }

}

export default 1;