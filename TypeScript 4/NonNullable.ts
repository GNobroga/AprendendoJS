`

    NonNullable - Serve para excluir os valores null e undefined de um tipo

`;


type CPF = {cpf: string};
type CNPJ = {cpnj: string};

type User = CPF & CNPJ | null | undefined;

const usuario: NonNullable<User> = { // Removeu o null e  undefined
    cpf: "17364509720", 
    cpnj: "sadsd"
}

