const valores = [1,2,3,4,5,6,7,8,9,10];

valores.reverse() // Inverte a ordem do Array

valores.reduce() // Retorna apenas um único valor.

valores.reduce((previous, current) => previous + current); // Retorna a soma de todos os elementos do Array

let valorInicial = 0;

valores.reduce((previous, current) => previous + current, valorInicial); // Reduce com valor inicial para o acumulador.

`
    Caso eu não especifique o valor inicial para o método REDUCE, ele utilizará o primeiro e o segundo
    elemento do Array como anterior e atual.
`;



