import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"],
})
export class CategoryComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Dispositivos",
      icon: "dehaze",
      routeUrl: "/categories",
    };
  }

  ngOnInit(): void {}
  navigateToCategoriCreate(): void {
    this.router.navigateByUrl("/categories/create");
  }
}
