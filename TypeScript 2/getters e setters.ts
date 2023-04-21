`

    Por conversão ao utilizarmos getters e setter colocamos _atributo na propriedade
    do objeto para indicar que é privada.

`;

class Animal {

    constructor(protected readonly _nome: string){

    }   

    get nome(){ // Getter
        return this._nome;
    }

}


export default 1;
