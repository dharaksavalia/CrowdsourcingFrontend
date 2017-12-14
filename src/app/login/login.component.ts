import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  error = '';

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.logout();
  }

  login = () => {
    console.log(this.model.username+this.model.password);
    this.loading = true;
    this.loginService.login(this.model.username, this.model.password)
      .subscribe(
      (result) => {
        console.log('Success')
        if (result) {
          console.log("to navigate")
          this.router.navigate(['/role'])
        } else {
          this.error = 'Login Failed';
        }
        this.loading = false;
        
      },
      (error) => {
        console.log('Error')
        
        switch ( error.status){
           case 0:
              this.error = 'Error: While connecting to server';
              break;
          case 400:
              this.error = 'Error: Username and Password incorrect';
              break
          case 401:
              this.error = 'Error: Check token server';
              break;
           default:
              this.error = 'Error Processing Login';
           
        }
        this.loading = false;
      }


      )

  }

}
