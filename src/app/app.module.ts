import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from  '@angular/forms';//ngModel,ngForm
import { HttpModule} from '@angular/http';//Http
import { ReactiveFormsModule} from  '@angular/forms';//formController
import { AppRoutingModule} from './app-routing/app-routing.module';
import { ModalModule } from 'ngx-modal';


//import { RouterModule} from '@angular/router';

//Main App Component
import { AppComponent } from './app.component';

//User App Model
import { RoleComponent } from './admin/role/role.component';
import { NavComponent } from './navigation/nav/nav.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

//Services
import {RoleService} from './admin/role/role.service';
import {SearchService} from './itunes/itunes.service';


//import {Routes}from '@angular/router';

/*
const routes: Routes = [
  {path: 'home', component: RoleComponent},
  {path: 'register', component: RegistrationComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: RoleComponent}
];
*/

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    NavComponent,
    RegistrationComponent,
    AdminHomeComponent,
  ],
  imports: [
  // RouterModule.forRoot(routes,{useHash: true}), 
    AppRoutingModule,   
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule ,
    ModalModule 
  ],
  providers: [
    RoleService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
