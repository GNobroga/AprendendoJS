`

    Fetch:

        Ele retorna uma Promise


`;

const resp = fetch(url)
    .then() // response.json()
    .then() // Pra transformar a resposta em JSON
    .catch() // Com o fetch esse método só vai ser executado se houver erro de conexão.
    .finally(); // executa tanto no sucesso, quanto na falha.