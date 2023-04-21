`
    É o novo tipo de dado primitivo: Symbol

    Possui uma identificação única, ou seja, uma referência única.
`;

const NOME = Symbol(); // Não é necessário utilizar o operador "new";

const user = {
    [NOME]: "Gabriel"
}

Object.getOwnPropertySymbols("object") // Retorna um Array Content os symbols que um objeto possui.


