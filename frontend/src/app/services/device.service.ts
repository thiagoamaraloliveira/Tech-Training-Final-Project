import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { EMPTY, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { Device } from "../models/device.model";

@Injectable({
  providedIn: "root",
})
export class DeviceService {
  baseUrl = "http://localhost:3001/devices";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(device: Device): Observable<Device> {
    return this.http.post<Device>(this.baseUrl, device).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Device[]> {
    return this.http.get<Device[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readById(id: string): Observable<Device> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Device>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(device: Device): Observable<Device> {
    const url = `${this.baseUrl}/${device.id}`;
    return this.http.put<Device>(url, device).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number | undefined): Observable<Device> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Device>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
