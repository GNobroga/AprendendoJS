`

    DTL - Data Transaction Language

        COMANDOS: Begin, Commit e Rollback

        BEGIN (ou START TRANSACTION*) - Usado para marcar o começo de uma
        transação que pode ser completada ou
        não. 
        COMMIT - Finaliza uma transação. 
        ROLLBACK - Faz com que as mudanças nos dados existentes deste
        o último COMMIT sejam descartadas.


        EXEMPLOS:

            CREATE TABLE 'tipos_produtos' (codigo INT PRIMARY KEY, descricao VARCHAR(50));
            BEGIN TRANSACTION; -- começamos a transação
                INSERT INTO tipos_produtos VALUES ('Notebook');
                INSERT INTO tipos_produtos VALUES ('Nobreak');
            COMMIT; -- termina a transação e grava os dados


           CREATE TABLE 'tipos_produtos' (codigo INT PRIMARY KEY, descricao VARCHAR(50));
            BEGIN TRANSACTION; -- começamos a transação
                INSERT INTO tipos_produtos VALUES ('Notebook');
                INSERT INTO tipos_produtos VALUES ('Nobreak');
            ROLLBACK; -- as inserções das linhas acima foram desfeitas


`;