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
  hideTable = true;
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
      this.hideTable  = (vehicles.length == 0) ? true : false;
      this.vehicles = vehicles;
    });
  }

  filtrar(filtro: string = ""){
    this.vehicleServer.read(filtro).subscribe((vehicles) => {
      this.hideTable = false;
      this.vehicles = vehicles;
    });
  }
}
