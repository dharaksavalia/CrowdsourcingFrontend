import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Observable } from 'rxjs';
import { AppSettings, TOKEN_AUTH_USERNAME, TOKEN_AUTH_PASSWORD } from './../app.setting'
import 'rxjs/add/operator/map'


@Injectable()
export class LoginService {

    public token: string;

    constructor(private http: Http) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Observable<boolean> {

        // const body = JSON.stringify({ 
        //     username: username, 
        //     password: password,
        //     grant_type : "password"
        //     });

        let body = `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&grant_type=password`;

        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //The btoa() method encodes a string in base-64
        headers.append('Authorization', 'Basic ' + btoa(TOKEN_AUTH_USERNAME + ':' + TOKEN_AUTH_PASSWORD));

        //console.log(headers);

        return this.http
            .post(
            AppSettings.getEndPoint() + '/oauth/token',
            body,
            { headers: headers, withCredentials: true }
            )
            .map((response) => {

                let token = response.json() && response.json().access_token;
                if (token) {


                    // set token property
                    AppSettings.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }


    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        AppSettings.token = null;
        localStorage.removeItem('currentUser');
    }

    getToken(): string {
        return localStorage.getItem('currentUser');
    }

}
