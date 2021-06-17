package dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

import beans.Veiculo;

public class VeiculoDAO {
	public EntityManager getEM() {
		return Persistence.createEntityManagerFactory("dev").createEntityManager();
	}

	public Veiculo salvar(Veiculo veiculo) throws Exception {
		EntityManager em = getEM();
		try {
			em.getTransaction().begin();
			em.persist(veiculo);
			em.getTransaction().commit();
		} finally {
			em.close();
		}
		return veiculo;
	}

	public void remover(long id) {
		EntityManager em = getEM();
		try {
			em.getTransaction().begin();
			Veiculo veiculo = em.find(Veiculo.class, id);
			em.remove(veiculo);
			em.getTransaction().commit();
		} finally {
			em.close();
		}
	}

	@SuppressWarnings("unchecked")
	public List<Veiculo> buscarVeiculos() {
		EntityManager em = getEM();
		List<Veiculo> veiculos = null;
		try {
			veiculos = em.createQuery("select v from Veiculo v").getResultList();
		} finally {
			em.close();
		}

		return veiculos;
	}

	public Veiculo buscarVeiculo(long id) {
		EntityManager em = getEM();
		Veiculo veiculo;
		try {
			veiculo = em.find(Veiculo.class, id);
		} finally {
			em.close();
		}
		return veiculo;
	}
}
