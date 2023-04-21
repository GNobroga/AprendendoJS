`
    XMLHttpRequest

        Objeto que contém métodos que fazem conexão com o servidor. Passos:

        1 - Instanciar objeto
        2 - open()
        3 - send()
        4 - Listener onreadystatechange

        Status code:
            
            Código padronizado para comunicar ao cliente o 
            status de uma requisição HTTP, ou seja, o resultado
            de uma conexão HTTP. Sucesso? Erro? Não autorizada? etc

            200 Sucesso
            201 Cadastro feito com sucesso
            204 Sucesso mas sem conteúdo de retorno
            401 Não autorizado
            404 Não encontrado
            500 Erro no servidor

        onreadystatechange:

            0 Conexão não iniciada
            1 request configurada
            2 request enviada
            3 em processamento
            4 resposta recebida (completa: sucesso ou falha)
    
    API (Application Programming Interface):

        É uma interface que permite a comunicação entre duas aplicações diferentes.

    Rotas:

        São simplesmente URLs.
        Endereços para alncaçar um recurso único.
        Ex:
            https://serfrontend.com/cursos/javascript-completo/index.html
    
    JSON:

        É uma maneira de transportar dados na web (Client >> Servidor).
        Se parece muito com um objeto JavaScript.
        (mas possui suas próprias regras, como: somente aspas duplas, não
        possui comentários, não pode ter vírgula após o último elemento de arrays,
        etc).

    REST:
        
        Um conjunto de restrições para criação de APIS.
        Utilizar de forma padronizada o protocolo HTTP para criar
        suas APIs.

        Criar e utilizar de forma restrita o que o HTTP nos fornece, como:
            - Status Code
            - Verbos
            - Padrão para URLs (rotas), etc
    
    RESTful API:
            
        É uma API REST que abrange todos os 4 níveis de conformidade
        com a arquitetura REST.

    TESTA API (PROGRAMAS):
    
            Postman
            Insomnia

`;

const xhr = new XMLHttpRequest();

xhr.open("GET", "url"); // Abrindo uma conexão
xhr.send(null) // Dados que serão enviados

xhr.onreadystatechange = function(){ // Ela é executada sempre que há uma alteração no status da conexão.
    //xhr.readyState - Exibe o estágio 1, 4 - Concluído
    //xhr.status  - Exibe os status EX: 200, 404
    //xhr.response
    //xhr.responseText

    if(xhr.readyState === 4){
        if(xhr.status >= 200 && xhr.status < 300){
            console.log(JSON.parse(xhr.responseText))
        }
    }
}	


