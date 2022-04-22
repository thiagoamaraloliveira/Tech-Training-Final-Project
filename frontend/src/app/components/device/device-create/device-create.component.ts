import { Component, OnInit } from "@angular/core";
import { DeviceService } from "../device.service";
import { Router } from "@angular/router";
import { Device } from "../device.model";

@Component({
  selector: "app-device-create",
  templateUrl: "./device-create.component.html",
  styleUrls: ["./device-create.component.css"],
})
export class DeviceCreateComponent implements OnInit {
  device: Device = {
    name: "",
    color: "",
    partNumber: "",
    userId: null,
    categoryId: null,
  };

  constructor(private deviceService: DeviceService, private router: Router) {}

  ngOnInit(): void {}

  createDevice() {
    this.deviceService.create(this.device).subscribe(() => {
      this.deviceService.showMessage("Dispositivo cadastrado!");
      this.router.navigate(["/devices"]);
    });
  }

  cancel() {
    this.router.navigate(["/devices"]);
  }
}
