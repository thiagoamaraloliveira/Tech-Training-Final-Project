import { Component, OnInit } from "@angular/core";

import { CategoryService } from "../../../services/category.service";

@Component({
  selector: "app-category-read",
  templateUrl: "./category-read.component.html",
  styleUrls: ["./category-read.component.css"],
})
export class CategoryReadComponent implements OnInit {
  categories: any[] = [];
  displayedColums = ["id", "name", "action"];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.read().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
