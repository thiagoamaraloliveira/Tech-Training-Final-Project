import { Component, OnInit } from "@angular/core";

import { DeviceService } from "../../../services/device.service";

@Component({
  selector: "app-category-read",
  templateUrl: "./category-read.component.html",
  styleUrls: ["./category-read.component.css"],
})
export class CategoryReadComponent implements OnInit {
  categories: any[] = [];
  displayedColums = ["id", "name"];
  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.read().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
