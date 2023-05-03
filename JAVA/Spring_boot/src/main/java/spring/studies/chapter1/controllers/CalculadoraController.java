package spring.studies.chapter1.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/calculadora")
public class CalculadoraController {

    @GetMapping(path = "/somar/{a}/{b}")
    public Object sum(@PathVariable String a, @PathVariable String b) {
        try {
            return Double.parseDouble(a) + Double.parseDouble(b);
        } catch (Exception e) {
            return "Não foi possível calcular esses valores.";
        }
    }

    @GetMapping( path = "/subtrair") 
    public Object sub(
        @RequestParam( name = "a", required = true) String a,
        @RequestParam( name = "b", required = true) String b
    ) {
        try {
            return Double.parseDouble(a) - Double.parseDouble(b);
        } catch (Exception e) {
            return "Não foi possível calcular esses valores.";
        }
    }
    
}
