import { Vehicle } from "./../vehicle.model";
import { ActivatedRoute, Router } from "@angular/router";
import { VehicleService } from "./../vehicle.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vehicle-delete",
  templateUrl: "./vehicle-delete.component.html",
  styleUrls: ["./vehicle-delete.component.css"],
})
export class VehicleDeleteComponent implements OnInit {
  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  vehicle: Vehicle = {
    id: 0,
    anoFabricacao: 0,
    chassi: "",
    cor: "",
    placa: "",
    dataCompra: "",
    marca: "",
    modelo: "",
    valorCompra: 0,
  };

  ngOnInit(): void {
    const id = + (this.route.snapshot.paramMap.get('id') || 0);
    this.vehicleService.readById(id).subscribe((vehicle) => {
      this.vehicle = vehicle;
    });
  }

  deleteVehicle(): void {
    this.vehicleService.delete(this.vehicle.id || 0).subscribe(() => {
      this.vehicleService.showMessage("Veículo excluído com sucesso!");
      this.router.navigate(["/veiculos"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/veiculos"]);
  }
}
