`
Funções de Data e Hora

    No comando SQL SELECT há diversas funções que foram embutidas para facilitar o manuseio
    de alguns tipos de dados em determinadas condições

    CURDATE()
        Função que retorna a data atual no formato a
        SELECT CURDATE() AS 'Data Atual';
    
    CURTIME() 
        Retorna a hora atual no formato hh:mm:ss
        SELECT CURTIME() AS 'Hora Atual';
    
    CURRENT_TIME()
        Faz o mesmo que CURTIME() usado anteriormente
        SELECT CURRENT_TIME() AS 'Hora Atual';
    
    DATE_ADD(data, intervalo)
        Adiciona um intervalo à data. O intervalo pode ser uma data seguida de um horário. O
        intervalo a ser somado pode ser em dias, dias e horas e minutos, dias e segundos, minutos e
        segundos e etc.
        SELECT DATE_ADD(CURDATE(), INTERVAL 3 DAY) AS 'Data de Vencimento';

    DATE_SUB(data, intervalo) 
        Subtrai um intervalo à data. A data pode ser uma data seguida de um horário. O intervalo a
        ser subtraído pode ser em dias, dias e horas e minutos, dias e segundos, minutos e segundos, etc
        SELECT DATE_SUB(CURDATE(), INTERVAL 10 DAY) AS 'Data de Matrícula';

    DATEDIFF(expressão1, expressao2)
        Retorna o valor da diferença entre 'expressão1' e 'expressão2', podendo ambos serem uma
        data ou data e horário.
        SELECT DATEDIFF(CURDATE(), DATE_SUB(CURDATE(), INTERVAL 10 DAY)) AS 'Dias em Atraso'

    DATE_FORMAT(data, formato)
        Retorna a data no formato especificado.
        SELECT DATE_FORMAT(CURDATE(), '%d/%m/%Y') AS 'Data Formatada';

    DAYNAME(data)
        Retorna o dia da semana para a data.
        SELECT DAYNAME(CURDATE()) AS 'Dia da Semana';

        SET lc_time_names = 'pt_BR';
        SELECT DAYNAME(CURDATE()) AS 'Dia da Semana'

    DAYOFMONTH(data)
        Retorna o dia do mês para a data.
        SELECT DAYOFMONTH(CURDATE()) AS 'Dia do Mês';

    DAYOFWEEK(data)
        Retorna o dia da semana em que a data cai.
        SELECT DAYOFWEEK(CURDATE()) AS 'Dia da Semana';
    
    DAYOFYEAR(data) 
        Retorna o dia do ano para a data.
        SELECT DAYOFYEAR(CURDATE()) AS 'Dia do Ano';

    FROM_DAYS(n) 
        Retorna a data real referente a um número 'n' em dias
        SELECT FROM_DAYS(780500) AS 'Data';

    NOW() 
        Retorna a data e hora atuais
        SELECT NOW() AS 'Data/Hora Atual';
        SELECT DATE_FORMAT(NOW(), '%d/%m/%Y %h:%m:%s') AS 'Data/Hora Atual';

    CURRENT_TIMESTAMP() 
        Esta função faz o mesmo que NOW().
        SELECT DATE_FORMAT(CURRENT_TIMESTAMP(), '%d/%m/%Y %h:%m:%s') AS 'Data/Hora Atual'

    TIME() 
        Esta função serve para extrair a hora de uma data.
        SELECT TIME(CURRENT_TIMESTAMP()) AS 'Hora';

    SEC_TO_TIME(segundos)
        Função recebe um valor em segundos e retorna esse valor convertido em horas, minutos e
        segundos.
        SELECT SEC_TO_TIME(2000) AS 'Tempo Total';
    
    TIME_TO_SEC(hora) 
        A função acima converte a hora recebida em segundos.
        SELECT TIME_TO_SEC('00:32:44') AS 'Em segundos';

    HOUR(hora), MINUTE(hora), SECOND(hora)
        As funções acima retornam a hora, minuto e segundo da hora recebida como parâmetro.
        SELECT HOUR('12:30:34') AS Hora, MINUTE('12:30:34') AS Minutos, SECOND('12:30:34') AS Segundos;

    PERIOD_DIFF(periodo1, periodo2)
        Retorna o número de meses entre os dois período, que devem estar no formato AAMM ou
        AAAAMM.
        SELECT period_diff(201912, 201903) AS 'Meses Restantes';

    TIME_DIFF(hora1, hora2) 
        A função acima calcula a diferença entre a hora 1 e hora 2.
        SELECT TIMEDIFF('12:35:34', '12:30:46') AS Diferença;

    QUARTER(data)
        Retorna o trimestre do ano para a data.
        SELECT QUARTER('2019-03-17') AS 'Trimestre do ano';
    
    WEEK(data) 
        Retorna a semana do ano para a data.
        SELECT WEEK('2019-03-17') AS 'Semana do Ano';

    WEEKDAY(data) 
       Retorna o dia da semana que inicia com segunda-feira para uma data.
       SELECT WEEKDAY('2019-03-17') AS 'Dia da Semana';
    
    YEAR(data) 
        Retorna o ano de uma data.
        SELECT YEAR('2019-03-17') AS 'Ano';

    MONTH(data)
        Retorna o mês de uma data.
        SELECT MONTH('2019-03-17') AS 'Mês';
    
    DAY(data)
        Retorna o dia de uma data.
        SELECT DAY('2019-03-17') AS 'Dia';



`