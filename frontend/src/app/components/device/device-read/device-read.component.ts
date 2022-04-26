import { Component, OnInit } from "@angular/core";
import { IDevice } from "../../../models/device.model";
import { DeviceService } from "../../../services/device.service";

@Component({
  selector: "app-device-read",
  templateUrl: "./device-read.component.html",
  styleUrls: ["./device-read.component.css"],
})
export class DeviceReadComponent implements OnInit {
  devices: IDevice[] = [];
  displayedColums = [
    "id",
    "name",
    "color",
    "partNumber",
    "userId",
    "categoryId",
    "action"
  ];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.read().subscribe((devices) => {
      this.devices = devices;
      console.log(devices);
    });
  }
}
