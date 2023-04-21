`

    Agrupamento e Ordenação:
        
        Durante o desenvolvimento de aplicações as vezes faz-se necessário agrupar e/ou ordernar os resultados 
        para uma melhor apresentação.

        Utilizamos a cláusula GROUP BY para agrupar elementos do mesmo tipo.

        EXEMPLO:

            SELECT t.nome AS Tipo, SUM(p.quantidade) AS 'Quantidade em Estoque' FROM tipos AS t, produtos AS p 
            WHERE t.id = p.id_tipo GROUP BY t.nome; 

            SELECT t.nome AS Tipo, f.nome AS Fabricante, SUM(p.quantidade) AS 'Quantidade em Estoque' 
            FROM tipos AS t, fabricantes AS f, produtos AS p 
            WHERE t.id = p.id_tipo AND f.id = p.id_fabricante 
            GROUP BY t.nome, f.nome;   

            O GROUP BY evita repetições, pois agrupa de acordo com um atributo.

        ORDER BY:

            A cláusula ORDER BY organiza os dados em ordem alfabética ou numérica. 

            A ordenação pode ser ASC (Ascendente) ou DESC (Descendente) 

            Por padrão, a ordenação é ascendente, ou seja, do menor para o maior.

            Por padrão a  ordenação é ascendente pela chave primária da tabela.

            EXEMPLO:
                SELECT id, nome, id_tipo, id_fabricante, quantidade FROM produtos ORDER BY id ASC;
                SELECT id, nome, id_tipo, id_fabricante, quantidade FROM produtos ORDER BY quantidade DESC;
`;