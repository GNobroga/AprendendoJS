import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;

public class ProgramLocalDate {

    public static void main(String[] args) {

        LocalDate ld1 = LocalDate.now();

        System.out.println(ld1);

        /////// CONVERTER STRING NO FORMATO UTC PARA LOCALDATE
        LocalDate ld2 = LocalDate.parse("2000-04-10");

        System.out.println(ld2);

        /////// TEXTO CUSTOMIZADO PARA LOCALDATE

            // https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate ld3 = LocalDate.parse("10/04/2000", formatter);

        System.out.println(ld3);

        ////// INSTANCIA LOCALDATE APARTIR DE DADOS ISOLADOS

        LocalDate ld4 =  LocalDate.of(2000, 4, 20);

        System.out.println(ld4);

        ////// TRANSFORMA LOCALDATE PARA STRING FORMATADO OU NÃO

        DateTimeFormatter formatter2 = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate ld5 = LocalDate.now();

        System.out.println(formatter2.format(ld5));
        // ou
        System.out.println(ld5.format(formatter2));

        ////// TRANSFORMA INSTANT PARA UMA HORA LOCAL

        ZoneId.getAvailableZoneIds(); // Retorna os timezone suportados

        Instant i4 = Instant.now();

        // LocalDate ldConverted = LocalDate.ofInstant(i4, ZoneId.systemDefault()); - Java 9 +

        ZonedDateTime zdt = ZonedDateTime.ofInstant(i4, ZoneId.systemDefault());

        LocalDate ldConverted = zdt.toLocalDate();

        System.out.println(ldConverted);

        ////// PEGAR INFORMAÇÕES DA DATA

        LocalDate ld6 = LocalDate.now();

        System.out.println(ld6.getMonthValue());

        ////// CALCULOS COM DATA-HORA

        LocalDate semanaPassada = LocalDate.now().minusDays(7);
        LocalDate semanaProxima = LocalDate.now().plusDays(7);

        System.out.println(semanaPassada);
        System.out.println(semanaProxima);

        //// CONVERTER LOCALDATE PARA LOCALDATIME

        System.out.println(LocalDate.now().atTime(0, 0));
    }
}