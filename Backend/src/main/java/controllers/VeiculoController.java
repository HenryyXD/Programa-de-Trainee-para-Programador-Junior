package controllers;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import beans.Veiculo;
import dao.VeiculoDAO;

@Path("veiculos")
public class VeiculoController {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/")
	public List<Veiculo> getVeiculos(@QueryParam("filtro") String filtro) {
		try {
			VeiculoDAO veiculoDAO = new VeiculoDAO();
			
			if(filtro == null) {
				return veiculoDAO.buscarVeiculos();
			}
			
			if(filtro.equals("disponivel")) {
				return veiculoDAO.buscarVeiculosDisponiveis();
			}
			
			if(filtro.equals("vendido")) {
				return veiculoDAO.buscarVeiculosVendidos();
			}
			
			return veiculoDAO.buscarVeiculos();
		} catch (Exception ex) {
			Logger.getLogger(VeiculoController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("{id}/")
	public Veiculo getVeiculo(@PathParam("id") long id) {
		try {
			return new VeiculoDAO().buscarVeiculo(id);
		} catch (Exception ex) {
			Logger.getLogger(VeiculoController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/")
	public Response cadastrar(Veiculo veiculo) {
		try {
			new VeiculoDAO().salvar(veiculo);
			return Response.status(Response.Status.CREATED).build();
		} catch (Exception ex) {
			Logger.getLogger(VeiculoController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

	@DELETE
	@Path("{id}/")
	public Response excluir(@PathParam("id") long id) {
		try {
			VeiculoDAO v = new VeiculoDAO();
			if(v.buscarVeiculo(id) == null)
				return Response.status(Response.Status.NOT_FOUND).build();
			v.remover(id);
			return Response.status(Response.Status.OK).build();
		} catch (Exception ex) {
			Logger.getLogger(VeiculoController.class.getName()).log(Level.SEVERE, null, ex);
			throw new WebApplicationException(Response.Status.INTERNAL_SERVER_ERROR);
		}
	}

}
