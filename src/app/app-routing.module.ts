import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";


//import { HomeComponent } from "./home/home.component";
//import { LoginComponent } from "./user/login/login.component";

const appRoutes: Routes = [
  //{ path: "", component: LoginComponent },
  {
    path: "",  loadChildren: "../app/user/user.module#UserModule"
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
