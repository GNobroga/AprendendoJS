`
    Métodos estáticos
`;

// ES5

function Calcular(){

}

Calcular.somar = function(){ // Criando um método estático no (ES5), ele é guardado direto na função. Todas as instancias terão acesso.
    return 10 + 10;
}

// ES6

class Cachorro {

    constructor(){
        this.nome = "Gabriel";
        Cachorro.comer();
    }

    static comer(){ // Método static, métodos de instancia não possuem acesso a este método pelo this, visto que o this nesse contexto será a função Cachorro.
        console.log("Comendo"); 
    }
}