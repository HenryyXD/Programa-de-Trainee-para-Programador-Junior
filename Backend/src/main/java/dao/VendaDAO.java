package dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

import beans.Venda;

public class VendaDAO {
	
	public EntityManager getEM() {
		return Persistence.createEntityManagerFactory("dev").createEntityManager();
	}
	
	public Venda salvar(Venda venda) throws Exception{
		EntityManager em = getEM();
		try {
			
			long idVeiculo = venda.getVeiculoVendido().getId();
			
			if(veiculoVendido(idVeiculo)) {
				throw new Exception("Erro! Veiculo " + idVeiculo + " ja foi vendido...");
			}
			
			em.getTransaction().begin();
			em.persist(venda);
			em.getTransaction().commit();
		} finally {
			em.close();
		}
		
		return venda;
	}
	
	public Venda buscarVenda(long id) {
		EntityManager em = getEM();
		Venda venda = null;
		try {
			venda = em.find(Venda.class, id);
		} finally {
			em.close();
		}
		
		return venda;
	}
	
	@SuppressWarnings("unchecked")
	public List<Venda> buscarVendas(){
		EntityManager em = getEM();
		List<Venda> vendas = null;
		
		try {
			vendas = em.createQuery("select v from Venda v").getResultList();
		} finally {
			em.close();
		}
		
		return vendas;
	}
	
	@SuppressWarnings("unchecked")
	public boolean veiculoVendido(long idVeiculo) {
		EntityManager em = getEM();
		try {
			return em.createQuery("select v from Venda v where v.veiculoVendido.id = :idVeiculo")
					.setParameter("idVeiculo", idVeiculo)
					.getResultStream()
					.findFirst()
					.orElse(null) != null;
		}finally {
			em.close();
		}
	}
	
}
