import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,RequestMethod ,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { AppSettings} from '../../app.setting';
import 'rxjs/add/operator/map';
import {User} from './userregister';
@Injectable()
export class RegistrationService {
  private url:string = "http://127.0.0.1:8443/crowdsourcing";
  

  

  
  constructor(private http: Http) { }
  register(user:User): Observable<any> {
    console.log(user);
    return this.http.post(this.url+"/user/",user);  
}
}