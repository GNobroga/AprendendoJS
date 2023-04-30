package entities.DAO;

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

    public DAO() {
        em = emf.createEntityManager();
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

    public List<E> consult(String consultName, Object ...args) {
        TypedQuery<E> query = em.createNamedQuery(consultName, clazz);

        for (int i = 0 ; i < args.length ; i += 2) {
            query.setParameter(args[i].toString(), args[i + 1]);
        }

        return query.getResultList();
    } 

    public E consultNative(String consultName) {
        TypedQuery<E> query = em.createNamedQuery(consultName, clazz);
        return query.getResultList().get(0);
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
