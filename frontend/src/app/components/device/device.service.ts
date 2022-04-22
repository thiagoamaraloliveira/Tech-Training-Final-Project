import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable } from "rxjs";
import { Device } from "./device.model";

@Injectable({
  providedIn: "root",
})
export class DeviceService {
  baseUrl = "http://localhost:3001/devices";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string) {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }

  create(device: Device): Observable<Device> {
    return this.http.post<Device>(this.baseUrl, device);
  }
}
