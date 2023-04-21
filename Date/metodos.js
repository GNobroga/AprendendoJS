`

    Principais métodos:

        getDay()
        getDate()
        getMounth()
        getFullYear()
        toString()
        toLocationString()
        toUTCString()
        setDay()
        setDate()
        setMounth()
        setFullYear()


        new Date();
        new Date(valor);
        new Date(dataString);
        new Date(ano, mes, dia, hora, minuto, segundo, milissegundo);
`;

const date = new Date(); // Armazena a data atual

date.getDay() // Retorna o dia da semana
date.getDate() // Retorna o dia do mês
date.getMonth() // Retorna o mês
date.getTime() // Retorna o millesegundos
date.getFullYear() // Retorna o ano 
date.getHours() // Retorna a hora
date.getUTCHours() // Retorna a hora no padrão UTC
Date.UTF(2020, 7, 20) // Retorna um time steep
Date.parse() // Converte String para Date 
Date.now() // Retorna o time steep atual
date.getTimezoneOffset()
date.setDate() // Seta data
date.toString() // Retorna a data em formato de String
date.toDateString()
date.toISOString()
date.toLocaleString("pt-BR", {month: 'long'});
date.toUTFString()
date.valueOf()
