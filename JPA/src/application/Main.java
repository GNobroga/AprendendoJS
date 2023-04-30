package application;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import entities.DAO;
import entities.Product;
import entities.User;

public class Main {

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence
            .createEntityManagerFactory("studies");
        EntityManager em = emf.createEntityManager();

   
        ////////////////////////// Persistir User
        User user = new User("admin@admin", "123");
    
        em.getTransaction().begin();
            em.persist(user);
        em.getTransaction().commit();

        ////////////////////////// Obter User 
        User gotUser = em.find(User.class, 1L);

        System.out.println(gotUser.getEmail());

        ////////////////////////// Obter Users 
        String jpql = "select u from entities.User u";

        /*
            createQuery - É usado para criar um consulta JPQL (Java Persistence Query Language)
         */

        TypedQuery<User> query = em.createQuery(jpql, User.class);
            // query.setMaxResults(5)
        List<User> users = query.getResultList();
        System.out.println(users);

        ////////////////////////// Alteração User 1
        em.getTransaction().begin();
            User altered = em.find(User.class, 1L);
            altered.setEmail("gabriel@gabriel.com");
            em.merge(altered); // Faz Update
        em.getTransaction().commit();

        ////////////////////////// Alteração User 2
        /*
            No contexto de Transaction o objeto entra no estado de gerenciado,
            ou seja, qualquer mudança será sincroniza/aplicada no banco de dados.
            O objecto gerenciado, ganha essas características.
        */
        em.getTransaction().begin();
            User altered2 = em.find(User.class, 1L);
            altered2.setEmail("handsome@gabriel.com");
        em.getTransaction().commit();

        ////////////////////////// Alteração User 3
        /*
            Para retirar um objeto do estado gerenciado, utilize o 
            método do EntityManager detach. 
         */
        User altered3 = em.find(User.class, 1L);
        em.detach(altered3);

        altered3.setEmail("gabriel@gabriel.com");


        ////////////////////////// Remover User
        User find = em.find(User.class, 1L);

        em.getTransaction().begin();
        
            em.remove(find);

        em.getTransaction().commit();

        ////////////////////////// Usando DAO com JPA
        DAO<Product> productDAO = new DAO<>(Product.class);

        Product p1 = new Product("Smartphone", 7500D);
        Product p2 = new Product("Notebook", 8000D);
        
        productDAO.start()
            .insert(p1)
            .insert(p2)
        .finished();

        System.out.println(productDAO.getAll());

        
        em.close();
        emf.close();
    }
}