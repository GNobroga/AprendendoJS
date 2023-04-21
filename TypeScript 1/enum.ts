`

    Enums só existem no TypeScript

`;

enum Semana { // Declaração
    SEGUNDA,
    TERCA,
    QUARTA,
    QUINTA
};

Semana.QUARTA // Acessando valor


enum Semana2 { // Declaração com valores iniciais
    SEGUNDA = 100,
    TERCA = 500,
    QUARTA = 600,
    QUINTA = 700
};

Semana2.QUARTA // Acessando valor