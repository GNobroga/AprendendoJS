package entities.Inheritance;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("FILHO")
public class Son extends Father { 

    private Integer age;

    public Son() {}

    public Son(String name, Integer age) {
        super(name);
        this.age = age;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

}
