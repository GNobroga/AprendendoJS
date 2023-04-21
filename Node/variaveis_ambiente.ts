`
    Variáveis de Ambiente

        - Referencem ao ambiente geral do sistema

    Passo:

        1 - Criar um arquivo .env 

`;

// Configura arquivo .env

PORT=80


`
    Usando o arquivo .env

    Instalar e configurar:
       
        npm install dotenv
    
        import dotenv from "dotenv";

        dotenv.config();

    Ao executar o dotenv.config() o Node busca o arquivo .env e adiciona
    as informações contidas nele no objeto process.env;

    Acessar essa variável:

        process.env.<nome>

`;