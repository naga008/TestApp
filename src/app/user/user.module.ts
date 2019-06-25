import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { EffectsModule, Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

//import { LoginComponent } from "./login/login.component";


import { userReducer } from "./state/user.reducer";
import { UserEffect } from "./state/user.effects";

import { UserComponent } from "./user/user.component";
import { AdduserComponent } from "./adduser/adduser.component";
import { EdituserComponent } from "./edituser/edituser.component";
import { ListuserComponent } from "./listuser/listuser.component";
import { LoginComponent } from "./login/login.component";
//import { UsersComponent } from './users/users.component';

const userRoutes: Routes = [
  { 
    path: "user", component: UserComponent 
   
  },
  { path:"",component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    StoreModule.forFeature("users", userReducer),
    EffectsModule.forFeature([UserEffect])
  ],
  declarations: [
   LoginComponent,
    UserComponent,
    AdduserComponent,
    EdituserComponent,
    ListuserComponent,
    //UsersComponent
  ]
})
export class UserModule { }
