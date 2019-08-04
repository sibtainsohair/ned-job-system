import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { SignupComponent } from './signup/signup.component';



const routes: Routes = [
  {path: 'admin', redirectTo: 'admin/login', pathMatch: 'prefix'},
  {path: 'admin/login', component: LoginComponent},
  {path: 'admin/forget-password', component: ForgetPasswordComponent},
  {path: 'admin/signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const routingComponent = [
  LoginComponent,
  ForgetPasswordComponent,
  SignupComponent
]
