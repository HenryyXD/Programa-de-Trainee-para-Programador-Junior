import { SaleDeleteComponent } from './components/sale/sale-delete/sale-delete.component';
import { SaleCreateComponent } from './components/sale/sale-create/sale-create.component';
import { SaleCrudComponent } from "./views/sale-crud/sale-crud.component";
import { VehicleDeleteComponent } from "./components/vehicle/vehicle-delete/vehicle-delete.component";
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
    component: VehicleDeleteComponent,
  },
  {
    path: "vendas",
    component: SaleCrudComponent,
  },
  {
    path: "vendas/criar",
    component: SaleCreateComponent,
  },
  {
    path: "vendas/excluir/:id",
    component: SaleDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
