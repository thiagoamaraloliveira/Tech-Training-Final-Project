import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    var json = window.localStorage.getItem("user");
    var user = !!json && JSON.parse(json);

    if (user.token) {
      return true;
    } else {
      this.router.navigate(["login"]);
      return true;
    }
  }
}
