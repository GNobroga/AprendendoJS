`
    COMANDOS: INSERT, UPDATE e DELETE

    INSERT - Usado para inserir um registro a uma tabela existente;

    UPDATE - Usado para alterar valores de dados em um ou mais registros de uma tabela;

    DELETE - Usado para remover registros de uma tabela;
`;


"Inserindo um registro na tabela"

INSERT INTO tabela (atributo) VALUES ('valor');

INSERT INTO tabela(atributo1, atributo2) VALUES('valor1', 'valor2');

"Atualizando registro na tabela"

UPDATE tabela SET atributo = 'valor1' WHERE codigo = ALGUM_NUMERO;

UPDATE tabela SET atributo1 = "valor1", atributo2 WHERE codigo = ALGUM_NUMERO;


"Deletar um registro"

DELETE FROM tabela WHERE codigo = ALGUM_NUMERO;

