import { Vehicle } from "./../vehicle.model";
import { VehicleService } from "./../vehicle.service";
import { Component, Inject, LOCALE_ID, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-vehicle-create",
  templateUrl: "./vehicle-create.component.html",
  styleUrls: ["./vehicle-create.component.css"],
})
export class VehicleCreateComponent implements OnInit {
  vehicle: Vehicle = {
    anoFabricacao: 9999,
    chassi: "teste",
    cor: "teste",
    dataCompra: formatDate(Date.now(), "dd/MM/yyyy", this.locale),
    marca: "teste",
    modelo: "teste",
    valorCompra: 99999.99,
  };

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit(): void {}

  createVehicle(): void {
    this.vehicleService.create(this.vehicle).subscribe(() => {
      this.vehicleService.showMessage("Sucesso!");
      this.router.navigate(["/veiculos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/veiculos"]);
  }
}
