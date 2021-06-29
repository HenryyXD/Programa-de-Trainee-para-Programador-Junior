import { HeaderService } from "./../../components/template/header/header.service";
import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sale-crud",
  templateUrl: "./sale-crud.component.html",
  styleUrls: ["./sale-crud.component.css"],
})
export class SaleCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Vendas",
      icon: "sell",
      routeUrl: "/vendas",
    };
  }

  ngOnInit(): void {}

  navigateToSaleCreate(): void {
    this.router.navigate(["/vendas/criar"]);
  }
}
