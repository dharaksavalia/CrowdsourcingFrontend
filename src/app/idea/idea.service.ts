import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions,RequestMethod ,Response} from '@angular/http';
import { Observable } from 'rxjs';
import { AppSettings} from '../app.setting';
import 'rxjs/add/operator/map';
import {Idea} from "./idea";
import {Service}from "./service";
import {Funding} from "./funding";
import {Fundingcreation}from "./fundingcreation"; 
@Injectable()
export class IdeaService {
  private url:string = "http://localhost:8443/crowdsourcing/idea/";
  private fundingurl:string = "http://localhost:8443/crowdsourcing/funder/dharak/emailId";
    
  constructor(private http:Http) { }
  getIdeas(category:string): Observable<Idea[]> {
    return this.http
        .get(this.url+category).map((res:Response)=>res.json());       
}   
  fundIdea(fundingcreation:Fundingcreation){
    console.log(fundingcreation)
    return this.http.post(this.fundingurl,fundingcreation).map((res:Response)=>res.json);
  }

}
