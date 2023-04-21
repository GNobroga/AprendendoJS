`
    Conditional types - É um tipo condicional

    Sintaxe: T extends U ? string: number;

    extends - é subtipo ou tipo U
`;

type MyNumber = number;

type MyType = MyNumber extends number ? string : number;


const fnc = <T> (params: T extends string ? string : number): void => {
    console.log("Hello World" + params);
}

fnc<string>("Gabriel");


"Never "

type NumberOrNever<T> = T extends number ? number : never; // Never não vai retornar nada

