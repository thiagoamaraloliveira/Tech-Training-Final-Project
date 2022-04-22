import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { DeviceComponent } from "./views/device/device.component";
import { DeviceCreateComponent } from "./components/device/device-create/device-create.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "devices",
    component: DeviceComponent,
  },
  {
    path: "devices/create",
    component: DeviceCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
