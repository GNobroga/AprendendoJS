`

    Typeof e lookup types


`;


"Lookup Types - Quando se quer pegar o tipo de uma propriedade de outro tipo";

type Types = {
    name: string,
    lastName: string,
    count: number 
}

// Podemos pegar na sintaxe de objeto mesmo.
type Digit = Types["count"] // Pegando o tipo de uma propriedade de um tipo.

"Typeof - É um tipo de uma variável mas no contexto do TypeScript, ele extrai o tipo de uma variável para o Type alias";


const Gabriel: Partial<Types> = {
    name: "Gabriel"
}


type NewType = typeof Gabriel;