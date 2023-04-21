const { PermissionsAndroid } = require("react-native");

`
    Tipos de dados de coluna:

        NUMEROS INTEIROS:
            TINYINT
            INT 
            BIGINT
        
        NUMEROS QUEBRADOS:
            FLOAT
            DOUBLE
            DECIMAL

        TEXTO
            VARCHAR 
            TEXT
            LONGTEXT
            CHAR

        TEMPORAL:
            DATE - YYYY-MM-DD
            TIME
            YEAR 
            DATETIME
            TIMESTAMP


    OBTER INFORMAÇÕES DO BANCO DE DADOS:

        SELECT * FROM table;

        SELECT column, column_n FROM table;

        SELECT * FROM table WHERE condition;

        Alguns operadores para o WHERE:

            SELECT * FROM table WHERE price > 150; - Comparador de maior

            SELECT * FROM table WHERE price < 150; - Comparador de menor

            SELECT * FROM table WHERE price <= 150; - Comparador de menor ou igual

            SELECT * FROM table WHERE price >= 150; - Comparador de maior ou igual

            SELECT * FROM table WHERE price <> 150; - Diferente

            SELECT * FROM table WHERE price = 200 AND preice = 140;

            SELECT * FROM table WHERE price = 200 OR preice = 140;

        WHERE LIKE:

            LIKE - Vai possibilitar pega itens que possuam o valor especificado dentro dele.

            SELECT * FROM table WHERE column LIKE 'bola';

            valores para o LIKE:

                'TEXTO%' - Começa com o TEXTO e continua.

                '%TEXTO' - Termina com o TEXTO

                '%TEXTO%' - Possui TEXTO no meio da frase.
        
        WHERE BEETWEN E IN:

            SELECT * FROM table WHERE column BETWEEN value AND value; - O Between significa entre.

            SELECT * FROM table WHERE column IN (1,2,3,4) - Me dê todos os itens que estão dentro dessa tupla.


        ORDER BY:

            MUDAR A ORDENAÇÃO DA TABELA

            SELECT * FROM table ORDER BY column DESC;
            SELECT * FROM table ORDER BY column ASC;
            SELECT * FROM table ORDER BY column ASC, column DESC;

        LIMIT:

            SELECT * FROM table LIMIT value;

            SELECT * FROM table LIMIT start, end;
        
        COUNT, AVG e SUM:

            SELECT COUNT(*) FROM table; - Retorna a quantidade de linhas.

            SELECT AVG(column) FROM table - Retorna a média.

            SELECT SUM(column) FROM table - Retorna o total.

        GROUP BY (AGRUPE POR):

            SELECT * FROM table GROUP BY column;

            GERALMENTE É UTILIZADO COM FUNÇÕES DE AGREGAÇÃO.

        SUBQUERY:

            Sãos queries dentro de query.

            SELECT *, (SELECT column FROM TABLE ) FROM table;

            SELECT * FROM table
            WHERE (SELECT column FROM table WHERE condition) = value;
        
        JOIN:

            SELECT * FROM table1 INNER JOIN table2 ON table1.id = table2.id;

            LEFT OUTER JOIN - Pega todos os registros da tabela a esquerda mesmo que n tenha correspondência com a direita.

            RIGHT OUTER JOIN - Pega todos os registros da tabela a direita mesmo que n tenha correspondência com a esquerda.
 
            INNER JOIN - Pega somente registros com correspondência
`;         



