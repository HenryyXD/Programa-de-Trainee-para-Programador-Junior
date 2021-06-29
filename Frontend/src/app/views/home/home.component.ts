import { SaleService } from "./../../components/sale/sale.service";
import { Vehicle } from "./../../components/vehicle/vehicle.model";
import { VehicleService } from "./../../components/vehicle/vehicle.service";
import { HeaderService } from "./../../components/template/header/header.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private vehicleService: VehicleService,
    private saleService: SaleService
  ) {
    headerService.headerData = {
      title: "Início",
      icon: "home",
      routeUrl: "/",
    };
  }

  valorCompra = 0;
  valorVenda = 0;
  valorComissao = 0;

  mesAtual = 0;
  valorCompraMes = 0;
  valorVendaMes = 0;
  lucro = 0;

  ngOnInit(): void {
    this.mesAtual = new Date().getMonth() + 1;

    this.vehicleService.read().subscribe((veiculos) => {
      veiculos.forEach((v) => {
        this.valorCompra += v.valorCompra;

        if (this.mesAtual === +v.dataCompra.split("-")[1]) {
          this.valorCompraMes += v.valorCompra;
        }
      });

      this.saleService.read().subscribe((sales) => {
        sales.forEach((v) => {
          this.valorVenda += v.valorVenda;
          this.valorComissao += v.comissaoVendedor;

          if (this.mesAtual === +v.dataVenda.split("-")[1]) {
            this.valorVendaMes += v.valorVenda;
          }
        });

        this.lucro = this.valorVendaMes - this.valorCompraMes;
      });

    });
  }
}
