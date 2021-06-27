import { VehicleDeleteComponent } from './components/vehicle/vehicle-delete/vehicle-delete.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { VehicleCrudComponent } from "./views/vehicle-crud/vehicle-crud.component";
import { VehicleCreateComponent } from "./components/vehicle/vehicle-create/vehicle-create.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "veiculos",
    component: VehicleCrudComponent,
  },
  {
    path: "veiculos/criar",
    component: VehicleCreateComponent,
  },
  {
    path: "veiculos/excluir/:id",
    component: VehicleDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
