import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { RoleComponent } from './../admin/role/role.component';
import { RegistrationComponent } from './../admin/registration/registration.component';
import { AdminHomeComponent } from './../admin/admin-home/admin-home.component';
// imports 
import {Routes}from '@angular/router';


const routes: Routes = [
  {path: 'home', component: AdminHomeComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'role', component: RoleComponent},
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: AdminHomeComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash: true}),    
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
