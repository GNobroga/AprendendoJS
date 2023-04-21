
`
    Alterar o contexto do This

`;

function nome(){
    console.log(`O aluno ${this.nome} está falando`);
}


const p = {
    nome: "Gabriel",
    falar: function(){
        nome.call(this);
    }
}

function.call(object, params) //  Mudando o contexto do this 1

function.apply(object, [params]) //  Mudando o contexto do this 2

const fnc = function.bind(object) // Retorna uma função com o contexto do this alterado