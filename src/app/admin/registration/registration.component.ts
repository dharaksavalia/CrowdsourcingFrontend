import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegistrationService} from './registration.service';
import {User} from './userregister';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: any = {};
  userRegister:User;
  constructor(private router: Router,private registrationService:RegistrationService) { 

  }

  

  ngOnInit() {
  }
  register () {
    console.log(this.model.username+this.model.lastname);
    this.userRegister=new User();
    this.userRegister.emailId=this.model.username;
    this.userRegister.lastName=this.model.lastname;
    this.userRegister.firstName=this.model.firstname;
    console.log(this.userRegister.firstName+"")
    this.userRegister.password=this.model.password;
    if(this.model.creator!=null)
    if(this.model.creator){
      this.userRegister.creator="Yes";
    }
    if(this.model.funders!=null)
    if(this.model.funder){
      this.userRegister.funder="Yes";
    }
    if(this.model.startup!=null)
    if(this.model.startup){
      this.userRegister.startUp="Yes";
    }
    console.log(this.userRegister.firstName);
    this.registrationService.register(this.userRegister).subscribe((success) => {
      this.router.navigate(['/login']);
      console.log(success);
    })
  }
  
}
