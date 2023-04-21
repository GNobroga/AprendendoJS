
`
    COMANDOS: Grant e Revoke

    GRANT - Usado para autorizar um usuário a executar ou setar operações no banco de dados;

    REVOKE - Usado para remover ou restringir a capacidade de um usuário de executar operações.

`;


"Dando permissão de consulta";

GRANT SELECT ON nomeTabela TO usuario;

"Tirando permissao de criação de tabelas";

REVOKE CREATE TABLE FROM usuario;