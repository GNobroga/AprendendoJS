`

    Tipando uma função:

        Determinar o tipo de entrada e o tipo de saída.

`;


function add(x: number, y: number): number {
    return x + y;
}


const fnc = (x: number, y: number) => {
    return x * y;
}


let fnc2: (x: number, y: number) => number; // Tipando arrow functions

fnc2 = (x, y) => {
    return x + y;
}

type MyType = (x: number, y: number) => number;


const fnc3: MyType = (x, y) => x + y;


export default 2;