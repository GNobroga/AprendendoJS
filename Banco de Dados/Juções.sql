`

    Junção de tabelas

        Uma junção de tabelas cria uma pseudo-tabela derivada de duas ou mais
        tabelas de acordo com as regas especififcas, e que são parecidas com
        as regras da Teoria dos conjuntos.
`;


"
Junção de produto cartesiano

        É uma junção entre duas tabelas que origina uma terceira tabela constituída
        por todos os elementos da primeira combinadas com todos os elementos da segunda.

        SELECT c.id, c.nome c.data_nascimento, c.telefone, p.crgo
        FROM clientes AS c, profissoes AS p
        WHERE c.id_profissao = p.id;
";

"
    Junção Interna (Inner Join)

        Uma junção interna é caracteriza por uma consulta que retorna apenas os dados que atendem
        às condições de junção, isto é, quais linhas de uma tabela se relacionam com as linhas de
        outras tabelas.

        Para isso utilizamos a cláusula ON, que é semelhante à cláusula WHERE.

        Essa junção é semelhante ao produto cartesiano.

        SELECT c.id, c.nome, c.data_nascimento, c.telefone, p.cargo
        FROM clientes AS c INNER JOIN profissoes AS p
        ON c.id_profissao = p.id;


";


"

    Junção Externa (Outer join)

        Uma junção externa é uma consulta que não requer que os registros de uma tabela
        possuam registros equivalentes em outra.

        Este tipo de junção se subdivide dependendo da tabela do qual admitiremos os regitros que
        não possuem correspondência: a tabela a da esquerda, a direita ou ambas.


        LEFT OUTER JOIN:

            O resultado desta consulta sempre contém todos os registros da tabela esquerda (ou seja,
            a primeira tabela mencionada na consulta), mesmo quando não exista registros correspondentes
            na tabela direita.

            Desta forma, esta consulta retorna todos os valores da tabea esquerda com os valores da tabela
            direita correspondente, ou quando não há correspondência retorna um valor NULL.


            SELECT * FROM clientes 
            LEFT OUTER JOIN profissoes
            ON clientes.id_profissao = profissoes.id;


        RIGHT OUTER JOIN:   

            Esta consulta é inversa à anterior e retorna sempre todos os registros da tabela à direita (a
            segunda tabela mencionada na consulta), mesmo se não existir registro correspondente na
            tabela à esquerda. Nestes casos, o valor NULL é retornado quando não há correspondência.

            SELECT * FROM clientes
            RIGHT OUTER JOIN profissoes
            ON clientes.id_profissao = profissoes.id;

            No exemplo acima, trazemos novamente os dados das duas tabelas mas desta vez os dados da
            tabela da direita (profissoes) foi apresentada de acordo com a tabela à esquerda


        FULL OUTER JOIN:

            Esta consulta apresenta todos os dados das tabelas à esquerda e à direita, mesmo que não
            possuam correspondência em outra tabela. A tabela combinada possuirá assim todos os registros
            de ambas as tabelas e apresentará os valores nulos para os registros sem correspondência.


            SELECT * FROM clientes
            FULL OUTER JOIN profissoes
            ON clientes.id_profissao = profissoes.id;

            Esta consulta traz então os dados de ambas tabelas de acordo com suas correspondências e
            caso não tenha preenche o valor 


";


"
        Junção Cruzada (Cross Join)

            Esta consulta é usada quando queremos juntar duas ou mais tabelas por cruzamento. 
            Ou seja, para cada linha de uma tabela queremos todos os dados da outra tabela ou vice-versa.

            SELECT c.id, c.nome, c.data_nascimento, c.telefone, p.cargo
            FROM clientes AS c
            CROSS JOIN profissoes AS p;

            Neste exemplo para cada cliente colocamos um linha com cada profissão
";


"
        Auto Junção (Self join)

            Esta consulta é uma auto junção de uma tabela a si mesma.

            SELECT a.nome AS Consumidor1, b.nome AS Consumidor2, a.cidade
            FROM consumidor AS a
            INNER JOIN consumidor AS b
            ON a.id <> b.id
            AND a.cidade = b.cidade;

            <> - Significa !=

            No exemplo acima estamos realizando um Self Join onde os ids sejam diferentes mas a cidade
            seja igual.

";


"

        Junção Baseada em Comparador (Equi-Join):

            Uma junção Equi-Join é um tipo específico de junção baseada em comparador, que usa apenas
            comparações de igualdade na junção.


            SELECT *
            FROM clientes JOIN profissoes
            ON clientes.id_profissao = profissoes.id;

            = - Comparador

            Neste exemplo estamos realizando um Equi-Join utilizando como comparador os campos de
            relacionamento

";


"

    Junção Natural (Natural Join)


        Uma junção Natural-Join é um caso especial de Equi-Join. O resultado desta junção é o conjunto
        de todas as combinações que são iguais em seus nomes de atributos comuns.


        SELECT *
        FROM clientes NATURAL JOIN profissoes;
        
        Neste exemplo a junção natural acontece com os campos comuns do rela



";