`

    Funções de Agregação:


        Uma função de agregação processa um conjunto de valores contidos em uma única coluna
        de uma tabela e retorna um único valor como resultado.

        Exemplo:
            
            nome-da-funcao(coluna)
        
        Podemos informar no comando SELECT uma ou mais funções de agregação, de acordo com
        a necessidade.

    Algumas funções:

        MAX:

            SELECT MAX(preco_venda) FROM produtos

            SELECT id_categoria, MAX(preco_venda) FROM produtos GROUP BY id_categoria;

            Quando utilizamos uma função de agregação em uma consulta juntamente com outros
            campos devemos sempre utilizar o agrupamento (GROUP BY) por algum elemento da
            consulta.

            SELECT id_categoria, MAX(preco_venda) FROM produtos GROUP BY id_categoria
            HAVING MAX(preco_venda) > 10;

            A cláusula HAVING funciona quase como um WHERE, mas é geralmente utilizada em
            conjunto com funções de agregação enquanto o WHERE é utilizado com o SELECT.

        MIN:
            SELECT MIN(preco_venda) FROM produtos;

        SUM:
            SELECT SUM(preco_venda) FROM produtos WHERE id_categoria = 1;

        AVG:
            SELECT AVG(preco_venda) FROM produtos;

        ROUND:
            SELECT ROUND(AVG(preco_venda), 2) FROM produtos;

        COUNT:
            SELECT COUNT(preco_venda) AS Quantidade FROM produtos WHERE id_categoria = 1;

`;