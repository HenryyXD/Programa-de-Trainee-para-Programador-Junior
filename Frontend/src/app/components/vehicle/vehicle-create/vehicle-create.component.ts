import { Vehicle } from "./../vehicle.model";
import { VehicleService } from "./../vehicle.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-vehicle-create",
  templateUrl: "./vehicle-create.component.html",
  styleUrls: ["./vehicle-create.component.css"],
})
export class VehicleCreateComponent implements OnInit {
  vehicle: Vehicle = {
    anoFabricacao: 0,
    chassi: "",
    cor: "",
    placa: "",
    dataCompra: "",
    marca: "",
    modelo: "",
    valorCompra: 0,
  };

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
  ) {}

  ngOnInit(): void {}

  createVehicle(): void {
    this.vehicleService.create(this.vehicle).subscribe(() => {
      this.vehicleService.showMessage("Veículo criado com sucesso!");
      this.router.navigate(["/veiculos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/veiculos"]);
  }
}
