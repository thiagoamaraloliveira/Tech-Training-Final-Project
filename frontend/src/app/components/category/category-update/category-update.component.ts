import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICategory } from "src/app/models/category.model ";

import { CategoryService } from "../../../services/category.service";

@Component({
  selector: "app-category-update",
  templateUrl: "./category-update.component.html",
  styleUrls: ["./category-update.component.css"],
})
export class CategoryUpdateComponent implements OnInit {
  category: ICategory = {
    id: 1,
    name: "",
  };

  selectedOption: number | null = 0;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get("id") ?? "";
    this.categoryService.readById(id).subscribe((category) => {
      this.category = category;
      this.selectedOption = category.id;
    });
  }

  // onChangeCategory(choosedCategory: any): void {
  //   this.category = { ...this.device, categoryId: choosedCategory.value };
  // }

  updateCategory(): void {
    this.categoryService.update(this.category).subscribe(() => {
      this.categoryService.showMessage("Categoria atualizada com sucesso!");
      this.router.navigateByUrl("/categories");
    });
  }
  cancel(): void {
    this.router.navigateByUrl("/devices");
  }
}
