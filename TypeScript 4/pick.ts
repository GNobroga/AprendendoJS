`
    Pick - Pega do meu tipo essas propriedades

    Pick<Tipo, Union de propriedades que quero>
`;

type circle = {x: number, y: number, r: number};

type PositionX = Pick<circle, 'x'>; // Peguei a propriedade X

const obj: PositionX = {
    x: 25
}

type PositionXY = Pick<circle, 'x' | 'y'>; // Peguei a propriedade X e Y


