import { SaleService } from "./../sale.service";
import { Sale } from "./../sale.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sale-read",
  templateUrl: "./sale-read.component.html",
  styleUrls: ["./sale-read.component.css"],
})
export class SaleReadComponent implements OnInit {
  sales: Sale[] = [];
  displayedColumns = [
    "id",
    "dataVenda",
    "valorVenda",
    "lucro",
    "comissaoVendedor",
    "idVeiculo",
    "modelo",
    "anoFabricacao",
    "cor",
    "placa",
    "action"
  ];

  constructor(private saleService: SaleService) {}

  ngOnInit(): void {
    this.saleService.read().subscribe((sales) => {
      this.sales = sales;
    });
  }
}
