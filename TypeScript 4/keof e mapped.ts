`
    keyof e mapped types


    keyof - Verifica se um valor é chave de um Tipo, sendo mais dinâmico que os Unions.
`;

type Square = "x" | "y";

const properties: keyof Square = "x"; // Keyof verifica se o valor atribuido é chave do Tipo Square.


"Mapped Types";

type Props = "x" | "y" | "z";

type MappedFromProps = {
    [P in Props]: number // Para cada propriedade no Tipo Props eu vou percorrer de atributir o tipo number;
}

"Mapped type 1 para percorrer tipos Unions";
"O mapped type só aceita number | string | boolean como entrada no Generic";

type Test = "number" | "string" | "number";

type MappedWithGeneric<T extends string | number | symbol> = {
    [P in T]: P 
}

type MappedTypes = MappedWithGeneric<Test>; // Criando a estrutura 


"Mapped type 2 para percorrer tipos objetos";

type MappedFromProps2<T> = {
    [P in keyof T]: T[P] // Percorrer as propriedades do objeto e colocar um valor que nesse caso será o valor da propriedade.
}


type newType = MappedFromProps2<{a: "1", b: "2"}>

export default "";