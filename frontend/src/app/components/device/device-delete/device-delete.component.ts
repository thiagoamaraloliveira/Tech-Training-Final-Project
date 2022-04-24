import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Device } from "../../../models/device.model";
import { DeviceService } from "../../../services/device.service";

@Component({
  selector: "app-device-delete",
  templateUrl: "./device-delete.component.html",
  styleUrls: ["./device-delete.component.css"],
})
export class DeviceDeleteComponent implements OnInit {
  device: Device = {
    id: 1,
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

  deleteDevice(): void {
    this.deviceService.delete(this.device.id).subscribe(() => {
      this.deviceService.showMessage("Dispositivo excluído com sucesso!");
      this.router.navigate(["/devices"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/devices"]);
  }
}
