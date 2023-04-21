`

    Destructuring

`

const eu = {}

Object.defineProperties(eu, {
    nome: {
        value: "Gabriel",
        enumerable: true
    },
    idade: {
        value: 21,
        enumerable: true
    }
})


const {nome} = eu; // Obtendo meu nome do objeto.

const {nome:Gostoso} = eu // Obtendo meu nome e adicionando uma alias(Apelido).


