package application;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

import entities.DAO.DAO;
import entities.ManyToMany.first_example.Nephew;
import entities.ManyToMany.first_example.Uncle;
import entities.ManyToMany.second_example.Actor;
import entities.ManyToMany.second_example.Movie;
import entities.NamedNativeQuery.Media;
import entities.Normal.Product;
import entities.Normal.User;
import entities.OneToMany.Item;
import entities.OneToMany.Order;
import entities.OneToMany.OrderItem;
import entities.OneToOne.Client;
import entities.OneToOne.Seat;

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
        String jpql = "select u from entities.Normal.User u";

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

        ////////////////////////// Inserção de Seat and Client (OneToOne) - 1
        /*
            Não faz diferença em um contexto transicional colocar uma entidade que
            depende da outra antes ou depois. No entanto, colocar em ordem
            ajuda a organizar.
         */
        Seat seat1 = new Seat("15");
        Client client1 = new Client("Gabriel");

        client1.setSeat(seat1);

        DAO<Object> objectDao = new DAO<>();

        objectDao.start() 
            .insert(seat1)
            .insert(client1)
        .finished();

        ////////////////////////// Inserção de Seat and Client (OneToOne) - 2
        /*
            Inserir em Cascata, ou seja, ao adicionar o Client o Seat também
            será persistido, pode ter para exclusão, etc.

            Para habilitar:

                @OneToOne(cascade = CascadeType.ALL)

                ou 

                @OneToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
         */
        Seat seat2 = new Seat("CU54");
        Client c2 = new Client("Marquito");
        c2.setSeat(seat2);
        
        DAO<Client> c2DAO = new DAO<>(Client.class);

        c2DAO.atomicInsertion(c2);

        ////////////////////////// Obter Client por meio do Seat (OneToOne) (Bidirecional)

        DAO<Client> c3DAO = new DAO<>(Client.class);

        Client c3 = c3DAO.get(1L);

        Seat s3 = c3.getSeat();

        System.out.println(s3.getClient().getName());


        ////////////////////////// Testando (ManyToOne)

        DAO<OrderItem> oi1Dao = new DAO<>(OrderItem.class);

        Order o1 = new Order(new Date());
        Item i1 = new Item("Cellphone", 5000D);
        OrderItem oi1 = new OrderItem(5, 500D);

        oi1.setOrder(o1);
        oi1.setItem(i1);
        oi1Dao.atomicInsertion(oi1);

        ////////////////////////// Testando (ManyToOne) (Bidirecional)

        DAO<Order> o2Dao = new DAO<>(Order.class);
        
        Order o2 = o2Dao.get(1L);

        for (OrderItem o: o2.getItems()) {
            System.out.println(o.getItem().getName() + " " + o.getPrice());
        }

        ////////////////////////// Inserindo (ManyToMany) (Bidirecional) - 1

        Nephew n1 = new Nephew("Gabriel");
        Nephew n2 = new Nephew("Pedro");
        Nephew n3 = new Nephew("José");

        Uncle u1 = new Uncle("Marinho");

        DAO<Uncle> u1Dao = new DAO<>(Uncle.class);

        n1.getUncles().add(u1);
        n2.getUncles().add(u1);
        n3.getUncles().add(u1);
        u1.getNephews().addAll(Arrays.asList(n1, n2, n3));
        u1Dao.atomicInsertion(u1);

        System.out.println(n1.getUncles());

        // ou

        Uncle fnd1 = u1Dao.get(1L);
        
        for (Nephew n: fnd1.getNephews()) {
            System.out.println(n.getUncles());
        }

        ////////////////////////// Inserindo (ManyToMany) (Bidirecional) - 2

        DAO<Movie> movieDao = new DAO<>(Movie.class);

        Movie m1 = new Movie("Cuzudo", 75D);

        Actor a1 = new Actor("Gabriel");
        Actor a2 = new Actor("Marcos");

        m1.appendActor(a1);
        m1.appendActor(a2);

        movieDao.atomicInsertion(m1);

        ////////////////////////// Usando consulta nomeada via annotation
        DAO<Uncle> ac1Dao = new DAO<>(Uncle.class);

        List<Uncle> rs0 = ac1Dao.consult("getUncle", "valor", "e");

        System.out.println(rs0);

        ////////////////////////// Usando consulta nomeada usando orm.xml
        DAO<Movie> movie2Dao = new DAO<>();

        List<Movie> rs1 = movie2Dao.consult("getAvgMovie", "nota", 5D);
        System.out.println(rs1);

        ////////////////////////// Usando consulta nomeada nativa (sql-result-set-mapping e named-native-query)
        DAO<Media> mediaDAO = new DAO<>(Media.class);

        System.out.println(mediaDAO.consultNative("obterMedia").getMedia());
    
        em.close();
        emf.close();
    }
}