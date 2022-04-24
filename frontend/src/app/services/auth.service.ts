import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IUser, IUserLogin } from "../models/user.model";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(user: IUserLogin): Observable<IUser> {
    return this.http.post<IUser>(`${environment.api}/signin`, user);
  }
}
