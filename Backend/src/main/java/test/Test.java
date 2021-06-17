package test;


import java.text.SimpleDateFormat;
import java.util.List;

import beans.Veiculo;
import beans.Venda;
import dao.VeiculoDAO;
import dao.VendaDAO;

public class Test {

	public static void main(String[] args) throws Exception {
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		VeiculoDAO veiculoDAO = new VeiculoDAO();
		Veiculo v = new Veiculo();
		Veiculo v2 = new Veiculo();
		Veiculo v3 = new Veiculo();
		
		
		v.setAnoFabricacao(2010);
		v.setChassi("7AM lzK5s3 er v06186");
		v.setCor("branco");
		v.setDataCompra(sdf.parse("16/06/2021"));
		v.setMarca("Ford");
		v.setModelo("Fiesta");
		v.setValorCompra(30123.50);
		
		v2.setAnoFabricacao(2003);
		v2.setChassi("7AM lzK5s3 er v06186");
		v2.setCor("vermelho");
		v2.setDataCompra(sdf.parse("25/12/2005"));
		v2.setMarca("Kia");
		v2.setModelo("Soul");
		v2.setValorCompra(32543.98);
		
		v3.setAnoFabricacao(2020);
		v3.setChassi("7AM lzK5s3 er v06186");
		v3.setCor("prata");
		v3.setDataCompra(sdf.parse("01/01/2020"));
		v3.setMarca("Fiat");
		v3.setModelo("Uno");
		v3.setValorCompra(12331.05);
		
		
		veiculoDAO.salvar(v);
		veiculoDAO.salvar(v2);
		veiculoDAO.salvar(v3);
		
		
		VendaDAO vendaDAO = new VendaDAO();
		
		Venda venda = new Venda();
		
		venda.setVeiculoVendido(v);
		venda.setValorVenda(60000);
		venda.setDataVenda(sdf.parse("17/06/2021"));
		venda.setComissaoVendedor(venda.getValorVenda() * 0.1);
		
		vendaDAO.salvar(venda);
		
		vendaDAO.buscarVendas().forEach(System.out::println);
		
		
	}

}
