`

    Quando criamos uma classe ela passa a ser um tipo de dado, logo ao se criar
    um Array podemos utilizar esse nome para especificar o tipo;

`;


class Animal {

    constructor(protected readonly _nome: string){

    }   

    get nome(){ // Getter
        return this._nome;
    }

}


const animais: Animal[] = [];

export default 1;


