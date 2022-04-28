import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ICategory } from "src/app/models/category.model ";
import { CategoryService } from "../../../services/category.service";

@Component({
  selector: "app-category-delete",
  templateUrl: "./category-delete.component.html",
  styleUrls: ["./category-delete.component.css"],
})
export class CategoryDeleteComponent implements OnInit {
  category: ICategory = {
    id: 1,
    name: "",
  };
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get("id") ?? "";
    this.categoryService.readById(id).subscribe((category) => {
      this.category = category;
    });
  }
  deleteCategory(): void {
    this.categoryService.delete(this.category.id).subscribe(() => {
      this.categoryService.showMessage("Categoria excluída com sucesso!");
      this.router.navigateByUrl("/categories");
    });
  }

  cancel(): void {
    this.router.navigateByUrl("/categories");
  }
}
