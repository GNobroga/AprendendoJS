`

    Introdução à descritores (Personalizar propriedades de um objeto)

        Propriedades que podem ser personalizadas:
            configurable: // Permite que eu possa deletar o objeto
            enumerable: // Define se ela pode ser percorrida
            value: // Valor da propriedade
            writable: // Permite reescrever o valor

`;


Object.getOwnPropertyDescriptor("object", "propriedade") // Retorna o descritor de uma propriedade, ou seja, o que essa propriedade pode fazer e o que não pode fazer.

Object.defineProperty("object", "nome da propriedade", { // Cria uma propriedade definindo seus descritores.
    value: "Gabriel"
});

Object.defineProperties("object", { // Criar várias propriedades com descritores.
    nome: {
        value: "Gabriel"
    },
    sobrenome: {
        value: "Cardoso"
    }
});