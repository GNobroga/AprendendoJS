package entities.Embeddable;

import javax.persistence.Embeddable;

@Embeddable
public class Address {
    
    private String description;
    private String number;
    
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getNumber() {
        return number;
    }
    public void setNumber(String number) {
        this.number = number;
    }

}
