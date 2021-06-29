import { SaleService } from './../sale.service';
import { Router } from "@angular/router";
import { formatDate } from "@angular/common";
import { VehicleService } from "./../../vehicle/vehicle.service";
import { Vehicle } from "./../../vehicle/vehicle.model";
import { Sale } from "./../sale.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sale-create",
  templateUrl: "./sale-create.component.html",
  styleUrls: ["./sale-create.component.css"],
})
export class SaleCreateComponent implements OnInit {
  sale: Sale = {
    dataVenda: formatDate(Date.now(), "yyyy-MM-dd", "pt"),
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
  vehicles: Vehicle[] = [];

  constructor(private saleService: SaleService, private vehicleServer: VehicleService, private router: Router) {}

  ngOnInit(): void {
    this.vehicleServer.read("disponivel").subscribe((vehicles) => {
      this.vehicles = vehicles;
      this.sale.veiculo = this.vehicles[0];
    });
  }
  createSale(): void {
    this.saleService.create(this.sale).subscribe(() => {
      this.saleService.showMessage("Venda criada com sucesso!");
      this.router.navigate(["/vendas"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/vendas"]);
  }

  calcularComissao(): void {
    let valorVenda = +this.sale.valorVenda;
    let valorCompra = +this.sale.veiculo.valorCompra;
    let comissao =
      valorVenda > valorCompra ? (valorVenda - valorCompra) * 0.1 : 0;
    this.sale.comissaoVendedor = +comissao.toFixed(2);
  }
}
