`
    Arrow functions não são hostings, ou seja, não pode ser executada antes
    de sua declaração.

    O this será sempre o objeto que invoca a função.

    O this dentro da arrow function é estático, ou seja, o this
    no contexto da arrow function assume o local onde a função foi criada.


`;

const fnc1 = () => {
    console.log("Hello World");
}


const fnc2 = () => console.log("Hello World"); // Retorno quando tiver um comando.

const fnc3 = () => ({nome: "Gabriel"});

