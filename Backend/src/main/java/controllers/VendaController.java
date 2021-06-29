package controllers;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.Venda;
import dao.VeiculoDAO;
import dao.VendaDAO;

@Path("vendas")
public class VendaController {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/")
	public List<Venda> getVendas() {
		try {
			VendaDAO v = new VendaDAO();
			return v.buscarVendas();
		} catch (Exception ex) {
			Logger.getLogger(VendaController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("{id}/")
	public Venda getVenda(@PathParam("id") long id) {
		try {
			VendaDAO v = new VendaDAO();
			return v.buscarVenda(id);
		} catch (Exception ex) {
			Logger.getLogger(VendaController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response cadastrar(Venda venda) {
		try {
			if(venda.getVeiculo() == null) {
				return Response.status(Response.Status.NOT_FOUND).build();
			}
			
			VendaDAO v = new VendaDAO();
			long idVeiculo = venda.getVeiculo().getId();
			VeiculoDAO veiculoDAO = new VeiculoDAO();
			
			if(veiculoDAO.buscarVeiculo(idVeiculo) == null) {
				return Response.status(Response.Status.NOT_FOUND).build();
			}
			
			if (v.veiculoVendido(idVeiculo) != -1) {
				return Response.status(Response.Status.CONFLICT).build();
			}

			v.salvar(venda);
			
			return Response.status(Response.Status.CREATED).build();
		} catch (Exception ex) {
			Logger.getLogger(VendaController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}
	
	@DELETE
	@Path("{id}/")
	public Response excluir(@PathParam("id") long id) {
		try {
			VendaDAO v = new VendaDAO();
			if(v.buscarVenda(id) == null)
				return Response.status(Response.Status.NOT_FOUND).build();
			v.remover(id);
			return Response.status(Response.Status.OK).build();
		} catch (Exception ex) {
			Logger.getLogger(VeiculoController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

}
