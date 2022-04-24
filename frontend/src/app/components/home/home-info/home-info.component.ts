import { Component, OnInit } from "@angular/core";
import { HeaderService } from "src/app/services/header.service";

@Component({
  selector: "app-home-info",
  templateUrl: "./home-info.component.html",
  styleUrls: ["./home-info.component.css"],
})
export class HomeInfoComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Início",
      icon: "home",
      routeUrl: "",
    };
  }

  ngOnInit(): void {}
}
