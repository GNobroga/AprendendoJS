package entities.ManyToMany.first_example;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import org.hibernate.annotations.NamedQuery;

@Entity
@NamedQuery(name = "getUncle", query = "SELECT u FROM Uncle u JOIN FETCH u.nephews WHERE u.name LIKE CONCAT('%', :valor, '%')")
public class Uncle {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToMany( cascade = CascadeType.ALL)
    private List<Nephew> nephews = new ArrayList<>();

    public Uncle() {}

    public Uncle(String name) {
        this.name = name;
    }

    public List<Nephew> getNephews() {
        return nephews;
    }

    public void setNephews(List<Nephew> nephews) {
        this.nephews = nephews;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


}
