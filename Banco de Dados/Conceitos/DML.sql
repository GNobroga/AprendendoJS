`

    DML - Data Manipulation Language

        Este subgrupo da linguagem SQL é utilizado para realizar inclusões, alterações e
        exclusões de dados presentes em registros do banco de dados.

        COMANDOS: Insert, Update, Delete

        INSERT - Usado para inserir um registro a uma tabela existente;
        UPDATE - Usado para alterar valores de dados em um ou mais registros de uma tabela;
        DELETE - Usado para remover registros de uma tabela

        EXEMPLOS:

            INSERT INTO tabela (atributo) VALUES ('valor');
            INSERT INTO tabela (atributo1, atributo2, atributo3) VALUES ('valor');

            UPDATE tabela SET atributo = 'valor' WHERE codigo = valor;
            UPDATE tabela SET atributo1 = 'valor', atributo2 = valor WHERE codigo = valor;

            DELETE FROM tabela WHERE codigo = valor;
`;