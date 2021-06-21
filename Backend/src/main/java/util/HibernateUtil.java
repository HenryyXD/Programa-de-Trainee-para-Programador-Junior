package util;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

public class HibernateUtil {
	private static final EntityManager em;
	
	private HibernateUtil() {
		
	}

	static {
		try {
			em = Persistence.createEntityManagerFactory("dev").createEntityManager();
		} catch (Exception ex) {
			System.err.println("Criação do EntityManager falhou. " + ex);
			throw new ExceptionInInitializerError();
		}
	}

	public static EntityManager getEM() {
		return em;
	}
}
