
const Pesso1 = {
    nome: "Gabriel",
    falar: function(){
        console.log(this.nome + "Falou"); 
    }
}


const Pessoa2 = { // Forma de se colocar um método em um objeto a partir do EcmaScript 6
    nome: "Gabriel",
    falar(){
        console.log(this.nome + "Falou"); 
    }
}