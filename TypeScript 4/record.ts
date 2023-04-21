`

    Record<T, U>

    Ele é usado para mapear as propriedades de um tipo para outro tipo, ou seja,
    gerando chave/valor. Ela respeita o valor do tipo U.


`;

type Url = {
    url: string
}

type RedesSociais = "facebook" | "instagram" | "youtube";

const medias: Record<RedesSociais, Url> { // facebook: {url: }, instagram: {url: }
    facebook: {url: "facebook"},
    instagram: {url:"instagram"},
    youtube: {url: "yotesdsd"}
}

export default "";