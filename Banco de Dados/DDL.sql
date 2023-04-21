`

    Data Definition Language

    Comandos: Create, Alter e Drop

    Este subgrupo da linguagem SQL é utilizado para criar, alterar
    e excluir bancos de dados, tabelas e elementos associados
    como índice e visão.

    CREATE - Usado para criar um banco de dados, tabela e outros objetos em um banco de dados;

    ALTER - Usado para alterar a estrutura de tabelas ou outro objeto em um banco de dados;

    DROP - Usado para apagar bancos de dados, tabelas e outros objetos;
`;

"Criar um banco de dados";

CREATE DABATASE nomeBanco;

CREATE TABLE nomeTabela (
    codigo INT PRIMARY KEY,
    descricao VARCHAR(50)
);

"Alterando a estrutura da tabela"

ALTER TABLE nomeTabela ADD atributoNome DECIMAL(8, 2);


"Apagando a estrutura da tabela"

DROP TABLE nomeTabela;

DROP DATABASE nomeBanco;