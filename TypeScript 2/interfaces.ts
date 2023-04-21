`

    Diferente da classe abstrata a interface não é levada para o arquivo 
    JavaScript que é gerado ao transpilar o TypeScript. O que pode nos gerar problemas.


    A interface define um contrato no qual a classe deve implementar. 

`;


interface Nome { // Criando uma interface
    categoria?: string; // Atributo opcional
    mostrarDetalhes();
}




class Animal implements Nome {


    mostrarDetalhes(){

    }

}


export default 455;

