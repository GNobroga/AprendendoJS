package entities.ManyToMany.second_example;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;


@Entity
//NamedQueries(value = @NamedQuery( name = "getAvgMovie", query = "select AVG(m.nota) from Movie m where m.nota > :nota"))
public class Movie {
    
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double nota;

    @ManyToMany( cascade = CascadeType.ALL)
    @JoinTable(
        joinColumns = @JoinColumn( name = "movie_id", referencedColumnName = "id"),
        inverseJoinColumns = @JoinColumn( name = "actor_id", referencedColumnName = "id")
    )
    private List<Actor> actors = new ArrayList<>();

    public Movie() {}
    
    public Movie(String name, Double nota) {
        this.name = name;
        this.nota = nota;
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

    public Double getNota() {
        return nota;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }

    public List<Actor> getActors() {
        return actors;
    }

    public void setActors(List<Actor> actors) {
        this.actors = actors;
    }

    public void appendActor(Actor actor) {
        if (actor != null && !getActors().contains(actor)) {
            getActors().add(actor);

            if (!actor.getMovies().contains(this)) {
                actor.getMovies().add(this);
            }
        }
    }
}
