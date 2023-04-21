CREATE USER userName WITH PASSWORD `camilo123`;

CREATE TABLE alunos (
    codigo SERIAL, 
    nome CHARACTER VARYING(50) NOT NULL,
    CONSTRAINT pk_alunos
        PRIMARY KEY (codigo)
);

GRANT ALL ON pratica4 TO userName;

GRANT USAGE, SELECT ON SEQUENCE pratica4 TO userName;


GRANT SELECT ON tabela TO userName;
REVOKE ALL ON tabela FROM userName;

DROP USER userName;














