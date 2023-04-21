`

    Extract - Extrair cores de um tipo T de um U

`

type Valores = "red" | "green" | "blue";


type ValoresLixo = "red";


type NovoType = Extract<Valores, ValoresLixo>;