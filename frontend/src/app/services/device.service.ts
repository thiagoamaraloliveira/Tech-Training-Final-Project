import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ICategory } from "../models/category.model ";
import { IDevice } from "../models/device.model";

@Injectable({
  providedIn: "root",
})
export class DeviceService {
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(device: IDevice): Observable<IDevice> {
    return this.http.post<IDevice>(`${environment.api}/devices`, device).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<IDevice[]> {
    return this.http.get<IDevice[]>(`${environment.api}/devices`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }
  
  readCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${environment.api}/categories`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<IDevice> {
    const url = `${environment.api}/devices/${id}`;
    return this.http.get<IDevice>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(device: IDevice): Observable<IDevice> {
    const url = `${environment.api}/devices/${device.id}`;
    return this.http.put<IDevice>(url, device).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number | undefined): Observable<IDevice> {
    const url = `${environment.api}/devices/${id}`;
    return this.http.delete<IDevice>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
