import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,RequestMethod ,Response} from '@angular/http'
import { Observable } from 'rxjs';
import { MessageService,MessageType } from './../messages/data.service'
import { AppSettings, TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD } from './../app.setting'
import 'rxjs/add/operator/map'
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class CattegoriesService {
  private url:string = AppSettings.getEndPoint();
  private token:string = AppSettings.token;
  constructor(private http: Http,private messageService: MessageService) { }

  getCategories(): Observable<String[]> {
    return this.http
        .get(this.url+'/category').map((res:Response)=>res.json());
        
        
}

}
