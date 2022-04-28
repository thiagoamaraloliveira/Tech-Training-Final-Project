import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICategoryOptions } from "src/app/models/category.model ";
import { IDevice } from "../../../models/device.model";
import { DeviceService } from "../../../services/device.service";

@Component({
  selector: "app-device-update",
  templateUrl: "./device-update.component.html",
  styleUrls: ["./device-update.component.css"],
})
export class DeviceUpdateComponent implements OnInit {
  device: IDevice = {
    name: "",
    color: "",
    partNumber: "",
    userId: null,
    categoryId: null,
    Category: {
      name: "",
    },
  };

  selectedOption: number | null = 0;

  categories: ICategoryOptions[] = [];
  constructor(
    private deviceService: DeviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get("id") ?? "";
    this.deviceService.readById(id).subscribe((device) => {
      this.device = device;
      this.selectedOption = device.categoryId;
    });

    this.deviceService.readCategories().subscribe((categories) => {
      categories.map((category) => {
        this.categories.push({ name: category.name, id: category.id });
      });
    });
  }
  onChangeCategory(choosedCategory: any): void {
    this.device = { ...this.device, categoryId: choosedCategory.value };
  }

  updateDevice(): void {
    this.deviceService.update(this.device).subscribe(() => {
      this.deviceService.showMessage("Produto atualizado com sucesso!");
      this.router.navigateByUrl("/devices");
    });
  }

  cancel(): void {
    this.router.navigateByUrl("/devices");
  }
}
