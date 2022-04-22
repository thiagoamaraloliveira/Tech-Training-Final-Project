import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { DeviceComponent } from "./views/device/device.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "devices",
    component: DeviceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
