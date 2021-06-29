import { VehicleService } from "./../vehicle.service";
import { Vehicle } from "./../vehicle.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-vehicle-read",
  templateUrl: "./vehicle-read.component.html",
  styleUrls: ["./vehicle-read.component.css"],
})
export class VehicleReadComponent implements OnInit {
  vehicles: Vehicle[] = [];
  displayedColumns = [
    "id",
    "marca",
    "modelo",
    "anoFabricacao",
    "chassi",
    "cor",
    "placa",
    "valorCompra",
    "dataCompra",
    "action",
  ];

  constructor(private vehicleServer: VehicleService) {}

  ngOnInit(): void {
    this.vehicleServer.read().subscribe((vehicles) => {
      this.vehicles = vehicles;
    });
  }
}
