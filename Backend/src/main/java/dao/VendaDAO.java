package dao;

import java.sql.SQLException;
import java.util.List;

import javax.persistence.EntityManager;

import beans.Venda;
import util.HibernateUtil;

public class VendaDAO {

	private EntityManager em = null;

	public Venda salvar(Venda venda) throws SQLException {
		try {
			em = HibernateUtil.getEM();
			em.getTransaction().begin();
			em.persist(venda);
			em.getTransaction().commit();
		} catch(Exception e) {
			e.printStackTrace();
			em.getTransaction().rollback();
			throw new SQLException();
		}

		return venda;
	}
	
	public Venda buscarVenda(long id) {
		return HibernateUtil.getEM().find(Venda.class, id);
	}

	@SuppressWarnings("unchecked")
	public List<Venda> buscarVendas() {
		return HibernateUtil.getEM().createQuery("select v from Venda v").getResultList();
	}

	@SuppressWarnings("unchecked")
	public long veiculoVendido(long idVeiculo) {
		em = HibernateUtil.getEM();
		Venda v = (Venda) em.createQuery("select v from Venda v where v.veiculo.id = :idVeiculo")
				.setParameter("idVeiculo", idVeiculo).getResultStream().findFirst().orElse(null);
		
		if(v == null) {
			return -1;
		}
		
		return v.getId();
	
	}

}
