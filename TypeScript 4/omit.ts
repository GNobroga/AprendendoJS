`

    Omit - Vai omitir/ocultar do tipo passado as propriedades específicadas.


`;

type Rect = {
    height: number,
    widht: number 
}

type RectWidth = Omit<Rect, 'height'>; // Omitindo a propriedade height, ou seja, deletando.

const obj: RectWidth = {
    widht: 200
}

export default "dsd";