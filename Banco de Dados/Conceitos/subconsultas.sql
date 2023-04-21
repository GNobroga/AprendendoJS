`

    Subconsultas

        Uma subconsulta nada mais é do que uma instrução SELECT dentro de outro SELECT que
        retorna algumas colunas específicas que são usadas em algumas funções como INSERT e
        UPDATE e DELETE por exemplo.

        Uma subconsulta SQL é chamada de consulta interna, enquanto a consulta que contém a
        subconsulta é chamada de consulta externa.

        SELECT nome, sobrenome
        FROM funcionarios
        WHERE id_escritorio IN (SELECT id FROM escritorios WHERE pais = 'Brasil');

`;