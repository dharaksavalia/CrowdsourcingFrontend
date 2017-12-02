import {Injectable} from '@angular/core'
import {Router,CanActivate} from '@angular/router'

@Injectable()
export class AuthGaurdService implements CanActivate{

    constructor(private router:Router){

    }

    canActivate(){
        if(localStorage.getItem('currentUser')){
            return true;
        }else{
            this.router.navigate(['/login'])
            return false;
        }

    }
}