package dao;

import java.sql.SQLException;
import java.util.List;

import javax.persistence.EntityManager;

import beans.Veiculo;
import beans.Venda;
import util.HibernateUtil;

public class VeiculoDAO {

	private EntityManager em = null;

	public Veiculo salvar(Veiculo veiculo) throws SQLException {
		try {
			em = HibernateUtil.getEM();
			em.getTransaction().begin();
			em.persist(veiculo);
			em.getTransaction().commit();
			return veiculo;
		} catch (Exception e) {
			e.printStackTrace();
			em.getTransaction().rollback();
			throw new SQLException();
		}

	}

	public void remover(long id) throws SQLException {
		try {
			em = HibernateUtil.getEM();
			em.getTransaction().begin();
			Veiculo veiculo = em.find(Veiculo.class, id);
			VendaDAO venda = new VendaDAO();
			long idVenda = venda.veiculoVendido(id);

			if (idVenda != -1) {
				Venda v = em.find(Venda.class, idVenda);
				em.remove(v);
			}

			em.remove(veiculo);
			em.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			em.getTransaction().rollback();
			throw new SQLException();
		}
	}

	@SuppressWarnings("unchecked")
	public List<Veiculo> buscarVeiculos() {
		return HibernateUtil.getEM().createQuery("select v from Veiculo v").getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public List<Veiculo> buscarVeiculosVendidos() {
		String query = "select veiculo from Venda";
		return HibernateUtil.getEM().createQuery(query).getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public List<Veiculo> buscarVeiculosDisponiveis() {
		String query = "select vei.* from veiculos as vei "
				+ "left join vendas as ven "
				+ "on ven.veiculo_id=vei.id "
				+ "where ven.id IS NULL;";
		
		return HibernateUtil.getEM().createNativeQuery(query, Veiculo.class).getResultList();
	}

	public Veiculo buscarVeiculo(long id) {
		return HibernateUtil.getEM().find(Veiculo.class, id);
	}
}
