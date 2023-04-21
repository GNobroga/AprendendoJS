`


    COMANDOS: Begin, Commit e Rollback

    BEGIN ou START TRANSACTION - Usado para marcar o começo de uma transação que pode ser completada ou não

    COMMIT - Finaliza uma transação

    ROLLBACK - Faz com que as mudanças nos dados existentes deste último COMMIT sejam descartadas.
`;

"Começando a transacao"

CREATE TABLE nomeTabela (
    codigo INT PRIMARY KEY,
    descricao VARCHAR(50);
);

BEGIN TRANSACTION; // Começa a transação

    INSERT INTO nomeTabela VALUES ('Notebook')
    INSERT INTO nomeTabela VALUES ('Nobreak')

COMMIT; // Termina a transação e grava os dados

"Rollback desfazendo transações"

BEGIN TRANSACTION; // Começa a transação

    INSERT INTO nomeTabela VALUES ('Notebook')
    INSERT INTO nomeTabela VALUES ('Nobreak')

ROLLBACK; // as inserções das linhas acima foram desfeitas