import java.sql.Date;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class ProgramLocalDateTime {
    
    public static void main(String[] args) {

        LocalDateTime ldt1 = LocalDateTime.now();

        System.out.println(ldt1);

        /////// CONVERTER STRING NO FORMATO UTC PARA LOCALDATETIME
        LocalDateTime ldt2 = LocalDateTime.parse("2000-04-10T10:00");

        System.out.println(ldt2);

        /////// TEXTO CUSTOMIZADO EM LOCALDATETIME
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");
        LocalDateTime ldt3 = LocalDateTime.parse("10/04/2000 13:00:00", formatter);
        System.out.println(ldt3);


        ////// INSTANCIA LOCALDATE APARTIR DE DADOS ISOLADOS
        LocalDateTime ldt4 = LocalDateTime.of(2022,04,10, 4, 5, 5);
        System.out.println(ldt4);


        ////// TRANSFORMA LOCALDATETIME PARA STRING FORMATADO OU NÃO
        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm:ss");

        LocalDateTime ldt5 = LocalDateTime.now();

        System.out.println(ldt5.format(formatter2));
        // ou
        System.out.println(formatter2.format(ldt5));

        ////// TRANSFORMA INSTANT PARA UMA HORA LOCAL

        Instant i1 = Instant.now();
        ZonedDateTime zdt = ZonedDateTime.ofInstant(i1, ZoneId.systemDefault());
        LocalDateTime ldt6 = zdt.toLocalDateTime();
        System.out.println(ldt6);

        // ou
        
        System.out.println(LocalDateTime.ofInstant(i1, ZoneId.systemDefault()));
        

    }

}
