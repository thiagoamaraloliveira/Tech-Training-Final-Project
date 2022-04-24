import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HeaderService } from "src/app/services/header.service";


@Component({
  selector: "app-device",
  templateUrl: "./device.component.html",
  styleUrls: ["./device.component.css"],
})
export class DeviceComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Dispositivos",
      icon: "storefront",
      routeUrl: "/devices",
    };
  }

  ngOnInit(): void {}
  navigateToDeviceCreate(): void {
    this.router.navigate(["/devices/create"]);
  }
}
