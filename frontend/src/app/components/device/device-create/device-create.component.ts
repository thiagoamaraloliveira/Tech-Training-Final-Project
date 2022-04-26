import { Component, OnInit } from "@angular/core";
import { DeviceService } from "../../../services/device.service";
import { Router } from "@angular/router";
import { IDevice } from "../../../models/device.model";
import { ICategoryOptions } from "src/app/models/category.model ";

@Component({
  selector: "app-device-create",
  templateUrl: "./device-create.component.html",
  styleUrls: ["./device-create.component.css"],
})
export class DeviceCreateComponent implements OnInit {
  device: IDevice = {
    name: "",
    color: "",
    partNumber: "",
    userId: null,
    categoryId: null,
  };

  categories: ICategoryOptions[] = [];

  constructor(private deviceService: DeviceService, private router: Router) {}

  ngOnInit(): void {
    this.deviceService.readCategories().subscribe((categories) => {
      categories.map((category) => {
        this.categories.push({ name: category.name, id: category.id });
      });
    });
  }

  createDevice() {
    this.deviceService.create(this.device).subscribe(() => {
      this.deviceService.showMessage("Dispositivo cadastrado!");
      this.router.navigateByUrl("/devices");
    });
  }

  cancel() {
    this.router.navigateByUrl("/devices");
  }
}
