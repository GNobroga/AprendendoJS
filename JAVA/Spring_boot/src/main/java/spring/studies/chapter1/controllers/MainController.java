package spring.studies.chapter1.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import spring.studies.chapter1.models.Client;

@RestController
@RequestMapping(path = "/clients")
public class MainController {


    /*
        Obtendo paramêtros dinâmico.
        /clients/1
     */

    @GetMapping(path = "/{id}")
    public Client findById(@PathVariable long id) {
        return new Client(id, "Gabriel" + id);
    }

    /*
     * Obtendo paramêtros na query string
     * clientes?id=1
     */

    @GetMapping
    public Client findByIdNew(
        @RequestParam(name = "id", defaultValue = "1") long id,
        @RequestParam(name = "name", required = false) String name
        ) {
        return new Client(id, name);
    }

    
}
