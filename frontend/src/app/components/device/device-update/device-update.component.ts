import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Device } from "../../../models/device.model";
import { DeviceService } from "../../../services/device.service";

@Component({
  selector: "app-device-update",
  templateUrl: "./device-update.component.html",
  styleUrls: ["./device-update.component.css"],
})
export class DeviceUpdateComponent implements OnInit {
  device: Device = {
    name: "",
    color: "",
    partNumber: "",
    userId: null,
    categoryId: null,
  };
  constructor(
    private deviceService: DeviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get("id") ?? "";
    this.deviceService.readById(id).subscribe((device) => {
      this.device = device;
    });
  }

  updateDevice(): void {
    this.deviceService.update(this.device).subscribe(() => {
      this.deviceService.showMessage("Produto atualizado com sucesso!");
      this.router.navigate(["/devices"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/devices"]);
  }
}
