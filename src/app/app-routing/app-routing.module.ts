import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';

import { AuthGaurdService} from './auth.gaurd';
import { RoleComponent } from './../admin/role/role.component';
import { RegistrationComponent } from './../admin/registration/registration.component';
import { AdminHomeComponent } from './../admin/admin-home/admin-home.component';
import { LoginComponent } from './../login/login.component';

// imports 
import {Routes}from '@angular/router';


const routes: Routes = [
  {path: 'home', component: AdminHomeComponent, canActivate:[AuthGaurdService] },
  {path: 'role', component: RoleComponent , canActivate:[AuthGaurdService] },
  
  {path:'login', component:LoginComponent  },  
  {path: 'register', component: RegistrationComponent  },
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: LoginComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash: true}),    
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
