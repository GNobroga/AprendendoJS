`

    Introduzindo Template Engines:

        Uma template engine serve para facilitar a criação de páginas HTML 
        e tornar o envio e exibição de informações para estas páginas um 
        processo mais simples e organizado.
    
    Templates Engines:

        Pug
        Mustache
        Edge
        EJS

    Instalando o Template Engine Mustache:

        npm install mustache-express

        npm install @types/mustache-express -D

    Extensão para arquivos mustache:

        arquivo.mustache

`;



// Configurando Template Engine
import mustache from "mustache-express";

server.set("view engine", "mustache");
server.set("views", path.join(__dirname, "views")) // Criar uma pasta views na pasta src
server.engine("mustache", mustache());


// Renderizar a página criada com Template Engine

router.get("/", (req: Request, res: Response) => {
    res.render('home'); // nome da página a ser exibida
});

// Configurar o Nodemon para monitorar o mustache:
//  nodemon -e ts,json,mustache arquivo.ts


// Enviar informações para o template engine
router.get("/", (req: Request, res: Response) => {
    res.render('home', {
        nome: "Gabriel"
    }); 
});

`

    Mustache:

        Exibir no mustache:
            {{ variavel }}

            Essa variável vem do objeto passado para o render.
        
        Exibição condicional:

            {{#variavel}}
                 Verdadeiro
            {{/variavel}}
            {{^variavel}}
                 Falso
            {{/variavel}}

            Só irá exibir se a variável for true.

        Exibindo listas:

            Lista com objetos literais:

                {{#lista}}
                    {{ conteudo }}
                {{/lista}}

                O conteudo dentro dessa exibição será elementos contidos
                dentro da lista.
            
            Lista sem objetos literais:

                {{#lista}}
                    {{ . }}
                {{/lista}}

                Exemplo: Uma lista somente com strings.

        Condicional Else de Lista: 
            {{^lista}}
                Mensagem para quando a lista estiver vazia.
            {{/lista}}
`;