package entities.Normal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/*
 
    Anotação:
        @Table(name = valor) / Permite colocar um nome personalizado para a tabela
 */

@Entity
@Table( name = "products")
public class Product {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @Column( name = "product_nome")
    private String name;

    @Column ( name = "product_price", nullable = false, precision = 11, scale = 2)
    private Double price;

    public Product() {}

    public Product(String name, Double price) {
        this.name = name;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    
    
}
