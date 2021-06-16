package beans;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "vendas")
@Getter
@Setter
@NoArgsConstructor
public class Venda implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 6870489109597143343L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(nullable = false, name = "data_da_venda")
	@Temporal(TemporalType.DATE)
	private Date dataVenda;

	@Column(nullable = false, name = "valor_da_venda")
	private double valorVenda;

	@Column(nullable = false, name = "comissao_do_vendedor")
	private double comissaoVendedor;

	@OneToOne(optional = false)
	private Veiculo veiculoVendido;
}
