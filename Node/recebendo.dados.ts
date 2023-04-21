
`
    Recebendo dados na via GET

        GET - Envia informações pela URL no formato de query strings

`;


// Pegar informações de query strings ?nome="Gabriel"&idade=21
router.get("/", (req: Request, res: Response) => {

    const content = req.query; // Objeto com os dados da query string
    
});


`
    Recebendo dados na via POST

        POST - Envia as informações no corpo da requisição.

`;

/*
    A opção "extended" diz para o express qual biblioteca
    ele deve utilizar para fazer o parsing do conteúdo
    das requisições que ele recebe.
    Quando extended: true vai utilizar a biblioteca qs e
    quando for false ele vai utilizar a biblioteca querystring.

    A diferença entre qs e querystring é que a biblioteca qs 
    permite o aninhamento de objetos (nested objects), que é
    praticamente como o JSON trabalha. E a biblioteca querystring
    não suporta nested objects.
*/
server.use(express.urlenconded({extended: true}));

router.post("/", (req: Request, res: Response) => {

    const body = req.body; // Acessando os dados do corpo da requisição. 
})


