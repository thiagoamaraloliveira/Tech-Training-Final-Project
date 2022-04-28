import { Component, OnInit } from "@angular/core";
import { CategoryService } from "../../../services/category.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-category-create",
  templateUrl: "./category-create.component.html",
  styleUrls: ["./category-create.component.css"],
})
export class CategoryCreateComponent implements OnInit {
  category: any = {
    name: "",
  };
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  createCategory() {
    this.categoryService.create(this.category).subscribe(() => {
      this.categoryService.showMessage("Categoria cadastrada!");
      this.router.navigateByUrl("/categories");
    });
  }
  cancel() {
    this.router.navigateByUrl("/categories");
  }
}
