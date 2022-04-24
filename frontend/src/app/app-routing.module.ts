import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { DeviceComponent } from "./views/device/device.component";
import { DeviceCreateComponent } from "./components/device/device-create/device-create.component";
import { DeviceUpdateComponent } from "./components/device/device-update/device-update.component";
import { DeviceDeleteComponent } from "./components/device/device-delete/device-delete.component";
import { AuthenticationComponent } from "./views/authentication/authentication.component";
import { AuthGuard } from "./views/authentication/auth.guard";
import { LoginComponent } from "./components/login/login/login.component";
import { HomeInfoComponent } from "./components/home/home-info/home-info.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: HomeInfoComponent,
      },
      {
        path: "devices",
        component: DeviceComponent,
      },
      {
        path: "devices/create",
        component: DeviceCreateComponent,
      },
      {
        path: "devices/update/:id",
        component: DeviceUpdateComponent,
      },
      {
        path: "devices/delete/:id",
        component: DeviceDeleteComponent,
      },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: "",
    component:AuthenticationComponent ,
    children:[
      {
        path:"",
        redirectTo: "login",
        pathMatch:"full"
      },
      {
        path:"login",
        component:LoginComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
