`

    Type Utilities:

        Usado para transformar um tipo.

        Partial<Tipo> - Transformar o tipo passado em um Tipo com todos as propriedades
        como sendo opcionais.

`;

type Square = {
    x: number,
    y: number,
    width: number,
    height: number
}

const square: Square = {
    x: 10,
    y: 20,
    width: 200,
    height: 200
}

const squarePartial: Partial<Square> = {
    width: 200
}


