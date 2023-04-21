import express, {Request, Response} from "express";

`

    Verbos HTPP - Hipertext Transfer Protocol

    GET - Acessar uma página
    POST - Enviar informações pelo corpo da requisição
    PUT 
    PATCH
    DELETE
    OPTIONS


`;

const server = express();


`

    Request e Response: 

        req - Objeto com dados da requisição
        res - Objeto responsável pela resposta do servidor para o cliente que fez a requisição.

    ///////////////////////////////////
`;

server.get("/", (req: Request, res: Response) => {

});

`

    Rota dinâmica:

        /noticia/titulo-da-noticia

    Transformar em rota dinâmica:

        /noticia/:<nome>

        Geralmente a convesão do <nome> é slug 

`;

server.get("/noticia/:slug", (req: Request, res: Response) => { // Rota dinâmica
    const {slug} = req.params; // Para pegar parâmetros da URL
    res.send(`Mensagem: ${slug}`);
});


server.listen(3000);