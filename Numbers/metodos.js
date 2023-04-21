`

    Principais métodos e propriedades:

        MAX_VALUE
        MIN_VALUE
        toFixed()
        toPrecision()
        toExponential()
        toString()
        toLocaleString()
        valueOf()

`;

let numero = 12121.225;

numero.toFixed(2) // Fixa o número em 2 casas decimais, retorna uma String.

numero.toPrecision(3) // É o número de digitos que eu quero em um número, funciona para inteiros.

numero.toExponential(4) // Escreve o número em anotação científica 

numero.toString(2) // retorna uma String do número, posso passar como parâmetro a base que quero representar: binario - 2 hexadecimal - 16

numero.toLocaleString("pt-BR") // formata o número de acordo com a localidade.

numero.toLocaleString("pt-BR", { // Formatar o número passar ser representado como moeda. R$ 1200.00
    style: "currency",
    currency: "BRL"
});

Number.MAX_VALUE // O maior valor que um número pode apresentar
Number.MIN_VALUE // O menor valor que um número pode apresentar

parseFloat // Converte para float
parseInt // Converter para inteiro
isNaN() // Verifica se pode ser convertido para o tipo number