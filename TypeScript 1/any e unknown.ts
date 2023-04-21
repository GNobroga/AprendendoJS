`

    Devemos evitar ao máximo usar o tipo Any.


    any - É o valor padrão para retorno de funções.

    unknown (desconhecido) - É parecido com o Any, mas é necessário fazer uma checagem para saber o tipo antes de usar a variável.

`;

function add(x: unknown) {
    if(typeof x === "number"){
        return x;
    }
}

function odd(x): any {
    return x;
}