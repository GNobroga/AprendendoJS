`

    Exclude<T, U> - Ele vai permitir que exclui um tipo U do tipo T

`;

type Pessoa = {nome: string, idade: number};

type Humano = {nome: string, sexo: string};


type NovoTipo = Exclude<Pessoa, Humano>; // Vai excluir sexo
