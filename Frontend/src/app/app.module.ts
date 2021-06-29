import { NgModule, LOCALE_ID } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { HomeComponent } from "./views/home/home.component";
import { VehicleCrudComponent } from "./views/vehicle-crud/vehicle-crud.component";
import { VehicleCreateComponent } from "./components/vehicle/vehicle-create/vehicle-create.component";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatGridListModule } from "@angular/material/grid-list";

import { HttpClientModule } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { VehicleReadComponent } from "./components/vehicle/vehicle-read/vehicle-read.component";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common/";
import { VehicleDeleteComponent } from "./components/vehicle/vehicle-delete/vehicle-delete.component";
import { SaleCrudComponent } from "./views/sale-crud/sale-crud.component";
import { SaleReadComponent } from "./components/sale/sale-read/sale-read.component";
import { SaleCreateComponent } from "./components/sale/sale-create/sale-create.component";
import { SaleDeleteComponent } from "./components/sale/sale-delete/sale-delete.component";

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    VehicleCrudComponent,
    VehicleCreateComponent,
    VehicleReadComponent,
    VehicleDeleteComponent,
    SaleCrudComponent,
    SaleReadComponent,
    SaleCreateComponent,
    SaleDeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatGridListModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR",
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
