import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from 'rxjs';
import { Vehicle } from "./vehicle.model";

@Injectable({
  providedIn: "root",
})
export class VehicleService {

  baseURL = 'http://localhost:8080/VeiculoAPI/api/veiculos';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.baseURL, vehicle)
  }
}
