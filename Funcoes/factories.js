`
    Função Fábrica de objetos
`;

function funcaoFabrica(name){
    let nome = name;
    return {
        
        falar(){
            console.log(nome + " Falou com vc? ");
        }
    }
}

funcaoFabrica("Gabriel").falar();
