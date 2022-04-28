import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, EMPTY } from "rxjs";
import { environment } from "src/environments/environment";
import { IUser, IUserLogin } from "../models/user.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  login(user: IUserLogin): Observable<IUser> {
    return this.http.post<IUser>(`${environment.api}/signin`, user).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  errorHandler(e: any): Observable<any> {
    if (e.status == 401) {
      this.showMessage("Usuário/Senha Incorreto!", true);
    } else {
      this.showMessage("Ocorreu um erro!", true);
    }
    return EMPTY;
  }
}
