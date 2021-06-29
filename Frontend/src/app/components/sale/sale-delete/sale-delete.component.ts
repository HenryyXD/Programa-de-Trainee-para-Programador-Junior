import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SaleService } from './../sale.service';
import { Sale } from './../sale.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sale-delete',
  templateUrl: './sale-delete.component.html',
  styleUrls: ['./sale-delete.component.css']
})
export class SaleDeleteComponent implements OnInit {

  sale: Sale = {
    dataVenda: "",
    valorVenda: 0,
    comissaoVendedor: 0,
    veiculo: {
      id: 0,
      anoFabricacao: 0,
      chassi: "",
      cor: "",
      placa: "",
      dataCompra: "",
      marca: "",
      modelo: "",
      valorCompra: 0,
    },
  };

  constructor(
    private saleService: SaleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = + (this.route.snapshot.paramMap.get('id') || 0);
    this.saleService.readById(id).subscribe((sale) => {
      this.sale = sale;
    });
  }

  deleteSale(): void {
    this.saleService.delete(this.sale.id || 0).subscribe(() => {
      this.saleService.showMessage("Venda excluída com sucesso!");
      this.router.navigate(["/vendas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/vendas"]);
  }

}
