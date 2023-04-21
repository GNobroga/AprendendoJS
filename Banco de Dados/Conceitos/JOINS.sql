`

    Junção de produto cartesiano:
        
        Uma junção de produto cartesiano é uma junção entre duas tabelas que origina uma terceira
        tabela constituída por todos os elementos da primeira combinadas com todos os elementos da
        segunda

        SELECT c.id, c.nome, c.data_nascimento, c.telefone, p.cargo
        FROM clientes AS c, profissoes AS p
        WHERE c.id_profissao = p.id;

    Junção Interna (Inner Join):

        Uma junção interna é caracterizada por uma consulta que retorna apenas os dados que atendem
        às condições de junção, isto é, quais linhas de uma tabela se relacionam com as linhas de outras
        tabelas. 
        
        Para isso utilizamos a cláusula ON, que é semelhante à cláusula WHERE.

        SELECT c.id, c.nome, c.data_nascimento, c.telefone, p.cargo
        FROM clientes AS c INNER JOIN profissoes AS p
        ON c.id_profissao = p.id;

        No exemplo acima teremos o mesmo resultado da junção por produto cartesiano.

    Junção Externa (Outer Join):

        Uma junção externa é uma consulta que não requer que os registros de uma tabela possuam
        registros equivalentes em outra. 
        
        Este tipo de junção se subdivide dependendo da tabela do qual admitiremos os registros que não
        possuem correspondência: a tabela da esquerda, a direita ou ambas.

        Left Outer Join:

            O resultado desta consulta sempre contém todos os registros da tabela esquerda (ou seja, a
            primeira tabela mencionada na consulta), mesmo quando não exista registros correspondentes
            na tabela direira. 
            
            Desta forma, esta consulta retorna todos os valores da tabela esquerda com os valores da tabela
            direita correspondente, ou quando não há correspondência retorna um NULL.

            SELECT * FROM clientes
            LEFT OUTER JOIN profissoes
            ON clientes.id_profissao = profissoes.id;

        Right Outer Join:

            Esta consulta é inversa à anterior e retorna sempre todos os registros da tabela à direita (a
            segunda tabela mencionada na consulta), mesmo se não existir registro correspondente na
            tabela à esquerda. Nestes casos, o valor NULL é retornado quando não há correspondência.

            SELECT * FROM clientes
            RIGHT OUTER JOIN profissoes
            ON clientes.id_profissao = profissoes.id;
        
        Full Outer Join:

            Esta consulta apresenta todos os dados das tabelas à esquerda e à direita, mesmo que não
            possuam correspondência em outra tabela. A tabela combinada possuirá assim todos os registros
            de ambas as tabelas e apresentará os valores nulos para os registros sem correspondência.
            
            SELECT * FROM clientes
            FULL OUTER JOIN profissoes
            ON clientes.id_profissao = profissoes.id;

        Jução Cruzada (Cross Join):

            Esta consulta é usada quando queremos juntar duas ou mais tabelas por cruzamento.
            Ou seja, para cada linha de uma tabela queremos todos os dados da outra tabela ou vice-versa.

            SELECT c.id, c.nome, c.data_nascimento, c.telefone, p.cargo
            FROM clientes AS c
            CROSS JOIN profissoes AS p;

        Auto Junção (Self Join):

            Esta consulta é uma auto junção de uma tabela a si mesma.

            SELECT a.nome AS Consumidor1, b.nome AS Consumidor2, a.cidade
            FROM consumidor AS a
            INNER JOIN consumidor AS b
            ON a.id <> b.id
            AND a.cidade = b.cidade;

        Junção Baseada em Comparador (Equi-Join):

            Uma junção Equi-Join é um tipo específico de junção baseada em comparador, que usa apenas
            comparações de igualdade na junção.

            SELECT *
            FROM clientes JOIN profissoes
            ON clientes.id_profissao = profissoes.id

        Junção Natural (Natural Join):

            Uma junção Natural-Join é um caso especial de Equi-Join. O resultado desta junção é o conjunto
            de todas as combinações que são iguais em seus nomes de atributos comuns.

            SELECT *
            FROM clientes NATURAL JOIN profiss

        Resumo:

        Junção de produto cartesiano: 
            É uma junção entre duas tabelas que origina uma terceira
            tabela constituída por todos os elementos da primeira tabela combinada com todos os
            elementos da segunda. 
        
        Junção Interna (Inner Join):
            Todas as linhas de uma tabela se relacionam com todas as linhas
            de outras tabelas se elas tiverem ao menos 1 campo em comum.
        
        Junção Externa Esquerda (Left Outer Join):
             Traz todos os registros da tabela esqueda
            mesmo quando não exista registros correspondentes na tabela direita.

        Junção Externa Direita (Right Outer Join):
            Traz todos os registros da tabela direita mesmo
            quando não exista registros correspondentes na tabela esquerda. Junção Externa Completa (Full Outer Join) apresenta todos os dados das tabelas à
            esquerda e à direita, mesmo que não possuam correspondência em outra tabela.

        Junção Cruzada (Cross Join):
             É uma junção entre todos os campos de ambas as tabelas.

        Auto Junção (Self Join):
             Realiza uma auto junção da própria tabela.

        Junção Baseada em Comparador (Equi-Join): 
            Traz todos os registros das tabelas utilizando
            operador de comparação.

        Junção Natural (Natural Join):
            Traz todos os registros das tabelas de acordo com os nomes
            de atributos em comu
`;  