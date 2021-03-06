package beans;

import java.io.Serializable;
import java.time.LocalDate;

import javax.json.bind.annotation.JsonbDateFormat;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "veiculos")
@Getter
@Setter
@NoArgsConstructor
@ToString
@SequenceGenerator(name = "veiculo_seq", sequenceName = "veiculo_seq", allocationSize = 1, initialValue = 1)
public class Veiculo implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -6086916148491948280L;

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "veiculo_seq")
	private long id;

	@Column(nullable = false)
	private String modelo;

	@Column(nullable = false)
	private String marca;

	@Column(nullable = false, name = "ano_de_fabricacao")
	private int anoFabricacao;

	@Column(nullable = false)
	private String cor;
	
	@Column(nullable = false)
	private String placa;

	@Column(nullable = false)
	private String chassi;

	@Column(nullable = false, name = "data_da_compra")
	@JsonbDateFormat(value = "yyyy-MM-dd")
	private LocalDate dataCompra;

	@Column(nullable = false, name = "valor_da_compra")
	private double valorCompra;

}
