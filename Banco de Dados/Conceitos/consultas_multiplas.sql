`

    Consultas em Múltiplas Tabelas

        SELECT p.codigo AS Código, p.descricao AS Descrição, p.preco AS Preço, tp.Descrição AS Tipo
        FROM produtos AS p, tipos_produto AS tp
        WHERE p.codigo_tipo_produto = tp.codigo;

        Basta associar a chave estangeira com a chave primária da outra tabela.

`;