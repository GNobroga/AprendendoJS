import java.time.Duration;
import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalUnit;

public class ProgramInstant {

    public static void main(String[] args) {

        Instant i1 = Instant.now();

        System.out.println(i1);

        /////// CONVERTER STRING NO FORMATO UTC PARA INSTANT
        Instant i2 = Instant.parse("2000-04-10T10:00:00Z");
        //Instant i3 = Instant.parse("2022-07-20T01:30:26-03:00");
 
        System.out.println(i2);

        //System.out.println(i3);

        ////// TRANSFORMA INSTANT PARA STRING FORMATADO OU NÃO
        /*
         *  1 - Para formatar Instant é necessário especificar o timezone, para o horário ficar compátivel,
         *  2 - O Instant não tem o método format, então devemos chamar pelo DateTimeFormatter.
         * 
         */
        DateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("dd/MM/yyyy")
            .withZone(ZoneId.systemDefault());

        Instant i3 = Instant.now();

        System.out.println(dtf2.format(i3));

        ////// CALCULOS COM DATA-HORA
        /*
         * 
         *  no TemporalUnit podemos especificar se queremos diminuir ou acrescentar no mes, ano, etc.
            Classe ChronoUnit - subclasse de TemporalUnit
         */

        Instant i4 = Instant.now();
        System.out.println();
        System.out.println(i4);
        System.out.println(i4.plus(7, ChronoUnit.DAYS));

        ////// DURAÇÃO ENTRE DUAS DATAS (DELTA)
        System.out.println();
        Duration duration = Duration.between(i4, i4.plus(7, ChronoUnit.DAYS));
        System.out.println(duration.toDays());

    }
    
}
