import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { DeviceComponent } from "./views/device/device.component";
import { DeviceCreateComponent } from "./components/device/device-create/device-create.component";
import { DeviceUpdateComponent } from "./components/device/device-update/device-update.component";
import { DeviceDeleteComponent } from "./components/device/device-delete/device-delete.component";

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
  {
    path: "devices/update/:id",
    component: DeviceUpdateComponent,
  },
  {
    path: "devices/delete/:id",
    component: DeviceDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
