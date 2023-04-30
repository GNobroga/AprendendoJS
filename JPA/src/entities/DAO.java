package entities;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class DAO<E> {

    private static EntityManagerFactory emf;
    private EntityManager em;
    private Class<E> clazz;

    static {
        emf = Persistence.createEntityManagerFactory("studies");
    }

    public DAO(Class<E> clazz) {
        em = emf.createEntityManager();
        this.clazz = clazz;
    }

    public DAO<E> insert(E e) {
        em.persist(e);
        return this;
    }

    public E get(Long pk) {
        return em.find(clazz, pk);
    }

    public List<E> getAll() {
        String jqpl = "SELECT e FROM " + clazz.getName() + " e";
        TypedQuery<E> query = em.createQuery(jqpl, clazz);
        return query.getResultList(); 
    }

    public DAO<E> remove(E e) {
        em.remove(e);
        return this;
    }

    public DAO<E> atomicInsertion(E e) {
        start().insert(e).finished();
        return this;
    }

    public DAO<E> start() {
        em.getTransaction().begin();
        return this;
    }

    public DAO<E> finished() {
        em.getTransaction().commit();
        return this;
    }
    
}
