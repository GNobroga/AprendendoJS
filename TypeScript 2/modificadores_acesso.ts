`
    Modificadores de acesso:
        public - permite tudo
        readonly - apenas para leitura
        private - deixa o atributo privado
        protected - deixa privado porém subclasses podem acessar.

    Por padrão os atributos são públicos.
`;


class Animal1 {

    categoria: string 

    constructor(categoria: string){ 
        this.categoria = categoria; // Forma 1 de declarar atributos
    }
}

class Animal2 {

    constructor(public categoria: string){ // Forma 2 de declarar atributos
    }
}

const animal = new Animal2("Mamifero");