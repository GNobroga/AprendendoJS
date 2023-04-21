`

    Required - Torna as propriedades opcionais em obrigatórias. É o oposto do Partial.

    Readonly - Transforma todas as propriedades em apenas leitura, ou seja, não pode sobrescrever e nem excluir.

`;

type User = {
    nome: string, 
    email: string, 
    id?: number
};


type UserGet = Required<User>;


// ReadOnly


type UserReadOnly = Readonly<User>;