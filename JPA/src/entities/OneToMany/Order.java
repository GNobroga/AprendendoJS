package entities.OneToMany;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table( name = "orders")
public class Order {

    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;

    private Date date;

    @OneToMany( mappedBy = "order")
    private List<OrderItem> items; 

    public Order() {}

    public Order(Date date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<OrderItem> getItems() {
        return items;
    }
    
}
