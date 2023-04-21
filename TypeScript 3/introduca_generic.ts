`

    Serve para parametrizar o tipo de uma função, classe, etc.

`;


function fazAlgo <T> (x: T, y: T){ // Parametrizando uma função

}

fazAlgo(1, 2) // OK
fazAlgo(1, "2") // Errado


function fazAlgo2 <T extends number | string> (x: T, y: T){ // só irá aceitar subtipos de numbers ou string.

}


"Generic em Arrays";

type ArrUniqueTypes<T> = T[];

const valores: ArrUniqueTypes<number> = []; // Criando um Array com Generics


"Formas de criar um Array";

const valores2: Array<string> = [];
const valores3: number[] = [];

"Parametrizando classes";

class Pessoa<T> {
    
    constructor(private _nome: T){

    }

    addClass(): this {
        return this;
    }
}

const p1 = new Pessoa<string>("Gabriel ");

"Generics com interfaces / types";

interface Action<T> {
    nome: T;
}

const p2: Action<string> = {
    nome: "Gabriel"
}

"Generic com tipo padrão";

type FazAlgo<T = number> = { // Caso não seja imposto o tipo, o padrão será number.
    value: T
}

"Dois ou mais tipos num único Generic";

interface Teste1<K, V> {
   action: K;
   timestamp: V;
}

interface Teste2<K = number, V = string> {
    action: K;
    timestamp: V;
 }

 type NumberOrString = number | string

 interface Teste3<K extends NumberOrString = number, V = string> { // Genéric utilizando contraints
    action: K;
    timestamp: V;
 }

`

 Restringir tipo:
    <T extends number> - Significa o tipo é um subtipo de number.
`;

 `Atributos obrigatórios com Intersection (&)`;

 type User = {
    nome: string,
    idade: number
 }

 function obter<T extends User & {id: number}>(obj: T): void {

 }


 "Tipar uma função async";

 // Sempre que marcamos uma função com "async" ela irá retorná uma promise. O TypeScript faz a inferência disso.

 async function fnc(): Promise<string>{
    return "Gabriel";
 }