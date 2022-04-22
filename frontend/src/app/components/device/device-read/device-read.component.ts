import { Component, OnInit } from "@angular/core";
import { Device } from "../device.model";
import { DeviceService } from "../device.service";

@Component({
  selector: "app-device-read",
  templateUrl: "./device-read.component.html",
  styleUrls: ["./device-read.component.css"],
})
export class DeviceReadComponent implements OnInit {
  devices: Device[] = [];
  displayedColums = [
    "id",
    "name",
    "color",
    "partNumber",
    "userId",
    "categoryId",
  ];

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.read().subscribe((devices) => {
      this.devices = devices;
      console.log(devices);
    });
  }
}
