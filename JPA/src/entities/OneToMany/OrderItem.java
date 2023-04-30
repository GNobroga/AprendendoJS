package entities.OneToMany;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table( name = "order_items")
public class OrderItem {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne( cascade = CascadeType.ALL)
    @JoinColumn( name = "order_order_items")
    private Order order;

    @ManyToOne( cascade = CascadeType.ALL)
    @JoinColumn( name = "item_order_items")
    private Item item;

    @Column( name = "quantity_order_items")
    private int quantity;

    @Column( name = "price_order_items")
    private Double price;

    public OrderItem() {}

    public OrderItem(int quantity, Double price) {
        this.quantity = quantity;
        this.price = price;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }



}
