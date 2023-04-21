CREATE DATABASE pratica1;

CREATE TABLE tipo_produto (
    codigo SERIAL NOT NULL,
    descricao CHARACTER VARYING(255) NOT NULL,
    CONSTRAINT pk_tipos_produto
        PRIMARY KEY (codigo)
);

CREATE TABLE produto (
    codigo SERIAL NOT NULL,
    descricao CHARACTER VARYING(255) NOT NULL,
    preco MONEY NOT NULL,
    codigo_tipo INTEGER NOT NULL,
    CONSTRAINT pk_produto
        PRIMARY KEY(codigo)
    CONSTRAINT fk_produtos_tipos_produto
        FOREIGN KEY(codigo_tipo) REFERENCES tipo_produto(codigo)
);


CREATE TABLE paciente (
    codigo SERIAL NOT NULL,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL,
    bairro VARCHAR(40) NOT NULL,
    cidade VARCHAR(40) NOT NULL,
    estado CHAR(2) NOT NULL,
    cep VARCHAR(9) NOT NULL,
    data_nascimento DATE NOT NULL,
    CONSTRAINT pk_paciente 
        PRIMARY KEY (codigo)
);

CREATE TABLE professor (
    codigo SERIAL NOT NULL,
    telefone INT NOT NULL,
    nome VARCHAR(50) NOT NULL,
    CONSTRAINT pk_professor
        PRIMARY KEY (codigo)
);

CREATE TABLE turma {
    codigo SERIAL NOT NULL,
    capacidade INT NOT NULL,
    codigo_professor INT NOT NULL,
    CONSTRAINT pk_turma
        PRIMARY KEY (codigo)
    CONSTRAINT fk_turma_professor
        FOREIGN KEY (codigo_professor) REFERENCES professor(codigo)
}
