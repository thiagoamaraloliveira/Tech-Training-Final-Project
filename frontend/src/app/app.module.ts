import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/template/header/header.component";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatSelectModule } from "@angular/material/select";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { FooterComponent } from "./components/template/footer/footer.component";
import { NavComponent } from "./components/template/nav/nav.component";
import { HomeComponent } from "./views/home/home.component";
import { DeviceComponent } from "./views/device/device.component";
import { DeviceCreateComponent } from "./components/device/device-create/device-create.component";
import { DeviceReadComponent } from "./components/device/device-read/device-read.component";
import { DeviceUpdateComponent } from "./components/device/device-update/device-update.component";
import { AuthenticationComponent } from "./views/authentication/authentication.component";
import { DeviceDeleteComponent } from "./components/device/device-delete/device-delete.component";
import { LoginComponent } from "./components/login/login/login.component";
import { HomeInfoComponent } from "./components/home/home-info/home-info.component";
import { CategoryCreateComponent } from './components/category/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/category/category-delete/category-delete.component';
import { CategoryReadComponent } from './components/category/category-read/category-read.component';
import { CategoryUpdateComponent } from './components/category/category-update/category-update.component';
import { CategoryComponent } from './views/category/category/category.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    DeviceComponent,
    DeviceCreateComponent,
    DeviceReadComponent,
    DeviceUpdateComponent,
    DeviceDeleteComponent,
    AuthenticationComponent,
    LoginComponent,
    HomeInfoComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryReadComponent,
    CategoryUpdateComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
