import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ICategory, ICategoryOptions } from "../models/category.model ";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(category: ICategory): Observable<ICategory> {
    return this.http
      .post<ICategory>(`${environment.api}/categories`, category)
      .pipe(
        map((obj) => obj),
        catchError((e) => this.errorHandler(e))
      );
  }

  read(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${environment.api}/categories`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<ICategory> {
    const url = `${environment.api}/categories/${id}`;
    return this.http.get<ICategory>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(category: ICategory): Observable<ICategory> {
    const url = `${environment.api}/categories/${category.id}`;
    return this.http.put<ICategory>(url, category).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number | undefined): Observable<ICategory> {
    const url = `${environment.api}/categories/${id}`;
    return this.http.delete<ICategory>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
