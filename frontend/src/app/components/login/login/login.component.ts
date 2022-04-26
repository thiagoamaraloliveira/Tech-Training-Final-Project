import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IUserLogin } from "src/app/models/user.model";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: IUserLogin = {
    user: "",
    password: "",
  };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.authService.login(this.user).subscribe((user) => {
      var Json = JSON.stringify(user);
      window.localStorage.setItem("user", Json);
      this.router.navigateByUrl("");
    });
  }
}
